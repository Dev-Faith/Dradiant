"use client"
import {useParams} from "next/navigation";
import {useSelector} from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image"

const pages = ()=>{
    const routeName = useParams().shopItem;
    const shopItems = useSelector(state=>state.products.recentShopItems);

    const product = shopItems.find(item=>item.name===routeName);
    return(
        <div className="pt-[88px] flex flex-col  gap-[100px]">
            <div className="flex items-center justify-center gap-[156px]">
                <button className="arrowBackward bg-[#CCC6B5] size-[73px] rounded-full flex items-center justify-center text-[43px] text-[#201C00]"><IoIosArrowBack/></button>
                <Image src={product.image} width='283' height="276" alt={product.name} />
                <button className="arrowForward bg-[#CCC6B5] size-[73px] rounded-full flex items-center justify-center text-[43px] text-[#201C00]"><IoIosArrowForward/></button>
            </div>
            <div className="w-full h-full border-[1px] bg-[#E9E2D0] border-[#7B7768] rounded-t-[30px] px-[125px] py-[40px]">
              <div className="flex flex-col gap-[80px]">
                <div className="topSection flex flex-col gap-[34px]">
                    <p className="text-[40px]">{product.name.toUpperCase()}</p>
                    <div className="flex items-end justify-between">
                        <p className="w-[452px] text-[28px]">{product.desc}</p>
                        <p className="text-[48px] text-[#6A5F11] ">₦{product.price}</p>
                    </div>
                </div>
                <div className="bottomSection flex justify-between items-end">
                    <div className="bottom-left flex flex-col gap-[15px]">
                      <p className="text-[24px] text-[#201C00]">Quantity: 1 unit</p>
                      <div className="decreament-and-increament-buttons flex gap-[24px]">
                       <button className="minus size-[30px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"><FaMinus/></button>
                       <button className="plus size-[30px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"><FaPlus/></button>
                      </div>
                    </div>
                    <div className="bottom-right flex gap-[43px] items-center">
                        <p className="underline text-[24px] text-[#201C00]">Add to favourite</p>
                        <button className="bg-[#6A5F11] px-[20px] pt[10px] text-[24px]/[40px] text-[#fff] rounded-[10px]"><p>Add to Cart</p></button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default pages;