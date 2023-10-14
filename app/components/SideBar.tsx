"use client";
import React from "react";
import Header from "./Header";
import { BiHomeSmile } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import NavLink from "./NavLink";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="hidden bg-white text-black md:flex flex-col gap-4 p-4 w-[17%] h-[100%] rounded-l-[40px] border-r-2 z-10 border-[#F2F2F2]">
        <span className="text-center text-3xl font-bold">FinOps</span>

        <div className="w-[95%] h-[100px] bg-gray-900 rounded-xl flex justify-evenly mt-8 items-center p-4 text-white">
          <div className="flex flex-col mt-4justify-evenly items-center">
            <span className="text-sm">Total Investment</span>
            <span>$5380,90</span>
          </div>
          <span className="text-green-500 text-sm flex justify-center items-center">
            18.10% &uarr;
          </span>
        </div>
        <NavLink
          to="/"
          label="Home"
          icon={<BiHomeSmile className="text-xl" />}
        />
        <NavLink
          to="/dashboard"
          label="Dashboard"
          icon={<LuLayoutDashboard className="text-xl" />}
        />
        <NavLink
          to="/wallet"
          label="Wallet"
          icon={<LuLayoutDashboard className="text-xl" />}
        />
        <NavLink
          to="/news"
          label="News"
          icon={<LuLayoutDashboard className="text-xl" />}
        />
        <NavLink
          to="/stock-fund"
          label="Stock and Fund"
          icon={<LuLayoutDashboard className="text-xl" />}
        />
        <hr className="mt-9" />
        <NavLink
          to="/wallet"
          label="Wallet"
          icon={<LuLayoutDashboard className="text-xl" />}
        />
        <NavLink
          to="/news"
          label="News"
          icon={<LuLayoutDashboard className="text-xl" />}
        />
        <NavLink
          to="/stock-fund"
          label="Stock and Fund"
          icon={<LuLayoutDashboard className="text-xl" />}
        />
      </div>
    </>
  );
};

export default SideBar;
