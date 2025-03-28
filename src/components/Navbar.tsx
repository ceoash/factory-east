"use client";

import Link from "next/link";
import { useState } from "react";
import { settings } from "../../config";

const NavItem = ({
  title,
  link,
  main,
}: {
  title: string;
  link: string;
  main: boolean;
}) => {
  if (main) {
    return (
      <Link
        href={link}
        className="bg-red-600 text-white p-2 pr-4 pl-3 rounded-full flex items-center gap-2"
      >
        <span className="bg-white/40 rounded-full p-2">
          <svg
            fill="#FFFFFF"
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </span>
        {title}
      </Link>
    );
  }

  return (
    <Link
      href={link}
      className="text-base font-medium  transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-0"
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    {
      id: 1,
      title: "About",
      link: settings.baseUrl + "#about",
      main: false,
    },
    {
      id: 2,
      title: "Our Impact",
      link: settings.baseUrl + "#impact",
      main: false,
    },
    {
      id: 3,
      title: "Our Founder",
      link: settings.baseUrl + "#founder",
      main: false,
    },
    {
      id: 4,
      title: "Newsletter",
      link: settings.baseUrl + "#newsletter",
      main: false,
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/contact",
      main: true,
    },
  ];

  return (
    <header className="absolute top-0 w-full z-10 text-gray-900">
      <div className=" bg-gradient-to-b from-white to-[#f2f2f2] border-b border-gray-100 shadow">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <Link
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full"
                  width={42}
                  viewBox="0 0 106.7 97.77"
                >
                  <g>
                    <g>
                      <path d="M9.14,57.05c2.14-10.04,4.17-19.59,6.21-29.14,1.81-8.48,3.69-16.94,5.43-25.44C21.13.74,21.69,0,23.6,0c27.13.06,54.26.04,81.39.05.45,0,.9.06,1.72.11-.37,1.89-.68,3.65-1.06,5.4-1.44,6.76-3.01,13.5-4.3,20.3-.42,2.23-1.38,2.73-3.49,2.72-17.07-.08-34.14,0-51.21-.11-2.34-.02-3.16.68-3.6,2.92-1.54,7.87-3.27,15.71-5.06,23.53-.18.81-1.22,2.02-1.88,2.03-8.84.14-17.69.09-26.97.09Z" />
                      <path className="fill-red-600" d="M77.34,71.1h-28.45c1.05-4.99,2.04-9.74,3.05-14.48.84-3.96,1.63-7.94,2.64-11.87.2-.78,1.28-1.9,1.97-1.91,8.66-.11,17.32-.06,25.99-.03.16,0,.32.17.77.42-1.98,9.23-3.97,18.55-5.97,27.86Z" />
                      <path d="M28.45,97.77H0c1.05-4.99,2.04-9.74,3.05-14.48.84-3.96,1.63-7.94,2.64-11.87.2-.78,1.28-1.9,1.97-1.91,8.66-.11,17.32-.06,25.99-.03.16,0,.32.17.77.42-1.98,9.23-3.97,18.55-5.97,27.86Z" />
                    </g>
                  </g>
                </svg>
                <div className="ml-3">
                  <span className="font-medium text-[22px] block -mb-2">
                    FACTORY
                  </span>
                  <span className="font-medium text-[22px]">EAST</span>
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-end ml-auto">
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {navbarItems.map((item) => (
                  <NavItem
                    key={item.id}
                    title={item.title}
                    link={item.link}
                    main={item.main}
                  />
                ))}
              </div>
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="p-2 -m-2  transition-all duration-200 lg:hidden hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-red-600 text-white p-4 px-6 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-10 flex justify-between">
          <Link
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full"
                  width={42}
                  viewBox="0 0 106.7 97.77"
                  fill="white"
                >
                  <g>
                    <g>
                      <path d="M9.14,57.05c2.14-10.04,4.17-19.59,6.21-29.14,1.81-8.48,3.69-16.94,5.43-25.44C21.13.74,21.69,0,23.6,0c27.13.06,54.26.04,81.39.05.45,0,.9.06,1.72.11-.37,1.89-.68,3.65-1.06,5.4-1.44,6.76-3.01,13.5-4.3,20.3-.42,2.23-1.38,2.73-3.49,2.72-17.07-.08-34.14,0-51.21-.11-2.34-.02-3.16.68-3.6,2.92-1.54,7.87-3.27,15.71-5.06,23.53-.18.81-1.22,2.02-1.88,2.03-8.84.14-17.69.09-26.97.09Z" />
                      <path className="fill-gray-600" d="M77.34,71.1h-28.45c1.05-4.99,2.04-9.74,3.05-14.48.84-3.96,1.63-7.94,2.64-11.87.2-.78,1.28-1.9,1.97-1.91,8.66-.11,17.32-.06,25.99-.03.16,0,.32.17.77.42-1.98,9.23-3.97,18.55-5.97,27.86Z" />
                      <path d="M28.45,97.77H0c1.05-4.99,2.04-9.74,3.05-14.48.84-3.96,1.63-7.94,2.64-11.87.2-.78,1.28-1.9,1.97-1.91,8.66-.11,17.32-.06,25.99-.03.16,0,.32.17.77.42-1.98,9.23-3.97,18.55-5.97,27.86Z" />
                    </g>
                  </g>
                </svg>
                <div className="ml-3">
                  <span className="font-medium text-[22px] block -mb-2">
                    FACTORY
                  </span>
                  <span className="font-medium text-[22px]">EAST</span>
                </div>
              </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="transition-all duration-300 hover:text-red-200 text-3xl"
            >
              {"✖"}
            </button>
          </div>

          <ul className="space-y-4 flex flex-col text-xl mb-10">
            {navbarItems.map((item) => {
              if (item.main) return;
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="transition-all duration-300 hover:text-red-200"
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>

          <NavItem title="Contact Us" link={settings.baseUrl + "contact"} main />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
