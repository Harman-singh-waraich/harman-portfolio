import { SocailIcon } from "@/components/SocailIcon";

export function Footer() {
  return (
    <div className=" min-w-full min-h-fit flex flex-col md:flex-row lg:flex-row justify-start md:justify-between lg:justify-between items-center relative left-0 bottom-0  border-0 border-t border-white p-2 md:p-12 lg:p-12 px-2 md:px-24 lg:px-24">
      <div className="flex flex-col items-start justify-start">
        <div className="text-xl text-white">Turban Coder</div>
        <div className="text-md text-white">
          Blockchain and Fullstack Developer
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="text-xl text-white pl-1">Media</div>
        <div className="flex flex-row text-md text-white">
          {["Github", "Discord", "Twitter", "Email", "LinkedIn"].map(
            (social: string) => (
              <SocailIcon platform={social} />
            )
          )}
        </div>
      </div>
      <div className="absolute left-0 bottom-0 min-w-full text-white text-center p-2">
        {" "}
        @ copyright 2023. Made with ♡ by Harmeet
      </div>
    </div>
  );
}
