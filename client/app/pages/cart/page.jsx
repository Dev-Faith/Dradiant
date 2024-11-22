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
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  emptyCart,
  decrementItemQuantity,
  incrementItemQuantity,
} from "../../../stateSlices/cartSlice";
import {
  addTowishList,
  removeFromwishList,
} from "../../../stateSlices/wishListSlice";
import Footer from "@/app/components/Footer";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cart = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const userId = useSelector((state) => state.auth.userId);

  const searchQuery = useSelector((state) => state.search.searchQuery);
  const shopItems = useSelector((state) => state.products.recentShopItems);

  const isLiked = (productId) =>
    wishlistItems.some((item) => item.productId._id === productId);

  const addToWishlistHandler = (productId) => {
    isLiked(productId)
      ? dispatch(removeFromwishList({ userId, productId }))
      : dispatch(addTowishList({ userId, productId }));
  };

  const incrementItemQuantityHandler = (productId) => {
    dispatch(incrementItemQuantity({ userId, productId }));
  };

  const decrementItemQuantityHandler = (productId) => {
    dispatch(decrementItemQuantity({ userId, productId }));
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart({ userId, productId }));
  };

  const emptyCartHandler = () => {
    dispatch(emptyCart(userId));
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      (item.productId?.price ? item.productId.price * item.quantity : 0),
    0
  );

  const filteredItems = cart.filter(
    (item) =>
      item.productId?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.productId?.desc?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className=" h-full pt-[56px] px-[11px] xl:px-[125px] flex flex-col gap-[32px] xl:gap-[64px]">
        <Searchbox />
        <m.div className="cartItems flex flex-col w-full">
          {filteredItems.length !== 0
            ? filteredItems.map((item) => (
                <div
                  className="flex items-center w-full border-b-[1px] border-[#7B7768] justify-between py-[16px]"
                  key={item.productId._id}
                >
                  <div className="flex gap-[12px] xl:gap-[60px] items-center">
                    <Image
                      src={item.productId.image}
                      alt={item.productId.name}
                      width="104"
                      height="101"
                      className="w-[75px] h-[72.84px] xl:w-[104px] xl:h-[101px]"
                    />
                    <div className="middle flex flex-col gap-[17px] xl:gap-[20px]">
                      <div className="top-middle flex gap-[10px] xl:gap-[30px] items-center">
                        <p className="name text-[20px] xl:text-[24px] text-[#6A5F11] truncate">
                          {item.productId.name.toUpperCase()}
                        </p>
                        <button
                          onClick={() =>
                            addToWishlistHandler(item.productId._id)
                          }
                          className="like relative bg-[#fff] rounded-full size-[18px] xl:size-[24px] border-[1px] border-[#7B7768] flex items-center justify-center cursor-pointer"
                        >
                          {isLiked(item.productId._id) ? (
                            <IoIosHeart className="size-[16px] text-[#7B7768]" />
                          ) : (
                            <IoIosHeartEmpty className="size-[16px] text-[#7B7768]" />
                          )}
                        </button>
                      </div>
                      <Link href={`shop/${item.productId._id}`}>
                        <p className="desc text-[16px] xl:text-[20px] w-[130px] xl:w-[390px] hover:underline hover:text-[#7B7768] line-clamp-3">
                          {item.productId.desc}
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="right flex flex-col gap-[15px] w-[80px]">
                    <div className="remove&class flex flex-col items-end gap-[20px]">
                      <button
                        onClick={() =>
                          removeFromCartHandler(item.productId._id)
                        }
                        className="remove text-[16px] underline text-[#426651]"
                      >
                        Remove
                      </button>
                      <p className="price text-[20px] xl:text-[28px] text-[#6A5F11]">
                        ₦
                        {(
                          item.productId.price * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div className="incrementals flex items-center justify-between">
                      <button
                        onClick={() =>
                          decrementItemQuantityHandler(item.productId._id)
                        }
                        className="minus size-[24px] xl:size-[24px] text-[18px] rounded-[5px] text-[#6A5F11] flex items-center justify-center"
                      >
                        <FaMinus />
                      </button>
                      <p className="text-[20px] xl:text-[24px]">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() =>
                          incrementItemQuantityHandler(item.productId._id)
                        }
                        className="plus size-[24px] xl:size-[24px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : "There's nothing in the cart!"}
        </m.div>
        <div className="clearItem&total self-end flex flex-col gap-[20px] xl:gap-[64px] items-end pb-[64px]">
          <div className="total flex items-center gap-[24px] text-[16px] xl:text-[36px] text-[#6A5F11]">
            <p className="label text-[20px] font-semibold xl:text-[28px]">Sum total:</p>
            <p className="total text-[20px] xl:text-[28px]">₦{totalPrice.toLocaleString()}</p>
          </div>
          <div className="checkout&empty flex items-center gap-[20px] xl:gap-[24px]">
            <button
              onClick={emptyCartHandler}
              className="empty text-[20px] xl:text-[24px] underline text-[#6A5F11]"
            >
              Empty Cart
            </button>
            <button className="checkout text-[20px] xl:text-[24px] bg-[#6A5F11] rounded-[8px] text-[#fff] xl:px-[20px] px-[8px] py-[4px] xl:py-[10px]">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
