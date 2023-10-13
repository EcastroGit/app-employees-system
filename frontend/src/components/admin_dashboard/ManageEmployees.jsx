import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/dashboard/get-employees")
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.employees);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete employee?");
    if(confirm) {
    axios
      .delete("http://localhost:4000/dashboard/delete-employee-by-id/" + id)
      .then((res) => {
        if (res.data.status === "Success") {
          window.location.reload(true);
        } else {
          alert("Server error");
        }
      })
      .catch((err) => console.log(err));
    }
  };

  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-center mt-2">
        <h3 className="mt-5 mb-5">Employees list</h3>
      </div>
      <Link to="/create" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Position</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>
                    {
                      <img
                        src={
                          `http://localhost:4000/public/images/` +
                          employee.image
                        }
                        alt="Profile avatar"
                        style={{width:"40px", height:"40px"}}
                      />
                    }
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link
                      to={`/assign/` + employee.id}
                      className="btn btn-success btn-sm me-2"
                    >
                      Assign
                    </Link>
                    <Link
                      to={`/employeeEdit/` + employee.id}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => handleDelete(employee.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
