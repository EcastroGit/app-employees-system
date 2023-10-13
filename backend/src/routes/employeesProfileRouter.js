import  express  from "express";
// Controllers imported
import getTasksByIdCtrl from "../controllers/employee_profile_controllers/getTasksByIdCtrl.js"

// Router definition
const employeeProfileRouter = express.Router();

// Middlewares
import verifyAuth from "../middlewares/verifyAuth.js";

// Routes
employeeProfileRouter.get("/", (req, res) => {
    res.json({message: "bienvenido a la API de Empleados"});
})

employeeProfileRouter.get("/tasks/:id", verifyAuth, getTasksByIdCtrl);

export default employeeProfileRouter;