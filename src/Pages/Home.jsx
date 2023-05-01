import React from "react";
import Navbar from "../Components/Navbar";
import HomeSection from "../Components/HomeSection";
import FoodIdeas from "../Components/FoodIdeas";
import SpecialMeals from "../Components/SpecialMeals";
import Footer from "../Components/Footer";
import FoodReview from "../Components/Reviews/FoodReview";
import Advertise from "../Components/Advertise";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <FoodIdeas />
      <SpecialMeals />
      <FoodReview />
      <Advertise />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
