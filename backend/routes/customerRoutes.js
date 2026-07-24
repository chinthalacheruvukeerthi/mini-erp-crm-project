const express = require("express");
const router = express.Router();

const {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerCount,
} = require("../controllers/customerController");

// Dashboard Count
router.get("/count", getCustomerCount);

// Customer CRUD
router.get("/", getCustomers);
router.post("/", addCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;