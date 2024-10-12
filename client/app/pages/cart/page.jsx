"use client";
import Searchbox from "../../components/searchbox";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  productsActions,
  wishlistActions,
  cartActions,
} from "../../../store/index";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const searchQuery = useSelector((state) => state.search.searchQuery);
  const shopItems = useSelector((state) => state.products.recentShopItems);

  const isLiked = (name) => wishlistItems.some((item) => item.name === name);
  const likeIcons = isLiked() ? (
    <IoIosHeart className="size-[24px] text-[#7B7768]" />
  ) : (
    <IoIosHeartEmpty className="size-[24px] text-[#7B7768]" />
  );

  const addToWishlistHandler = (name) => {
    isLiked(name)
      ? dispatch(wishlistActions.removeFromWishlist(name))
      : dispatch(
          wishlistActions.addToWishlist(cart.find((item) => item.name == name))
        );
  };

  const incrementItemQuantityHandler = (name) => {
    dispatch(productsActions.incrementItemQuantity(name));
    dispatch(cartActions.incrementItemQuantity(name));
  };
  const decrementItemQuantityHandler = (name) => {
    dispatch(productsActions.decrementItemQuantity(name));
    dispatch(cartActions.decrementItemQuantity(name));
  };

  const removeFromCartHandler = (name) => {
    dispatch(cartActions.removeFromCart(name));
  };

  const emptyCartHandler = ()=>{
    dispatch(cartActions.emptyCart())
  }

 const totalPrice =
   cart.length > 0
     ? cart.reduce(
         (total, item) =>
           total + Number(item.price.replace(/,/g, "")) * item.quantity,
         0
       )
     : 0;

  const filteredItems = cart.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" h-[100vh] py-[56px] px-[125px] flex flex-col gap-[64px]">
      <Searchbox />
      <div className="cartItems flex flex-col w-full">
        {filteredItems.length !== 0
          ? filteredItems.map((item) => {
              const likeIcons = isLiked(item.name) ? (
                <IoIosHeart className="size-[16px] text-[#7B7768]" />
              ) : (
                <IoIosHeartEmpty className="size-[16px] text-[#7B7768]" />
              );

              return (
                <div
                  className="flex items-center w-full border-b-[1px] border-[#7B7768] justify-between py-[16px]"
                  key={item.name}
                >
                  <div className="flex gap-[60px] items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width="104"
                      height="101"
                    />
                    <div className="middle flex flex-col gap-[20px]">
                      <div className="top-middle flex gap-[30px] items-center">
                        <p className="name text-[24px] text-[#6A5F11]">
                          {item.name.toUpperCase()}
                        </p>
                        <button
                          onClick={() => addToWishlistHandler(item.name)}
                          className="like relative bg-[#fff] rounded-full size-[24px] border-[1px] border-[#7B7768] flex items-center justify-center cursor-pointer"
                        >
                          {likeIcons}
                        </button>
                      </div>
                      <Link href={`shop/${item.name}`} className="">
                        <p className="desc text-[20px] w-[390px] hover:underline hover:text-[#7B7768]">
                          {item.desc}
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="right flex flex-col gap-[15px]">
                    <div className="remove&class flex flex-col items-end gap-[20px]">
                      <button
                        onClick={() => removeFromCartHandler(item.name)}
                        className="remove text-[16px] underline text-[#426651]"
                      >
                        Remove
                      </button>
                      <p className="price text-[28px] text-[#6A5F11]">
                        ₦
                        {(
                          Number(item.price.replace(/,/g, "")) * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div className="incrementals flex items-center justify-between">
                      <button
                        onClick={() => decrementItemQuantityHandler(item.name)}
                        className="minus size-[24px] text-[18px] rounded-[5px] text-[#6A5F11] flex items-center justify-center"
                      >
                        <FaMinus />
                      </button>
                      <p className="text-[24px]">{item.quantity}</p>
                      <button
                        onClick={() => incrementItemQuantityHandler(item.name)}
                        className="plus size-[24px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "There's nothing in the cart!"}
      </div>
      <div className="clearItem&total self-end flex flex-col gap-[64px] items-end pb-[64px]">
        <div className="total flex items-center gap-[24px] text-[36px] text-[#6A5F11]">
          <p className="label ">Sum total:</p>
          <p className="total "> ₦{totalPrice.toLocaleString()}</p>
        </div>
        <div className="checkout&empty flex  items-center gap-[24px]">
          <button
            onClick={emptyCartHandler}
            className="empty text-[24px]  underline text-[#6A5F11]"
          >
            Empty Cart
          </button>
          <button className="checkout text-[24px] bg-[#6A5F11] rounded-[10px] text-[#fff] px-[20px] py-[10px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;