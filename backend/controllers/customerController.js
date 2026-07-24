const db = require("../db");

// Get All Customers
const getCustomers = (req, res) => {
  const search = req.query.search;

  let sql = "SELECT * FROM customers";
  let values = [];

  if (search) {
    sql +=
      " WHERE name LIKE ? OR email LIKE ? OR phone LIKE ? OR business_name LIKE ?";
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
// Add Customer
const addCustomer = (req, res) => {
  const {
    name,
    email,
    phone,
    business_name,
    gst_number,
    customer_type,
    address,
    status,
    follow_up_date,
    notes,
  } = req.body;

  db.query(
    `INSERT INTO customers
    (name,email,phone,business_name,gst_number,customer_type,address,status,follow_up_date,notes)
    VALUES(?,?,?,?,?,?,?,?,?,?)`,
    [
      name,
      email,
      phone,
      business_name,
      gst_number,
      customer_type,
      address,
      status,
      follow_up_date,
      notes,
    ],
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

  const {
    name,
    email,
    phone,
    business_name,
    gst_number,
    customer_type,
    address,
    status,
    follow_up_date,
    notes,
  } = req.body;

  db.query(
    `UPDATE customers SET
    name=?,
    email=?,
    phone=?,
    business_name=?,
    gst_number=?,
    customer_type=?,
    address=?,
    status=?,
    follow_up_date=?,
    notes=?
    WHERE id=?`,
    [
      name,
      email,
      phone,
      business_name,
      gst_number,
      customer_type,
      address,
      status,
      follow_up_date,
      notes,
      id,
    ],
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
// Total Customers Count
const getCustomerCount = (req, res) => {
  db.query(
    "SELECT COUNT(*) AS total FROM customers",
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
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerCount,
};