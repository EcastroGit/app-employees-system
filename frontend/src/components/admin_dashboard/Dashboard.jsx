import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:4000/dashboard").then((res) => {
      if (res.data.Status === "Success") {
        if (res.data.role === "admin") {
          navigate("/");
        } else {
          const id = res.data.id;
          navigate("/employeedetail/" + id);
        }
      } else {
        navigate("/start");
      }
    });
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
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline text-center">
                Admin panel
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="dashboard-option">
                <Link
                  to="/"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>{" "}
                </Link>
              </li>
              <li className="dashboard-option">
                <Link
                  to="/employees"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Manage employees
                  </span>{" "}
                </Link>
              </li>
              <li className="dashboard-option">
                <Link
                  to="/analytics"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi bi-clipboard-data"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Analytics</span>
                </Link>
              </li>
              <li className="dashboard-logout" onClick={handleLogout}>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-power"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Dashboard</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
