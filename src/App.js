import "./App.css";
import NavBar from "./components/NavBar.js";
import IndexPage from "./components/IndexPage.js";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";
import MyWorks from "./components/MyWorks";
import Connect from "./components/Connect";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);
  }, []);
  return spinner ? (
    <Loader />
  ) : (
    <div className="App">
      {window.innerWidth < 976 ? (
        <div>This site is best viewed only on tablet and laptop resolution</div>
      ) : (
        <>
          <NavBar />
          <IndexPage />
          <Summary />
          <Education />
          <Skills />
          <WhatIDo />
          <MyWorks />
          <Connect />
        </>
      )}
    </div>
  );
}

export default App;
