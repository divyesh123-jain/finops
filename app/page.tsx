"use client";

import { Button } from "@nextui-org/react";

import { Image } from "@nextui-org/react";
import "./globals.css";
import SideBar from "@/app/components/SideBar";
import Header from "@/app/components/Header";
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
      <span className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vero eius blanditiis voluptatem molestias, deserunt quidem quam nisi ab omnis maxime odit inventore magni placeat deleniti iure. Quo inventore recusandae fugit dolore eaque ipsum, dolorum quasi quis laboriosam. Placeat provident harum animi ipsum molestiae totam nisi! Suscipit adipisci iusto corrupti</span>
    </>
  );
}
