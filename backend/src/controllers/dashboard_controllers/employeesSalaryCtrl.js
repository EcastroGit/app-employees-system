import con from "../../config/dbMysqlCon.js";

function employeesSalary (req, res) {
    const sql = "Select sum(salary) as sumOfSalary from employees";
    con.query(sql, (err, result) => {
      if (err) return res.json({ Error: "Error in query" });
      return res.json(result);
    });
  }

  export default employeesSalary;