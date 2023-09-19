"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import TypeIt from "typeit-react";
// import { Animation } from "@/components/player";

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px -100px -50px 0px",
  });

  return (
    <div
      ref={ref}
      id="about-me"
      className="min-h-screen py-20 lg:py-28 min-w-full"
    >
      <div className="flex justify-content-center flex-col ">
        <div
          className="pb-4"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <span
            className="text-xl md:text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            /
          </span>
          <span className="text-xl md:text-3xl font-bold text-white">
            about-me
          </span>
        </div>

        <div className=" border-white border border-spacing-1">
          <div className="flex justify-between  border-b-white border pb-1 pt-1 pl-1">
            <div className="flex gap-2 text-sm  md:text-base text-white">
              <Image
                src={`/images/programmer.svg`}
                alt="window icons"
                width={18}
                height={18}
              />{" "}
              Who am i?
            </div>
            <div className="flex justify-evenly w-20">
              <Image
                src={`/images/minimise.svg`}
                alt="window icons"
                width={18}
                height={18}
              />
              <Image
                src={`/images/cancel.svg`}
                alt="window icons"
                width={18}
                height={18}
              />
            </div>
          </div>

          {/* content */}
          <div className="flex justify-between flex-col lg:flex-row p-2">
            <div className="w-full  lg:w-2/3 text-sm  lg:text-lg text-gray-400 text-left py-3 line-height-1.25">
              Hello, i’m{" "}
              <span className="text-[#C778DE]">
                <TypeIt
                  options={{ loop: true }}
                  getBeforeInit={(instance) => {
                    instance
                      .type("Harmete")
                      .pause(750)
                      .delete(2)
                      .pause(500)
                      .type("et!")
                      .pause(500)
                      .delete(8)
                      .type("Turban Coder!");

                    // Remember to return it!
                    return instance;
                  }}
                />
              </span>
              <br />
              <br />
              I’m a self-taught{" "}
              <span className="text-[#C778DE]">Blockchain</span> and{" "}
              <span className="text-[#C778DE]">full-stack</span> developer based
              in Delhi, India.
              <br /> I can develop robust web-apps from scratch and raise them
              into modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a web apps has been
              my passion for over a year. I am constantly <br /> immersing
              myself in new technologies, frameworks, and programming languages
              to broaden my skill set.
              <br />
              <br />I happily embrace the unique identity of the{" "}
              <span className="text-[#C778DE]">Turban Coder</span>
            </div>
            <div className="w-3/5 md:w-2/5 lg:w-1/3  flex justify-center items-center">
              {" "}
              <iframe
                style={{ border: "none" }}
                width="100%"
                height="100%"
                src="https://rive.app/s/0J_t-NMwDUCc6ONJ7kShFw/embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
