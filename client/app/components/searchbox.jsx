import { CiSearch } from "react-icons/ci";

const Searchbox = () => {
  return (
    <div className="relative">
    <CiSearch className=" absolute size-[54px] top-[16px] left-[16px] text-[#7B7768]"/>
      <input
        type="text"
        placeholder="Search your favorite bags!..."
        className="p-[32px] pl-[6rem] bg-[#fff] w-full rounded-[20px] border-[1px] border-[#7B7768] cursor outline-none"
      />
    </div>
  );
}

export default Searchbox;
