"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import coder from "@/assets/coder.json";
import wumpus from "@/assets/wumpus.json";

export default function Animation({ src }: { src: string }) {
  const data: { [key: string]: string } = {
    coder: JSON.stringify(coder),
    wumpus: JSON.stringify(wumpus),
  };
  return (
    <Player src={JSON.parse(data[src])} className="player" loop autoplay />
  );
}
