"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const movingMusicTestimonialData = [
  {
    quote:
      "I've been amazed by the quality of instruction at Melody Music Academy. The teachers are knowledgeable, patient, and truly passionate about music.",
    name: "Alice Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "The guitar masterclass at Melody Music Academy helped me refine my skills and gave me the confidence to perform live. Highly recommended!",
    name: "Bob Smith",
    title: "Guitarist",
  },
  {
    quote:
      "Thanks to Melody Music Academy, I finally understand music theory! The course was engaging and easy to follow, even for a complete beginner like me.",
    name: "Emma Davis",
    title: "Music Enthusiast",
  },
  {
    quote:
      "The singing foundations course was exactly what I needed to improve my vocal technique. The instructors are supportive and encouraging.",
    name: "Michael Brown",
    title: "Singer",
  },
  {
    quote:
      "I never thought I could learn drums, but the crash course at Melody Music Academy made it possible. It's been a fun and rewarding experience!",
    name: "Sarah Wilson",
    title: "Drummer",
  },
  {
    quote:
      "As a songwriter, I found the workshop at Melody Music Academy invaluable. I've gained new insights and techniques that have elevated my songwriting.",
    name: "David Lee",
    title: "Songwriter",
  },
  {
    quote:
      "Learning the violin has always been a dream of mine. Thanks to Melody Music Academy, I'm finally making progress and enjoying every moment.",
    name: "Olivia Adams",
    title: "Violinist",
  },
  {
    quote:
      "The harmonica basics course is well-structured and easy to follow. I'm already playing some popular tunes after just a few lessons!",
    name: "Jacob Martinez",
    title: "Harmonica Player",
  },
  {
    quote:
      "Electronic music production has always fascinated me, and Melody Music Academy has provided me with the tools and knowledge to pursue it.",
    name: "Sophia Roberts",
    title: "Music Producer",
  },
  {
    quote:
      "The instructors at Melody Music Academy are not only skilled musicians but also excellent teachers. I've learned so much and continue to grow as a musician.",
    name: "Daniel Harris",
    title: "Music Student",
  },
];
function MovingTestimonial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Hermony: Voice of Success</h2>
      <div className="flex justify-center w-full  overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={movingMusicTestimonialData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MovingTestimonial;
