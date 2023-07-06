import { SocialIcon } from "./SocialIcon";

export const SocialBar = () => {
  return (
    <div className="hidden md:flex lg:flex flex-col justify-center align-middle content-center items-center min-h-auto float-left fixed w-10 z-50 ">
      <div className="w-0.1 h-32 bg-white"> </div>
      {["Github", "Discord", "Twitter", "Linkedin", "Email"].map(
        (platform: string, index: number) => (
          <SocialIcon platform={platform} key={index} />
        )
      )}
    </div>
  );
};
