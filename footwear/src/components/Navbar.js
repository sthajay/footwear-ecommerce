import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavLinkShown, setIsNavLinkShown] = useState(false);
  return (
    <nav className="font-body flex h-20 items-center justify-between border-y-2 px-5 py-4">
      <Link to="/">
        <h1 className="p-0 text-3xl font-bold">FootWear</h1>
      </Link>
      <HiBars3
        className="cursor-pointer text-4xl md:hidden"
        onClick={() => setIsNavLinkShown(!isNavLinkShown)}
      />
      <div
        className={`${
          isNavLinkShown
            ? "absolute left-0 top-16 flex w-full flex-col gap-5 bg-white p-10 drop-shadow-md"
            : "hidden"
        }  md:flex md:w-1/2 md:justify-between lg:gap-10`}
      >
        <input
          className="h-12 w-full rounded-full border-2 bg-stone-50 px-4 py-0 focus:bg-stone-100 focus:outline-none md:w-3/5"
          type="text"
          placeholder="Search product..."
        />
        <div className="flex w-60 gap-3 rounded-full border-2 px-4 py-2 md:w-auto">
          <div className="flex cursor-pointer items-center gap-1 text-xs">
            <HiOutlineShoppingBag className="text-3xl" />
            <p className="md:hidden lg:block">Cart</p>
          </div>
          <div className="border-2"></div>
          <div className="flex cursor-pointer items-center gap-1 text-xs">
            <HiOutlineUserCircle className="text-3xl" />
            <p className="md:hidden lg:block">My account</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;