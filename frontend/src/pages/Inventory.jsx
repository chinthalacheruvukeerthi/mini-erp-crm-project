import { useEffect, useState } from "react";
import api from "../services/api";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [inventory, setInventory] = useState([]);

  const [productId, setProductId] = useState("");
  const [transactionType, setTransactionType] = useState("Stock In");
  const [quantity, setQuantity] = useState("");
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchInventory();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchInventory = async () => {
    try {
      const res = await api.get("/inventory");
      setInventory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/inventory", {
        product_id: productId,
        transaction_type: transactionType,
        quantity,
        remarks,
      });

      alert("Inventory Updated Successfully");

      setProductId("");
      setTransactionType("Stock In");
      setQuantity("");
      setRemarks("");

      fetchInventory();
      fetchProducts();

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#eef2ff,#dbeafe)",
      }}
    >
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#1e3a8a" }}
      >
        📦 Inventory Management
      </h2>

      <div className="row justify-content-center">

        <div className="col-lg-10">

          <div className="card shadow-lg">

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Product
                    </label>

                    <select
                      className="form-select"
                      value={productId}
                      onChange={(e) =>
                        setProductId(e.target.value)
                      }
                      required
                    >
                      <option value="">
                        Select Product
                      </option>

                      {products.map((product) => (
                        <option
                          key={product.id}
                          value={product.id}
                        >
                          {product.name}
                        </option>
                      ))}

                    </select>

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Transaction
                    </label>

                    <select
                      className="form-select"
                      value={transactionType}
                      onChange={(e) =>
                        setTransactionType(e.target.value)
                      }
                    >
                      <option value="Stock In">
                        Stock In
                      </option>

                      <option value="Stock Out">
                        Stock Out
                      </option>

                    </select>

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
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Remarks
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={remarks}
                      onChange={(e) =>
                        setRemarks(e.target.value)
                      }
                    />

                  </div>

                  <div className="col-12">

                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      Save Inventory
                    </button>

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
                  <th>Product</th>
                  <th>Transaction</th>
                  <th>Quantity</th>
                  <th>Remarks</th>
                  <th>Date</th>

                </tr>

              </thead>

              <tbody>

                {inventory.length === 0 ? (

                  <tr>

                    <td
                      colSpan="6"
                      className="text-center"
                    >
                      No Inventory Records Found
                    </td>

                  </tr>

                ) : (

                  inventory.map((item) => (

                    <tr key={item.id}>

                      <td>{item.id}</td>

                      <td>{item.product_name}</td>

                      <td>

                        {item.transaction_type ===
                        "Stock In" ? (

                          <span className="badge bg-success">
                            Stock In
                          </span>

                        ) : (

                          <span className="badge bg-danger">
                            Stock Out
                          </span>

                        )}

                      </td>

                      <td>{item.quantity}</td>

                      <td>{item.remarks}</td>

                      <td>
                        {new Date(
                          item.created_at
                        ).toLocaleString()}
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

export default Inventory;