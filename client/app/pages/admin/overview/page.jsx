"use client";
import React, { useState } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineSell, MdSort } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { RxCaretSort } from "react-icons/rx";
import { CiWarning } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Overview = () => {
  const [checkedItems, setCheckedItems] = useState({});

    const toggleCheck = (id) => {

        /*Note these for future usage*/
      
        // text-ellipsis: Adds an ellipsis (...) for overflowing text.
        //     whitespace-nowrap: Prevents text from wrapping to the next line.
    
                
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const tableHeaderList = [
    {
      title: "Bag ID",
    },
    {
      title: "Bag Name",
    },
    {
      title: "Category",
    },
    {
      title: "Description",
    },
    {
      title: "Time",
    },
    {
      title: "Amount Sold",
    },
    {
      title: "Amount Available",
    },
    {
      title: "Price",
    },
    {
      title: "Status",
    },
  ];

  const activityDetails = [
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
    {
      bagId: "#1895-67-fw",
      bagName: "CrochetBag",
      bagCategory: "Women's bag",
      bagDescription: "land of fury, tiger skin",
      time: "12th march, 2024",
      amountSold: "3",
      amountAvailable: "10",
      price: "12,000",
      Status: "Sold",
    },
  ];

  return (
    <div className="w-full p-[28px] h-full flex flex-col gap-[45px] overflow-hidden">
      <div className="middle flex items-center justfiy-between">
        <div className="left w-full flex items-center gap-[60px]">
          <div className="sales w-[200px] h-[100px] flex items-center justify-between">
            <div className="card size-[100px] flex items-center justify-center bg-[#EEE8DA] rounded-[32px]">
              <MdOutlineSell className="size-[51px]" />
            </div>
            <div className="texts flex flex-col justify-between h-[100px]">
              <p className="text-end text-[16px]">Total Sales</p>
              <p className="text-end text-[32px]">64</p>
            </div>
          </div>
          <div className="totalProducts w-[230px] h-[100px] flex items-center justify-between">
            <div className="card size-[100px] flex items-center justify-center bg-[#EEE8DA] rounded-[32px]">
              <AiOutlineProduct className="size-[51px]" />
            </div>
            <div className="texts flex flex-col justify-between h-[100px]">
              <p className="text-end text-[16px]">Total Products</p>
              <p className="text-end text-[32px]">120</p>
            </div>
          </div>
        </div>
        <div className="right flex items-center w-[439px] justify-between">
          <div className="warning flex items-center w-[300px] cursor-pointer hover:underline">
            <CiWarning className="size-[24px] text-[#BA1A1A]" />
            <p className="text-[16px] ">You got 5 pending uploads</p>
          </div>
          <div className="addBags flex items-center gap-[5px]">
            <div className="setting size-[60px] border-[1px] border-[#79747E] rounded-full flex items-center justify-center cursor-pointer">
              <GiSettingsKnobs className="size-[22px] " />
            </div>
            <button className="bg-[#6A5F11] h-[60px] min-w-[114px] rounded-[32px] px-[16px] py-[10px] text-[#fff] text-[14px]">
              Add Bags
            </button>
          </div>
        </div>
      </div>
      <div className="recentActivities flex flex-col gap-[10px] h-full">
        <div className="header flex items-center justify-between py-[10px] w-full">
          <div className="left flex items-center flex gap-[32px]">
            <p className="recent text-[20px] font-bold">Recent Activities</p>
            <div className="categories flex gap-[16px] items-center">
              <div className="all flex items-center gap-[4px] px-[8px] py-[4px] rounded-[16px] border-[1px] border-[#201A1D]">
                <div className="size-[10px] rounded-full bg-[#81533F]"></div>
                <p>All</p>
              </div>
              <p className="sold">Sold</p>
              <p className="available">Available</p>
              <p className="almostFinished">Almost finished</p>
              <p className="finished">Finished</p>
            </div>
          </div>
          <div className="right flex items-center gap-[20px]">
            <div className="cutomise flex items-center gap-[10px]">
              <MdSort className="size-[20px]" />
              <p>Customise</p>
            </div>
            <p className="count">1-10 of 40</p>
            <div className="arrows flex items-center">
              <FaChevronLeft />
              <FaChevronRight />
            </div>
          </div>
        </div>
        <div className="table-header flex items-center justify-between gap-[.2rem] w-full bg-[#EEE8DA] py-[10px] pl-[64px] pr-[32px] rounded-[64px]">
          {tableHeaderList.map((item) => (
            <div className="flex items-center min-w-[10.7%]">
              <p>{item.title}</p>
              <RxCaretSort />
            </div>
          ))}
        </div>
        <div className="activities w-full flex flex-col flex-grow h-full overflow-y-auto pb-[30px]">
          {activityDetails.map((item) => (
            <div className="activity text-[14px] flex items-center gap-[.5rem] justify-between px-[32px] py-[10px] w-full">
              <div className="id-checker flex items-center gap-[8px] min-w-[12.5%] overflow-hidden">
                {!checkedItems ? (
                  <MdOutlineCheckBoxOutlineBlank className="size-[24px] pointer-cursor" />
                ) : (
                  <IoIosCheckbox className="size-[24px] cursor-pointer" />
                )}
                <p>{item.bagId}</p>
              </div>
              <div className="bagName min-w-[10.4%] ">
                <p>{item.bagName}</p>
              </div>
              <div className="category min-w-[10.5%]">
                <p>{item.bagCategory}</p>
              </div>
              <div className="description min-w-[10.4%]">
                <p className="text-ellipsis">{item.bagDescription}</p>
              </div>
              <div className="time min-w-[10.4%] ">
                <p>{item.time}</p>
              </div>
              <div className="no. Sold min-w-[10.7%] ">
                <p>{item.amountSold}</p>
              </div>
              <div className="no. Available min-w-[10.2%]">
                <p>{item.amountAvailable}</p>
              </div>
              <div className="price min-w-[10.4%]">
                <p>₦{item.price}</p>
              </div>
              <div className="status-menu flex items-center min-w-[10.7%] justify-between">
                <div className="Status px-[16px] py-[8px] bg-[#BAE5B9] rounded-[8px]">
                  <p>{item.Status}</p>
                </div>
                <div className="menu text-[24px]">
                  <HiOutlineDotsVertical className="cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
