"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container";

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
      <Container>
        <div className="mx-auto py-4 flex justify-end items-center text-black font-bold">
          <ul className="flex space-x-8 items-center">
            <li>
              <a href="/" className="hover:text-customYellow">
                HOME
              </a>
            </li>
            <li>
              <a href="/adopt" className="hover:text-customYellow">
                ADOPT
              </a>
            </li>
            <li>
              <a href="/my-pets" className="hover:text-customYellow">
                MY PETS
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
      </Container>
    </nav>
  );
};

export default Navbar;
