"use client";
import Image from "next/image";
import { IoIosHeartEmpty, IoIosHeart, IoIosCart } from "react-icons/io";
import { BsCartPlusFill, BsCartPlus } from "react-icons/bs";
import { motion as m } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { wishlistActions, cartActions } from "../../store/index";
import Link from "next/link";
import {
  fetchCart,
  addToCart,
  removeFromCart,
} from "../../stateSlices/cartSlice";
import {
  fetchwishList,
  addTowishList,
  removeFromwishList,
} from "../../stateSlices/wishListSlice";

export default function Itemscard({ name, price, image, desc, productId }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  // const currentItem = !wishlistActions ? null : wishlistItems.filter(item=>item.name==name);
  const cart = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.userId);
  const isLiked = wishlistItems.some(
    (item) => item.productId?._id == productId
  );
  const isAddedToCart = cart.some((item) => item.productId?._id == productId);

  const addToWishlistHandler = () => {
    isLiked
      ? dispatch(removeFromwishList({ userId, productId }))
      : dispatch(addTowishList({ userId, productId }));
  };

  const addToCartHandler = () => {
    isAddedToCart
      ? dispatch(removeFromCart({ userId, productId }))
      : dispatch(addToCart({ userId, productId }));
  };

  // const icon = <IoIosHeartEmpty className="size-[39px] text-[#7B7768]"/>
  const likeIcons = isLiked ? (
    <IoIosHeart className="size-[16px] md:size-[24px]   text-[#7B7768]" />
  ) : (
    <IoIosHeartEmpty className="size-[16px] md:size-[24px] text-[#7B7768]" />
  );
  const cartIcons = isAddedToCart ? (
    <BsCartPlusFill className="size-[16px] md:size-[24px] text-[#7B7768]" />
  ) : (
    <BsCartPlus className="size-[16px] md:size-[24px] text-[#7B7768]" />
  );

  function formatNumberWithIntl(number, decimalPlaces = 2) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
    return formatter.format(number);
  }


  return (
    <m.div
      name={name}
      className=" bg-[#F3EDE0] border-[1px] border-[#7B7768] rounded-[20px] min-w-[150px] sm:min-w-[169px] md:min-w-[200px] md:max-w-[200px] lg:min-w-[263px] lg:max-w-[263px] sm:max-w-[169px]  h-[196px] md:h-[280px] lg:h-[310px] flex flex-col items-center px-[14px] md:px-[17px] py-[18px] md:py-[16px] gap-[11px] md:gap-[23px]"
      layout
    >
      <div className="image&Liked flex w-full justify-between">
        <div
          onClick={addToCartHandler}
          className="like relative  bg-[#fff] rounded-full size-[24px] md:size-[33px] border-[1px] border-[#7B7768] flex items-center justify-center cursor-pointer"
        >
          {cartIcons}
        </div>
        <Image
          src={image}
          alt={name}
          width="120"
          height="117"
          className=" w-[75px] h-[73px] md:w-[100px]  md:h-[98px] lg:w-[120px] lg:h-[117px] pointer-events-none"
        />
        <div
          onClick={addToWishlistHandler}
          className="like relative  bg-[#fff] rounded-full size-[24px] md:size-[33px] border-[1px] border-[#7B7768] flex items-center justify-center cursor-pointer"
        >
          {likeIcons}
        </div>
      </div>
      <div className="flex flex-col gap-[2px] md:gap-[18px] w-full h-full justify-between">
        <div className="desc&name flex flex-col gap-[2px] md:gap-[10px]">
          <p className=" text-[16px] md:text-[18px] lg:text-[24px] text-[#6A5F11]">
            {name.toUpperCase()}
          </p>
          <Link href={`shop/${productId}`}>
            <p className=" text-[8px] sm:text-[10px]/[13px] md:text-[13px]/[16px] lg:text-[16px]/[16px] text-[#1D1C13] hover:text-[#7B7768] hover:underline line-clamp-3">
              {desc}
            </p>
          </Link>
        </div>
        <div className="details&Price flex justify-between items-baseline">
          <Link href={`shop/${productId}`}>
            <p className="underline text-[#426651] text-[12px] md:text-[16px]">
              Details
            </p>
          </Link>
          <p className=" text-[16px] md:text-[24px] text-[#6A5F11]">
            ₦{formatNumberWithIntl(price)}
          </p>
        </div>
      </div>
    </m.div>
  );
}
