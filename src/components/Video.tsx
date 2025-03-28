import Image from "next/image";
import Link from "next/link";

const Video = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center bg-white ">
      <div>
        <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-900 text-balance">
          Full Documentary
        </p>
        <p className="text-lg  mt-4 text-gray-900 text-balance mb-6">
          A heartfelt glimpse into the lives changed by Factory East.{" "}
        </p>
        <Link href={"#"}>
          🔗 [Watch the short preview on TikTok, Instagram, and Facebook]
        </Link>
      </div>

      <div className="h-full ">
        <Image
          height={0}
          width={0}
          src="https://i.pinimg.com/564x/59/41/a0/5941a02c048f6226031a0487451c2651.jpg"
          alt="#_"
          className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Video;
