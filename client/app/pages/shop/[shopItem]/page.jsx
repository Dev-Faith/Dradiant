"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  cartActions,
  wishlistActions,
  productsActions,
} from "../../../../store/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  emptyCart,
  decrementItemQuantity,
  incrementItemQuantity,
} from "../../../../stateSlices/cartSlice";
import {
  fetchwishList,
  addTowishList,
  removeFromwishList,
} from "../../../../stateSlices/wishListSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const pages = () => {
  const dispatch = useDispatch();
  const routeId = useParams().shopItem;
  const shopItems = useSelector((state) => state.products.recentShopItems);
  const wishlist = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.items);

  const [product, setProduct] = useState();
  const [isinCart, setIsinCart] = useState(false);
  const [isinWishlist, setIsInWishlist] = useState(false);

  let producti = shopItems.find((item) => item._id === routeId);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isAddedToCart = cart.some((item) => item.productId?._id == routeId);
  const isAddedToWishlist = wishlist.some((item) => item.productId?._id == routeId);

  const totalPrice = product?.price ? product.price * 1 : 0;

  const itemQuantity = cart.find(item=>item.productId._id == routeId)?.quantity;

  // const addToFavouriteHandler = () => {
  //   wishlist.some((item) => item.name == product.name)
  //     ? ""
  //     : dispatch(wishlistActions.addToWishlist(product));
  // };
  const userId = useSelector((state) => state.auth.user?.user?._id);

  const addToWishlistHandler = () => {
    !isinWishlist?(dispatch(addTowishList({ userId, productId: product._id })), setIsInWishlist(isAddedToWishlist)) : toast.error("Already exists in Wishlist")
  };
  const addToCartHandler = () => {
    // cart.some((item) =>
    //   item.productId._id == product._id
    //     ? toast.error("item already in Cart")
    //     : dispatch(addToCart({ userId, productId: product._id }))
    // );

    !isinCart?(dispatch(addToCart({ userId, productId: product._id })), setIsinCart(isAddedToCart)) : toast.error("already exists in Cart")
  };

  const incrementItemQuantityHandler = () => {
    dispatch(incrementItemQuantity({ userId, productId:routeId }));
  };

  const decrementItemQuantityHandler = () => {
    dispatch(decrementItemQuantity({ userId, productId:routeId  }));
  };

  useEffect(() => {
    setIsinCart(isAddedToCart);
   setIsInWishlist(isAddedToWishlist);
    producti = shopItems.find((item) => item._id === routeId);
    setProduct(producti);
  }, [routeId, shopItems]);

  function formatNumberWithIntl(number, decimalPlaces = 2) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
    return formatter.format(number);
  }

  return (
    <div className=" pt-[200px] xl:pt-[88px] flex flex-col xl:gap-[100px] justify-between min-h-screen">
      <div className="flex items-center justify-center gap-[42px] xl:gap-[156px] w-full relative bottom-[100px] xl:bottom-[0px]">
        <button className="arrowBackward bg-[#CCC6B5] rounded-full flex items-center justify-center text-[18px] size-[33px] xl:size-[73px] xl:text-[43px] text-[#201C00] border-[1px] border-[#7B7768]">
          <IoIosArrowBack />
        </button>
        <Image
          src={product?.image}
          width="283"
          height="276"
          alt={product?.name}
          className="w-[173px] h-[168px] xl:w-[283px] xl:h-[276px] "
        />
        <button className="arrowForward bg-[#CCC6B5] rounded-full flex items-center justify-center text-[18px] size-[33px] xl:size-[73px] xl:text-[43px] text-[#201C00] border-[1px] border-[#7B7768]">
          <IoIosArrowForward />
        </button>
      </div>
      <div className="w-full h-full border-[1px] bg-[#E9E2D0] border-[#7B7768] rounded-t-[30px] px-[23px] self-end xl:px-[125px] py-[40px] mt-auto flex flex-col gap-[24px]">
        <div className="flex flex-col xl:gap-[80px] gap-[32px]">
          <div className="topSection flex flex-col gap-[10px] xl:gap-[34px] ">
            <p className="text-[24px] xl:text-[40px]">
              {product?.name.toUpperCase()}
            </p>
            <div className="xl:flex-row flex flex-col xl:items-end items-start w-full justify-between gap-[32px]">
              <p className="xl:w-[452px]  w-full text-[16px] md:text-[18px] xl:text-[28px]">
                {product?.desc}
              </p>
              <div className="flex flex-col xl:items-end">
                <div className="flex items-center gap-[2rem]">
                  <p className=" text-[16px] xl:text-[24px] font-semibold">price:</p>{" "}
                  <p className=" text-[24px] xl:text-[36px] text-[#6A5F11] ">
                    ₦{formatNumberWithIntl(product?.price)}
                  </p>
                </div>
                <div className="flex items-center gap-[2rem]">
                  <p className="text-[16px] xl:text-[24px] font-semibold">total price:</p>{" "}
                  <p className="text-[24px] xl:text-[36px] text-[#6A5F11] ">
                    ₦{formatNumberWithIntl(totalPrice)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomSection flex xl:flex-row flex-col gap-[32px] justify-between xl:items-end">
            <div className="bottom-left flex flex-col gap-[15px]">
              <p className="text-[16px] xl:text-[24px] text-[#201C00]">
                <span className="font-semibold">Quantity:</span> {itemQuantity > 0 ? itemQuantity : 0} unit
                {itemQuantity > 1 ? "s" : ""} in Cart
              </p>
              <div className="decreament-and-increament-buttons flex gap-[24px]">
                <button
                  onClick={decrementItemQuantityHandler}
                  className="minus size-[30px] xl:size-[30px] xl:text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"
                >
                  <FaMinus />
                </button>
                <button
                  onClick={incrementItemQuantityHandler}
                  className="plus size-[30px] xl:size-[30px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="bottom-right flex xl:gap-[15px] xl:gap-[43px] xl:w-[400px] w-full justify-between items-center flex-row">
              <button
                onClick={addToWishlistHandler}
                className="underline text-[16px] xl:text-[24px] text-[#201C00]"
              >
                Add to favourite
              </button>
              <button
                onClick={addToCartHandler}
                className="bg-[#6A5F11] px-[8px] xl:px-[20px] pt[10px] text-[16px] text-[24px]/[40px] text-[#fff] rounded-[10px]"
              >
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pages;
