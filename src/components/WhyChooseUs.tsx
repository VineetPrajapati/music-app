"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Introduction to Music Theory",
        description: "This course covers the basics of music theory including notes, scales, chords, and rhythm. Perfect for beginners or those looking to refresh their knowledge."
      },
      {
        title: "Piano for Beginners",
        description: "Learn to play the piano from scratch with our beginner-friendly lessons. No prior experience required!"
      },
      {
        title: "Guitar Masterclass",
        description: "Join our guitar masterclass to refine your skills and learn advanced techniques from experienced instructors."
      },
      {
        title: "Singing Foundations",
        description: "Discover the joy of singing and build a strong foundation with proper vocal techniques and exercises."
      },
      {
        title: "Drums Crash Course",
        description: "Get ready to rock with our drums crash course designed to get you playing basic beats and fills in no time."
      },
      {
        title: "Music Production Basics",
        description: "Explore the world of music production and learn the essentials of recording, mixing, and mastering."
      },
      {
        title: "Violin Essentials",
        description: "Take your violin skills to the next level with our comprehensive course covering essential techniques and repertoire."
      },
      {
        title: "Songwriting Workshop",
        description: "Unlock your creativity and learn the art of songwriting from industry professionals in our interactive workshop."
      },
      {
        title: "Harmonica Basics",
        description: "Learn to play the harmonica with our easy-to-follow lessons covering basic techniques and popular melodies."
      },
      {
        title: "Electronic Music Production",
        description: "Dive into the world of electronic music production and create your own beats and tracks using software synthesizers and sequencers."
      }
];

function WhyChooseUs() {
  return (
    <div className="">
        <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs