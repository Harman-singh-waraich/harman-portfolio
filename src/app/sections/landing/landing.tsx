"use client";
import * as React from "react";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";

export default function Landing() {
  return (
    <div id="landing" className="min-h-screen py-20 lg:py-28 pt-40 min-w-full">
      <div className="flex justify-content-center flex-col ">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transitionDuration: "1s" }}
        >
          <span
            className="text-xl md:text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            Hi,
          </span>
          <span className="text-xl md:text-3xl font-bold text-white">
            Im{" "}
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("Harmeet.")
                  .pause(750)
                  .delete(8)
                  .type("Turban Coder.");

                // Remember to return it!
                return instance;
              }}
            />
          </span>
        </motion.div>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transitionDuration: "1s" }}
          className="flex flex-col lg:flex-row items-start lg:items-center"
        >
          <div className="flex flex-row items-center pt-10">
            <motion.span
              className=" text-2xl md:text-5xl font-bold self-center "
              initial={{ color: "#ffffff" }}
              animate={{
                color: "#C778DE",
                transitionDelay: "0.5s",
                transitionDuration: "1s",
              }}
            >
              {"<"}
            </motion.span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white ">
              Developer
            </span>
            <motion.span
              className="text-2xl md:text-5xl font-bold "
              initial={{ color: "#ffffff" }}
              animate={{
                color: "#C778DE",
                transitionDelay: "0.5s",
                transitionDuration: "1s",
              }}
            >
              {"/>"}
            </motion.span>
            <span className="text-lg md:text-5xl font-bold text-white px-5">
              &
            </span>
          </div>
          <div className="flex flex-row items-center pt-10">
            <motion.span
              className=" text-2xl md:text-5xl font-bold "
              initial={{ color: "#ffffff" }}
              animate={{
                color: "#C778DE",
                transitionDelay: "0.5s",
                transitionDuration: "1s",
              }}
            >
              {"{"}
            </motion.span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white ">
              Programmer
            </span>
            <motion.span
              className="text-2xl md:text-5xl font-bold "
              initial={{ color: "#ffffff" }}
              animate={{
                color: "#C778DE",
                transitionDelay: "0.5s",
                transitionDuration: "1s",
              }}
            >
              {"}"}
            </motion.span>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between w-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-base md:text-lg text-gray-400 py-8 opacity-0"
            >
              {"Building the future one line of <code/> at a time."}
            </motion.span>
            <a href={"#contact"} rel="noreferrer">
              <button className="border border-pink-400 p-1 md:p-2 text-sm md:text-base text-white hover:scale-105 bg-pink-400 bg-opacity-10 hover:border-gray-400 transition-colors m-2">
                {"Get in touch <~>"}
              </button>
            </a>
          </motion.div>

          <div className=" w-1/2 md:w-1/2 lg:w-1/3 h-48 md:h-60 lg:h-80 self-end">
            <iframe
              style={{ border: "none" }}
              width="100%"
              height="100%"
              src="https://rive.app/s/0m9TP-uGAEC3i09JThGswQ/embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
