"use client";
import { SOCIAL_LINKS } from "@/assets/data";
import Image from "next/image";
import { motion } from "framer-motion";
export const SocialIcon = ({ platform }: { platform: string }) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.25,
      }}
      href={`${SOCIAL_LINKS[platform]}`}
      target="_blank"
      className="w-7 md:w-8 h-7 md:h-8 cursor-pointer   relative"
    >
      <Image
        src={`/images/${platform}.svg`}
        alt="social"
        fill={true}
        className="px-1 md:px-0"
      />
    </motion.a>
  );
};
