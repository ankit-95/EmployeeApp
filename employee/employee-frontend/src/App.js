import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddEmp from "./components/AddEmp";
import EditEmp from "./components/EditEmp";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addEmp" element={<AddEmp />} />
        <Route path="/editEmp" element={<EditEmp />} />
      </Routes>
    </Router>
  );
}

export default App;
