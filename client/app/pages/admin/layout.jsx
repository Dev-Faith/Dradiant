// "use client"
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Sidemenu from './Sidemenu';
// import Navbar from './Navbar';
// import {authActions} from "../../../store";
// import {useSelector, useDispatch} from "react-redux";

// const Layout = ({ children}) => {
//   const router = useRouter();
//   const user = useSelector((state) => state.auth);

//   React.useEffect(() => {
//     console.log(user);
//     if (!user) {
//       router.push('/pages/signin');
//     }
//   }, [router, user]);

//   return (
//     <div className="flex items-center flex h-screen overflow-hidden">
//       <Sidemenu />
//       <div className="w-full h-full flex flex-col">
//         <Navbar />
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;
"use client";
import React from 'react'
import UseAuth from '@/app/UseAuth';
import {useSelector} from 'react-redux';
import Sidemenu from './sidemenu';
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { defaultProfile } from "../../DradiantImages";
// import Navbar from './navbar';


const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
console.log(formattedDate);  // "May 29, 2024"


const layout = ({children}) => {
  UseAuth();
  const user = useSelector((state) => state.auth);
  console.log(user.user?.user?.firstName);
  return (
    <div className="flex items-center flex h-screen overflow-hidden">
    <Sidemenu />
    <div className="w-full h-full flex flex-col">
    <div className="w-full p-[28px] flex flex-col gap-[45px] h-screen overflow-hidden min-h-[130px] max-h-[130px]">
      <div className="top  flex items-center justify-between w-full">
        <p className="logo text-[57px]">{`Welcome ${user.user?.user?.firstName}!`}</p>
        <div className="top-middle flex items-center gap-[59px]">
          <div className="separator bg-black w-[24px] h-[2px] "></div>
          <p className="time">{`Today - ${formattedDate}`}</p>
        </div>
        <div className="profiles flex items-center min-w-[420px] justify-between">
          <div className="search size-[71px] rounded-full flex items-center justify-center border-[1px] border-black cursor-pointer">
            <CiSearch className="size-[38px]" />
          </div>
          <div className="notification size-[71px] rounded-full flex items-center justify-center border-[1px] border-black cursor-pointer">
            <IoIosNotificationsOutline className="size-[38px] " />
          </div>
          <div className="profile min-w-[258px] h-[71px] flex items-center justify-between bg-[#EEE8DA] rounded-[50px] pr-[16px]">
            <Image
              src={user.user?.user?.profileImage || defaultProfile}
              alt="profile image"
              width="71"
              height="71"
              className="w-[71px] h-[71px] object-cover rounded-full object-fit"
            />
            <div className="texts ">
              <p className="name text-[16px]">{`${user.user?.user?.firstName} ${user.user?.user?.lastName}`}</p>
              <p className="role text-[12px] text-[#81737A]">Executive</p>
            </div>
            <FaChevronDown className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
      {children}
    </div>
  </div>
  )
}

export default layout;