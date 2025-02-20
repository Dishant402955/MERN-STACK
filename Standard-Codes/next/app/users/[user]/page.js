"use client";

import { redirect } from "next/navigation";
import React from "react";

const Dynamic = ({ params }) => {
  if (params.user !== 10) {
    redirect("/login");
  }
  return <div>{params.user}</div>;
};

export default Dynamic;
