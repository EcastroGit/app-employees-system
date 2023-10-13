import con from "../../config/dbMysqlCon.js";

function employeesCount (req, res) {
    const sql = "Select count(id) as employee from employees";
    con.query(sql, (err, result) => {
      if (err) return res.json({ Error: "Error in query" });
      return res.json(result);
    });
  }

  export default employeesCount;