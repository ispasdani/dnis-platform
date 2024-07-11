import { navBtns } from "@/dnis-constants/navConsts";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="absolute z-20 top-60 left-[50%] translate-x-[-50%] sm:top-10">
      <nav className="text-white flex justify-center items-center flex-wrap sm:flex-col sm:items-start">
        {navBtns.map((navLink) => (
          <div
            className="group/navLinkWrapper h-10 flex justify-start items-center text-xl cursor-pointer my-1 mx-3"
            key={navLink.label}
          >
            <Link
              href={navLink.href}
              className="relative py-1 transition-all ease-in-out group-hover/navLinkWrapper:line-through decoration-neon-green"
            >
              {navLink.label}
              <span className="absolute bottom-0 left-0 h-[5px] w-1 bg-neon-green transition-all ease-in-out duration-200 group-hover/navLinkWrapper:w-full" />
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
