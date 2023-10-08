import React from "react";
import Header from "./Header";
import { BiHomeSmile } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="bg-white hidden flex-[1] w-[19vw]  md:h-[100vh] md:flex item-center md:items-start md:flex-col gap-4 overflow-hidden rounded-l-[40px] border-r-2 z-10 border-slate-200">
        <div className="p-4 flex  items-center"> {/*<Header />*/} </div>

        <div className="relative md:w-full md:mt-4 flex flex-col gap-4 text-2xl  text-black p-4">
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            Dashboard
          </div>
          <div className="w-[95%] h-[100px] bg-gray-900 rounded-xl flex justify-evenly items-center p-2 text-white">
            <div className="flex flex-col justify-evenly items-center">
              <div className="text-sm">Total Investment</div>
              <div>$5380,90</div>
            </div>
            <div className="text-green-500 text-sm flex justify-center items-center">
              +18.10% &uarr;
            </div>
          </div>
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <BiHomeSmile className="text-xl" /> Home
          </div>
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-xl" /> Dashboard
          </div>
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-xl" /> Wallet
          </div>
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-xl" /> News
          </div>
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-xl" /> Stock and Fund
          </div>

          <hr className="mt-9" />

          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-xl" /> Wallet
          </div>
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-xl" /> News
          </div>
          <div className="text-[1.1rem] flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-xl" /> Stock and Fund
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
