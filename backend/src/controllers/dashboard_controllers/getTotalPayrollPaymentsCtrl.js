import con from "../../config/dbMysqlCon.js";

function getTotalPayrollPayments(req, res) {
  const sql = "SELECT month, USD from total_payroll_payments";
  con.query(sql, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.json({ message: "success", total_payments: result});
    }
  });
}

export default getTotalPayrollPayments;
