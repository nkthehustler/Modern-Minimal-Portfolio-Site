import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Animamtion from "./components/animation";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Portfolio />
    <Skills />
    <About />
    <Contact />
    <Footer />
    <Animamtion />
  </React.StrictMode>
);
