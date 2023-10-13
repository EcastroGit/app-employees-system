import React from 'react'

function Meeting() {
  return (
    <div className="d-flex flex-column align-items-center pt-4 pb-5">
      <h3 className="text-center mt-5 mb-5">Schedule a meeting</h3>
      <form className="row g-3 w-50">
        <div className="col-12">
          <label htmlFor="inputTitle" className="form-label">
            Subject
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="inputTitle"
            placeholder="Enter the title"
            autoComplete="off"
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
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputTitle" className="form-label">
            Date
          </label>
          <input
            name="deadline"
            type="date"
            className="form-control"
            id="inputDeadline"
            autoComplete="off"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Schedule
          </button>
        </div>
      </form>
    </div>
  )
}

export default Meeting