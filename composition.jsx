import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Audio } from "remotion";
const ASCII_CHARS = " .:-=+*#%@";
const generateFrame = (frame, totalFrames) => {
  const width = 80;
  const height = 40;
  let result = [];
  const phase = frame / totalFrames;
  if (phase < 0.15) {
    for (let y = 0; y < height; y++) {
      let row = "";
      for (let x = 0; x < width; x++) {
        const cx = width / 2;
        const cy = height / 2;
        const dx = x - cx;
        const dy = (y - cy) * 1.5;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const apple = dist < 12 + Math.sin(frame * 0.1) * 2;
        const stem = x > cx - 2 && x < cx + 2 && y < cy - 10 && y > cy - 15;
        const intensity = apple || stem ? 9 : 0;
        row += ASCII_CHARS[intensity];
      }
      result.push(row);
    }
  } else if (phase < 0.3) {
    for (let y = 0; y < height; y++) {
      let row = "";
      for (let x = 0; x < width; x++) {
        const cx = width / 2 + Math.sin(frame * 0.15) * 8;
        const cy = height / 2;
        const dx = x - cx;
        const dy = (y - cy) * 2;
        const head = Math.sqrt(dx * dx + (dy + 15) * (dy + 15)) < 5;
        const body = Math.abs(dx) < 4 && y > cy - 5 && y < cy + 8;
        const armL = Math.abs(x - cx + 8 - Math.sin(frame * 0.2) * 5) < 2 && y > cy - 5 && y < cy + 2;
        const armR = Math.abs(x - cx - 8 + Math.sin(frame * 0.2) * 5) < 2 && y > cy - 5 && y < cy + 2;
        const legL = Math.abs(x - cx + 3 - Math.sin(frame * 0.25) * 3) < 2 && y > cy + 8 && y < cy + 18;
        const legR = Math.abs(x - cx - 3 + Math.sin(frame * 0.25) * 3) < 2 && y > cy + 8 && y < cy + 18;
        const intensity = head || body || armL || armR || legL || legR ? 9 : 0;
        row += ASCII_CHARS[intensity];
      }
      result.push(row);
    }
  } else if (phase < 0.5) {
    for (let y = 0; y < height; y++) {
      let row = "";
      for (let x = 0; x < width; x++) {
        const pattern = Math.sin(x * 0.3 + frame * 0.1) * Math.cos(y * 0.3 + frame * 0.15);
        const intensity = pattern > 0.3 ? 9 : 0;
        row += ASCII_CHARS[intensity];
      }
      result.push(row);
    }
  } else if (phase < 0.7) {
    for (let y = 0; y < height; y++) {
      let row = "";
      for (let x = 0; x < width; x++) {
        const cx = width / 2;
        const cy = height / 2;
        const dx = x - cx;
        const dy = (y - cy) * 1.5;
        const angle = Math.atan2(dy, dx);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const spiral = Math.sin(angle * 3 + dist * 0.3 - frame * 0.15) > 0;
        const intensity = spiral && dist < 25 ? 9 : 0;
        row += ASCII_CHARS[intensity];
      }
      result.push(row);
    }
  } else {
    for (let y = 0; y < height; y++) {
      let row = "";
      for (let x = 0; x < width; x++) {
        const wave = Math.sin(x * 0.5 - frame * 0.2 + y * 0.3);
        const intensity = wave > 0.5 ? 9 : 0;
        row += ASCII_CHARS[intensity];
      }
      result.push(row);
    }
  }
  return result;
};
const BadAppleComposition = () => {
  const frame = useCurrentFrame();
  const totalFrames = 3600;
  const asciiFrame = generateFrame(frame, totalFrames);
  const opacity = interpolate(
    frame,
    [0, 30, totalFrames - 30, totalFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#000" }, children: [
    /* @__PURE__ */ jsxDEV(Audio, { src: "badapple.mp3" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 113,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(
      AbsoluteFill,
      {
        style: {
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "monospace",
          fontSize: window.innerWidth < 768 ? "8px" : "14px",
          lineHeight: 1,
          color: "#fff",
          opacity,
          whiteSpace: "pre",
          letterSpacing: "0.05em"
        },
        children: asciiFrame.map((line, i) => /* @__PURE__ */ jsxDEV("div", { children: line }, i, false, {
          fileName: "<stdin>",
          lineNumber: 128,
          columnNumber: 11
        }))
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 114,
        columnNumber: 7
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 112,
    columnNumber: 5
  });
};
export {
  BadAppleComposition
};
