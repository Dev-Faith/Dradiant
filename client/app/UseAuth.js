import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { authActions } from "../store";
import { fetchCart } from "../stateSlices/cartSlice";
import { fetchwishList } from "../stateSlices/wishListSlice";
import { useRouter } from "next/navigation";
import { getProducts } from "@/stateSlices/productSlice";

export default function UseAuth() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.userId);
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
        dispatch(authActions.setUser({ user: decodedToken, role: decodedToken.role }));
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [dispatch, token]);

  // Second useEffect: Fetch cart and wishlist only if items are not already in the store
  useEffect(() => {
    if (userId) {
      if (cartItems.length === 0) dispatch(fetchCart(userId));
      if (wishlistItems.length === 0) dispatch(fetchwishList(userId));
    }
  }, [dispatch, userId, cartItems.length, wishlistItems.length]);
}
