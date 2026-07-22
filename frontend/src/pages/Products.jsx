import { useEffect, useState } from "react";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await api.put(`/products/${editId}`, {
          name,
          price,
          quantity,
        });

        alert("Product Updated Successfully");
      } else {
        await api.post("/products", {
          name,
          price,
          quantity,
        });

        alert("Product Added Successfully");
      }

      clearForm();
      fetchProducts();
    } catch (err) {
      alert("Something went wrong");
    }
  };

  const editProduct = (product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
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
    setPrice("");
    setQuantity("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Product Management</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          {editId ? "Update Product" : "Add Product"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={clearForm}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}
      </form>

      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => editProduct(product)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>

                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;