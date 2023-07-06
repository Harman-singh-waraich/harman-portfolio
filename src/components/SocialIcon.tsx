import { SOCIAL_LINKS } from "@/assets/data";
import Image from "next/image";

export const SocialIcon = ({ platform }: { platform: string }) => {
  return (
    <a
      href={`${SOCIAL_LINKS[platform]}`}
      target="_blank"
      className="w-7 md:w-8 h-7 md:h-8 cursor-pointer  transition-all duration-500 hover:scale-125 relative"
    >
      <Image
        src={`/images/${platform}.svg`}
        alt="social"
        fill={true}
        className="px-1 md:px-0"
      />
    </a>
  );
};
