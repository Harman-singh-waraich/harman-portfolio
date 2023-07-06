"use client";
import coder from "@/assets/coder.json";
import wumpus from "@/assets/wumpus.json";
import dynamic from "next/dynamic";
const Player = dynamic(() =>
  import("@lottiefiles/react-lottie-player").then((mod) => mod.Player)
);

export const Animation = ({ src }: { src: string }) => {
  const data: { [key: string]: string } = {
    coder: JSON.stringify(coder),
    wumpus: JSON.stringify(wumpus),
  };
  return (
    <Player src={JSON.parse(data[src])} className="player" loop autoplay />
  );
};
