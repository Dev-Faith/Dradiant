'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';
import { profile } from "../../DradiantImages";
import { RiEditLine } from "react-icons/ri";
import { motion as m, AnimatePresence } from 'framer-motion';
import { IoMdClose } from "react-icons/io";

const page = () => {
  const [clicked, setClicked] = useState({
    overview: false,
    personal: true,
    address: false,
    delete: false,
  });
  const [profileDetails, setProfileDetails] = useState({
    personalInfo:[
      { title: "First Name", value: "Kunle" },
      { title: "Last Name", value: "Adekanye" },
      { title: "Email", value: "kunlex@gmail.com" },
      { title: "Bio", value: "tech Bro" },
      { title: "Phone Number", value: "08123456789" },
    ],
    addressInfo: [
      { title: "Lodge", value: "Barack's Lodge" },
      { title: "Campus", value: "Gidankwano" },
      { title: "City", value: "Minna" },
      { title: "State", value: "Niger" },
      { title: "Country", value: "Nigeria" },
    ]
  })


  const handleInputChange = (type, index, newValue) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [type]: prevDetails[type].map((item, i) =>
        i === index ? { ...item, value: newValue } : item
      ),
    }));
  };


  // Modal Component
  function Modal({ type }) {
    const closeModal = () => setClicked({ ...clicked, [type]: false });
    // if (!clicked[type]) return null;

    const modalContent = {
      overview: 
      <div className='overview flex flex-col relative gap-[2rem]'>
        <div className="image relative flex self-center">
          <Image src={profile} alt='profile image' height="416" width="277" className=" w-[416px] h-[277px] rounded-[10px] object-cover self-center cursor-pointer"/>
          <div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="overlay absolute  bg-black bg-opacity-50 w-[416px] h-[277px] rounded-[10px] self-center flex justify-center items-center " >
          <input type="file" id="image" className='hidden' />
          <label htmlFor="image" className="p-[10px] border-white text-white rounded-[10px] cursor-pointer border-[1px]">Choose image from gallery</label>
          </div>
        </div>
        <div className="buttons flex gap-[14px] items-center self-end">
          <button className="delete p-[10px] text-[#6A5F11] bg-[#F9F3E5] border-[1px] w-[70px] border-[#6A5F11] rounded-[10px]"> Delete</button>
          <button className="delete p-[10px] bg-[#6A5F11]  text-[#fff] w-[70px] rounded-[10px]" onClick={closeModal} > Done</button>
        </div>
      </div>,

      personal: 
      <div className="flex flex-col gap-[14px]">
        <form className="grid grid-cols-2 self-center gap-[30px] w-full">
          {profileDetails.personalInfo.map((item, index)=>(<div className='formItems flex flex-col gap-[8px]'><label className="font-bold">{item.title}:</label><input onChange={(e) =>
                    handleInputChange('personalInfo', index, e.target.value)
                  } className="bg-[#F9F3E5] px-[10px] py-[15px] border-[1px] border-[#6A5F11] rounded-[10px]" type="text" value={item.value}></input></div>))}
        </form>
        <button className="delete p-[10px] bg-[#6A5F11]  text-[#fff] w-[70px] rounded-[10px] self-end" onClick={closeModal} > Done</button>
      </div>,
      address: "Address Information",
      delete: "Are you sure you want to logout?",
    };

    return (
      <m.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
          <div><AnimatePresence>{modalContent[type]}</AnimatePresence></div>
        </m.div>
      </m.div>
    );
  }

  const personalInfo = [
    { title: "First Name", value: "Kunle" },
    { title: "Last Name", value: "Adekanye" },
    { title: "Email", value: "kunlex@gmail.com" },
    { title: "Bio", value: "tech Bro" },
    { title: "Phone Number", value: "08123456789" },
  ];

  const addressInfo = [
    { title: "Lodge", value: "Barack's Lodge" },
    { title: "Campus", value: "Gidankwano" },
    { title: "City", value: "Minna" },
    { title: "State", value: "Niger" },
    { title: "Country", value: "Nigeria" },
  ];

  return (
    <div className="px-[123px] py-[94px] flex flex-col gap-[35px]">
      <p className="title text-[36px] font-bold">My Profile</p>

      <div className="preview flex items-start w-full justify-between p-[40px] border-[1px] border-[#7B7768] rounded-[10px]">
        <div className="image&text flex gap-[28px] items-center">
          <Image src={profile} alt='profile image' height="88" width="88" className=" size-[88px] rounded-full object-cover"/>
          <div className="texts">
            <p className="name font-bold">Kunle Adekanye</p>
            <p className="address text-[#7B7768]">Room 16, Barack's Lodge</p>
          </div>
        </div>
        <m.button
          whileHover={{ backgroundColor: "#6A5F11", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={() => setClicked({ ...clicked, overview: true })}
          className="edit flex gap-[10px] items-center w-[80px] p-[10px] border-[1px] border-[#7B7768] rounded-[10px]"
        >
          <RiEditLine/>
          <p>Edit</p>
        </m.button>
      </div>

      {/* Personal Information Section */}
      <div className="personal flex items-start w-full justify-between p-[40px] border-[1px] border-[#7B7768] rounded-[10px]">
        <div className="left flex flex-col gap-[32px]">
          <p className="title text-[24px] font-bold">Personal Information</p>
          <div className="details grid grid-cols-2 gap-[32px] gap-x-[128px]">
            {profileDetails.personalInfo.map((info, index) => (
              <div key={index} className="detail">
                <p className="title font-bold">{info.title}</p>
                <p className="value text-[#7B7768]">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
        <m.button 
          whileHover={{ backgroundColor: "#6A5F11", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={() => setClicked({ ...clicked, personal: true })}
          className="edit flex gap-[10px] items-center w-[80px] p-[10px] border-[1px] border-[#7B7768] rounded-[10px]"
        >
          <RiEditLine/>
          <p>Edit</p>
        </m.button>
      </div>

      {/* Address Section */}
      <div className="address flex items-start w-full justify-between p-[40px] border-[1px] border-[#7B7768] rounded-[10px]">
        <div className="left flex flex-col gap-[32px]">
          <p className="title text-[24px] font-bold">Address</p>
          <div className="details grid grid-cols-2 gap-[32px] gap-x-[128px]">
            {profileDetails.addressInfo.map((info, index) => (
              <div key={index} className="detail">
                <p className="title font-bold">{info.title}</p>
                <p className="value text-[#7B7768]">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
        <m.button 
          whileHover={{ backgroundColor: "#6A5F11", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={() => setClicked({ ...clicked, address: true })}
          className="edit flex gap-[10px] items-center w-[80px] p-[10px] border-[1px] border-[#7B7768] rounded-[10px]"
        >
          <RiEditLine/>
          <p>Edit</p>
        </m.button>
      </div>

      {/* Logout Button */}
      <m.button 
        whileHover={{ backgroundColor: "#FFF9EB", color: "#BA1A1A", border: "1px solid #BA1A1A" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="self-end bg-[#BA1A1A] text-[#fff] p-[10px] rounded-[10px] text-[24px]"
        onClick={() => setClicked({ ...clicked, delete: true })}
      >
        Logout
      </m.button>

      {/* AnimatePresence for the modal */}
      <AnimatePresence mode="wait">
        {clicked.overview && <Modal type="overview" />}
        {clicked.personal && <Modal type="personal" />}
        {clicked.address && <Modal type="address" />}
        {clicked.delete && <Modal type="delete" />}
      </AnimatePresence>
    </div>
  );
}

export default page;
