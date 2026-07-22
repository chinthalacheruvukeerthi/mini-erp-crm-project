const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Keerthi",
  database: "mini_erp_crm",
});

connection.connect((err) => {
  if (err) {
    console.log("Database Connection Failed:", err);
    return;
  }
  console.log("MySQL Connected Successfully!");
});

module.exports = connection;