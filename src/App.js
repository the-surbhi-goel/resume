import "./App.css";

import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Companies from "./components/companies/Companies";
import Education from "./components/education/Education";
import Tools from "./components/tools/Tools";
import OperatingSystem from "./components/os/OperatingSystem";

function App() {
  const [theme, setTheme] = useState({
    mode: "light",
    text: "dark",
    button: "success",
  });

  const changeTheme = () => {
    if (theme.mode === "light") {
      document.body.style.backgroundColor = "grey";
      changeModeColors("dark", "white", "primary");
    } else {
      document.body.style.backgroundColor = "white";
      changeModeColors("light", "black", "success");
    }
  };

  const changeModeColors = (mode, textColor, btnColor) => {
    setTheme({
      mode: mode,
      text: textColor,
      button: btnColor,
    });
  };

  return (
    <HashRouter>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home theme={theme} />} />
          <Route exact path="/skills" element={<Skills theme={theme} />} />
          <Route exact path="/companies" element={<Companies theme={theme} />} />
          <Route exact path="/education" element={<Education theme={theme} />} />
          <Route exact path="/tools" element={<Tools theme={theme} />} />
          <Route exact path="/operating-system" element={<OperatingSystem theme={theme} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
