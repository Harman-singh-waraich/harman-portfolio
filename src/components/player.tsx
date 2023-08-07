"use client";

import { useRive } from "@rive-app/react-canvas";

export const Animation = ({ src }: { src: string }) => {
  const { rive, RiveComponent } = useRive({
    src: `${src}.riv`,
    artboard: src,
    autoplay: true,
    // layout: new Layout({
    //   fit: Fit.FitWidth,
    //   alignment: Alignment.TopCenter,
    // }),
  });
  // JSON.parse(data[src])
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <RiveComponent />
    </div>
  );
};
