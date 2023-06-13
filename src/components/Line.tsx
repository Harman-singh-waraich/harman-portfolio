import * as React from "react";
const Line = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.1 -2.1 4.2 4.2">
    <style>
      {
        "\n#path {\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: dash 10s linear forwards infinite;\n}\n\n@keyframes dash {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n  "
      }
    </style>
    <path
      id="path"
      d="m 0 0 l -1 0 l 0 1 l 3 0 l 0 -3 l -2 0 l 0 4 l -2 0 l 0 -3 l 3 0 l 0 1 l -1 0"
      stroke="#C778DD"
      strokeWidth={0.1}
      fill="none"
    />
  </svg>
);
export default Line;
