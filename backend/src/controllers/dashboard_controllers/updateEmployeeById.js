import con from "../../config/dbMysqlCon.js";

function updateEmployeebyId(req, res) {
  const id = req.params.id;
  const { name, email, address, position, department, salary} = req.body;

  const sql = "UPDATE employees SET name = ?, email = ?, address = ?, position = ?, department = ?, salary = ? WHERE id = ?";
  con.query(sql, [name, email, address, position, department, salary, id], (err, result) => {
    if (err) return res.json({ Error: "Error when updating employee" });
    return res.json({ status: "Success" });
  });
}

export default updateEmployeebyId;