import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-background">
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}