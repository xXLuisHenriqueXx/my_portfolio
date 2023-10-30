import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-background">
        <NavBar />
      <div className="w-full h-screen">
        <Home />
      </div>
      <div className="w-full h-screen">
        <About />
      </div>
    </div>
  );
}

export default App;