"use client"
import Searchbox from "../../components/searchbox";
import Itemscard from "../../components/Itemscard";
import { IoIosArrowDown, IoIosArrowForward,IoIosHeartEmpty,IoIosHeart, IoIosCart } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {shopcroche} from "../../DradiantImages";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {productsActions, wishlistActions, cartActions} from "../../../store/index";
import {motion} from "framer-motion";
import Image from "next/image";


const page = ()=>{
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart.items);
  const wishlistItems = useSelector(state=>state.wishlist.items)

   const searchQuery= useSelector(state=>state.search.searchQuery);
   const shopItems = useSelector(state=>state.products.recentShopItems)
   
   const isLiked = (name)=> wishlistItems.some(item=>item.name === name);
   const likeIcons = isLiked ? <IoIosHeart className="size-[24px] text-[#7B7768]"/>:<IoIosHeartEmpty className="size-[24px] text-[#7B7768]"/>;

   const addToWishlistHandler = (name)=>{
    isLiked(name) ? (dispatch(wishlistActions.removeFromWishlist(name))) : dispatch(wishlistActions.addToWishlist(cart.find(item=>item.name==name)));
  }

   const incrementItemQuantityHandler = (name)=>{
            dispatch(productsActions.incrementItemQuantity(name));
            dispatch(cartActions.incrementItemQuantity(name));
        }
        const decrementItemQuantityHandler = (name)=>{
            dispatch(productsActions.decrementItemQuantity(name));
            dispatch(cartActions.decrementItemQuantity(name));
        }
     
        const removeFromCartHandler = (name)=>{
            dispatch(cartActions.removeFromCart(name))
        }
  
  const filteredItems = cart.filter(item =>  
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
      <div className=" h-[100vh] py-[56px] px-[125px] flex flex-col">
        <Searchbox/>
        <div className="cartItems flex flex-col w-full">
            {
                filteredItems.map(item=><div className="flex items-center w-full border-b-[1px] border-[#7B7768] justify-between py-[34px]">
                   <div className="flex gap-[60px] items-center">
                     <Image src={item.image} alt={item.name} width="204" height="198"/>
                     <div className="middle flex flex-col gap-[49px]">
                        <div className="top-middle flex gap-[30px] items-center">
                            <p className="name text-[36px]">{item.name.toUpperCase()}</p>
                            <div onClick={()=>addToWishlistHandler(item.name)} className="like relative  bg-[#fff] rounded-full size-[33px] border-[1px] border-[#7B7768] flex items-center justify-center cursor-pointer">{likeIcons}</div>
                        </div>
                        <p className="desc">{item.desc}</p>
                     </div>
                   </div>
                    <div className="right flex flex-col gap-[30px]">
                         <div className="remove&class flex flex-col gap-[20px]">
                            <button onClick={()=>removeFromCartHandler(item.name)} className="remove">Remove</button>
                            <p className="price text-[48px] text-[#6A5F11]">₦{(Number(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}</p>
                         </div>
                         <div className="incrementals flex justify-between">
                             <button onClick={()=>decrementItemQuantityHandler(item.name)} className="minus size-[30px] text-[16px] rounded-[5px] text-[#6A5F11] flex items-center justify-center"><FaMinus/></button>
                             <p>{item.quantity}</p>
                             <button onClick={()=>incrementItemQuantityHandler(item.name)} className="plus size-[30px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"><FaPlus/></button>
                         </div>
                    </div>
                </div>)
            }
        </div>
      </div>
    );
};

export default page;