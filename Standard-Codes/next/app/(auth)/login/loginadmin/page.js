"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Loginadmin = () => {
  const pathName = usePathname();
  console.log(pathName);

  return <div>Loginadmin</div>;
};

export default Loginadmin;
