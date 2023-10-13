import con from "../../config/dbMysqlCon.js";

function getEmployees (req, res) {
    const sql = "SELECT id, name, email, address, position, department, salary, image FROM employees";
    con.query(sql, (err, result) => {
      if (err) return res.json({ Error: "Error in query" });
      return res.json({ Status: "Success", employees: result });
    });
  }

  export default getEmployees;