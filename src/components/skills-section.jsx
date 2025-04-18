"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function SkillsSection() {
  return (
    <div
      className="h-fit w-full rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center relative overflow-hidden">
      <InfiniteMovingCards images={images} direction="right" speed="fast" />
      <InfiniteMovingCards images={images} direction="left" speed="fast" />
    </div>
  );
}

const images = [
  {
    src: "/express.png",
    alt: "Express.js",
  },
  {
    src: "/javascript.png",
    alt: "Javascript",
  },
  {
    src: "/html.png",
    alt: "Html",
  },
  {
    src: "/css.png",
    alt: "Css",
  },
  {
    src: "/next.png",
    alt: "Next.js",
  },
  {
    src: "/tailwind.png",
    alt: "Tailwind",
  },
  {
    src: "/nodejs.png",
    alt: "Node.js",
  },
  {
    src: "/reactquery.png",
    alt: "Reactquery",
  },
  {
    src: "/postgresql.png",
    alt: "PostgreSQL",
  },
  {
    src: "/nextauth.png",
    alt: "NextAuth",
  },
  {
    src: "/mongodb.png",
    alt: "MongoDB",
  },
  {
    src: "/react.png",
    alt: "React",
  },
  {
    src: "/redux.png",
    alt: "Redux",
  },
  {
    src: "/redis.png",
    alt: "Redis",
  },
  {
    src: "/clerk.png",
    alt: "Clerk",
  },
];
