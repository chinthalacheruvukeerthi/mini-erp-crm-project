const db = require("../db");

// Get Products
const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database Error" });
    }
    res.json(result);
  });
};

// Add Product
const addProduct = (req, res) => {
  const { name, price, quantity } = req.body;

  db.query(
    "INSERT INTO products(name, price, quantity) VALUES (?, ?, ?)",
    [name, price, quantity],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Database Error" });
      }

      res.json({ message: "Product Added Successfully" });
    }
  );
};

// Update Product
const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;

  db.query(
    "UPDATE products SET name=?, price=?, quantity=? WHERE id=?",
    [name, price, quantity, id],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Database Error" });
      }

      res.json({ message: "Product Updated Successfully" });
    }
  );
};

const getProductCount = (req, res) => {
  db.query("SELECT COUNT(*) AS total FROM products", (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    res.json(result[0]);
  });
};

// Delete Product
const deleteProduct = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id=?", [id], (err) => {
    if (err) {
      return res.status(500).json({ message: "Database Error" });
    }

    res.json({ message: "Product Deleted Successfully" });
  });
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductCount,
};