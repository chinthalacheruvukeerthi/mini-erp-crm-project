import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [customerCount, setCustomerCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [inventoryCount, setInventoryCount] = useState(0);
  const [salesCount, setSalesCount] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const customers = await api.get("/customers/count");
      const products = await api.get("/products/count");
      const inventory = await api.get("/inventory/count");
      const sales = await api.get("/sales/count");
      const revenueData = await api.get("/sales/revenue");

      setCustomerCount(customers.data.total);
      setProductCount(products.data.total);
      setInventoryCount(inventory.data.total);
      setSalesCount(sales.data.total);
      setRevenue(revenueData.data.revenue || 0);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#dbeafe,#eff6ff)",
      }}
    >
      <h1
        className="text-center fw-bold mb-5"
        style={{ color: "#1e3a8a" }}
      >
        Mini ERP CRM Dashboard
      </h1>

      {/* Statistics */}

      <div className="row mb-5">

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h3>👥 Customers</h3>
              <h1>{customerCount}</h1>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h3>📦 Products</h3>
              <h1>{productCount}</h1>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h3>📋 Inventory</h3>
              <h1>{inventoryCount}</h1>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h3>🧾 Sales</h3>
              <h1>{salesCount}</h1>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h3>💰 Revenue</h3>
              <h1>₹{revenue}</h1>
            </div>
          </div>
        </div>

      </div>

      {/* Menu Cards */}

      <div className="row justify-content-center">
                {/* Customers */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>👥 Customers</h3>
              <p className="text-muted">
                Manage all customers
              </p>

              <button
                className="btn btn-primary"
                onClick={() => navigate("/customers")}
              >
                Open Customers
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>📦 Products</h3>
              <p className="text-muted">
                Manage all products
              </p>

              <button
                className="btn btn-success"
                onClick={() => navigate("/products")}
              >
                Open Products
              </button>
            </div>
          </div>
        </div>

        {/* Inventory */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>📋 Inventory</h3>
              <p className="text-muted">
                Manage Stock In / Stock Out
              </p>

              <button
                className="btn btn-warning"
                onClick={() => navigate("/inventory")}
              >
                Open Inventory
              </button>
            </div>
          </div>
        </div>

        {/* Sales */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>🧾 Sales</h3>
              <p className="text-muted">
                Create Invoice & Manage Sales
              </p>

              <button
                className="btn btn-info"
                onClick={() => navigate("/sales")}
              >
                Open Sales
              </button>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>🚪 Logout</h3>
              <p className="text-muted">
                Exit from application
              </p>

              <button
                className="btn btn-danger"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;