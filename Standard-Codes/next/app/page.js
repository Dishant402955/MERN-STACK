"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import img from "@/public/1.jpg";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const Home = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };

  return (
    <div className="">
      <h1>useRouter</h1>
      <button
        className=" bg-slate-600 p-2 rounded-md m-10"
        onClick={() => navigate("about")}
      >
        About page
      </button>
      <Navbar />
      <Image
        src={img}
        alt="image"
        width={100}
        height={100}
      />
      <h1 className={roboto.className}>This is Roboto font</h1>
    </div>
  );
};
export default Home;
