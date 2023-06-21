import { SocailIcon } from "@/components/SocailIcon";
import * as React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-fit md:min-h-[75vh] py-20 md:py-28 min-w-full"
    >
      <div className="flex justify-content-center flex-col">
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
            contacts
          </span>
        </div>
        <div className="text-sm md:text-base text-white py-3">
          {" "}
          Wanna get in touch ?
        </div>
        {/* content */}
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/2 text-sm md:text-base text-gray-400 text-left py-3">
            I’m interested in freelance opportunities. However,
            <br /> if you have other request or question,
            <br /> don’t hesitate to contact me
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="border border-white p-4 ">
              <div className="md:text-lg text-white">Message me here</div>
              <div className="flex flex-row items-center text-sm md:text-base text-gray-400">
                <SocailIcon platform="Discord" /> Calib#6972
              </div>
              <div className="flex flex-row items-center text-sm md:text-base text-gray-400">
                <SocailIcon platform="Email" /> WaraichHarman68@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
