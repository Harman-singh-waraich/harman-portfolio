import * as React from "react";
import Animation from "./player";

export function About() {
  return (
    <div id="about-me" className="min-h-screen py-28 min-w-full">
      <div className="flex justify-content-center flex-col">
        <div>
          <span
            className="text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            /
          </span>
          <span className="text-3xl font-bold text-white">about-me</span>
        </div>
        <div className="text-base text-white py-3"> Who am i?</div>
        {/* content */}
        <div className="flex justify-between">
          <div className="w-full md:w-1/2 lg:w-1/2 text-base text-gray-400 text-left py-3">
            Hello, i’m Harmeet! <br />
            <br />
            <br />
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. Transforming my creativity and
            knowledge into a websites has been my passion for over a year. I
            have been helping various clients to establish their presence
            online. I always strive to learn about the newest technologies and
            frameworks.
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            {" "}
            <Animation />
          </div>
        </div>
      </div>
    </div>
  );
}
