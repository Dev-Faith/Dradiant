"use client"
import Hero from "./components/Hero";
import Timeless from './components/Timeless';
import NewArrival from './components/NewArrival';
import Style from './components/Style';
import Classes from './components/Classes';
import Footer from '../Assets/Footer';
import { React, useState, useEffect } from "react";
import {motion as m }from "framer-motion";

const LandingPage = () => {

     const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  }); 

  const [cursorVariant, setCursorVariant] = useState("default");

useEffect(() => { 
  const mouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
 
  window.addEventListener("mousemove", mouseMove);

  return () => {
    window.removeEventListener("mousemove", mouseMove);
  }
}, []);

const variants = {
  default: {
    x: mousePosition.x+8,
    y: mousePosition.y+8,
  },
  text:{
    x: mousePosition.x-75,
    y: mousePosition.y-75,
    height: 150,
    width: 150,
    mixBlendMode: "difference",
    backgroundColor: "#FFF9EB",
    transition: {duration:.5, type: "spring", delay: 0 }
  }
}


  return (
    <div className="overflow-hidden">
          <Hero setCursorVariant={setCursorVariant}/>
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
          <m.div className="cursor h-[32px] w-[32px] rounded-[50%] fixed top-0 left-0 pointer-events-none  items-center justify-center text-[60px] hidden xl:flex"
        variants ={variants}
        animate={cursorVariant}
        transition={{ duration:0, delay: 0 }}
      >👜</m.div>
    </div>
  )
}

export default LandingPage;
