"use client"
import {useParams} from "next/navigation";
import {useSelector, useDispatch} from "react-redux";
import {cartActions, wishlistActions, productsActions} from "../../../../store/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";

const pages = ()=>{
    const dispatch = useDispatch();
    const routeName = useParams().shopItem;
    const shopItems = useSelector(state=>state.products.recentShopItems);
    const wishlist = useSelector(state=> state.wishlist.items);
    const cart = useSelector(state=>state.cart.items);

    const product = shopItems.find(item=>item.name===routeName);
    const productQuantity=product.quantity;

    const totalPrice = (Number(product.price.replace(/,/g, '')) * product.quantity).toLocaleString();
    
        const addToFavouriteHandler = ()=>{
           wishlist.some(item=>item.name==product.name)?"":dispatch(wishlistActions.addToWishlist(product));
        }
        const addToCartHandler = ()=>{
             cart.some(item=>item.name==product.name)?"":dispatch(cartActions.addToCart(product));
            console.log()
        }

        const incrementItemQuantityHandler = ()=>{
            dispatch(productsActions.incrementItemQuantity(product.name));
            dispatch(cartActions.incrementItemQuantity(product.name));
        }
        const decrementItemQuantityHandler = ()=>{
            dispatch(productsActions.decrementItemQuantity(product.name));
            dispatch(cartActions.decrementItemQuantity(product.name));
        }

    return(
        <div className="pt-[88px] flex flex-col  gap-[100px]">
            <div className="flex items-center justify-center gap-[156px]">
                <button className="arrowBackward bg-[#CCC6B5] size-[73px] rounded-full flex items-center justify-center text-[43px] text-[#201C00] border-[1px] border-[#7B7768]"><IoIosArrowBack/></button>
                <Image src={product.image} width='283' height="276" alt={product.name} />
                <button className="arrowForward bg-[#CCC6B5] size-[73px] rounded-full flex items-center justify-center text-[43px] text-[#201C00] border-[1px] border-[#7B7768]"><IoIosArrowForward/></button>
            </div>
            <div className="w-full h-full border-[1px] bg-[#E9E2D0] border-[#7B7768] rounded-t-[30px] px-[125px] py-[40px]">
              <div className="flex flex-col gap-[80px]">
                <div className="topSection flex flex-col gap-[34px]">
                    <p className="text-[40px]">{product.name.toUpperCase()}</p>
                    <div className="flex items-end justify-between">
                        <p className="w-[452px] text-[28px]">{product.desc}</p>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-[2rem]"><p className="text-[24px]">price:</p> <p className="text-[36px] text-[#6A5F11] ">₦{product.price}</p></div>
                            <div className="flex items-center gap-[2rem]"><p className="text-[24px]">total price:</p> <p className="text-[40px] text-[#6A5F11] ">₦{totalPrice}</p></div>
                        </div>
                    </div>
                </div>
                <div className="bottomSection flex justify-between items-end">
                    <div className="bottom-left flex flex-col gap-[15px]">
                      <p className="text-[24px] text-[#201C00]">Quantity: {productQuantity} unit{productQuantity>1?"s":""}</p>
                      <div className="decreament-and-increament-buttons flex gap-[24px]">
                       <button onClick={decrementItemQuantityHandler} className="minus size-[30px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"><FaMinus/></button>
                       <button onClick={incrementItemQuantityHandler} className="plus size-[30px] text-[16px] bg-[#6A5F11] rounded-[5px] text-[#fff] flex items-center justify-center"><FaPlus/></button>
                      </div>
                    </div>
                    <div className="bottom-right flex gap-[43px] items-center">
                        <button onClick={addToFavouriteHandler} className="underline text-[24px] text-[#201C00]">Add to favourite</button>
                        <button  onClick={addToCartHandler} className="bg-[#6A5F11] px-[20px] pt[10px] text-[24px]/[40px] text-[#fff] rounded-[10px]"><p>Add to Cart</p></button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default pages;