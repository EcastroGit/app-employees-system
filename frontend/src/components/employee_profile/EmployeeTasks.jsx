import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EmployeeTasks() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:4000/employees-profile/tasks/" + id)
      .then((res) => {
        setData(res.data.tasks);
        console.log(res.data.tasks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="mb-5">Tasks</h2>
      <div className="d-flex flex-direction-row">
        {data.map((task) => (
          <div
            key={task.id}
            className="card shadow mx-2"
            style={{ width: "15rem" }}
          >
            <div className="card-header">
              <h5 className="card-title">{task.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text text-start">{task.detail}</p>
              <button type="button" className="btn btn-success btn-sm mx-1 my-1">
                Completed
              </button>
              <button type="button" className="btn btn-secondary btn-sm mx-1 my-1">
                Options
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeTasks;
