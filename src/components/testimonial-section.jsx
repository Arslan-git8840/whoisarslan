"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Kalam } from "next/font/google";

const font_2 = Kalam({
  weight: ['400', '700'],
  subsets: ['latin']
})

export function Testimonial() {
  return (
    <div className="px-2 pb-6 md:px-8">
      <h2 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center md:mb-10 mb-3 py-2 ${font_2.className}`}>
        What People Say About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <TestimonialCard
          name="Kate Thomas"
          role="Product Designer at PixelCraft"
          image="https://randomuser.me/api/portraits/women/79.jpg"
          message="Working with Arslan was seamless. He translates complex UI ideas into smooth, responsive code effortlessly. A true professional!"
          effectColor="bg-purple-800"
        />
        <TestimonialCard
          name="Alexio Feros"
          role="Full Stack Developer at TechNest"
          image="https://randomuser.me/api/portraits/men/51.jpg"
          message="Arslan's frontend skills are top-tier. His React and Tailwind work is clean, fast, and visually stunning. Highly recommended!"
          effectColor="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
        />
        <TestimonialCard
          name="Emily Doe"
          role="Project Manager at CodeWaves"
          image="https://randomuser.me/api/portraits/women/68.jpg"
          message="He delivered on time, every time. From component logic to sleek animations, Arslan’s attention to detail is amazing."
          effectColor="bg-cyan-800"
          colors={[[125, 211, 252]]}
        />
      </div>
    </div>
  );
}

const TestimonialCard = ({ name, role, image, message, effectColor, colors }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-white/20 lg:max-w-sm max-w-[90%] w-full mx-auto p-6 rounded-xl bg-white/5 backdrop-blur-md overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-0"
          >
            <CanvasRevealEffect
              animationSpeed={3.8}
              containerClassName={effectColor}
              colors={colors}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/80" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-white shadow-xl mb-4"
        />
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400 mb-3">{role}</p>
        <p className="text-white text-sm italic leading-relaxed">“{message}”</p>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white group-hover/canvas-card:text-white ">
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }} />
    </svg>
  );
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
