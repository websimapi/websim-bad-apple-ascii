import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { BadAppleComposition } from "./composition.jsx";
createRoot(document.getElementById("app")).render(
  /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: /* @__PURE__ */ jsxDEV(
    Player,
    {
      component: BadAppleComposition,
      durationInFrames: 3600,
      fps: 30,
      compositionWidth: 1080,
      compositionHeight: 1080,
      loop: true,
      controls: true,
      autoplay: true,
      style: { maxWidth: "100%", maxHeight: "100%" }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 8,
      columnNumber: 5
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 3
  })
);
