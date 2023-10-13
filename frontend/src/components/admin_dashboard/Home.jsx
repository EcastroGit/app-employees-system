import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [adminCount, setAdminCount] = useState();
  const [employeeCount, setEmployeeCount] = useState();
  const [salary, setSalary] = useState();
  const [adminsInfo, setAdminsInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/dashboard/admin-count")
      .then((res) => {
        setAdminCount(res.data[0].admin);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:4000/dashboard/employees-count")
      .then((res) => {
        setEmployeeCount(res.data[0].employee);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:4000/dashboard/salary")
      .then((res) => {
        setSalary(res.data[0].sumOfSalary);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:4000/dashboard/get-admins")
      .then((res) => {
        setAdminsInfo(res.data.Result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admins</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {adminCount}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employees</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employees total salary (USD)</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: {salary}</h5>
          </div>
        </div>
      </div>

      {/* List of admin  */}
      <div className="mt-4 px-5 pt-3">
        <h3>List of admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {adminsInfo.map((admins, index) => {
              return (
                <tr key={index}>
                  <td>{admins.name}</td>
                  <td>{admins.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
