'use client'
import  React, {useState, useEffect} from 'react';
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeartEmpty, IoIosHeart, IoIosCart } from "react-icons/io";
import Link from 'next/link';
import MenuSheet from './Sidemenu';
import { RiMenu3Line } from "react-icons/ri";
import { motion as m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import useAuth from '../UseAuth';
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import {defaultProfile} from "../DradiantImages";
import { useRouter } from 'next/navigation';
import { IoMdClose } from "react-icons/io";
import {authActions} from "@/store";
import { FallingLines } from "react-loader-spinner";


const Modal = React.memo(function Modal({ type, closeModal}) {

  const dispatch = useDispatch(); 
  const user = useSelector((state) => state.auth?.user?.user || {});
    const {loading, error} = useSelector(state=>state.auth);
    const router = useRouter();

  const logoutHandler = () => {
   dispatch(authActions.logout());
   closeModal();
   router.push("/pages/signin");
  };



  const modalContent = {
    delete: <div className="logout flex flex-col items-center gap-[90px] self-center">
      <div className="texts flex flex-col items-center gap-[40px] w-[405px] text-center">
      <p className="font-bold text-[#6A5F11] text-[48px]">We will miss you! 🥰</p>
      <p className="text-[#7B7768] text-[24px]">You are about to logout. Are you sure this is what you want ?</p>
      </div>
      <div className="buttons flex justify-between w-[405px]">
        <m.button 
        onClick={closeModal}
        className='text-[#6A5F11] text-[24px] hover:underline p-[10px]'>Cancel</m.button>
        <m.button 
       whileHover={{ backgroundColor: "#FFF9EB", color: "#6A5F11", border: "1px solid #6A5F11" }}
       whileTap={{ scale: 0.95 }}
       transition={{ type: "spring", stiffness: 200, damping: 10 }}
       onClick={logoutHandler}
        className='bg-[#6A5F11] text-white text-[24px] p-[10px] rounded-[10px]'>Confirm logout</m.button>
      </div>
    </div>
  };

  return (
    <m.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
     {type!=="loading" ? ( <m.div
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
      </m.div>): <FallingLines
              color="#fff"
              width="33"
              visible={true}
              className="hidden"
            />}
    </m.div>
  );
});


export  const Dropdown = React.memo(function Dropdown({isDroppeddown,setIsDroppeddown, setClicked}){
  const user = useSelector((state) => state.auth?.user?.user || {});
  return (
    <AnimatePresence>
    <m.div mode="wait"
    initial={{height: 0, opacity: 0}}
    animate={{height: isDroppeddown ? "auto" : 0, opacity: isDroppeddown ? 1 : 0,
    }}
    exit={{height: 0, opacity: 0}}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="dropdown absolute right-[16px] flex flex-col gap-[10px] top-[4rem] bg-[#F9F3E5] rounded-[10px] border-[1px] border-[#CCC6B5] overflow-hidden p-[32px] shadow-md z-40 ">
      <Link href="/pages/profile" onClick={()=>setIsDroppeddown(false)}> 
        <m.p className="text-[16px] hover:text-[#7B7768] hover:underline hover:text-[#2A4E3A]">Profile</m.p>
      </Link>
      <Link href="/" onClick={()=>setIsDroppeddown(false)}>
        <m.p className="text-[16px] hover:text-[#7B7768] hover:underline hover:text-[#2A4E3A]">Home</m.p>
      </Link>
     { user.role=="admin" && <Link href="/pages/admin" onClick={()=>setIsDroppeddown(false)}>
        <m.p className="text-[16px] hover:text-[#7B7768] hover:underline hover:text-[#2A4E3A]">Dashboard</m.p>
      </Link>}
      <div onClick={()=>{setClicked(true); setIsDroppeddown(false)}}>
        <m.p className="text-[16px] hover:text-[#7B7768] hover:underline hover:text-[#2A4E3A]">Logout</m.p>
      </div>
    </m.div>
    </AnimatePresence>
  )
});




const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDroppeddown, setIsDroppeddown] = useState(false);
  const [clicked, setClicked] = useState(false);

  const currentPath = usePathname();
  const wishListItems = useSelector(state=>state.wishlist.items);
  const cartItems = useSelector(state=>state.cart.items);
  const {isAuthenticated, user} = useSelector(state=>state?.auth);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path)=>currentPath == path;
  

  const navLinks = [
    {
      name: "Shop",
      url: "/pages/shop",
      position: "left"
    },
    {
      name: "Classes",
      url: "https://bit.ly/ShopfromDradiant",
      position: "left"
    },
    {
      name: "About",
      url: "https://bit.ly/ShopfromDradiant",
      position: "left"
    },
    {
      name: "Search",
      url: "/pages/search",
      position: "right"
    },
    {
      name: "Cart",
      url: "/pages/cart",
      position: "right"
    },
    {
      name: "Wishlist",
      url: "/pages/wishlist",
      position: "right"
    },
    {
      name: "Sign In",
      url: "/pages/signin",
      position: "right"
    },
    {
      name: "Sign Up",
      url: "/pages/signup",
      position: "right"
    }
  ]

  const navBarVariant = {
    animate: {
      x: 0,
    },
    initial: {
      x: "100vw"
    }
  }

  const isWishList = (url)=>{
    return url == "/pages/wishlist"
  }

  const notificationButton = (url)=>{
      switch (url){
        case "/pages/wishlist" : return <div className={` bg-[#7B7768] rounded-full size-[22px] border-[1px] text-[#fff] items-center justify-center ${wishListItems.length===0 ? "hidden":"flex"} cursor-pointer absolute top-[-15px] right-[-15px] text-[16px]/[0] pt-[4px] align-middle`}>{wishListItems.length}</div>;
        case "/pages/cart": return <div className={` bg-[#7B7768] rounded-full size-[22px] border-[1px] text-[#fff] items-center justify-center ${cartItems.length===0 ? "hidden":"flex"} cursor-pointer absolute top-[-15px] right-[-15px] text-[16px]/[0] pt-[4px] align-middle`}>{cartItems.length}</div>;
        default: return;
      }
  }


  const LoggedInFeatures = ()=>{
    return (
      <div className='flex relative min-w-[210px] justify-end items-center gap-[14px] border-l-[1px] border-dashed border-[#CCC6B5] px-[10px] ml-[30px]'>
        <p className="greetings w-[100px] truncate">Hi, {`${user?.user?.firstName!==undefined ?user?.user?.firstName:"New" } ${user?.user?.lastName!==undefined?user?.user?.lastName:"Customer"}`}</p>
        <Image src={user?.user?.profileImage ||defaultProfile} alt="profile image" width="31" height="31" className="size-[31px] rounded-full object-cover border-[1px] border-[#1D1C13] cursor-pointer"/>
        <m.div animate={{rotate:isDroppeddown ? 180 : 0}} initial={{rotate:0}} exit={{rotate:0}}><FaAngleDown onClick={()=>setIsDroppeddown(!isDroppeddown)} className='cursor-pointer'/></m.div>
        <AnimatePresence>{isDroppeddown && <Dropdown isDroppeddown={isDroppeddown} setIsDroppeddown={setIsDroppeddown} setClicked={setClicked} />}</AnimatePresence>
      </div>
    )
  };

  const closeModal = () => setClicked(false);
  const {loading, error} = useSelector(state=>state.auth);
  


  return (
    <>
      {currentPath !== "/pages/signin" &&
        currentPath !== "/pages/signup" &&
        !currentPath.includes("/pages/admin") && (
          <div className="xl:px-[123px] px-[11px] lg:px-[50px] md:px-[50px] py-[24px] flex justify-between items-center border-b-[1px] w-[100%] border-[#7B7768]">
            <Link
              href="/pages/wishlist"
              className=" relative text-[24px] xl:hidden items-start"
            >
              <div
                className={` bg-[#7B7768] rounded-full size-[18px] border-[1px] text-[#fff] items-center justify-center ${
                  wishListItems.length === 0 ? "hidden" : "flex"
                } cursor-pointer absolute top-[-12px] right-[-12px] text-[13px]/[0] pt-[4px] align-middle`}
              >
                {wishListItems.length}
              </div>
              <IoIosHeart />
            </Link>
            <div className="left xl:flex gap-[32px] text-[16px] hidden xl:min-w-[40%]">
              {navLinks.map((link) =>
                link.position === "left" ? (
                  <Link key={link.name} href={link.url}>
                    <m.p
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1 }}
                      key={link.name}
                      className={`cursor-pointer hover:underline hover:text-[#2A4E3A] ${
                        isActive(link.url) ? " underline text-[#2A4E3A]" : ""
                      }`}
                    >
                      {link.name}
                    </m.p>
                  </Link>
                ) : null
              )}
            </div>
            <div className="flex items-center justify-center w-[20%]">
              <Link href="/">
                <p className="logo text-[22px] text-center cursor-pointer w-full">
                  DRADIANTBAGS
                </p>
              </Link>
            </div>
            <div className="text-[24px] flex items-center w-[86px] justify-between xl:hidden">
              <Link href="/pages/cart" className="relative">
                <div
                  className={` bg-[#7B7768] rounded-full size-[18px] border-[1px] text-[#fff] items-center justify-center ${
                    cartItems.length === 0 ? "hidden" : "flex"
                  } cursor-pointer absolute top-[-12px] right-[-12px] text-[13px]/[0] pt-[4px] align-middle`}
                >
                  {cartItems.length}
                </div>
                {<TiShoppingCart />}
              </Link>
              <RiMenu3Line className="size-[24px]" onClick={toggleMenu} />
              <AnimatePresence>
                {isMenuOpen && (
                  <MenuSheet closeMenu={toggleMenu} isOpen={isMenuOpen} />
                )}
              </AnimatePresence>
            </div>
            <div className="right xl:flex gap-[32px] xl:gap-[0px] xl:min-w-[40%] xl:justify-end p-0 xl:items-center hidden">
              {navLinks.map((link) =>
                link.position === "right" ? (
                  <Link key={link.name} href={link.url} className="relative">
                    {notificationButton(link.url)}
                    <m.p
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1 }}
                      key={link.name}
                      className={`cursor-pointer text-center w-full ${ link.url !== "/pages/signup" ?  "hover:underline hover:text-[#2A4E3A]" : null} ${
                        isActive(link.url) ? " underline text-[#2A4E3A]" : ""
                      } xl:mx-[16px] ${link.url == "/pages/signup" ? "bg-[#6A5F11] text-[#fff] rounded-[10px] p-[8px]" : ""} ${(isAuthenticated && link.url == "/pages/signin") | (isAuthenticated && link.url == "/pages/signup") && "hidden"}`}
                    >
                      {link.name}
                    </m.p>
                  </Link>
                ) : null
              )}
              {
                isAuthenticated && <LoggedInFeatures/>
              }
            </div>
          </div>
        )}
        <AnimatePresence mode="wait">
        {loading && <Modal type="loading" closeModal={closeModal} />}
        {clicked && <Modal type="delete" closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
}
export default Layout;
