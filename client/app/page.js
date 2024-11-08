"use client";
import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../stateSlices/authSlice.js";
import useAuth from "./UseAuth.js";

export default function Home() {
  useAuth();
  return (
    <div>
      <LandingPage />
    </div>
  );
}
