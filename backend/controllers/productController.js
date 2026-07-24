const db = require("../db");

// Get Products
const getProducts = (req, res) => {
  const search = req.query.search;

  let sql = "SELECT * FROM products";
  let values = [];

  if (search) {
    sql +=
      " WHERE name LIKE ? OR category LIKE ? OR brand LIKE ? OR supplier LIKE ?";

    values = [
      `%${search}%`,
      `%${search}%`,
      `%${search}%`,
      `%${search}%`,
    ];
  }

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database Error" });
    }

    res.json(result);
  });
};

// Add Product
const addProduct = (req, res) => {
  const {
    name,
    category,
    brand,
    supplier,
    purchase_price,
    selling_price,
    quantity,
    status,
  } = req.body;

  db.query(
    `INSERT INTO products
    (name,category,brand,supplier,purchase_price,selling_price,quantity,status)
    VALUES(?,?,?,?,?,?,?,?)`,
    [
      name,
      category,
      brand,
      supplier,
      purchase_price,
      selling_price,
      quantity,
      status,
    ],
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

  const {
    name,
    category,
    brand,
    supplier,
    purchase_price,
    selling_price,
    quantity,
    status,
  } = req.body;

  db.query(
    `UPDATE products SET
      name=?,
      category=?,
      brand=?,
      supplier=?,
      purchase_price=?,
      selling_price=?,
      quantity=?,
      status=?
      WHERE id=?`,
    [
      name,
      category,
      brand,
      supplier,
      purchase_price,
      selling_price,
      quantity,
      status,
      id,
    ],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Database Error" });
      }

      res.json({ message: "Product Updated Successfully" });
    }
  );
};

// Product Count
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