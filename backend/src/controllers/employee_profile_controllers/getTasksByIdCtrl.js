import con from "../../config/dbMysqlCon.js";

function getTasksByIdCtrl(req, res) {
  const { id } = req.params;
  const sql = "SELECT * FROM tasks where employee_id = ?";
  con.query(sql, [id], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.json({ message: "Success", tasks: result});
    }
  })
}

export default getTasksByIdCtrl;
