import con from "../../config/dbMysqlCon.js";

function payrollPaymentsDepartmentCtrl(req, res) {
    const sql = "SELECT month, sales, IT, management from payroll_payments_department";
    con.query(sql, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json({ message: "success", payments_departments: result})
        }
    })
}

export default payrollPaymentsDepartmentCtrl;