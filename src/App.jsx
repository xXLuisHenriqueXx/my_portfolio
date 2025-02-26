import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/common/Navbar";

export default function App() {
  return (
    <div className="bg-background px-4 xl:px-12 2xl:px-24">
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}