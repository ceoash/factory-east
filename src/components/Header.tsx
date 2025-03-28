import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <section className="relative">
      <Navbar />
      <div className=" h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-red-500 to-red-800 items-center divide-white pb-6 lg:pb-0">
        <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto  lg:mx-0 lg:max-w-md lg:text-left text-white">
            <h1 className=" text-4xl font-bold   sm:text-5xl xl:text-5xl">
              Inspiring the Next Generation
            </h1>

            <p className="text-xl lg:text-2xl mt-4 lg:mt-6">
              Because every young person deserves a shot at greatness
            </p>
            <div className="pt-6 lg:pt-8">
              <Link href={`#about`} className=" border border-white text-white p-2 pr-4 pl-3 rounded-full flex items-center gap-2">
                <span className="bg-white/40 rounded-full p-2 border border-white">
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
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className=" inset-0 order-first lg:order-last relative  w-full h-[450px] lg:h-full">
          <Image
            className="object-cover object-right "
            src="/assets/images/hero.jpg"
            alt=""
            fill
          />
        </div>
      </div>
    </section>
  );
};
export default Header;
