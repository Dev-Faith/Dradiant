"use client"
import Image from "next/image";
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";
import {motion as m } from "framer-motion";
import {useSelector, useDispatch} from "react-redux";
import {wishlistActions} from "../../store/index"


export default function Itemscard({name, price, image, desc, liked}){
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state=>state.wishlist.items)
  const currentItem = wishlistItems.filter(item=>item.name==name);
  

  const addToWishlistHandler = ()=>{
    liked ? (dispatch(wishlistActions.removeFromWishlist(name))) : dispatch(wishlistActions.addToWishlist({name, price, image, desc, liked:true}));
  }

 

  // const icon = <IoIosHeartEmpty className="size-[39px] text-[#7B7768]"/>
  const icon = liked?<IoIosHeart className="size-[39px] text-[#7B7768]"/>:<IoIosHeartEmpty className="size-[39px] text-[#7B7768]"/>




    return (
        <m.div name={name} className="border-[1px] border-[#7B7768] rounded-[20px] min-w-[472px] max-w-[472px] h-[566px] flex flex-col items-center px-[17px] py-[24px] gap-[51px]"
             layout
        >
           <div className="image&Liked flex w-full justify-between">
             <Image src = {image} width="267" height="250" className="relative left-[76px] pointer-events-none"/>
             <div onClick={addToWishlistHandler} className="like relative  bg-[#fff] rounded-full size-[55px] border-[1px] border-[#7B7768] flex items-center justify-center cursor-pointer">{icon}</div>
           </div>
           <div className="flex flex-col gap-[25px]">
             <div className="desc&name flex flex-col gap-[13px]">
                 <p className="text-[32px] text-[#6A5F11]">{name.toUpperCase()}</p>
                 <p className="text-[28px]/[36px] text-[#1D1C13]">{desc}</p>
             </div>
             <div className="details&Price flex justify-between items-baseline">
                 <p className="underline text-[#426651] text-[32px]">Details</p>
                 <p className="text-[48px] text-[#6A5F11]">₦{price}</p>
             </div>
           </div>
        </m.div>
    )
};