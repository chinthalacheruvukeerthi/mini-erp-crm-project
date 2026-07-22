import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-5">
        Mini ERP CRM Dashboard
      </h1>

      <div className="row">

        {/* Customers Card */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h3>👥 Customers</h3>
              <p>Manage all customers</p>

              <button
                className="btn btn-primary"
                onClick={() => navigate("/customers")}
              >
                Open Customers
              </button>
            </div>
          </div>
        </div>

        {/* Products Card */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h3>📦 Products</h3>
              <p>Manage all products</p>

              <button
                className="btn btn-success"
                onClick={() => navigate("/products")}
              >
                Open Products
              </button>
            </div>
          </div>
        </div>

        {/* Logout Card */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h3>🚪 Logout</h3>
              <p>Exit from application</p>

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