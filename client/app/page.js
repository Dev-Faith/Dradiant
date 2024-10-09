"use client";
import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <LandingPage />
    </>
  );
}
