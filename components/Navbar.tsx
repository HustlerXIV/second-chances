"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
      setIsLoggedIn(false);
    } finally {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("/api/session");
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error("Error checking session:", error);
        setIsLoggedIn(false);
      }
    };

    checkSession();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-customGray shadow-lg">
      <Container>
        <div className="mx-auto py-4 flex justify-end items-center text-black font-bold">
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <ul
            className={`md:flex gap-[20px] items-center ${
              isMobileMenuOpen
                ? "flex flex-col items-center text-center gap-[20px] absolute top-16 left-0 w-full h-screen bg-customGray md:static"
                : "hidden"
            } md:space-y-0 md:flex-row md:static`}
          >
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
            {isLoggedIn && (
              <>
                <li>
                  <a href="/my-pets" className="hover:text-customYellow">
                    MY PETS
                  </a>
                </li>
                <li>
                  <a
                    href="/my-adopted-pets"
                    className="hover:text-customYellow"
                  >
                    MY ADOPTED PETS
                  </a>
                </li>
              </>
            )}
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
