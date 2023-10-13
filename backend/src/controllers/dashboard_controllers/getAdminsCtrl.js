import con from "../../config/dbMysqlCon.js";

function getAdmins (req, res) {
    const sql = "SELECT name, email FROM admins";
    con.query(sql, (err, result) => {
      if (err) return res.json({ Error: "Error in query" });
      return res.json({ Status: "Success", Result: result });
    });
  }

  export default getAdmins;