"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen w-100 items-center justify-center sm:justify-between px-4 md:px-16 lg:px-24 bg-[#282c34]">
      <div className="flex flex-col w-100 md:w-1/2 h-full">
        <span className="text-xl md:text-3xl font-bold text-pink-400 mb-4">
          Holy Bugs !
        </span>
        <span className="text-lg md:text-xl font-bold text-white">
          I must have overlooked something, do reach out to me and say
          <span className="text-pink-400"> &quot; I told you so &quot;</span>
        </span>
        <button
          className=" w-1/2 border border-pink-400 p-1 md:p-2 text-sm md:text-base text-white hover:scale-105 bg-pink-400 bg-opacity-10 hover:border-gray-400 transition-colors my-8"
          onClick={reset}
        >
          Troy, Troy Again
        </button>
      </div>
      <div className=" w-100 md:w-1/2 h-60 md:h-72 lg:h-82">
        <iframe
          style={{ border: "none" }}
          width="100%"
          height="100%"
          src="https://rive.app/community/2951-6185-dog-404/embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
