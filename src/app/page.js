"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/me.png"
            alt="my image"
            fill={true}
            className="object-contain"
          />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting the future of web development
          </h1>
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge.With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to exellence.
          </p>
          <div className="w-full flex gap-4">
            <botton className="p-4  rounded-lg ring-1 ring-black bg-black text-white">
              View my work
            </botton>
            <botton className="p-4  rounded-lg ring-1 ring-black bg-black text-white">
              Contact me
            </botton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
