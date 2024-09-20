// import logo from './logo.svg';
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#55558c";
      showAlert("dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Asqure" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text here:" mode={mode} />} />

            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
