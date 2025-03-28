"use client";

import React, { useState } from "react";
import Link from "next/link";

import { isEmailValid } from "../../utils/validate";

const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const validate = (str: string) => {
    let isValid = true;

    if (!str) {
      alert("Error: enter a valid email address");
      isValid = false;
    }
    if (!isEmailValid(str)) {
      alert("Error: email address is not valid");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (!validate(email)) {
      return;
    }

    alert("Subscribed successfully");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section id="newsletter" className="relative bg-red-600">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Subscribe to our newsletter
          </h2>
          <p className="mb-6 text-base text-red-200 md:text-lg">
            Stay connected with the latest updates, events, and stories from
            Factory East. Be the first to hear how we{"'"}re empowering young people
            and transforming our community one step at a time.
          </p>
          <form
            className="flex items-center w-full mb-4 md:flex-row md:px-16"
            onSubmit={handleSubmit}
          >
            <input
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              type="email"
              value={email}
              className="flex-grow w-full h-12 px-4 mb-3 bg-white/20 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center xl:w-full w-32 h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded  md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide text-center text-red-100 sm:text-sm sm:mx-auto md:mb-16">
            We{"'"}ll never send you junk. No spam, just impact.
          </p>
          <Link
            href="#footer"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-white rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="white"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
