"use client";
import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  // for experence section
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll">
        {/* TEXT CONATINER */}
        <div className="p-4  sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nostrum dignissimos in saepe deleniti necessitatibus doloremque,
              fugit odio! Repellat nobis magnam neque? Iure excepturi blanditiis
              facere debitis quaerat consequuntur temporibus?
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HMTL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WhiteBoard Animation
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEMS 1*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Frontend Developer
                  </div>
                  {/* JOB  DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    My current employment.Way better than the position before!
                  </div>
                  {/* JOB  DATE */}
                  <div className="p-3  text-red-400 text-sm font-semibold">
                    2025-present
                  </div>
                  {/* JOB  COMPANY */}
                  <div className="p-1 w-fit rounded bg-white text-sm font-semibold">
                    Beyond Technologies
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEMS 2*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">{/* JOB TITLE */}</div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    MERN Stack Trainee
                  </div>
                  {/* JOB  DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    My training empowered me and make me technically strong!
                  </div>
                  {/* JOB  DATE */}
                  <div className="p-3  text-red-400 text-sm font-semibold">
                    Oct-to-Dec-2024
                  </div>
                  {/* JOB  COMPANY */}
                  <div className="p-1 w-fit rounded bg-white text-sm font-semibold">
                    Knowledge Streams
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEMS 3*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Professor
                  </div>
                  {/* JOB  DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    My teaching inhance my concepts as well as boost the
                    confidence!
                  </div>
                  {/* JOB  DATE */}
                  <div className="p-3  text-red-400 text-sm font-semibold">
                    2022-2024
                  </div>
                  {/* JOB  COMPANY */}
                  <div className="p-1 w-fit rounded bg-white text-sm font-semibold">
                    Command Science Academy
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONATINER */}
        <div className="hidden lg:block w-1/3 xl:1/2">
          <a href="https://www.vecteezy.com/vector-art/640157-dark-blue-color-brain-shaped-gear-wheels">
            Dark blue color brain shaped gear wheels Vectors by Vecteezy
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
