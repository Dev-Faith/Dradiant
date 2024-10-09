import Image from "next/image";

export default function Itemscard({name, price, image, desc, liked}){
    return (
        <div className="border-[1px] border-black rounded-[20px] w-[472px] h-[566px] cursor">
           <div ClassName="image&Liked">
            <Image src = {image}/>
            <div className="like bg-[#fff] rounded-full size-[55px]"></div>
            <div className="desc&name">
                <p>{name}</p>
                <p>{desc}</p>
            </div>
            <div className="details&Price">
                <p className="underline text-[#426651]">Details</p>
                <p>₦{price}</p>
            </div>
           </div>
        </div>
    )
};