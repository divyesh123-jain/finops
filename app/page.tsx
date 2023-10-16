"use client";

import { Button } from "@nextui-org/react";

import { Image } from "@nextui-org/react";
import "./globals.css";
import SideBar from "@/app/components/SideBar";
import Header from "@/app/components/Header";
import Share from "./components/Share";
import Watchlist from "./components/Watchlist";
import GraphComp from "./components/GraphComp";
export default function Home() {
  return (
    <>
      {/* <div className="flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-black">
        <div className="flex-1 bg-black px-4 pb-4 md:p-4">
          <div className="relative bg-white/95 rounded-2xl flex flex-col gap-4 w-full  h-full divide-x divide-blue-200 md:rounded-[40px]">
            <SideBar />
            <Header />
          </div>
        </div>
      </div> */}
      <div className="text-black text-lg font-bold my-3">My Portfolio</div>
      <Share />
      <div className="relative h-[53%] grid grid-cols-3 mt-3 w-[98%]">
        <span className="relative col-span-2 h-[99%] bg-white rounded-lg mr-1">
          <GraphComp />
        </span>
        <span className="col-span-1 h-[99%] bg-white text-black rounded-lg ml-1">
          <div className="flex items-center justify-between mb-4 p-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 ">
              My watchlist
            </h5>
            <a
              href="#"
              className="text-2xl"
            >
              +
            </a>
          </div>
          <Watchlist />
        </span>
      </div>
    </>
  );
}
