import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const name = "Mitarth";
const currentdate = new Date();
// console.log(currentdate);
const year = currentdate.getFullYear();

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div></div>
  </div>,
  document.getElementById("root")
);
