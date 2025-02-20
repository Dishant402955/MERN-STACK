"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Loginuser = () => {
  const pathName = usePathname();
  console.log(pathName);

  return <div>Loginuser</div>;
};

export default Loginuser;
