import { useEffect, useState } from "react";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("Available");

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const fetchProducts = async () => {
    try {
      const res = await api.get(`/products?search=${search}`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      category,
      brand,
      supplier,
      purchase_price: purchasePrice,
      selling_price: sellingPrice,
      quantity,
      status,
    };

    try {
      if (editId) {
        await api.put(`/products/${editId}`, productData);
        alert("Product Updated Successfully");
      } else {
        await api.post("/products", productData);
        alert("Product Added Successfully");
      }

      clearForm();
      fetchProducts();

    } catch (err) {
      console.log(err);
      alert("Database Error");
    }
  };

  const editProduct = (product) => {
    setEditId(product.id);

    setName(product.name);
    setCategory(product.category);
    setBrand(product.brand);
    setSupplier(product.supplier);

    setPurchasePrice(product.purchase_price);
    setSellingPrice(product.selling_price);

    setQuantity(product.quantity);
    setStatus(product.status);
  };

  const deleteProduct = async (id) => {

    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/products/${id}`);
      alert("Product Deleted Successfully");
      fetchProducts();
    } catch (err) {
      alert("Delete Failed");
    }

  };

  const clearForm = () => {
    setEditId(null);

    setName("");
    setCategory("");
    setBrand("");
    setSupplier("");

    setPurchasePrice("");
    setSellingPrice("");

    setQuantity("");
    setStatus("Available");
  };

  return (

    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#eef2ff,#dbeafe)"
      }}
    >

      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#1e3a8a" }}
      >
        📦 Product Management
      </h2>

      <div className="row justify-content-center">

        <div className="col-lg-11">

          <div className="card shadow-lg">

            <div className="card-body">

              <div className="mb-4">

                <input
                  type="text"
                  className="form-control"
                  placeholder="🔍 Search Product..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Product Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Category
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={category}
                      onChange={(e) =>
                        setCategory(e.target.value)
                      }
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Brand
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={brand}
                      onChange={(e) =>
                        setBrand(e.target.value)
                      }
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Supplier
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={supplier}
                      onChange={(e) =>
                        setSupplier(e.target.value)
                      }
                    />

                  </div>
                                    <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Purchase Price
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      value={purchasePrice}
                      onChange={(e) =>
                        setPurchasePrice(e.target.value)
                      }
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Selling Price
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      value={sellingPrice}
                      onChange={(e) =>
                        setSellingPrice(e.target.value)
                      }
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Quantity
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(e.target.value)
                      }
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Status
                    </label>

                    <select
                      className="form-select"
                      value={status}
                      onChange={(e) =>
                        setStatus(e.target.value)
                      }
                    >
                      <option value="Available">
                        Available
                      </option>

                      <option value="Out of Stock">
                        Out of Stock
                      </option>

                      <option value="Discontinued">
                        Discontinued
                      </option>

                    </select>

                  </div>

                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      {editId
                        ? "Update Product"
                        : "Add Product"}
                    </button>

                    {editId && (

                      <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={clearForm}
                      >
                        Cancel
                      </button>

                    )}

                  </div>

                </div>

              </form>

            </div>

          </div>

          <div className="table-responsive mt-4">

            <table className="table table-bordered table-hover table-striped shadow">

              <thead className="table-dark">

                <tr>

                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Supplier</th>
                  <th>Purchase</th>
                  <th>Selling</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {products.length === 0 ? (

                  <tr>

                    <td
                      colSpan="10"
                      className="text-center"
                    >
                      No Products Found
                    </td>

                  </tr>

                ) : (

                  products.map((product) => (

                    <tr key={product.id}>

                      <td>{product.id}</td>

                      <td>{product.name}</td>

                      <td>{product.category}</td>

                      <td>{product.brand}</td>

                      <td>{product.supplier}</td>

                      <td>₹{product.purchase_price}</td>

                      <td>₹{product.selling_price}</td>

                      <td>

                        {product.quantity < 10 ? (

                          <span className="badge bg-danger">
                            {product.quantity}
                          </span>

                        ) : (

                          <span className="badge bg-success">
                            {product.quantity}
                          </span>

                        )}

                      </td>

                      <td>

                        <span
                          className={`badge ${
                            product.status === "Available"
                              ? "bg-success"
                              : product.status ===
                                "Out of Stock"
                              ? "bg-danger"
                              : "bg-secondary"
                          }`}
                        >
                          {product.status}
                        </span>

                      </td>

                      <td>

                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() =>
                            editProduct(product)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm ms-2"
                          onClick={() =>
                            deleteProduct(product.id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Products;