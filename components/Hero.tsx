"use client";

import { motion } from 'framer-motion';
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Button } from "./ui/moving-border";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Find Verified Rentals.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Designed for Students and Lectures.
        </div>
        <div className="flex gap-4">
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            List a Property
          </button>
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
            Browse Listings
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo;
