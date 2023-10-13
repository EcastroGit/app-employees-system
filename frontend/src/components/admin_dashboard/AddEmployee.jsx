import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    position: "",
    department: "",
    salary: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("address", data.address);
    formdata.append("position", data.position);
    formdata.append("department", data.department);
    formdata.append("salary", data.salary);
    formdata.append("image", data.image);
    fetch("http://localhost:4000/dashboard/create-employee", {
      method: "POST",
      body: formdata,
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 409) {
          alert("Employee email already exists");
        } else {
          navigate("/employees");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4 pb-5">
      <h2 className="mt-5 mb-5">Add Employee</h2>
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
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Enter Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
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
          />
        </div>
        <div className="col-12">
          <label htmlFor="selectPosition" className="form-label">
            Position
          </label>
          <select
            className="form-select"
            id="selectPosition"
            onChange={(e) => setData({ ...data, position: e.target.value })}
          >
            <option value="">Select position</option>
            <option value="team manager">team manager</option>
            <option value="IT specialist">IT specialist</option>
            <option value="representative">representative</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="selectDepartment" className="form-label">
            Department
          </label>
          <select
            className="form-select"
            id="selectDepartment"
            onChange={(e) => setData({ ...data, department: e.target.value })}
          >
            <option value="">Select department</option>
            <option value="management">management</option>
            <option value="IT">IT</option>
            <option value="sales">sales</option>
          </select>
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
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile01">
            Select Image
          </label>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
