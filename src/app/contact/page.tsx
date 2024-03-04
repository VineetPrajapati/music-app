import Link from "next/link";
import React from "react";


function page() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36 text-center">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>
      <p className="text-neutral-400 md:text-lg lg:text-xl flex-wrap mx-20">
        We are here to help with any questions about courses, programs, or
        events. Reach out and lets us know how we can assist you in your musical
        journey.
      </p>
      <div>
        <input
          type="text"
          className="bg-gray-800 w-4/6 mt-10 pl-6 py-4 placeholder-gray-500 border border-gray-800 rounded-lg"
          placeholder="Your email addess"
        />

        <input
          type="text"
          className="bg-gray-800 w-4/6 mt-10 pl-6 pt-4 pb-36 placeholder-gray-500 border border-gray-800 rounded-lg"
          placeholder="Your message"
        />
        <p className="mt-10 ">
        <Link
          className="px-4 py-2 rounded-lg mt-4 text-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-300 transition duration-200"
          href={"#"}
        >
          Send message
        </Link>
        </p>

        
      </div>
    </div>
  );
}

export default page;
