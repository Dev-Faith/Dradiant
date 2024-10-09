"use client"
import Searchbox from "../../components/searchbox";
import Itemscard from "../../components/Itemscard";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {shopcroche} from "../../DradiantImages";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";


const page = ()=>{
   const [toggle, setToggle] = useState({
    recent: false,
    women: false,
    men: false,
    all: true,
   });

   const searchQuery= useSelector(state=>state.search.searchQuery);


   const handleToggle = (group)=>{
      if (group=="recent"){
        setToggle({...toggle, recent:!toggle.recent})
      } else if (group=="women"){
        setToggle({...toggle, women:!toggle.women})
      } else if (group=="men"){
        setToggle({...toggle, men:!toggle.men})
      } else {
        setToggle({...toggle, all:!toggle.all})
      }
   }

  const recentShopItems = [
    {
      name: "crochetbag",
      price: "12,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "totebag",
      price: "3,500",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "handbag",
      price: "8,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
    {
      name: "schoolbag",
      price: "15,000",
      desc: "Dradiantbags model 29, from the land of furry, made with tiger skin",
      image:shopcroche,
    }, 
  ];

  const filteredItems = recentShopItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
      <div className=" h-[100vh] pt-[56px] px-[125px] flex flex-col gap-[46px]">
        <p className="text-[96px] ">Buy from the Best Collections! 👜 </p>
        <Searchbox />
        <div className="shopItemsGroups flex flex-col gap-[114px]">
          {filteredItems.length === 0 ? "There's no item that matches your search!" : ( <div className="flex flex-col gap-[114px]">
            <div className="recent flex flex-col gap-[28px]">
            <div className="flex items-center gap-[15px] text-[30px] cursor-pointer">
              <p>Recent</p>
                 { toggle.recent==false ? <IoIosArrowForward className="cursor-pointer cursor" onClick={()=>handleToggle("recent")}/> : <IoIosArrowDown className="cursor-pointer cursor" onClick={()=>handleToggle("recent")}/>}
            </div>
            <div className={`items gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${toggle.recent==false ? "flex" : "grid grid-cols-3" }`}>
              {filteredItems.map(item=><Itemscard key={item.name} image={item.image} name={item.name} desc={item.desc} price={item.price} />
)}
            </div>
          </div>
          <div className="women'sbag flex flex-col gap-[28px]">
            <div className="flex items-center gap-[15px] text-[30px]">
              <p>Women's bags</p>
              { toggle.women==false ? <IoIosArrowForward className="cursor-pointer cursor" onClick={()=>handleToggle("women")}/> : <IoIosArrowDown className="cursor-pointer cursor" onClick={()=>handleToggle("women")}/>}
            </div>
            <div className={`items gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${toggle.women==false ? "flex" : "grid grid-cols-3" }`}>
              {filteredItems.map(item=><Itemscard key={item.name} image={item.image} name={item.name} desc={item.desc} price={item.price} />
)}
            </div>
          </div>
          <div className="men'sbag flex flex-col gap-[28px]">
            <div className="flex items-center gap-[15px] text-[30px]">
              <p>Men's bags</p>
              { toggle.men==false ? <IoIosArrowForward className="cursor-pointer cursor" onClick={()=>handleToggle("men")}/> : <IoIosArrowDown className="cursor-pointer cursor" onClick={()=>handleToggle("men")}/>}
            </div>
            <div className={`items gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${toggle.men==false ? "flex" : "grid grid-cols-3" }`}>
              {filteredItems.map(item=><Itemscard key={item.name} image={item.image} name={item.name} desc={item.desc} price={item.price} />
)}
            </div>
          </div>
          <div className="All flex flex-col gap-[28px] pb-[56px]">
            <div className="flex items-center gap-[15px] text-[30px]">
              <p>All</p>
              { toggle.all==false ? <IoIosArrowForward className="cursor-pointer cursor" onClick={()=>handleToggle("all")}/> : <IoIosArrowDown className="cursor-pointer cursor" onClick={()=>handleToggle("all")}/>}
            </div>
            <div className={`items gap-[46px] w-full overflow-y-auto scroll-ml-6 snap-start ${toggle.all==false ? "flex" : "grid grid-cols-3" }`}>
              {filteredItems.map(item=><Itemscard key={item.name} image={item.image} name={item.name} desc={item.desc} price={item.price} />
)}
            </div>
          </div>
          </div>) }
        </div>
      </div>
    );
};

export default page;