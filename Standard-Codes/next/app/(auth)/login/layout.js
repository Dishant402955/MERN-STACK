"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      <ul className="bg-black text-white flex p-2">
        {pathName === "/login/loginadmin" ? (
          <li>
            <Link href="/login/loginadmin"> Admin</Link>
          </li>
        ) : (
          <li>
            <Link href="/login/loginuser"> User</Link>
          </li>
        )}
      </ul>
      {children}
    </div>
  );
};

export default Layout;
