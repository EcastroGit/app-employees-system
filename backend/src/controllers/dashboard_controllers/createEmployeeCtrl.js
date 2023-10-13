import con from "../../config/dbMysqlCon.js";
import bcrypt from "bcrypt";

function createCtrl(req, res) {
  const sql1 = "SELECT id FROM employees WHERE email = ?";
  con.query(sql1, [req.body.email], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ message: "error in query", error: err });
    } else if (result.length > 0) {
      res.status(409).json({ status: 409, message: "Employee email already exists", employee: result });
      console.log(result);
    } else {
      const sql2 =
        "INSERT INTO employees (`name`,`email`,`password`, `address`, `position`, `department`, `salary`,`image`) VALUES (?)";
      bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        if (err) return res.json({ Error: "Error in hashing password" });
        const values = [
          req.body.name,
          req.body.email,
          hash,
          req.body.address,
          req.body.position,
          req.body.department,
          req.body.salary,
          req.file.filename,
        ];
        con.query(sql2, [values], (err, result) => {
          if (err) return res.json({ Error: "Server error" });
          return res.json({ Status: "Employee created" });
        });
      });
    }
  });
}

export default createCtrl;
