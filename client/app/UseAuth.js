import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { authActions } from "../store";
import { fetchCart } from "../stateSlices/cartSlice";
import { fetchwishList } from "../stateSlices/wishListSlice";
import { useRouter } from "next/navigation";
import { getProducts } from "@/stateSlices/productSlice";
import { fetchUser } from "@/stateSlices/authSlice";

export default function UseAuth() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { recentShopItems } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Fetch products only if they're not already in the store
  useEffect(() => {
    if (recentShopItems.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, recentShopItems.length]);

  // First useEffect: Validate token and set user state
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken._doc._id);
        dispatch(authActions.setUserId(decodedToken._doc._id));
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [dispatch, token]);

  // Second useEffect: Fetch cart and wishlist only if items are not already in the store
  useEffect(() => {
   if(token){
    const decodedToken = jwtDecode(token);
    dispatch(fetchUser(decodedToken._doc._id));
   }
    if (userId) {
     try {
      if (cartItems.length === 0) dispatch(fetchCart(decodedToken._doc._id));
      if (wishlistItems.length === 0) dispatch(fetchwishList(decodedToken._doc._id));
     } catch (error) {
      console.error("Invalid token:", error);
     }
    }
  }, [dispatch, userId, cartItems.length, wishlistItems.length]);
}
