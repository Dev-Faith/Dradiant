import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { authActions } from "../store/index";
import { fetchCart } from "../stateSlices/cartSlice";
import {fetchwishList} from "../stateSlices/wishListSlice";

export default function UseAuth() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.userId);

  // First useEffect: Validate token and set user state
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          dispatch(authActions.setUser({ user: decodedToken, role: decodedToken.role }));
        } catch (error) {
          console.error("Invalid token:", error);
          // dispatch(authActions.logout());
        }
      }
    }
  }, []); // Empty dependency array - runs only once

  // Second useEffect: Fetch cart when `userId` is set
  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
      dispatch(fetchwishList(userId));
      
    }
  }, [userId]); // Run only when `userId` changes
}
