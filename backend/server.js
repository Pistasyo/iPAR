// server.js
const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());

// SQL Server config
const config = {
  user: "test",
  password: "test",
  server: "DESKTOP-J7U3J3C", // or your DB host
  database: "iPAR",
  options: {
    // encrypt: false,
    trustServerCertificate: true
  },
//   port: 1434
};

// API endpoint
app.get("/api/chart-data", async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query(`SELECT PN, Sets as Set1, Sets + 20 as Set2 FROM Plan_iPAR`);

    const data = result.recordset;
    const columns = Object.keys(data[0]); // ['label', 'Apples', 'Bananas', 'Oranges']

    res.json({ columns, data });
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server error");
  }
});


app.listen(3001, () => console.log("Server running on http://localhost:3001"));
