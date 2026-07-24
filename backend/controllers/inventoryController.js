const db = require("../db");

// Get Inventory History
const getInventory = (req, res) => {
  db.query(
    `SELECT inventory.*, products.name AS product_name
     FROM inventory
     JOIN products ON inventory.product_id = products.id
     ORDER BY inventory.created_at DESC`,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
        });
      }

      res.json(result);
    }
  );
};

// Stock In / Stock Out
const addInventory = (req, res) => {
  const {
    product_id,
    transaction_type,
    quantity,
    remarks,
  } = req.body;

  db.query(
    `INSERT INTO inventory
    (product_id,transaction_type,quantity,remarks)
    VALUES(?,?,?,?)`,
    [
      product_id,
      transaction_type,
      quantity,
      remarks,
    ],
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
        });
      }

      // Update Product Stock
      const sql =
        transaction_type === "Stock In"
          ? "UPDATE products SET quantity = quantity + ? WHERE id=?"
          : "UPDATE products SET quantity = quantity - ? WHERE id=?";

      db.query(sql, [quantity, product_id]);

      res.json({
        message: "Inventory Updated Successfully",
      });
    }
  );
};

// Total Inventory Count
const getInventoryCount = (req, res) => {
  db.query(
    "SELECT COUNT(*) AS total FROM inventory",
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
        });
      }

      res.json(result[0]);
    }
  );
};

module.exports = {
  getInventory,
  addInventory,
  getInventoryCount,
};