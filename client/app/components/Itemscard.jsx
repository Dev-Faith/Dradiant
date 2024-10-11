"use client"
import Image from "next/image";
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";
import {motion as m } from "framer-motion";
import {useSelector, useDispatch} from "react-redux";
import {wishlistActions} from "../../store/index";
import Link from "next/link";


export default function Itemscard({name, price, image, desc, liked}){
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state=>state.wishlist.items)
  const currentItem = wishlistItems.filter(item=>item.name==name);

    const isLiked = wishlistItems.some(item=>item.name === name);
  

  const addToWishlistHandler = ()=>{
    isLiked ? (dispatch(wishlistActions.removeFromWishlist(name))) : dispatch(wishlistActions.addToWishlist({name, price, image, desc}));

  }

 

  // const icon = <IoIosHeartEmpty className="size-[39px] text-[#7B7768]"/>
  const icon = isLiked?<IoIosHeart className="size-[24px] text-[#7B7768]"/>:<IoIosHeartEmpty className="size-[24px] text-[#7B7768]"/>




    return (
        <m.div name={name} className="border-[1px] border-[#7B7768] rounded-[20px] min-w-[263px] max-w-[263px] h-[310px] flex flex-col items-center px-[17px] py-[16px] gap-[23px]"
             layout
        >
           <div className="image&Liked flex w-full justify-between">
             <Image src = {image} width="120" height="117" className="relative left-[50px] pointer-events-none"/>
             <div onClick={addToWishlistHandler} className="like relative  bg-[#fff] rounded-full size-[33px] border-[1px] border-[#7B7768] flex items-center justify-center cursor-pointer">{icon}</div>
           </div>
           <div className="flex flex-col gap-[18px]">
             <div className="desc&name flex flex-col gap-[10px]">
                 <p className="text-[24px] text-[#6A5F11]">{name.toUpperCase()}</p>
                 <Link href={`shop/${name}`}><p className="text-[16px]/[16px] text-[#1D1C13] hover:text-[#7B7768] hover:underline">{desc}</p></Link>
             </div>
             <div className="details&Price flex justify-between items-baseline">
                  <Link href={`shop/${name}`}><p className="underline text-[#426651] text-[16px]">Details</p></Link>
                 <p className="text-[24px] text-[#6A5F11]">₦{price}</p>
             </div>
           </div>
        </m.div>
    )
};