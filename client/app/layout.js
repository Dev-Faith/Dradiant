
import {  Bebas_Neue, Neucha } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CustomMouse from "./components/customMouse";
import Layout from "./storeLayout/layout";


const bebasNeue = Bebas_Neue({ subsets: ["latin"], variable: "--font-bebasNeue", weight:"400" });
const neucha = Neucha({ subsets: ["latin"], variable: "--font-neucha", weight:["400"] });

export const metadata = {
  title: "DradiantBags",
  description: "Heal the world with quality Styles!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${neucha.variable} cursor`}>
      <Layout>
        <Navbar />
        {children}
        <CustomMouse/>
      </Layout>
      </body>
    </html>
  );
}
