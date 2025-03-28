import Image from "next/image";
import Link from "next/link";

const Founder = () => {
  return (
    <section id="founder" className="flex justify-center sm:p-6 xl:pb-12 xl:p-12 bg-gray-50">
      <div className="xl:grid xl:grid-cols-3 container gap-x-10 bg-white rounded-xl p-6 xl:p-0 h-full ">
        <div className=" md:order-first h-full w-full relative overflow-hidden xl:rounded-l-xl rounded-l-0  ">
          <Image
            src="/assets/images/jack-ramadam.jpg"
            alt="Jack Ramadan"
            fill
            sizes="100vw"
            style={{ objectFit: "cover"}}
            className=" bg-gray-200 shadow-box shadow-gray-500/30"
          />
        </div>
        <div className="flex flex-col justify-center col-span-2 ">
          <p className="text-lg xl:text-2xl mb-2 tracking-loose font-normal text-red-600  mt-4 xl:mt-12">
            Meet Our Founder
          </p>
          <p className="text-3xl xl:text-6xl mb-4 xl:mb-6  tracking-tighter font-semibold text-gray-900 ">
            Jack Ramadan
          </p>
          <p className="xl:text-xl   text-gray-900  mb-6">
            “I believe when we invest in our local communities, we build a
            stronger future. Factory East is not just a project. It{"'"}s a movement
            of hope, unity, and purpose.”{" "}
          </p>
          <p className="xl:text-xl   text-gray-900  mb-6">
            Jack Ramadan founded Factory East in 2008 with a clear vision: to
            create a space where young people feel seen, heard, and empowered.
            Growing up in East London, Jack witnessed first-hand the challenges
            faced by youth in underserved communities, from violence and gang
            culture to a lack of opportunities. Rather than turning a blind eye,
            he chose to build something different.
          </p>
          <Link
            href={
              "https://romanroadlondon.com/jack-ramadan-bow-boxing-club-factory-east/"
            }
            className=" mb-3 flex text-lg items-end gap-3 text-red-600 hover:opacity-80 cursor-pointer"
          >
            <span className="bg-red-500 rounded-full p-2">
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
            Read more about Jack on Roman Road London
          </Link>
          <Link
            href={"#"}
            className="flex text-lg items-end gap-3 text-red-600 hover:opacity-80 cursor-pointer mb-12"
          >
            <span className="bg-red-500 rounded-full p-2">
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
            Read the East London Advertiser article (2010)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Founder;
