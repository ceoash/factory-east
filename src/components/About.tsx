import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="pt-10 overflow-hidden bg-gray-50  lg:pt-16 2xl:pt-30">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-3 2xl:grid-cols-2 2xl:gap-x-12 md:gap-20">
          <div className="order-2 col-span-2 2xl:col-span-1 pt-10">
            <h2 className=" text-2xl font-bold leading-tight text-black md:text-3xl xl:text-5xl">
              Founded in 2008, Factory East is an award-winning
              grassroots charity based in East London
            </h2>
           
            <p className="max-w-xl mt-2 text-xl leading-relaxed text-gray-600  md:mt-8 mb-12 md:mb-20">
              Our mission is to take young people off the streets and into safe, creative, and inspiring environments. Through music, boxing, media, and mentoring, we provide an outlet where youth can truly be themselves.
            </p>
          </div>

          <div className="relative order-1 col-1 flex justify-center ">
            <div>
            <div className="rounded-full bg-white aspect-square min-h-64 h-full w-full">
            <Image
              className="relative xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 h-auto w-full min-h-52"
              src="/assets/images/boxer-vector.png"
              alt=""
              width={"0"}
              height={"0"}
              sizes="100vw"

            />

            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
