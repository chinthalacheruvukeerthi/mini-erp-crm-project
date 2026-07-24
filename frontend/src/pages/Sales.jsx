import { useEffect, useState } from "react";
import api from "../services/api";

function Sales() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetchCustomers();
    fetchProducts();
    fetchSales();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await api.get("/customers");
      setCustomers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSales = async () => {
    try {
      const res = await api.get("/sales");
      setSales(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/sales", {
        customer_id: customerId,
        product_id: productId,
        quantity,
      });

      alert("Invoice Generated Successfully");

      setCustomerId("");
      setProductId("");
      setQuantity("");

      fetchSales();
      fetchProducts();
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.response?.data);

      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right,#eef2ff,#dbeafe)",
      }}
    >
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#1e3a8a" }}
      >
        🧾 Sales & Invoice
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-10">

          <div className="card shadow-lg">
            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Customer</label>

                    <select
                      className="form-select"
                      value={customerId}
                      onChange={(e) => setCustomerId(e.target.value)}
                      required
                    >
                      <option value="">Select Customer</option>

                      {customers.map((customer) => (
                        <option
                          key={customer.id}
                          value={customer.id}
                        >
                          {customer.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Product</label>

                    <select
                      className="form-select"
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
                      required
                    >
                      <option value="">Select Product</option>

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
                    <label className="form-label">Quantity</label>

                    <input
                      type="number"
                      className="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      Generate Invoice
                    </button>
                  </div>

                </div>

              </form>

            </div>
          </div>
                    <div className="table-responsive mt-4">
            <table className="table table-bordered table-hover table-striped">

              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>

                {sales.length === 0 ? (

                  <tr>
                    <td colSpan="7" className="text-center">
                      No Sales Found
                    </td>
                  </tr>

                ) : (

                  sales.map((sale) => (
                    <tr key={sale.id}>

                      <td>{sale.id}</td>

                      <td>{sale.customer_name}</td>

                      <td>{sale.product_name}</td>

                      <td>{sale.quantity}</td>

                      <td>₹{sale.price}</td>

                      <td>
                        <strong>₹{sale.total}</strong>
                      </td>

                      <td>
                        {new Date(
                          sale.created_at
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

export default Sales;