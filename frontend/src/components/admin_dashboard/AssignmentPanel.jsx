import React from "react";
import { Link, Outlet } from "react-router-dom"
import "../../css/assignment-panel.css"


function AssignmentPanel() {

  return (
    <div className="px-5 py-3">
      <h3 className="text-center mt-5 mb-5">Assignment panel</h3>
      <div className="border">
        <span className="assign-option">
          <i className="bi bi-journal-bookmark me-2 fz-5"></i>
          <Link className="text-decoration-none text-dark" to="tasks">Assign a task</Link>
        </span>
        <span className="assign-option">
          <i className="bi bi-microsoft-teams me-2"></i>
          <Link className="text-decoration-none text-dark" to="meetings">Schedule a meeting</Link>
        </span>
      </div>
      <div id="assignments-container" className="mt-3 border">
        <Outlet />
      </div>
    </div>
  );
}

export default AssignmentPanel;
