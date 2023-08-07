import * as React from "react";

export default function Landing() {
  return (
    <div id="landing" className="min-h-screen py-20 lg:py-28 pt-40 min-w-full">
      <div className="flex justify-content-center flex-col ">
        <div>
          <span
            className="text-xl md:text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            Hi,
          </span>
          <span className="text-xl md:text-3xl font-bold text-white">
            Im Harmeet.
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="flex flex-row items-center pt-10">
            <span
              className=" text-2xl md:text-5xl font-bold self-center "
              style={{
                color: "#C778DE",
              }}
            >
              {"<"}
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white ">
              Developer
            </span>
            <span
              className="text-2xl md:text-5xl font-bold "
              style={{
                color: "#C778DE",
              }}
            >
              {"/>"}
            </span>
            <span className="text-lg md:text-5xl font-bold text-white px-5">
              &
            </span>
          </div>
          <div className="flex flex-row items-center pt-10">
            <span
              className=" text-2xl md:text-5xl font-bold "
              style={{
                color: "#C778DE",
              }}
            >
              {"{"}
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white ">
              Programmer
            </span>
            <span
              className="text-2xl md:text-5xl font-bold "
              style={{
                color: "#C778DE",
              }}
            >
              {"}"}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-100">
          <div className="flex flex-col">
            <div className="text-base md:text-lg text-gray-400 py-8">
              {"Building the future one line of <code/> at a time."}
            </div>
            <a href={"#contact"} rel="noreferrer">
              <button className="border border-pink-400 p-1 md:p-2 text-sm md:text-base text-white hover:scale-105 bg-pink-400 bg-opacity-10 hover:border-gray-400 transition-colors m-2">
                {"Get in touch <~>"}
              </button>
            </a>
          </div>

          <div className=" w-1/2 md:w-1/2 lg:w-1/3 h-48 md:h-60 lg:h-80 self-end">
            <iframe
              style={{ border: "none" }}
              width="100%"
              height="100%"
              src="https://rive.app/s/0m9TP-uGAEC3i09JThGswQ/embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
