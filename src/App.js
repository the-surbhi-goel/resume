import "./App.css";

import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Companies from "./components/companies/Companies";
import Education from "./components/education/Education";
import Tools from "./components/tools/Tools";

// import NAV_CATEGORY from "./constants/NavCategory";

function App() {
  const [theme, setTheme] = useState({
    mode: "light",
    text: "dark",
    button: "success",
  });

  const changeTheme = (className) => {
    removeBodyClasses();

    if (className === "light") {
      document.body.style.backgroundColor = "white";
      changeModeColors(className, "black", "success");
    } else if (className === "dark") {
      document.body.style.backgroundColor = "grey";
      changeModeColors(className, "white", "primary");
    } else if (className === "danger") {
      document.body.style.backgroundColor = "#DD6B76";
      changeModeColors(className, "white", className);
    } else if (className === "success") {
      document.body.style.backgroundColor = "#54AA82";
      changeModeColors(className, "white", className);
    } else if (className === "primary") {
      document.body.style.backgroundColor = "#85AFEC";
      changeModeColors(className, "white", className);
    } else if (className === "warning") {
      document.body.style.backgroundColor = "#E7CB75";
      changeModeColors(className, "black", className);
    } else {
      document.body.classList.add("bg-" + className);
    }
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/companies" element={<Companies />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/tools" element={<Tools />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
