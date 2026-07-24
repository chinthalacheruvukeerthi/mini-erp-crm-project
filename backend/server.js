require("dotenv").config();
const db = require("./db");

const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const salesRoutes = require("./routes/salesRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);

app.use("/api/inventory", inventoryRoutes);
app.use("/api/sales", salesRoutes);
// Home Route
app.get("/", (req, res) => {
  res.send("Mini ERP CRM Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});