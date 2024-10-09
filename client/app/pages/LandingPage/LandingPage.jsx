"use client";
import Hero from "./components/Hero";
import Timeless from "./components/Timeless";
import NewArrival from "./components/NewArrival";
import Style from "./components/Style";
import Classes from "./components/Classes";
import Footer from "../../components/Footer";
import { motion as m } from "framer-motion";

const LandingPage = () => {
 
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Timeless />
      <NewArrival />
      <Style />
      <Classes />
      <Footer />
      {/* <m.div className="cursor bg-[#6A5F11] h-[32px] w-[32px] rounded-[50%] fixed top-0 left-0 pointer-events-none"
        variants ={variants}
        animate={cursorVariant}
        transition={{ duration: 0, ease: "linear", delay: 0 }}
      /> */}
    </div>
  );
};

export default LandingPage;
