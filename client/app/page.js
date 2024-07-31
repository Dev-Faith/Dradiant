'use client'
import Image from "next/image";
import Navbar from "./Assets/Navbar.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  
  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <LandingPage />
    </>
  );
}
