import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="bg-background">
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