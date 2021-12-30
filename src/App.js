import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="grid">
        <button className="init-btn">
            Hello
        </button>
    </div>
  );
}

export default App;