import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Components
import LoginStart from "./components/login/LoginStart";
import AdminsLogin from "./components/login/AdminsLogin";
import Dashboard from "./components/admin_dashboard/Dashboard";
import Home from "./components/admin_dashboard/Home";
import ManageEmployees from "./components/admin_dashboard/ManageEmployees";
import Analytics from "./components/admin_dashboard/Analytics";
import AddEmployee from "./components/admin_dashboard/AddEmployee";
import AssignmentPanel from "./components/admin_dashboard/AssignmentPanel";
import AssignTask from "./components/admin_dashboard/AssignTask"
import ScheduleMeeting from "./components/admin_dashboard/ScheduleMeeting";
import EditEmployee from "./components/admin_dashboard/EditEmployee";
import EmployeesLogin from "./components/login/EmployeesLogin";
import EmployeeDetail from "./components/employee_profile/EmployeeDetail";
import EmployeeTasks from "./components/employee_profile/EmployeeTasks";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />}></Route>
          <Route path="/employees" element={<ManageEmployees />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/create" element={<AddEmployee />}></Route>
          <Route path="/assign/:id" element={<AssignmentPanel />}>
            <Route path ="tasks" element={<AssignTask />}></Route>
            <Route path="meetings" element={<ScheduleMeeting />}></Route>
          </Route>
          <Route path="/employeeEdit/:id" element={<EditEmployee />}></Route>
        </Route>
        <Route path="/adminsLogin" element={<AdminsLogin />}></Route>
        <Route path="/start" element={<LoginStart />}></Route>
        <Route path="/employeesLogin" element={<EmployeesLogin />}></Route>
        <Route path="/employeedetail/:id" element={<EmployeeDetail />}>
          <Route index element={<EmployeeTasks />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
