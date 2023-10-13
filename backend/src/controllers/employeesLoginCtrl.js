import con from "../config/dbMysqlCon.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

function employeesLoginCtrl(req, res) {
  const sql = "SELECT * FROM employees Where email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Authentication error" });
    if (result.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        result[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "password error" });
          if (response) {
            const token = jwt.sign(
              { role: "employee", id: result[0].id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "1d" }
            );
            res.cookie("token", token);
            return res.json({ Status: "Success", id: result[0].id });
          } else {
            return res.json({
              Status: "Error",
              Error: "Wrong Email or Password",
            });
          }
        }
      );
    } else {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }
  });
}

export default employeesLoginCtrl;
