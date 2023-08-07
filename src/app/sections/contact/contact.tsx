import { SocialIcon } from "@/components/SocialIcon";
import Link from "next/link";
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
                <SocialIcon platform="Discord" /> hrmn_singh
              </div>
              <div className="flex flex-row items-center text-sm md:text-base text-gray-400">
                <SocialIcon platform="Email" /> WaraichHarman68@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm md:text-base text-gray-400 text-left py-3">
            If your a recruiter looking for talent, here&apos;s my resume ;)
          </div>
          <Link
            href={
              "https://docs.google.com/document/d/1e-bGI62e6m-iL4lXbkDDKdbUHGXMPuP8"
            }
            rel="noreferrer"
            target="_blank"
            prefetch={false}
          >
            <button className="border border-pink-400 p-1 md:p-2 text-sm md:text-base text-white hover:scale-105 bg-pink-400 bg-opacity-10 hover:border-gray-400 transition-colors ">
              {"Resume <~>"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
