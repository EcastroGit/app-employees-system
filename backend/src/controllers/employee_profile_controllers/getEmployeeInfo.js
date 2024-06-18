import con from "../../config/dbMysqlCon.js";

function getEmployeeInfo (req, res) {
    const id = req.params.id;
    const sql = "SELECT name, email, address, position, department, salary, image FROM employees where id = ?";
    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ Error: "Error in query" });
      return res.json({ Status: "Success", employee: result });
    });
  }

  export default getEmployeeInfo;