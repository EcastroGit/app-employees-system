import con from "../../config/dbMysqlCon.js";

function assignTaskCtrl(req, res) {
    const sql =
    "INSERT INTO tasks (`employee_id`,`title`,`detail`, `deadline`) VALUES (?)";
    const values = [
        req.body.employee_id,
        req.body.title,
        req.body.detail,
        req.body.deadline
    ];
    con.query(sql, [values], (err, result) => {
    if(err) {
        return console.log(err);
    } else {
    res.json({ message: "success", dataInfo: values })
}})
}

export default assignTaskCtrl;