
import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showsAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#52045c";
      showsAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showsAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
    <div>
        <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Form showsAlert={showsAlert} heading="Analyse Your Text" mode={mode} />
      </div>
    </>
  );
}

export default App;
