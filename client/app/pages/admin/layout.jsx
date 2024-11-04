'use client'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Sidemenu from "./sidemenu";
import Navbar from "./navbar";

const layout = ({ children }) => {
  const { role, user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user?.token || role !== "admin") {
      router.push("/pages/signin");
    }
  }, [user, role, router]);

  return (
    <div className="flex items-center flex h-screen overflow-hidden">
      <Sidemenu />
      <div className="w-full h-full flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
