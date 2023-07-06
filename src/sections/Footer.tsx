import { SocailIcon } from "@/components/SocailIcon";

export default function Footer() {
  return (
    <div className=" min-w-full min-h-[220px] flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between items-start  relative left-0 bottom-0  border-0 border-t border-white p-2 md:p-8 lg:p-8 px-2 md:px-24 lg:px-24">
      <div className="flex flex-col items-start justify-start py-2 ">
        <div className="text-base md:text-xl text-white">Turban Coder</div>
        <div className="text-sm md:text-base text-white">
          Blockchain and Fullstack Developer
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-2 ">
        <div className="text-base md:text-xl text-white pl-1">Media</div>
        <div className="flex flex-row text-md text-white">
          {["Github", "Discord", "Twitter", "Email", "Linkedin"].map(
            (social: string, index: number) => (
              <SocailIcon platform={social} key={index} />
            )
          )}
        </div>
      </div>
      <div className="absolute left-0 bottom-0 min-w-full text-sm md:text-base text-white text-center p-4">
        {" "}
        @ copyright 2023. Made with ♡ by Harmeet
      </div>
    </div>
  );
}
