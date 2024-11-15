"use client";

import React from "react";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { RiUploadCloud2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";
import { IoHelp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Sidemenu = () => {
  const currentPath = usePathname();

  const [links, setLinks] = useState([
    {
      title: "Overview",
      active: true,
      icon: <CgMenuGridO className="size-[18px]" />,
      position: "top",
      url: "/pages/admin",
    },
    {
      title: "Upload",
      active: false,
      icon: <RiUploadCloud2Line className="size-[18px]" />,
      position: "top",
      url: "/pages/admin/upload",
    },
    {
      title: "Sales",
      active: false,
      icon: <GiReceiveMoney className="size-[18px]" />,
      position: "top",
      url: "/pages/admin/sales",
    },
    {
      title: "Profile",
      active: false,
      icon: <CgProfile className="size-[18px]" />,
      position: "top",
      url: "/pages/profile",
    },
    {
      title: "Home",
      active: false,
      icon: <IoHomeOutline className="size-[18px]" />,
      position: "top",
      url: "/",
    },
    {
      title: "Report",
      active: false,
      icon: <MdOutlineReportProblem className="size-[18px]" />,
      position: "bottom",
      url: "/pages/admin/report",
    },
    {
      title: "Help",
      active: false,
      icon: <IoHelp className="size-[18px]" />,
      position: "bottom",
      url: "/pages/admin/help",
    },
    {
      title: "Settings",
      active: false,
      icon: <IoSettingsOutline className="size-[18px]" />,
      position: "bottom",
      url: "/pages/admin/settings",
    },
    {
      title: "Log out",
      active: false,
      icon: <CgLogOut className="size-[18px]" />,
      position: "bottom",
      url: "/pages/admin/logout",
    },
  ]);

  useEffect(() => {
    setLinks(
      links.map((link) => ({
        ...link,
        active: link.url === currentPath,
      }))
    );
  }, [currentPath]);

  return (
    <div className="bg-[#EEE8DA] h-full w-[12.7%] flex flex-col items-center justify-between p-[32px]">
      <div className="upper flex flex-col gap-[56px] w-full">
        <Link href="./">
          <p className="logo text-[24px] text-center">Dradiantbags</p>
        </Link>
        <div className="links flex flex-col gap-[10px]">
          {links.map(
            (link) =>
              link.position == "top" && (
                <Link
                  href={link.url}
                  key={link.title}
                  className={`overview flex items-center gap-[10px] text-[16px]/[0px] font-bold ${
                    link.active
                      ? "bg-[#6A5F11] text-[#fff] justify-center"
                      : "text-[#1D1C13]"
                  } w-full px-[8px] py-[10px] rounded-[16px]`}
                >
                  {link.icon}
                  <p className="">{link.title}</p>
                </Link>
              )
          )}
        </div>
      </div>
      <div className="lower w-full">
        <div className="links flex flex-col gap-[10px] w-full">
          {links.map(
            (link) =>
              link.position == "bottom" && (
                <Link
                  href={link.url}
                  key={link.title}
                  className={`overview flex items-center gap-[10px] text-[16px]/[0px] font-bold ${
                    link.active ? "underline text-[#426651]" : "text-[#1D1C13]"
                  } w-full px-[8px] py-[10px] rounded-[16px]`}
                >
                  {link.icon}
                  <p className="">{link.title}</p>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
