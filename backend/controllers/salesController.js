const db = require("../db");

// Get All Sales
const getSales = (req, res) => {
  db.query(
    `SELECT sales.*, customers.name AS customer_name, products.name AS product_name
     FROM sales
     JOIN customers ON sales.customer_id = customers.id
     JOIN products ON sales.product_id = products.id
     ORDER BY sales.created_at DESC`,
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database Error" });
      }

      res.json(result);
    }
  );
};
// Add Sale
const addSale = (req, res) => {
  const { customer_id, product_id, quantity } = req.body;

  db.query(
    "SELECT selling_price, quantity FROM products WHERE id=?",
    [product_id],
    (err, result) => {
      if (err || result.length === 0) {
        return res.status(500).json({
          message: "Product Not Found",
        });
      }

      const product = result[0];

      if (product.quantity < quantity) {
        return res.json({
          message: "Not enough stock",
        });
      }

      const price = product.selling_price;
      const total = price * quantity;

      db.query(
        `INSERT INTO sales(customer_id,product_id,quantity,price,total)
         VALUES(?,?,?,?,?)`,
        [customer_id, product_id, quantity, price, total],
        (err) => {
          if (err) {
            return res.status(500).json({
              message: "Database Error",
            });
          }

          db.query(
            "UPDATE products SET quantity=quantity-? WHERE id=?",
            [quantity, product_id]
          );

          res.json({
            message: "Sale Added Successfully",
          });
        }
      );
    }
  );
};
// Total Sales Count
const getSalesCount = (req, res) => {
  db.query(
    "SELECT COUNT(*) AS total FROM sales",
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

// Total Revenue
const getRevenue = (req, res) => {
  db.query(
    "SELECT SUM(total) AS revenue FROM sales",
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
  getSales,
  addSale,
  getSalesCount,
  getRevenue,
};