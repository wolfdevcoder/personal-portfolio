// src/pages/Home.jsx
import React from "react";
import Experties from "../components/Experties/Experties";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
import Skills from "../components/Skills/Skills";
import css from "../styles/App.module.scss";

const Home = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
