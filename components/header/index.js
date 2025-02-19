"use client";

import userIcon from "../../public/userIcon.png";
import Image from "next/image";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const listItem = ["همه محتواها", "پنل ادمین", "لورم ایپسوم", "لورم ایپسوم"];
  return (
    <>
      <div className="w-full flex  p-5 text-[23px] ">
        {/* left side */}
        <div className="flex items-center gap-5 w-[25%]">
          <div className="w-[50px] h-[50px]  shadow-md shadow-gray-900 bg-pink-700 flex justify-center items-center rounded-full ">
            <h1 className=" text-white font-bold ">L</h1>
          </div>
          <div className="border-[1px] border-slate-600 text-white rounded-sm py-[2px] px-8 ">
            <h1>لوگو</h1>
          </div>
        </div>

        {/* center */}
        <div className="flex items-center gap-5 w-[50%]">
          <ul className="flex items-center justify-between flex-row-reverse w-full  ">
            {listItem.map((item, index) => {
              return (
                <li
                  className="text-gray-500  hover:text-white border-b-4 border-transparent cursor-pointer duration-100 hover:border-b-blue-400"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        {/* right side */}
        <div className="flex flex-row-reverse items-center justify-start gap-5 w-[25%]">
          <div className="flex flex-col gap-2 justify-end  " dir="rtl">
            <div className="w-[30px] h-[3px] bg-white "></div>
            <div className="w-[20px] h-[3px] bg-white "></div>
            <div className="w-[30px] h-[3px] bg-white "></div>
          </div>
          <div className="flex mr-10 gap-5 flex-row-reverse">
            <Image
              src={userIcon}
              alt="icon"
              onClick={() => setOpenProfile(true)}
              className="w-10 h-10 shadow-md shadow-gray-900 rounded-full cursor-pointer  "
            />
            <div className="relative">
              <div className="w-5 h-5 rounded-full bg-red-500 text-white text-[9px] absolute right-0 bottom-5 font-bold flex justify-center items-center ">
                3
              </div>
              <IoIosNotificationsOutline color="white" size={38} />
            </div>
            <IoSearchOutline color="white" size={36} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
