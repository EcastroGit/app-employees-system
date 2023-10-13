import con from "../../config/dbMysqlCon.js";

function adminCountCtrl (req, res) {
    const sql = "Select count(id) as admin from admins";
    con.query(sql, (err, result) => {
      if (err) return res.json({ Error: "Error in query" });
      return res.json(result);
    });
  }

  export default adminCountCtrl;