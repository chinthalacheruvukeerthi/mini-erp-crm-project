import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-white fw-bold mb-5">
        Mini ERP CRM Dashboard
      </h1>

      <div className="row justify-content-center">

        {/* Customers Card */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>👥 Customers</h3>
              <p className="text-muted">Manage all customers</p>

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
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>📦 Products</h3>
              <p className="text-muted">Manage all products</p>

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
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3>🚪 Logout</h3>
              <p className="text-muted">Exit from application</p>

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