import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const Header = () => {
  return (
    <>
      <h1 className="initial-title">Hello Style!</h1>
      <p className="first-paragraph">Add a little style!.</p>
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));