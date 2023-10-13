import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
// Routers 
import dashboardRouter from "./src/routes/dashboardRouter.js"
import employeesProfileRouter from "./src/routes/employeesProfileRouter.js";
// Data validation middlewares
import loginValidations from "./src/validations/loginValidations.js";
import validateInputData from "./src/middlewares/validateInputData.js";
// Controllers 
import adminLoginCtrl from "./src/controllers/adminLoginCtrl.js";
import employeesLoginCtrl from "./src/controllers/employeesLoginCtrl.js";


// App
const app = express();


// General middlewares
dotenv.config();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public/images", express.static("public/images"));
app.use(morgan("dev"));



// Routes
app.use("/dashboard", dashboardRouter);

app.use("/employees-profile", employeesProfileRouter);

app.post("/admins-login", validateInputData(loginValidations), adminLoginCtrl);

app.post("/employees-login", validateInputData(loginValidations), employeesLoginCtrl);

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});


// Server running
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend running on port: ${port}`);
});
