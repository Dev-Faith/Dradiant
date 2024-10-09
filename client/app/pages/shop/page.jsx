import Searchbox from "../../components/searchbox";
import Itemscard from "../../components/Itemscard";
import { IoIosArrowDown } from "react-icons/io";
import {shopcroche} from "../../DradiantImages";


const page = ()=>{
    return (
      <div className="cursor h-[100vh] py-[56px] px-[125px] flex flex-col gap-[46px]">
        <p className="text-[96px] ">Buy from the Best Collections! 👜 </p>
        <Searchbox />
        <div className="shopItemsGroups">
          <div className="recent flex flex-col gap-[28px]">
            <div className="flex items-center gap-[15px] text-[30px]">
              <p>Recent</p>
              <IoIosArrowDown/>
            </div>
            <div className="items">
              <Itemscard image={shopcroche} name="crochetbag" desc="Dradiantbags model 29, from the land of furry, made with tiger skin" price="12,000" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default page;