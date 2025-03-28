import Image from "next/image";

const Impact = () => {
  return (
    <section id="impact" className="grid grid-cols-1 gap-8 lg:grid-cols-2  items-center xl:h-screen bg-red-600 text-white">
     <div className="h-full relative md:order-first min-h-90 max-h-90  lg:min-h-full ">
       
        <Image
          src="/assets/images/feature-1.jpg"
          alt="Factory East Impact in the community"
          fill
          className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden  object-cover object-center"
        />
      </div>
      <div className="px-10  pb-10  lg:pt-6 xl:py-12 ">
        <p className=" text-3xl lg:text-4xl xl:text-5xl lg:mt-8 tracking-tighter font-semibold text-white ">
        A Legacy of Impact
        </p>
        <p className="text-lg  mt-4 text-white mb-10">
        Over the past 15 years, Factory East has helped hundreds of young people turn their lives around. Whether it{"'"}s finding their voice in the recording booth or confidence in the ring, Factory East is a second home for many.
        </p>
        <h2 className="font-semibold text-2xl mb-4 ">Recognitions:</h2>
        <ul className="space-y-2">
            <li className="md:text-lg flex items-start"><Image src={'/assets/icons/icons-check.svg'} alt="arrow right" height={20} width={30} className="inline mr-3 mt-1" /><span>Nominated for <strong>The Queen{"'"}s Award for Voluntary Service (QVSA)</strong> 2017</span></li>
            <li className="md:text-lg flex items-start"><Image src={'/assets/icons/icons-check.svg'} alt="arrow right" height={20} width={30} className="inline mr-3 mt-1" /><span>Winner of <strong>Sports Personality of the Year</strong>  2017</span></li>
            <li className="md:text-lg flex items-start"><Image src={'/assets/icons/icons-check.svg'} alt="arrow right" height={20} width={30} className="inline mr-3 mt-1" /><span>Winner of <strong>Community Sports Development NPO of the Year</strong> 2023</span></li>
        </ul>
      </div>
      
    </section>
  );
};

export default Impact;
