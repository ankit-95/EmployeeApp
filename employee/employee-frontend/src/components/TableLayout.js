import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function TableLayout() {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    fetch("/api/getAllEmployees")
      .then((res) => res.json())
      .then((json) => {
        setEmpData(json);
      });
  }, []);

  async function handleOnDelete(id) {
    fetch(`api/deleteEmployee/${id}`, { method: "DELETE" });
    const newEmpData = empData.filter((item) => item.id !== id);
    setEmpData(newEmpData);
  }
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Department</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {empData &&
            empData.map((content, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{content.id}</th>
                  <td>{content.name}</td>
                  <td>{content.salary}</td>
                  <td>{content.department}</td>
                  <td>
                    <div className="container">
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ marginRight: "10px" }}
                      >
                        <Link
                          className="nav-link"
                          to="/editEmp"
                          state={content}
                        >
                          Edit
                        </Link>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleOnDelete(content.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {empData.length === 0 && (
        <div className="container" style={{ alignContent: "center" }}>
          <p>No record found!!</p>
        </div>
      )}
    </div>
  );
}
