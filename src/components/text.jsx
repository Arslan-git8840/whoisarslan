"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";

export function Text() {
  return (
    <div>
      <h1
        className="text-base md:text-lg lg:text-xl font-bold text-center text-white relative z-2 font-sans">
        The best <ColourfulText text="components" /> <br /> you will ever find
      </h1>
    </div>
  );
}
