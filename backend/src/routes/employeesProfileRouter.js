import  express  from "express";
// Controllers imported
import getTasksByIdCtrl from "../controllers/employee_profile_controllers/getTasksByIdCtrl.js"
import getEmployeeInfo from "../controllers/employee_profile_controllers/getEmployeeInfo.js";

// Router definition
const employeeProfileRouter = express.Router();

// Middlewares
import verifyUser from "../middlewares/verifyUser.js";

// Routes
employeeProfileRouter.get("/", (req, res) => {
    res.json({message: "bienvenido a la API de Empleados"});
})

employeeProfileRouter.get("/get-employee-info/:id", verifyUser, getEmployeeInfo);

employeeProfileRouter.get("/tasks/:id", verifyUser, getTasksByIdCtrl);


export default employeeProfileRouter;