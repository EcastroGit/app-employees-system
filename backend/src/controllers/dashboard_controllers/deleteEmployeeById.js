import con from "../../config/dbMysqlCon.js";

function deleteEmployeeById(req, res) {
  const id = req.params.id;

  con.beginTransaction(function (err) {
    if (err) {
      return res.status(500).json({ error: "Error starting transaction" });
    }

    const sql1 = "SELECT * FROM tasks WHERE employee_id = ?";
    con.query(sql1, [id], (err, tasks) => {
      if (err) {
        con.rollback(function () {
          return res.status(500).json({ error: "Error querying tasks" });
        });
      } else {
        if (tasks.length > 0) {
          const sql2 = "DELETE FROM tasks WHERE employee_id = ?";
          con.query(sql2, [id], (err) => {
            if (err) {
              con.rollback(function () {
                return res.status(500).json({ error: "Error deleting tasks" });
              });
            }
          });
        }

        const sql3 = "DELETE FROM employees WHERE id = ?";
        con.query(sql3, [id], (err) => {
          if (err) {
            con.rollback(function () {
              return res.status(500).json({ error: "Error deleting employee" });
            });
          }

          con.commit(function (err) {
            if (err) {
              con.rollback(function () {
                return res
                  .status(500)
                  .json({ error: "Error committing transaction" });
              });
            }

            return res.json({ status: "Success" });
          });
        });
      }
    });
  });
}

export default deleteEmployeeById;
