"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const upcomingWebinars = [
  {
    title: "Mastering Music Production Techniques",
    description:
      "Join us for an exclusive webinar where industry experts will share tips and techniques for mastering music production. Whether you're a beginner or an experienced producer, there's something for everyone!",
    link: <a href="https://example.com/webinar1">Register Now</a>,
  },
  {
    title: "Exploring Jazz Improvisation",
    description:
      "Discover the art of jazz improvisation in this interactive webinar led by renowned jazz musicians. Learn improvisation techniques, chord progressions, and how to solo like a pro.",
    link: <a href="https://example.com/webinar2">Register Now</a>,
  },
  {
    title: "Introduction to World Music",
    description:
      "Travel the world of music in this fascinating webinar exploring diverse musical traditions from around the globe. From African rhythms to Indian ragas, broaden your musical horizons.",
    link: <a href="https://example.com/webinar3">Register Now</a>,
  },
  {
    title: "Songwriting Workshop: Crafting Hit Songs",
    description:
      "Unlock the secrets of hit songwriting in this intensive workshop. Learn about song structure, melody writing, and lyric crafting from successful songwriters.",
    link: <a href="https://example.com/webinar4">Register Now</a>,
  },
  {
    title: "Understanding Music Theory Fundamentals",
    description:
      "Get a solid foundation in music theory essentials in this beginner-friendly webinar. Learn about notes, scales, chords, and more to enhance your musical understanding.",
    link: <a href="https://example.com/webinar5">Register Now</a>,
  },
  {
    title: "Advanced Guitar Techniques Masterclass",
    description:
      "Take your guitar skills to the next level with this advanced masterclass. Explore techniques such as fingerstyle, tapping, and advanced chord voicings.",
    link: <a href="https://example.com/webinar6">Register Now</a>,
  },
  {
    title: "Vocal Performance Workshop",
    description:
      "Refine your vocal technique and stage presence in this hands-on workshop. Receive personalized feedback and tips to improve your singing performance.",
    link: <a href="https://example.com/webinar7">Register Now</a>,
  },
  {
    title: "Electronic Music Production: From Basics to Beats",
    description:
      "Learn the basics of electronic music production and start creating your own beats in this introductory webinar. No prior experience required!",
    link: <a href="https://example.com/webinar8">Register Now</a>,
  },
  {
    title: "Piano Essentials: Techniques and Repertoire",
    description:
      "Discover essential piano techniques and popular repertoire in this comprehensive webinar. Suitable for beginners and intermediate players.",
    link: <a href="https://example.com/webinar9">Register Now</a>,
  },
];

function UpcomingWebnar() {
  return (
    <div className="p-12 bg-gray-900 ">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">
            Enhance your Musical Journey
          </p>
        </div>
        <div className="mt-10 max-w-5xl mx-auto px-8">
          <HoverEffect items={upcomingWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: webinar.link
              
            }
          ))} />
        </div>
        <div className="text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded-full border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-300 transition duration-200">
            Upcoming Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebnar;
