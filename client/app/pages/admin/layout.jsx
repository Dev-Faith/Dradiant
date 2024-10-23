import React from "react";
import Sidemenu from "./sidemenu";
import Navbar from "./navbar";

const layout = ({ children }) => {
  return (
    <div className="flex items-center flex h-screen overflow-hidden">
      <Sidemenu />
      <div className="w-full h-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
