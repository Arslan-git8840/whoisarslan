import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { GlobeGlobe } from "./globe-globe";
import Image from "next/image";
import Navigation from "./navigation";
import { Text } from "./text";
import ColourfulText from "./ui/colourful-text";
import { Kalam, Playwrite_AR } from 'next/font/google'
import { SkillsSection } from "./skills-section";
import { CardSpotlightDemo } from "./canvas-card";
import { Testimonial } from "./testimonial-section";
import { Contact } from "./contact-section";

const font = Playwrite_AR({
  weight: '400',
  // subsets: ['latin']
})

const font_2 = Kalam({
  weight: ['400', '700'],
  subsets: ['latin']
})



export function BgLines() {
  return (
    <div className="bg-black selection:bg-pink-700">


      <BackgroundLines className="flex pt-2 w-full flex-col px-4 space-y-6">
        {/* Navigation */}
        <Navigation />
        <div className="flex flex-col flex-1 lg:flex-row justify-between gap-8 lg:gap-0">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-16 lg:pt-32 pt-8 flex flex-col items-start space-y-10">
            {/* <img src="/gpt.png" alt="gpt" className="rounded-full h-36 w-36 object-fill" /> */}
            <div className="flex py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="text-[#b49bff] mr-[10px] h-5 w-5"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path></svg><h1 className="text-[13px] text-[#ba9cff]">Fullstack Developer Portfolio</h1></div>


            <span className="text-5xl font-bold text-gray-200">Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
              project exprience</span>

            <h2 className={`bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-400 dark:from-neutral-100 dark:to-white text-base sm:text-lg md:text-xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight ${font.className}`}>
              Hey, <ColourfulText text="I'm Arslan" /> — a full-stack web developer based in <span className="text-[#FF66DB]">Lucknow</span>.
            </h2>
          </div>

          {/* Globe Section */}
          <div className="w-full lg:flex-1 flex justify-center">
            {/* <GlobeGlobe /> */}
            <img src="/mainIconsdark.svg" alt="mainIconsdark" className="h-[85%]" />
          </div>

        </div>
      </BackgroundLines>

      {/* skills section */}

      <div className="relative py-6">

        <div className="w-full h-auto flex flex-col items-center justify-center">
          <div className="flex py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="text-[#b49bff] mr-[10px] h-5 w-5"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path></svg><h1 className="text-[13px] text-[#ba9cff]">Tools I work with</h1>
          </div>
          <div className={`text-[30px] text-gray-100 font-semibold mt-[10px] text-center mb-[15px] ${font_2.className}`}>Making apps with modern technologies</div>
          <div className={`text-[20px] text-gray-200 mb-10 mt-[10px] text-center ${font.className}`}>Never miss a task, deadline or idea</div>
        </div>

        <SkillsSection />
      </div>


      {/* projects */}
      <div className="bg-black px-4 py-6">
        <h1 className={`text-4xl text-center text-transparent p-5 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${font.className} font-bold`}> My Projects </h1>
        {/* 
        <div className="py-4 flex items-center justify-center gap-6">
          <div className="relative">
       
            <img src="/macbook 8.png" alt="macbook" className="" />

            <img
              src="/creams.jpg"
              alt="creams"
              className="absolute top-[4%] left-[12%]  h-[90%] object-cover rounded-[4px]"
            />
          </div>
          <div className="relative">
        
            <img src="/macbook 8.png" alt="macbook" className="" />

      
            <img
              src="/creams.jpg"
              alt="creams"
              className="absolute top-[4%] left-[12%]  h-[90%] object-cover rounded-[4px]"
            />
          </div>
          <div className="relative">
      
            <img src="/macbook 8.png" alt="macbook" className="" />

        
            <img
              src="/creams2.png"
              alt="creams"
              className="absolute top-[4%] left-[11.5%] w-[76%] h-[89.5%] object-cover rounded-[4px]"
            />
          </div>
        </div> */}

        <div className="mt-6">
          <CardSpotlightDemo />
        </div>

      </div>

      {/* testimonial-section */}

      <div className="bg-black py-4 px-4 md:px-8">
        <Testimonial />
      </div>

      {/* contact-section */}

      <div className="bg-black py-4 px-4 md:px-8">
        <Contact />
      </div>


    </div>
  );
}
