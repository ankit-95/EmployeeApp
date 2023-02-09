import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

class AddEmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", salary: 0, department: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSalaryChange(event) {
    this.setState({ salary: event.target.value });
  }

  handleDepartmentChange(event) {
    this.setState({ department: event.target.value });
  }

  handleSubmit(event) {
    // alert(
    //   "Data : " + this.state.name + this.state.salary + this.state.department
    // );
    const data = {
      name: this.state.name,
      salary: this.state.salary,
      department: this.state.department,
    };
    fetch(`api/addEmployee`, {
      method: "POST",
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
    const { navigation } = this.props;
    navigation("/home");
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-md-4">
              <label>Name</label>
              <input
                type="text"
                className="form-control col-md-4"
                id="inputName"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
            <br></br>
            <div className="form-group col-md-4">
              <label>Salary</label>
              <input
                type="number"
                className="form-control col-md-4"
                id="salary"
                value={this.state.salary}
                placeholder="Salary"
                onChange={this.handleSalaryChange}
              />
            </div>
            <br></br>
            <div className="form-group col-md-4">
              <label>Department</label>
              <input
                type="text"
                className="form-control col-md-4"
                id="department"
                placeholder="Department"
                value={this.state.department}
                onChange={this.handleDepartmentChange}
              />
            </div>
            <br></br>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <AddEmp {...props} navigation={navigation} />;
}
