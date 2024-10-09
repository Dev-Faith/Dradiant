import Searchbox from "../../components/searchbox";
import Itemscard from "../../components/Itemscard";

const page = ()=>{
    return (
      <div className="cursor h-[100vh] py-[56px] px-[125px] flex flex-col gap-[46px]">
        <p className="text-[96px] ">Buy from the Best Collections! 👜 </p>
        <Searchbox />
        <div className="shopItemsGroups">
          <div className="recent flex flex-col gap-[28px]">
            <div>
              <p>Recent</p>
            </div>
            <div className="items">
              <Itemscard />
            </div>
          </div>
        </div>
      </div>
    );
};

export default page;