"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "900" });

const Home = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };

  const [product, setProduct] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     data = await data.json();
  //     setProduct(data);
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  const items = product?.map((item) => {
    return (
      <li
        className="flex flex-col w-[250px] bg-slate-700 text-zinc-300 m-2 p-2 justify-center items-center text-center"
        key={item.id}
      >
        <h1>{item.id}</h1>
        <p>{item.title}</p>
      </li>
    );
  });

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
      <h1 className={roboto.className}>This is Roboto font</h1>
      <br />
      <br />
      <ul className="flex flex-wrap w-full justify-center ">{items}</ul>
    </div>
  );
};
export default Home;
