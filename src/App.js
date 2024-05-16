import React from "react";
import  NavBar  from "./Components/NavBar";
import Hero from "./Components/Hero";
import Food from "./Components/Food";
import HeadlineCards from "./Components/HeadlineCards";
function App() {
  return (
    <div>
      {/*  */}
      <NavBar/>
      <Hero />
      <HeadlineCards/>
      <Food/>
    </div>
  );
}

export default App;
