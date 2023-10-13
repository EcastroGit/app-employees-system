import con from "../config/dbMysqlCon.js";
import jwt from "jsonwebtoken";

function adminLoginCtrl(req, res) {
    const sql = "SELECT * FROM admins Where email = ? AND  password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
      if (err)
        return res.json({ Status: "Error", Error: "Error in query" });
      if (result.length > 0) {
        const id = result[0].id;
        const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        res.cookie("token", token);
        return res.json({ Status: "Success" });
      } else {
        return res.json({ Status: "Error", Error: "Wrong Email or Password" });
      }
    });
  }

  export default adminLoginCtrl;