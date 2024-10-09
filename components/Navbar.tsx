"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("/api/session");
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error("Error checking session:", error);
      }
    };

    checkSession();
  }, []);

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-customGray shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-end items-center text-black">
        <ul className="flex space-x-8 items-center">
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
            {isLoggedIn ? (
              <a
                onClick={logout}
                className="bg-black py-3 px-4 text-white rounded-md cursor-pointer"
              >
                LOGOUT
              </a>
            ) : (
              <a
                href="/login"
                className="bg-black py-3 px-4 text-white rounded-md cursor-pointer"
              >
                SIGN UP/SIGN IN
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
