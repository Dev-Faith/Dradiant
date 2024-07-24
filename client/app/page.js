'use client'
import Image from "next/image";
import Navbar from "./Assets/Navbar.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";


export default function Home() {
  
  return (
    <>
      <Navbar/>
      <LandingPage />
    </>
  );
}
