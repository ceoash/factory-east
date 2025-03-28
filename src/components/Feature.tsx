import Image from "next/image";

const Feature = () => {
  return (
    <section className="bg-white">
      <div className="px-8 pb-24 pt-14 mx-auto md:px-12 lg:px-32 max-w-screen-2xl flex flex-col  justify-center">
      
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-10 items-center mb-20">
              <div>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 ">
                  Music Studio
                </p>
                <p className=" mt-4 text-gray-700 text-xl">
                  Step into our fully-equipped, professional-grade recording
                  studio, a safe space where creativity comes to life.
                </p>
                <p className="mt-6 text-gray-700  text-xl">
                  Whether you{"'"}re a beginner or an aspiring artist, our music
                  programme offers hands-on experience in:
                </p>
                <ul className="my-4 space-y-2 text-gray-700">
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Writing lyrics and composing tracks</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Music production and mixing using industry software</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Sound engineering and vocal coaching</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Collaborating with peers and mentors</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />
                    Releasing your own music on platforms like Spotify and
                    YouTube
                  </li>
                </ul>
                <p className="text-lg">
                  Our goal is to help young people find their voice, both
                  literally and metaphorically.
                </p>
              </div>
              <div className="h-full order-first">
                <img
                  src="/assets/images/studio.jpg"
                  alt="#_"
                  className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full rounded-xl object-cover object-center"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-10 items-center mb-20">
              <div>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 ">
                  Boxing Club
                </p>
                <p className="mt-4 text-gray-700 text-xl">
                  More than just a sport, boxing at Factory East builds
                  discipline, resilience, and respect. Our qualified coaches
                  offer structured training sessions that focus on:
                </p>

                <ul className="my-4 space-y-2 text-gray-700">
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Technique, sparring, and fitness</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Managing anger and emotions through physical outlet</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Building confidence and self-worth</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />
                    Learning accountability, teamwork, and mental strength
                  </li>
                </ul>

                <p className="mt-4 text-gray-700 text-lg">
                We encourage all participants regardless of experience to grow stronger inside and out.


                </p>
              </div>
              <div className="h-full order-first lg:order-last ">
                <img
                  src="/assets/images/boxing.jpg"
                  alt="#_"
                  className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full rounded-xl object-cover object-center"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-10 items-center mb-20">
              <div>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 ">
                  Media Workshops
                </p>
                <p className="mt-4 text-gray-700 text-xl ">
                  From behind-the-camera skills to storytelling, our creative
                  media sessions teach practical skills for the digital age.
                </p>
                <p className="mt-6 text-gray-700 text-xl ">
                  Participants learn:
                </p>

                <ul className="my-4 space-y-2 text-gray-700">
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Photography and video production techniques</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />
                    Editing with tools like Adobe Premiere Pro and Photoshop
                  </li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Planning and producing short films and documentaries</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Social media content creation</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Interviewing, scripting, and visual storytelling</li>
                </ul>

                <p className="text-gray-700 text-lg ">
                  These workshops equip young people with the tools to
                  <strong>
                    express themselves and build real-world skills
                  </strong>
                  .
                </p>
              </div>
              <div className="h-full order-first">
                
                <img
                  src="/assets/images/media.jpg"
                  alt="#_"
                  className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full rounded-xl object-cover object-center"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-10 items-center md:flex-row-reverse">
              <div>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 ">
                  Mentorship
                </p>
                <p className="mt-4 text-gray-700 text-xl">
                  Every young person deserves someone in their corner. Our
                  mentorship programme connects youth with positive role models
                  who{"'"}ve walked similar paths.
                </p>
                <p className="mt-6 text-gray-700  text-xl">Mentors provide:</p>
                <ul className="my-4 space-y-2 text-gray-700">
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Emotional support and a listening ear</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Help with life skills, school, and job readiness</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />Guidance through difficult decisions</li>
                  <li className="text-[18px]"><Image src={'/assets/icons/icons-arrow-right.png'} alt="arrow right" height={20} width={30} className="inline mr-3" />
                    Encouragement to set goals and take ownership of their
                    future
                  </li>
                </ul>

                <p className="text-gray-700 text-lg ">
                  Through regular 1:1 sessions, we create lasting relationships
                  that <strong>nurture growth, trust, and hope</strong>.
                </p>
              </div>
              <div className="h-full order-first lg:order-last">
             
                <img
                  src="/assets/images/mentorship.jpg"
                  alt="#_"
                  className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full rounded-xl object-cover object-center"
                />
              </div>
       
        </div>
      </div>
    </section>
  );
};

export default Feature;
