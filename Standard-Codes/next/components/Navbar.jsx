import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="links-container">
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
