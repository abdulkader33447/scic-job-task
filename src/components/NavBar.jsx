import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full mx-auto navbar bg-base-200">
      <ul className="w-full mx-auto px-1 flex items-center justify-center gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
