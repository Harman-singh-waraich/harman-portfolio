import * as React from "react";
// import { Animation } from "@/components/player";

export default function About() {
  return (
    <div id="about-me" className="min-h-screen py-20 lg:py-28 min-w-full">
      <div className="flex justify-content-center flex-col ">
        <div>
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
        <div className=" text-sm  md:text-base text-white py-3"> Who am i?</div>
        {/* content */}
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="w-full  lg:w-2/3 text-sm  lg:text-lg text-gray-400 text-left py-3 line-height-1.25">
            Hello, i’m <span className="text-[#C778DE]">Harmeet!</span> <br />
            <br />
            I’m a self-taught <span className="text-[#C778DE]">
              Blockchain
            </span>{" "}
            and <span className="text-[#C778DE]">full-stack</span> developer
            based in Delhi, India.
            <br /> I can develop robust web-apps from scratch and raise them
            into modern user-friendly web experiences.
            <br />
            <br />
            Transforming my creativity and knowledge into a web apps has been my
            passion for over a year. I am constantly <br /> immersing myself in
            new technologies, frameworks, and programming languages to broaden
            my skill set.
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
  );
}
