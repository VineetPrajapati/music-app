"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const musicInstructorData = [
  {
    id: 1,
    name: "John Smith",
    designation: "Piano Instructor",
    image:
      "https://images.pexels.com/photos/6862365/pexels-photo-6862365.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Emily Johnson",
    designation: "Guitar Instructor",
    image: "https://images.pexels.com/photos/5648355/pexels-photo-5648355.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Vocal Coach",
    image: "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Sarah Davis",
    designation: "Drum Teacher",
    image: "https://images.pexels.com/photos/5118443/pexels-photo-5118443.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "David Lee",
    designation: "Music Production Mentor",
    image: "https://images.pexels.com/photos/1881773/pexels-photo-1881773.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Olivia White",
    designation: "Violin Instructor",
    image: "https://images.pexels.com/photos/167378/pexels-photo-167378.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  // Add more music instructors as needed
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl max-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl md:text-6xl lg:text-8xl text-white text-center font-bold mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-md lg:text-xl text-white mb-4 ">
          Discover the talented professionals who will guid your musical jouney
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={musicInstructorData} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
