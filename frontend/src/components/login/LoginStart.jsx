import React from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded border loginForm text-center">
        <h2>Login As</h2>
        <div className="d-flex justify-content-between mt-5">
          <button
            className="btn btn-primary btn-lg mx-3"
            onClick={(e) => navigate("/employeesLogin")}
          >
            Employee
          </button>
          <button
            className="btn btn-success btn-lg mx-3"
            onClick={(e) => navigate("/AdminsLogin")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
