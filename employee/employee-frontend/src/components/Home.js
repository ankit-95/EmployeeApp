import React from "react";
import NavBar from "./NavBar";
import TableLayout from "./TableLayout";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <TableLayout />
      </div>
    </div>
  );
}
