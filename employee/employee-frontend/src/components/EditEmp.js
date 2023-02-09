import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditEmp() {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [salary, setSalary] = useState(0);
  const [department, setDepartment] = useState("");

  useEffect(() => {
    setId(location.state.id);
    setName(location.state.name);
    setSalary(location.state.salary);
    setDepartment(location.state.department);
  }, [location]);

  function handleSubmit(event) {
    const data = {
      name: name,
      salary: salary,
      department: department,
    };
    console.log(id);
    fetch(`api/updateEmployee/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success");
      })
      .catch((error) => {
        console.error("Error");
      });
    event.preventDefault();
    navigate("/home");
  }

  return (
    <div>
      {/* {console.log(location.state)} */}
      <NavBar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group col-md-4">
            <label>Name</label>
            <input
              type="text"
              className="form-control col-md-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group col-md-4">
            <label>Salary</label>
            <input
              type="number"
              className="form-control col-md-4"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group col-md-4">
            <label>Department</label>
            <input
              type="text"
              className="form-control col-md-4"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <br></br>
          <input type="submit" className="btn btn-primary" value="Change" />
        </form>
      </div>
    </div>
  );
}
