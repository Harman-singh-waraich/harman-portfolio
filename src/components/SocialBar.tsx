"use client";
import { useEffect } from "react";
import { SocialIcon } from "./SocialIcon";
import { motion, stagger, useAnimate } from "framer-motion";

export const SocialBar = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("a", { opacity: 1 }, { delay: stagger(0.2) });
  });
  return (
    <motion.div
      ref={scope}
      className="hidden md:flex lg:flex flex-col justify-center align-middle content-center items-center min-h-auto float-left fixed w-10 z-50 "
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "128px" }}
        className="w-0.1 h-32 bg-white"
      />

      {["Github", "Discord", "Twitter", "Linkedin", "Email"].map(
        (platform: string, index: number) => (
          <SocialIcon platform={platform} key={index} />
        )
      )}
    </motion.div>
  );
};
