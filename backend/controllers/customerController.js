const db = require("../db");

// Get All Customers
const getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database Error" });
    }
    res.json(result);
  });
};

// Add Customer
const addCustomer = (req, res) => {
  const { name, email, phone, address } = req.body;

  db.query(
    "INSERT INTO customers(name,email,phone,address) VALUES(?,?,?,?)",
    [name, email, phone, address],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Database Error" });
      }

      res.json({ message: "Customer Added Successfully" });
    }
  );
};

// Update Customer
const updateCustomer = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;

  db.query(
    "UPDATE customers SET name=?, email=?, phone=?, address=? WHERE id=?",
    [name, email, phone, address, id],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Database Error" });
      }

      res.json({ message: "Customer Updated Successfully" });
    }
  );
};

// Delete Customer
const deleteCustomer = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM customers WHERE id=?", [id], (err) => {
    if (err) {
      return res.status(500).json({ message: "Database Error" });
    }

    res.json({ message: "Customer Deleted Successfully" });
  });
};

module.exports = {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};