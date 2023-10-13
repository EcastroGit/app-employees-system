import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    position: "",
    department: "",
    salary: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/dashboard/get-employee-by-id/" + id)
      .then((res) => {
        setData({
          ...data,
          name: res.data.employee[0].name,
          email: res.data.employee[0].email,
          address: res.data.employee[0].address,
          position: res.data.employee[0].position,
          department: res.data.employee[0].department,
          salary: res.data.employee[0].salary,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    
    event.preventDefault();

    axios
      .put("http://localhost:4000/dashboard/update-employee-by-id/" + id, data)
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/employees");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4 pb-5">
      <h2 className="mt-5 mb-5">Edit information</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            autoComplete="off"
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Position
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPosition"
            placeholder="Enter Position"
            autoComplete="off"
            onChange={(e) => setData({ ...data, position: e.target.value })}
            value={data.position}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDepartment"
            placeholder="Enter Department"
            autoComplete="off"
            onChange={(e) => setData({ ...data, department: e.target.value })}
            value={data.department}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            placeholder="Enter Salary"
            autoComplete="off"
            onChange={(e) => setData({ ...data, salary: e.target.value })}
            value={data.salary}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
