// import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function AssignTask() {
  const { id } = useParams();
  const [task, setTask] = useState({
    employee_id: id,
    title: "",
    detail: "",
    deadline: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/dashboard/assign-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        employee_id: task.employee_id,
        title: task.title,
        detail: task.detail,
        deadline: task.deadline
      }),
      credentials: "include"
    }).then((res) => {
        if (res.ok) {
        navigate("/employees");
        console.log(task);
      } else {
        throw new Error("task asignment failed");
      }
      }).catch((err) => console.log(err));
  }
  
  return (
    <div className="d-flex flex-column align-items-center pt-4 pb-5">
      
      <h3 className="text-center mt-5 mb-5">Assign a task</h3>

      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="inputTitle"
            placeholder="Enter the title"
            autoComplete="off"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputTitle" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            className="form-control"
            id="inputDetail"
            placeholder="Enter the description"
            autoComplete="off"
            onChange={(e) => setTask({ ...task, detail: e.target.value })}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputTitle" className="form-label">
            Deadline
          </label>
          <input
            name="deadline"
            type="date"
            className="form-control"
            id="inputDeadline"
            autoComplete="off"
            onChange={(e) => setTask({ ...task, deadline: e.target.value })}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Assign
          </button>
        </div>
      </form>
    </div>
  )
}

export default AssignTask;