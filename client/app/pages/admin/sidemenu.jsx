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
import { motion as m, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { authActions } from "../../../store";


const Modal = React.memo(function Modal({ type, closeModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user?.user || {});
  const { loading, error } = useSelector((state) => state.auth);
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    closeModal();
    router.push("/pages/signin");
  };

  const modalContent = {
    delete: (
      <div className="logout flex flex-col items-center gap-[90px] self-center">
        <div className="texts flex flex-col items-center gap-[40px] w-[405px] text-center">
          <p className="font-bold text-[#6A5F11] text-[48px]">
            We will miss you! 🥰
          </p>
          <p className="text-[#7B7768] text-[24px]">
            You are about to logout. Are you sure this is what you want ?
          </p>
        </div>
        <div className="buttons flex justify-between w-[405px]">
          <m.button
            onClick={closeModal}
            className="text-[#6A5F11] text-[24px] hover:underline p-[10px]"
          >
            Cancel
          </m.button>
          <m.button
            whileHover={{
              backgroundColor: "#FFF9EB",
              color: "#6A5F11",
              border: "1px solid #6A5F11",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            onClick={logoutHandler}
            className="bg-[#6A5F11] text-white text-[24px] p-[10px] rounded-[10px]"
          >
            Confirm logout
          </m.button>
        </div>
      </div>
    ),
  };

  return (
    <m.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {type !== "loading" ? (
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="bg-[#F9F3E5] shadow-lg p-6 w-[887px] max-w-full relative p-[45px] rounded-[10px]"
        >
          <IoMdClose
            className="absolute top-[20px] right-[20px] size-[30px] text-gray-500 hover:text-gray-800 cursor-pointer"
            onClick={closeModal}
          />
          <div>{modalContent[type]}</div>
        </m.div>
      ) : (
        <FallingLines
          color="#fff"
          width="33"
          visible={true}
          className="hidden"
        />
      )}
    </m.div>
  );
});

const Sidemenu = ({ setOpenSideMenu, openSideMenu }) => {
  const currentPath = usePathname();
  const [clicked, setClicked] = useState(false);
  const closeModal = () => setClicked(false);

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
      url: "#",
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
      url: "#",
    },
    {
      title: "Help",
      active: false,
      icon: <IoHelp className="size-[18px]" />,
      position: "bottom",
      url: "#",
    },
    {
      title: "Settings",
      active: false,
      icon: <IoSettingsOutline className="size-[18px]" />,
      position: "bottom",
      url: "#",
    },
    {
      title: "Log out",
      active: false,
      icon: <CgLogOut className="size-[18px]" />,
      position: "bottom",
      url: "/pages/profile",
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

  // className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"

  return (
    <div
      className={`bg-black bg-opacity-50 xl:w-[12.7%] hidden h-full full xl:flex flex-col items-center justify-between xl:relative absolute inset-0 z-10`}
    >
      <div
        className={`bg-[#EEE8DA] h-full w-[50%] xl:w-full xl:flex flex-col items-center justify-between p-[32px] xl:relative absolute inset-0 z-10`}
      >
        <div className="upper flex flex-col gap-[56px] w-full">
          <Link href="./" onClick={() => setOpenSideMenu(false)}>
            <p className="logo text-[24px] text-center">Dradiantbags</p>
          </Link>
          <div className="links flex flex-col gap-[10px]">
            {links.map(
              (link) =>
                link.position == "top" && (
                  <Link
                    href={link.url}
                    key={link.title}
                    onClick={() => setOpenSideMenu(false)}
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
                link.position == "bottom" && link.title !== "Log out" ? (
                  <Link
                    onClick={() => setOpenSideMenu(false)}
                    href={link.url}
                    key={link.title}
                    className={`overview flex items-center gap-[10px] text-[16px]/[0px] font-bold ${
                      link.active
                        ? "underline text-[#426651]"
                        : "text-[#1D1C13]"
                    } w-full px-[8px] py-[10px] rounded-[16px]`}
                  >
                    {link.icon}
                    <p className="">{link.title}</p>
                  </Link>
                ): link.title == "Log out" ? ( <div
                  onClick={() =>{ setOpenSideMenu(false); setClicked(true)}}
                  key={link.title}
                  className={`overview flex items-center gap-[10px] cursor-pointer text-[16px]/[0px] font-bold ${
                    link.active
                      ? "underline text-[#426651]"
                      : "text-[#1D1C13]"
                  } w-full px-[8px] py-[10px] rounded-[16px]`}
                >
                  {link.icon}
                  <p className="">{link.title}</p>
                </div>):null
            )}
          </div>
          <AnimatePresence mode="wait">
            {clicked && <Modal type="delete" closeModal={closeModal} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
