const express = require("express");
const router = express.Router();

const {
  getInventory,
  addInventory,
  getInventoryCount,
} = require("../controllers/inventoryController");

// Dashboard Count
router.get("/count", getInventoryCount);

// Inventory
router.get("/", getInventory);
router.post("/", addInventory);

module.exports = router;