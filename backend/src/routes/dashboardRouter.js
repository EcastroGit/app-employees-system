import  express  from "express";
import upload from "../middlewares/multerFileStorage.js"
// Controllers imported
import adminCountCtrl from "../controllers/dashboard_controllers/adminCountCtrl.js";
import employeesCountCtrl from "../controllers/dashboard_controllers/employeesCountCtrl.js";
import employeesSalaryCtrl from "../controllers/dashboard_controllers/employeesSalaryCtrl.js";
import getAdminsCtrl from "../controllers/dashboard_controllers/getAdminsCtrl.js";
import getEmployeesCtrl from "../controllers/dashboard_controllers/getEmployeesCtrl.js";
import createEmployeeCtrl from "../controllers/dashboard_controllers/createEmployeeCtrl.js"
import getEmployeeByIdCtrl from "../controllers/dashboard_controllers/getEmployeeByIdCtrl.js";
import assignTaskCtrl from "../controllers/dashboard_controllers/assignTaskCtrl.js"
import updateEmployeeByIdCtrl from "../controllers/dashboard_controllers/updateEmployeeById.js";
import deleteEmployeeByIdCtrl from "../controllers/dashboard_controllers/deleteEmployeeById.js";
import getTotalPayrollPayments from "../controllers/dashboard_controllers/getTotalPayrollPaymentsCtrl.js";
import payrollPaymentsDepartmentCtrl from "../controllers/dashboard_controllers/payrollPaymentsDepartment.js";


// Router definition
const dashboardRouter = express.Router();

// Middlewares
import verifyAuth from "../middlewares/verifyAuth.js";

// Routes
dashboardRouter.get("/", verifyAuth, (req, res) => {
    return res.json({ Status: "Success", role: req.role, id: req.id });
  });

// Importante trabajar sobre la privacidad y autorización de las rutas
dashboardRouter.get("/admin-count", verifyAuth, adminCountCtrl);

dashboardRouter.get("/employees-count", verifyAuth, employeesCountCtrl);

dashboardRouter.get("/salary", verifyAuth, employeesSalaryCtrl);

dashboardRouter.get("/get-admins", verifyAuth, getAdminsCtrl);

dashboardRouter.get("/get-employees", verifyAuth, getEmployeesCtrl);

dashboardRouter.get("/get-employee-by-id/:id", verifyAuth, getEmployeeByIdCtrl);

dashboardRouter.post("/create-employee", verifyAuth, upload.single("image"), createEmployeeCtrl);

dashboardRouter.post("/assign-task", verifyAuth, assignTaskCtrl);

dashboardRouter.put("/update-employee-by-id/:id", verifyAuth, updateEmployeeByIdCtrl);

dashboardRouter.delete('/delete-employee-by-id/:id', verifyAuth, deleteEmployeeByIdCtrl);

dashboardRouter.get("/total-payroll-payments", verifyAuth, getTotalPayrollPayments);

dashboardRouter.get("/payroll-payments-department", verifyAuth, payrollPaymentsDepartmentCtrl);


export default dashboardRouter;