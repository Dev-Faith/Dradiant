"use client";
import Itemscard from "../../components/Itemscard";
import Searchbox from "../../components/searchbox";
import { useSelector } from "react-redux";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import Footer from "@/app/components/Footer";
import { emptyWishlist } from "@/stateSlices/wishListSlice";
import { useDispatch } from "react-redux";

const pages = () => {
  const wishListItems = useSelector((state) => state.wishlist.items);
  const shopItems = useSelector((state) => state.products.recentShopItems);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  const filteredItems = wishListItems?.filter(
    (item) =>
      item.productId?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.productId?.desc?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (shopItems.length === 0 && wishListItems.length > 0) {
      dispatch(emptyWishlist(userId));
    }
  }, []);

  return (
    <div>
      <m.div
        layout
        className="pt-[56px] px-[11px] xl:px-[125px] flex flex-col gap-[64px]"
      >
        <p className=" text-[24px] xl:text-[64px] ">Your wishlist ⭐️</p>
        <Searchbox />
        {filteredItems.length === 0 ? (
          "There's no item that matches your search!"
        ) : (
          <div className="wishlist grid no-scrollbar grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-[10px] sm:gap-[30px] md:gap-[30px] lg:gap-[46px]">
            {filteredItems.map((item) => (
              <Itemscard
                key={item.productId.name}
                image={item.productId.image}
                name={item.productId.name}
                desc={item.productId.desc}
                price={item.productId.price}
                quantity={item.productId.quantity}
                productId={item.productId._id}
              />
            ))}
          </div>
        )}
      </m.div>
      <Footer />
    </div>
  );
};

export default pages;
