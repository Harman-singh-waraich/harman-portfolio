import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen w-100 items-center justify-center sm:justify-between px-4 md:px-16 lg:px-24 bg-[#282c34]">
      <div className="flex flex-col w-100 md:w-1/2 h-full">
        <span className="text-xl md:text-3xl font-bold text-pink-400">
          Oops,
        </span>
        <span className="text-lg md:text-xl font-bold text-white">
          looks like you got lost. Let me help you find your way back!
        </span>
        <Link href={"/"}>
          <button className="border border-pink-400 p-1 md:p-2 text-sm md:text-base text-white hover:scale-105 bg-pink-400 bg-opacity-10 hover:border-gray-400 transition-colors my-4">
            say Abra Cadebra !
          </button>
        </Link>
      </div>
      <div className=" w-100 md:w-1/2 h-60 md:h-72 lg:h-82">
        <iframe
          style={{ border: "none" }}
          width="100%"
          height="100%"
          src="https://rive.app/s/b1TsYnZIUUG41YG6W1PZFA/embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
