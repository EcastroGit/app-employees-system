import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "../../css/employee-detail.css";

function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees-profile/get-employee-info/" + id)
      .then((res) => setEmployee(res.data.employee[0]))
      .catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
    axios
      .get("http://localhost:4000/logout")
      .then((res) => {
        navigate("/start");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <header id="profile-header" className="text-center shadow d-flex">
        <div className="header-box d-flex align-items-center">
          <p className="m-auto">¡Welcome <span className="fw-bold">{employee.name}</span>!</p>
        </div>
        <div className="header-box d-flex align-items-center justify-content-center">
          <span className="mx-2">Option 1</span>
          <span className="mx-2">Option 2</span>
          <span className="mx-2">Another Option</span>
        </div>
      </header>
      <main id="container">
        <div  id="profile-info" className="d-flex justify-content-center flex-column align-items-center mt-3">
          <img
            src={`http://localhost:4000/public/images/` + employee.image}
            alt="profile"
            className="empImg"
          />
          <div className="d-flex align-items-start flex-column mt-3">
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
          </div>
          <div>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div id="profile-content" className="text-center pt-5 ps-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default EmployeeDetail;
