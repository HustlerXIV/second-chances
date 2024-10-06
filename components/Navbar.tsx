import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-customGray shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-end items-center text-black">
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="hover:text-blue-500">
              HOME
            </a>
          </li>
          <li>
            <a href="/adopt" className="hover:text-blue-500">
              ADOPT
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="w-[50px] bg-black py-3 px-4 text-white rounded-md"
            >
              SIGN UP/SIGN IN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
