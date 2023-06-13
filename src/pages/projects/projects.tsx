import * as React from "react";

export function Projects() {
  return (
    <div id="projects" className="min-h-screen py-28 min-w-full">
      <div className="flex  flex-col relative min">
        <div>
          <span
            className="text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            /
          </span>
          <span className="text-3xl font-bold text-white">projects</span>
        </div>
        <div className="text-base text-white py-3"> What i've made?</div>
        {/* content */}
        <div className="flex  flex-row justify-between align-middle items-start flex-wrap mt-10"></div>
      </div>
    </div>
  );
}
