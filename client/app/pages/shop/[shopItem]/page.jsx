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

const pages = () => {
  const dispatch = useDispatch();
  const routeName = useParams().shopItem;
  const shopItems = useSelector((state) => state.products.recentShopItems);
  const wishlist = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.items);

  const product = shopItems.find((item) => item.name === routeName);
  const productQuantity = product.quantity;

  const totalPrice = (
    Number(product.price.replace(/,/g, "")) * product.quantity
  ).toLocaleString();

  const addToFavouriteHandler = () => {
    wishlist.some((item) => item.name == product.name)
      ? ""
      : dispatch(wishlistActions.addToWishlist(product));
  };
  const addToCartHandler = () => {
    cart.some((item) => item.name == product.name)
      ? ""
      : dispatch(cartActions.addToCart(product));
    console.log();
  };

  const incrementItemQuantityHandler = () => {
    dispatch(productsActions.incrementItemQuantity(product.name));
    dispatch(cartActions.incrementItemQuantity(product.name));
  };
  const decrementItemQuantityHandler = () => {
    dispatch(productsActions.decrementItemQuantity(product.name));
    dispatch(cartActions.decrementItemQuantity(product.name));
  };

  return (
    <div className=" pt-[200px] xl:pt-[88px] flex flex-col  justify-between min-h-screen">
      <div className="flex items-center justify-center gap-[42px] xl:gap-[156px] w-full">
        <button className="arrowBackward bg-[#CCC6B5] rounded-full flex items-center justify-center text-[18px] size-[33px] xl:size-[73px] xl:text-[43px] text-[#201C00] border-[1px] border-[#7B7768]">
          <IoIosArrowBack />
        </button>
        <Image
          src={product.image}
          width="283"
          height="276"
          alt={product.name}
          className="w-[173px] h-[168px] xl:w-[283px] xl:h-[276px] "
        />
        <button className="arrowForward bg-[#CCC6B5] rounded-full flex items-center justify-center text-[18px] size-[33px] xl:size-[73px] xl:text-[43px] text-[#201C00] border-[1px] border-[#7B7768]">
          <IoIosArrowForward />
        </button>
      </div>
      <div className="w-full h-full border-[1px] bg-[#E9E2D0] border-[#7B7768] rounded-t-[30px] px-[23px] self-end xl:px-[125px] py-[40px] mt-auto flex flex-col gap-[24px]">
        <div className="flex flex-col xl:gap-[80px]">
          <div className="topSection flex flex-col gap-[10px] xl:gap-[34px] ">
            <p className="text-[24px] xl:text-[40px]">
              {product.name.toUpperCase()}
            </p>
            <div className="flex items-end justify-between ">
              <p className="xl:w-[452px] w-[180px] text-[16px] md:text-[18px] xl:text-[28px]">
                {product.desc}
              </p>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-[2rem]">
                  <p className=" text-[16px] xl:text-[24px]">price:</p>{" "}
                  <p className=" text-[24px] xl:text-[36px] text-[#6A5F11] ">
                    ₦{product.price}
                  </p>
                </div>
                <div className="flex items-center gap-[2rem]">
                  <p className="text-[16px] xl:text-[24px]">total price:</p>{" "}
                  <p className="text-[24px] xl:text-[36px] text-[#6A5F11] ">
                    ₦{totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomSection flex justify-between items-end">
            <div className="bottom-left flex flex-col gap-[15px]">
              <p className="text-[16px] xl:text-[24px] text-[#201C00]">
                Quantity: {productQuantity} unit
                {productQuantity > 1 ? "s" : ""}
              </p>
              <div className="decreament-and-increament-buttons flex gap-[24px]">
                <button
                  onClick={decrementItemQuantityHandler}
                  className="minus size-[23px] xl:size-[30px] xl:text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"
                >
                  <FaMinus />
                </button>
                <button
                  onClick={incrementItemQuantityHandler}
                  className="plus size-[23px] xl:size-[30px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="bottom-right flex gap-[15px] xl:gap-[43px] items-center flex-col xl:flex-row">
              <button
                onClick={addToFavouriteHandler}
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
