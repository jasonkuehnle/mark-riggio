import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import PastWork from "./components/PastWork/PastWork";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Demos from "./components/Demos/Demos";
import Photos from "./components/Photos/Photos";
import mg8180 from "./assets/media/photoGallery/_MG_8180.webp";
import CustomPhoto from "./components/Photos/CustomPhoto";

function App() {
  // const [count, setCount] = useState(0);

  function updateNavHeight() {
    const nav = document.getElementById("nav-bar");
    if (!nav) return;

    const height = nav.offsetHeight;
    document.documentElement.style.setProperty("--nav-height", `${height}px`);
  }

  useEffect(() => {
    updateNavHeight();

    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Demos />
      {/* <PastWork /> */}
      <Photos />
      <Contact />
    </>
  );
}

export default App;
