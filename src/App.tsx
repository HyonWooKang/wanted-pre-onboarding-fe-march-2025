import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet, useNavigate } from "@tanstack/react-router";

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default App;
