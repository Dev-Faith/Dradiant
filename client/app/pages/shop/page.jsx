"use client";
import Searchbox from "../../components/searchbox";
import Itemscard from "../../components/Itemscard";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { shopcroche } from "../../DradiantImages";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getProducts } from "@/stateSlices/productSlice";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "@/stateSlices/authSlice";

const page = () => {
  const [toggle, setToggle] = useState({
    unisex: false,
    women: false,
    men: false,
    all: true,
  });

  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.searchQuery);
  const { recentShopItems, loading, error } = useSelector(
    (state) => state.products
  );

  // console.log(recentShopItems);

  const handleToggle = (category) => {
    if (category == "unisex") {
      setToggle({ ...toggle, unisex: !toggle.unisex });
    } else if (category == "women") {
      setToggle({ ...toggle, women: !toggle.women });
    } else if (category == "men") {
      setToggle({ ...toggle, men: !toggle.men });
    } else {
      setToggle({ ...toggle, all: !toggle.all });
    }
  };

  const filteredItems = recentShopItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className=" h-[100vh] pt-[56px] px-[13px] md:px-[50px] lg:px-[50px] xl:px-[125px] flex flex-col gap-[46px]">
      <div className="flex flex-col gap-[36px]">
        <p className=" text-[24px] md:text-[32px] lg:text-[64px] ">
          Buy from the Best Collections! 👜{" "}
        </p>
        <Searchbox />
      </div>
      <div className="shopItemsGroups flex flex-col gap-[114px]">
        {loading ? (
          "Loading..."
        ) : filteredItems.length === 0 ? (
          "There's no item that matches your search!"
        ) : (
          <div className="flex flex-col gap-[50px]">
            <div className="recent flex flex-col gap-[28px]">
              <div className="flex items-center gap-[15px] text-[16px] cursor-pointer">
                <p className="font-bold">Unisex bags</p>
                {toggle.unisex == false ? (
                  <IoIosArrowForward
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("unisex")}
                  />
                ) : (
                  <IoIosArrowDown
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("unisex")}
                  />
                )}
              </div>
              <div
                className={`items gap-[10px] no-scrollbar sm:gap-[30px] md:gap-[30px] lg:gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${
                  toggle.unisex == false
                    ? "flex"
                    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
                }`}
              >
                {filteredItems.map(
                  (item) =>
                    item.category == "Unisex bags" && (
                      <Itemscard
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        quantity={item.quantity}
                        productId={item._id}
                      />
                    )
                )}
              </div>
            </div>
            <div className="women'sbag flex flex-col gap-[28px]">
              <div className="flex items-center gap-[15px] text-[16px]">
                <p className="font-bold">Women's bags</p>
                {toggle.women == false ? (
                  <IoIosArrowForward
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("women")}
                  />
                ) : (
                  <IoIosArrowDown
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("women")}
                  />
                )}
              </div>
              <div
                className={`items gap-[10px] no-scrollbar sm:gap-[30px] md:gap-[30px] lg:gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${
                  toggle.women == false
                    ? "flex"
                    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
                }`}
              >
                {filteredItems.map(
                  (item) =>
                    item.category == "Women's bags" && (
                      <Itemscard
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        quantity={item.quantity}
                        productId={item._id}
                      />
                    )
                )}
              </div>
            </div>
            <div className="men'sbag flex flex-col gap-[28px]">
              <div className="flex items-center gap-[15px] text-[16px]">
                <p className="font-bold">Men's bags</p>
                {toggle.men == false ? (
                  <IoIosArrowForward
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("men")}
                  />
                ) : (
                  <IoIosArrowDown
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("men")}
                  />
                )}
              </div>
              <div
                className={`items gap-[10px] no-scrollbar sm:gap-[30px] md:gap-[30px] lg:gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${
                  toggle.men == false
                    ? "flex"
                    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
                }`}
              >
                {filteredItems.map(
                  (item) =>
                    item.category == "Men's bags" && (
                      <Itemscard
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        quantity={item.quantity}
                        productId={item._id}
                      />
                    )
                )}
              </div>
            </div>
            <div className="All flex flex-col gap-[28px] pb-[56px]">
              <div className="flex items-center gap-[15px] text-[16px]">
                <p className="font-bold">All</p>
                {toggle.all == false ? (
                  <IoIosArrowForward
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("all")}
                  />
                ) : (
                  <IoIosArrowDown
                    className="cursor-pointer cursor"
                    onClick={() => handleToggle("all")}
                  />
                )}
              </div>
              <div
                className={`items gap-[10px] no-scrollbar sm:gap-[30px] md:gap-[30px] lg:gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${
                  toggle.all == false
                    ? "flex"
                    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
                }`}
              >
                {filteredItems.map((item) => (
                  <Itemscard
                    key={item.name}
                    image={item.image}
                    name={item.name}
                    desc={item.desc}
                    price={item.price}
                    quantity={item.quantity}
                    productId={item._id}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
