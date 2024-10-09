"use client"
import Itemscard from "../../components/Itemscard";
import Searchbox from "../../components/searchbox";
import {useSelector} from "react-redux";
import {motion as m } from "framer-motion"

const pages = ()=>{
    const wishListItems = useSelector(state=>state.wishlist.items);
     const searchQuery= useSelector(state=>state.search.searchQuery);

    const filteredItems = wishListItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return(
        <m.div layout className="py-[56px] px-[125px] flex flex-col gap-[134px]">
             <p className="text-[96px] ">Your wishlist ⭐️</p>
             <Searchbox />
             {filteredItems.length === 0 ? "There's no item that matches your search!" : (
                <div className="wishlist grid grid-cols-3 gap-[40px]">
                     {filteredItems.map(item=><Itemscard key={item.name} image={item.image} name={item.name} desc={item.desc} price={item.price} liked={item.liked} />)}
                </div>
             )}
        </m.div>
    )
}

export default pages;