"use client";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Animation() {
  return (
    <Player
      src="https://assets2.lottiefiles.com/packages/lf20_x1ikbkcj.json"
      className="player"
      loop
      autoplay
    />
  );
}
