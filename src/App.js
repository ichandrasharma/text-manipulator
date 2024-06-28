import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Github from "./components/Github";

function App() {
  const [mode, setMode] = useState("light"); // dark mode enabled or not

  const [alert, setAlert] = useState(null);

  const showsAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const removeClass = () => {
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-success");
  // }

  const toggleMode = () => {
    // removeClass();
    // document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#52045c";
      showsAlert("Dark Mode Enabled", "success");
      // document.title = "TextManipulator - Change Mode";
      // setInterval(() => {
      //   document.title = "TextManipulator - Change Mode Blink";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextManipulator - Install Change Mode Blink";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showsAlert("Light Mode Enabled", "success");
      // document.title = "TextManipulator - Change Mode";
    }
  };

  return (
    <>
      <Router>
      <div>
        <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          {/* partial matching
          user -> component 1
          user/home -> component 2 */}
          <Route exact path="/About" element={<About mode = {mode} />} />
          <Route exact path="/" element={<Form showsAlert={showsAlert} heading="Analyse Your Text - Word Count, Uppercase to Lowercase, Lowercase to Uppercase, Remove or Delete Extra spaces" mode={mode} />} />
        </Routes>
        <Github />
          </div>
    </Router>
    </>
  );
}

export default App;
