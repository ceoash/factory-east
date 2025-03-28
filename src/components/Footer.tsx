import Link from "next/link";

const Footer = () => {
  return (
    <section
      id="footer"
      className="px-4 pt-16  md:px-24 lg:px-8 bg-white flex flex-col"
    >
      <div className=" gap-10 row-gap-6 mb-10 sm:flex justify-between  mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="sm:col-span-2 lg:col-span-1 pb-8 sm:pb-0">
          <Link
            href="/"
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
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Factory East is a grassroots charity based in East London,
              dedicated to supporting and uplifting young people through
              creativity, discipline, and mentorship.
            </p>
          </div>
        </div>
      
        <div className="max-w-sm">
          <span className="text-base font-bold tracking-wide text-gray-900">
            Follow Us
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              href="https://x.com/factoryeast"
              className="text-gray-500 transition-colors duration-300 hover:text-red-600"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/factoryeastcharity"
              className="text-gray-500 transition-colors duration-300 hover:text-red-600"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/factoryeast"
              className="text-gray-500 transition-colors duration-300 hover:text-red-600"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
              </svg>
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Follow us on social media to stay connected with our latest
            projects, events, and success stories.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-6 border-t border-gray-200 lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright {new Date().getFullYear()} Factory East. All rights
          reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
     
          <li>
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-red-600"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-red-600"
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
