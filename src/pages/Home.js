import React from "react";
import "../App.css";
import HeroSection from "../Components/Hero/HeroSection";
import Cards from "../Components/Card/Cards";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
