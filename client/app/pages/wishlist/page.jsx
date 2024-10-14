"use client"
import Itemscard from "../../components/Itemscard";
import Searchbox from "../../components/searchbox";
import {useSelector} from "react-redux";
import {motion as m } from "framer-motion"
import {useEffect} from "react"

const pages = ()=>{
    const wishListItems = useSelector(state=>state.wishlist.items);
     const searchQuery= useSelector(state=>state.search.searchQuery);

    const filteredItems = wishListItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
    return (
      <m.div
        layout
        className="py-[56px] px-[11px] xl:px-[125px] flex flex-col gap-[64px]"
      >
        <p className=" text-[24px] xl:text-[64px] ">Your wishlist ⭐️</p>
        <Searchbox />
        {filteredItems.length === 0 ? (
          "There's no item that matches your search!"
        ) : (
          <div className="wishlist grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-[10px] sm:gap-[30px] md:gap-[30px] lg:gap-[46px]">
            {filteredItems.map((item) => (
              <Itemscard
                key={item.name}
                image={item.image}
                name={item.name}
                desc={item.desc}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        )}
      </m.div>
    );
}

export default pages;