const express = require("express");
const router = express.Router();

const {
  getSales,
  addSale,
  getSalesCount,
  getRevenue,
} = require("../controllers/salesController");

// Dashboard Statistics
router.get("/count", getSalesCount);
router.get("/revenue", getRevenue);

// Sales
router.get("/", getSales);
router.post("/", addSale);

module.exports = router;