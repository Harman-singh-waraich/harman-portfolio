"use client";
import useIntersection from "@/hooks/useIntersection";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface NavigationItem {
  name: string;
  to: string;
  isVisible: boolean;
}

const Appbar = () => {
  const navigation = [
    {
      name: "about-me",
      to: "/#about-me",
      isVisible: useIntersection("#about-me", "-100px"),
    },
    {
      name: "skills",
      to: "/#skills",
      isVisible: useIntersection("#skills", "-100px"),
    },
    {
      name: "projects",
      to: "/#projects",
      isVisible: useIntersection("#projects", "-100px"),
    },
    {
      name: "contacts",
      to: "/#contact",
      isVisible: useIntersection("#contact", "0px"),
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex flex-col md:flex-row lg:flex-row container justify-between align-middle content-center fixed  min-w-full md:w-auto  py-2 px-5 md:px-24 lg:px-24 pb-5 z-50">
      <div className="flex flex-grow-0 justify-between align-middle content-center items-center">
        <Image
          src={"/images/TurbanCoder.png"}
          alt="Turban Coder"
          width={164}
          height={84}
        />

        <div className="md:hidden float-right">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.293 16.293L12 8l-8.293 8.293-1.414-1.414L12 5.172l9.707 9.707-1.414 1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`w-full min-h-screen ${
          menuOpen ? "flex flex-col" : "hidden"
        } md:hidden lg:hidden px-2 justify-evenly `}
      >
        {navigation.map((tab: NavigationItem): React.ReactNode => {
          return (
            <a
              className="p-2"
              href={tab.to}
              style={{ scrollBehavior: "smooth" }}
              key={tab.to}
            >
              <span
                style={{
                  color: "#C778DE",
                  fontWeight: tab.isVisible ? 600 : 500,
                  fontSize: 18,
                  paddingInline: 2,
                }}
              >
                #
              </span>
              <span
                style={{
                  color: tab.isVisible ? "#ffffff" : "#ACB2BF",
                  fontWeight: tab.isVisible ? 600 : 500,
                  fontSize: 18,
                }}
              >
                {tab.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* //large screen */}
      <div
        className={`align-middle content-center px-2 justify-evenly md:flex md:flex-grow-1 lg:flex lg:flex-grow-1 hidden`}
      >
        {navigation.map((tab: NavigationItem): React.ReactNode => {
          return (
            <a
              className="p-2"
              href={tab.to}
              style={{ scrollBehavior: "smooth" }}
              key={tab.to}
            >
              <span
                style={{
                  color: "#C778DE",
                  fontWeight: tab.isVisible ? 600 : 500,
                  fontSize: 18,
                  paddingInline: 2,
                }}
              >
                #
              </span>
              <span
                style={{
                  color: tab.isVisible ? "#ffffff" : "#ACB2BF",
                  fontWeight: tab.isVisible ? 600 : 500,
                  fontSize: 18,
                }}
              >
                {tab.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Appbar;
