function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#2c3e50",
        color: "white",
        height: "100vh",
        paddingTop: "20px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Menu</h3>

      <ul style={{ listStyle: "none", padding: "20px" }}>
        <li style={{ padding: "10px" }}>🏠 Dashboard</li>
        <li style={{ padding: "10px" }}>👥 Customers</li>
        <li style={{ padding: "10px" }}>📦 Products</li>
        <li style={{ padding: "10px" }}>📋 Inventory</li>
        <li style={{ padding: "10px" }}>🧾 Sales</li>
        <li style={{ padding: "10px" }}>👨‍💼 Employees</li>
        <li style={{ padding: "10px", color: "red" }}>🚪 Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;