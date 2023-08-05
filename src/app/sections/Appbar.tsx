"use client";
import dynamic from "next/dynamic";
const SocialIcon = dynamic(() =>
  import("@/components/SocialIcon").then((mod) => mod.SocialIcon)
);
import useIntersection from "@/hooks/useIntersection";
import Image from "next/image";
import { useState } from "react";
interface NavigationItem {
  name: string;
  to: string;
  isVisible: boolean;
}

const Appbar = () => {
  const navigation = [
    {
      name: "home",
      to: "/#landing",
      isVisible: useIntersection("#landing", "-100px"),
    },
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
      name: "blogs",
      to: "/#blogs",
      isVisible: useIntersection("#blogs", "0px"),
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
    <div className="flex flex-col md:flex-row lg:flex-row container justify-between align-middle content-center fixed  min-w-full md:w-auto bg-[#282c34] py-2 px-2 md:px-16 lg:px-24 md:pb-5 z-50">
      <div className="flex flex-grow-0 justify-between align-middle content-center items-center lg:pr-5">
        <a
          href={"/#landing"}
          style={{ scrollBehavior: "smooth" }}
          key={"/#landing"}
        >
          <Image
            src={"/images/logo2.svg"}
            alt="Turban Coder"
            width={110}
            height={44}
          />
        </a>

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
                  fill="white"
                  d="M20.293 16.293L12 8l-8.293 8.293-1.414-1.414L12 5.172l9.707 9.707-1.414 1.414z"
                  style={{ transition: "fill 0.3s ease-in-out" }}
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  style={{ transition: "fill 0.3s ease-in-out" }}
                  fill="white"
                  d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={` w-max min-w-[90%] m-auto min-h-fit ${
          menuOpen ? "flex flex-col" : "hidden"
        } md:hidden lg:hidden justify-between items-center bg-[#282c34] p-2 border border-white m-2 box-border relative`}
      >
        <div className="w-full flex flex-col ">
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
                    fontSize: 16,
                    paddingInline: 2,
                  }}
                >
                  #
                </span>
                <span
                  style={{
                    color: tab.isVisible ? "#ffffff" : "#ACB2BF",
                    fontWeight: tab.isVisible ? 600 : 500,
                    fontSize: 16,
                  }}
                >
                  {tab.name}
                </span>
              </a>
            );
          })}
        </div>
        <div className="flex flex-row flex-wrap p-4">
          {["Github", "Discord", "Linkedin", "Email", "Twitter"].map(
            (social: string, index: number) => (
              <SocialIcon platform={social} key={index} />
            )
          )}
        </div>
        <div className="min-w-[10%] min-h-[20%] absolute top-0 right-0 border-t border-r border-white m-2"></div>
        <div className="min-w-[20%] min-h-[10%] absolute bottom-0 left-0 border-b border-l border-white m-2"></div>
      </div>

      {/* //large screen */}
      <div
        className={`align-middle content-center px-2 justify-evenly md:flex md:flex-grow-1 lg:flex lg:flex-grow-1 hidden`}
      >
        {navigation.map(
          (tab: NavigationItem, index: number): React.ReactNode => {
            return (
              <a
                className="text-base lg:text-lg p-2"
                href={tab.to}
                style={{ scrollBehavior: "smooth" }}
                key={index}
              >
                <span
                  style={{
                    color: "#C778DE",
                    fontWeight: tab.isVisible ? 600 : 500,
                    paddingInline: 2,
                  }}
                >
                  #
                </span>
                <span
                  style={{
                    color: tab.isVisible ? "#ffffff" : "#ACB2BF",
                    fontWeight: tab.isVisible ? 600 : 500,
                  }}
                >
                  {tab.name}
                </span>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Appbar;
