import Image from "next/image";
import Link from "next/link";

const FeatureAlt = () => {
  return (
    <section className="xl:py-10 bg-white xl:pb-28">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto xl:grid xl:grid-cols-4  xl:gap-24 xl:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <h2 className="mt-3 mb-4 text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 md:text-3xl ">
            Real Skills. Real Support. Real Change.
          </h2>
          <p className="font-light text-gray-500 sm:text-xl ">
            At Factory East, we provide creative and empowering programmes
            designed to help young people grow, express themselves, and build
            brighter futures.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 ">
            <div className="">
              <Link
                href="#impact"
                className="inline-flex items-center text-base font-medium text-red-500 hover:text-red-800"
              >
                Our Impact
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="">
              <Link
                href="/contact"
                className="inline-flex items-center text-base font-medium text-red-500 hover:text-red-800 "
              >
                Contact Us
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div className="flex flex-row xl:flex-col">
            <span className="h-20 w-24 mt-4 xl:mt-0">
              <svg
                height={50}
                viewBox="-22 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M100.403 93.9723C108.026 84.5791 112.923 73.2919 114.57 61.329C117.808 37.543 108.046 18.7158 87.0831 8.31582C80.6111 5.10476 73.5628 3.37841 66.8993 1.88638C49.8317 -1.93541 34.2043 1.0261 20.448 10.6853C9.25384 18.5468 3.10338 28.1492 1.64562 40.0425C0.546596 49.1026 1.14208 58.2869 3.40198 67.1313C7.96277 85.1859 16.123 99.3758 28.3483 110.51C28.6528 110.788 28.9613 111.064 29.2704 111.34C30.6314 112.484 31.8855 113.749 33.0175 115.118C34.0539 116.46 35.2477 118.193 35.2764 119.685C35.3816 125.287 35.0538 130.807 34.6839 135.935C34.4546 139.109 34.0874 142.334 33.7319 145.453C33.5143 147.359 33.2973 149.265 33.1085 151.177C32.6877 155.421 34.1417 157.544 38.1268 158.505C40.4909 159.09 42.9164 159.393 45.3523 159.409H45.5762C53.6471 159.341 61.8461 159.157 69.7802 158.978L75.0728 158.861C80.2099 158.749 82.2799 156.887 82.7105 151.99C83.4645 143.414 83.8265 136.828 83.882 130.636L83.8899 129.974C83.9343 126.301 83.984 122.157 80.7679 118.614L86.7525 111.103C91.3146 105.375 95.8649 99.6653 100.403 93.9723ZM75.1669 117.569L66.2054 116.895C66.193 116.822 66.191 116.749 66.1988 116.676C67.5194 111.62 68.8536 106.569 70.201 101.522C73.1982 90.2311 76.2966 78.5563 79.1102 67.0129C81.2815 58.1071 81.3507 50.2149 79.3199 42.8867C78.3209 39.2809 76.4234 36.6176 73.8313 35.1848C72.5826 34.5334 71.2151 34.1405 69.8102 34.03C68.4054 33.9196 66.9921 34.0937 65.6568 34.542C64.5923 34.8947 63.5669 35.3552 62.5968 35.9159L62.1983 36.1277C61.571 36.46 60.9889 36.8433 60.3727 37.2446L60.0335 37.4657C59.8643 37.2536 59.6989 37.0421 59.5342 36.832C58.9319 36.0345 58.2889 35.2682 57.6075 34.5363C53.9856 30.7698 48.774 30.403 44.636 33.6258C41.8354 35.8836 39.7128 38.8648 38.5004 42.243C34.2336 53.1406 33.9168 64.5031 37.5589 76.0139C39.4649 82.038 41.4839 88.1349 43.4395 94.0302C44.1766 96.2545 44.9119 98.4796 45.6455 100.705C47.2413 105.698 48.1749 110.876 48.4225 116.11H41.5865C41.2056 111.198 37.9273 107.868 34.7576 104.642C34.1696 104.046 33.5816 103.448 33.0112 102.839C19.9208 88.8971 12.7372 73.9651 11.0514 57.19C10.4706 51.4131 10.0406 45.262 10.8201 39.4213C11.9963 30.6083 17.0477 23.2264 26.2621 16.8524C37.485 9.08915 49.9659 6.58183 63.351 9.40004C70.4081 10.8849 77.2643 12.4843 83.5723 15.6992C99.903 24.0244 107.371 38.5122 105.166 57.5971C103.646 70.7567 97.5605 82.3599 85.4326 95.221C82.2485 98.5999 78.692 102.745 76.4587 107.873C75.2989 110.536 74.1698 113.679 75.1669 117.569ZM75.5746 133.886L75.2009 139.631H41.4095V132.867L75.5746 133.886ZM74.5285 146.977L74.3331 151.391C64.2234 151.838 52.5683 152.215 41.0617 151.341C41.0389 151.184 41.0155 151.036 40.9966 150.896C40.9136 150.484 40.8711 150.065 40.8703 149.645C40.9154 148.666 41.0109 147.682 41.1109 146.64C41.1344 146.4 41.1576 146.156 41.1807 145.909L74.5285 146.977ZM40.8227 121.832L41.7866 121.86C53.4133 122.2 64.4049 122.521 75.6445 123.687L75.8079 126.452C64.2955 127.086 52.7562 127.059 41.2474 126.368L40.8227 121.832ZM49.5229 92.2123C49.0994 90.8731 48.6734 89.5339 48.2703 88.1908C46.0748 80.9134 43.9636 73.7739 42.2674 66.4386C40.6907 59.625 41.6141 52.4138 45.1634 43.7446C45.9469 42.0089 47.0673 40.4448 48.4604 39.1418C48.7186 38.8346 49.039 38.5847 49.4007 38.4089C49.7623 38.233 50.1569 38.135 50.5591 38.1212C51.321 38.1563 52.1108 38.6553 52.906 39.6036C54.9571 42.0498 55.0012 42.6681 53.3291 45.6151C49.9274 51.6119 48.5419 57.3726 49.094 63.2256C49.2234 65.0669 49.6552 66.8737 50.3722 68.5759C50.6604 69.4331 51.1794 70.1954 51.8726 70.7794C52.5658 71.3635 53.4068 71.7472 54.3038 71.889C55.2007 72.0308 56.1195 71.9248 56.9602 71.5827C57.8008 71.2406 58.531 70.6754 59.0716 69.9489C60.2834 68.5407 61.2333 66.9284 61.8767 65.1885C64.3123 59.0183 64.7819 52.2516 63.2214 45.8066C62.7294 43.6954 64.2292 41.9221 67.3384 40.9406C68.6008 40.5419 69.5926 40.5414 70.2846 40.9362C70.6433 41.1861 70.9459 41.5077 71.1726 41.8804C71.4 42.253 71.5463 42.6687 71.6025 43.1008C72.3866 46.5382 73.3569 50.816 72.8675 54.6586C72.0181 61.3038 70.5721 68.0015 69.1719 74.4783C68.9105 75.6965 68.6498 76.9141 68.3884 78.131C67.5494 82.0692 66.6327 86.0627 65.7458 89.9241C64.5559 95.1105 63.3281 100.474 62.263 105.782C61.813 108.387 61.562 111.02 61.5123 113.662C61.464 114.722 61.4148 115.808 61.3417 116.922L53.3766 116.434C54.4606 107.823 51.9528 99.8897 49.5247 92.2123H49.5229ZM56.2732 58.6877L56.7346 55.8619C56.7328 56.8222 56.5777 57.7759 56.2752 58.6877H56.2732Z"
                    className="fill-red-600 "
                  />
                </g>
              </svg>
            </span>
            <div className="w-full">
              <h3 className="mb-2 text-2xl text-gray-900 font-bold  mt-3 xl:-mt-4">
                {" "}
                Youth-Led Approach
              </h3>
              <p className="font-light text-gray-500 ">
                We empower young people to lead, create, and shape the
                programmes they take part in.
              </p>
            </div>
          </div>
          <div className="flex flex-row xl:flex-col">
            <span className="h-20 w-24 mt-4 xl:mt-0">
              <svg
                height={50}
                viewBox="0 -8.5 153 153"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M91.2384 20.6701C95.7221 20.6701 99.8352 20.6396 103.948 20.6791C107.618 20.7134 111.33 20.5003 114.948 20.9692C122.694 21.9749 127.121 26.546 127.908 34.3219C128.418 39.3617 128.414 44.4526 128.655 49.8305C130.554 50.1485 132.434 50.5687 134.287 51.0894C142.568 53.7997 148.835 58.7449 151.593 67.2626C154.333 75.7347 152.169 82.7542 145.143 88.259C141.075 91.4466 136.571 93.813 130.954 94.5584C131.364 98.1514 131.825 101.617 132.143 105.101C132.545 109.505 132.85 113.918 133.149 118.329C133.189 119.215 133.134 120.102 132.983 120.977C131.771 128.961 127.981 132.464 119.815 132.735C112.008 132.994 104.188 132.879 96.3796 133.117C90.6995 133.291 87.1266 130.786 85.1414 125.579C84.1205 123.006 82.9293 120.505 81.5763 118.089C76.9386 109.549 66.0501 108.95 59.6354 114.026C55.1902 117.546 52.6126 122.251 50.9588 127.53C50.7171 128.268 50.5583 129.032 50.4852 129.805C50.2895 132.25 48.9196 133.743 46.5965 134.153C42.5519 134.865 38.4526 135.944 34.3976 135.849C26.8302 135.673 19.2811 134.774 11.7261 134.151C11.0641 134.064 10.4115 133.917 9.77734 133.71C3.51009 131.974 1.05277 128.955 1.00645 122.511C0.947739 114.313 1.05348 106.114 1.08545 97.9156C1.08936 96.9209 1.10225 95.9249 1.06506 94.9308C0.950247 91.8766 2.16969 90.5179 5.32516 90.2679C7.87395 90.0633 10.4227 89.8392 12.9761 89.7064C21.0953 89.2855 27.5718 76.0371 21.7638 67.837C19.4153 64.5223 15.8972 62.8249 11.786 62.4616C9.90136 62.2945 8.0146 62.132 6.13647 61.9073C5.39152 61.8787 4.68802 61.56 4.17811 61.0201C3.6682 60.4802 3.39309 59.7625 3.41235 59.0227C3.40778 51.0712 2.17267 43.0855 3.97775 35.1787C4.14998 34.4243 4.36219 33.6749 4.60813 32.9411C6.40147 27.5944 10.0534 24.2825 15.74 23.7722C20.2791 23.3655 24.8651 23.4444 29.4309 23.3706C32.8695 23.3149 36.3102 23.359 39.8904 23.359C40.0861 22.7723 40.3053 22.1596 40.5036 21.5411C44.0198 10.5912 51.6869 3.73483 62.6303 0.951367C72.5241 -1.56528 85.2484 2.23621 89.5677 15.423C90.1516 17.2001 90.7061 18.9914 91.2384 20.6701ZM9.29186 55.5689C10.502 55.5689 11.1566 55.5689 11.8109 55.5689C25.592 55.5359 34.6212 66.7451 32.8396 79.7726C32.2218 84.2917 30.0135 88.1159 27.5013 91.8028C25.395 94.8408 22.3325 97.099 18.7938 98.2233C15.1928 99.5587 11.2782 99.8261 7.52689 98.9926C7.43726 99.4693 7.3899 99.9531 7.38579 100.438C8.07925 107.487 8.74348 114.541 9.52697 121.581C9.79574 123.991 10.4011 124.536 12.9506 124.837C17.048 125.321 21.1577 125.864 25.2741 125.991C31.4891 126.186 37.7142 126.042 43.9533 126.042C44.0036 125.982 44.1059 125.912 44.1339 125.816C44.357 125.075 44.5463 124.326 44.7818 123.588C46.8766 117.021 49.9967 111.102 55.7544 106.927C60.73 103.319 66.2817 101.622 72.4406 102.573C83.0089 104.207 88.9988 110.938 92.3083 120.528C92.7701 121.865 93.1061 123.248 93.523 124.684C94.7983 124.684 95.9002 124.715 97 124.678C101.46 124.528 105.92 124.387 110.378 124.184C113.385 124.046 116.396 123.89 119.391 123.596C122.47 123.295 123.074 122.754 123.175 119.686C123.277 116.596 123.077 113.492 122.922 110.399C122.677 105.542 122.378 100.685 122.059 95.8277C122.033 94.6238 121.86 93.4283 121.544 92.2658C120.347 88.555 121.224 86.559 124.95 85.4542C127.4 84.7282 129.934 84.2885 132.425 83.692C135.699 82.9382 138.708 81.3191 141.132 79.0071C141.956 78.252 142.61 77.3343 143.053 76.3124C143.496 75.2904 143.718 74.1875 143.705 73.0756C143.808 69.9515 142.907 66.8766 141.131 64.2957C138.146 60.1367 134.028 57.6297 129.169 56.2956C128.111 56.0974 127.018 56.2068 126.021 56.6104C122.934 57.7113 121.03 56.8046 120.48 53.5361C120.117 51.2398 119.919 48.9209 119.886 46.5968C119.799 42.9443 120.012 39.2826 119.859 35.6346C119.638 30.3889 117.947 28.538 112.821 27.5031C111.948 27.3286 111.06 27.23 110.169 27.2084C104.816 27.0737 99.4607 26.9979 94.1081 26.8386C92.6423 26.7952 91.44 26.7784 90.1698 27.9687C88.3634 29.6597 86.1363 29.2401 84.7102 27.1716C83.9456 25.9566 83.3644 24.6366 82.986 23.2541C82.2926 21.0411 81.8229 18.7602 81.1646 16.5357C80.0824 12.876 77.6001 10.4636 74.0735 9.10034C68.7776 7.05257 63.5703 7.26758 58.6078 10.0718C51.8402 13.896 46.8711 19.2557 44.9949 26.9358C44.4078 29.3443 42.9414 30.2478 40.7762 30.4168C39.2172 30.4944 37.6551 30.4809 36.0976 30.3766C30.0842 30.1396 24.0941 29.5347 18.0506 30.3158C14.3061 30.7995 12.3334 32.559 11.3079 36.1079C9.4937 42.3937 10.3063 48.8538 9.29186 55.5689Z"
                    className="fill-red-600 "
                  />
                </g>
              </svg>
            </span>
            <div className="w-full">
              <h3 className="mb-2 text-2xl text-gray-900 font-bold  mt-3 xl:-mt-4">
                Support
              </h3>
              <p className="font-light text-gray-500 ">
                We create a safe, non-judgemental space where healing and growth
                can begin.
              </p>
            </div>
          </div>
          <div className="flex flex-row xl:flex-col">
            <span className="h-20 w-24 mt-4 xl:mt-0">
              <svg
                viewBox="0 -6 143 143"
                height={50}
                className="pr-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M67.3959 125.449L68.1194 125.669C70.78 126.474 73.2927 127.233 74.949 130.561C74.9909 130.645 75.0497 130.719 75.122 130.779C75.1942 130.838 75.2782 130.882 75.3679 130.907C75.4247 130.922 75.4828 130.929 75.5415 130.929C75.6699 130.929 75.7952 130.892 75.903 130.821C77.1242 130.018 78.2744 129.291 79.3665 128.6C81.6546 127.152 83.631 125.903 85.5209 124.447C92.2994 119.338 98.4848 113.475 103.96 106.965C111.156 98.2636 118.597 89.2656 125.602 79.8467C129.986 73.9503 133.723 67.3678 136.882 61.663C140.042 55.8907 141.923 49.4951 142.396 42.9172C143.253 32.1074 140.707 22.3639 134.828 13.9577C128.286 4.60191 119.585 0.0455045 108.986 0.396793C97.0287 0.80022 86.5129 5.41512 77.7296 14.1139C77.3036 14.5557 76.9092 15.0275 76.5497 15.5256C75.8668 16.425 75.2188 17.2788 74.2435 17.617C63.9983 7.5411 56.165 3.59962 44.4467 2.58942C32.4206 1.55185 22.6847 5.45696 15.5078 14.1903C11.9462 18.5071 8.82442 23.1754 6.19001 28.1245C0.574558 38.7407 -0.595573 50.0327 2.71755 61.6891C5.67229 72.0929 10.5991 81.8182 17.2247 90.3254C30.4714 107.388 47.3519 119.207 67.3959 125.449ZM17.7895 30.135C19.3284 27.207 21.0427 24.3766 22.9228 21.6592C27.3926 15.072 33.6922 11.7475 41.681 11.7475C42.6707 11.7475 43.6862 11.7985 44.7276 11.9006C55.3982 12.9479 63.9582 17.6946 70.1694 26.0082C70.9155 27.0067 71.7282 27.931 72.4446 28.7456C72.7364 29.078 73.0107 29.3903 73.2527 29.6765C73.3534 29.7957 73.4928 29.8751 73.6458 29.9011C76.5265 30.403 77.6909 28.8948 78.5551 27.4466C83.5432 19.0932 91.3067 14.1069 102.989 11.7555C105.755 11.2734 108.577 11.2019 111.364 11.5435C115.789 11.9652 119.585 14.1611 122.648 18.0683C126.138 22.5501 128.207 27.9912 128.582 33.6798C129.2 40.2551 128.004 46.8749 125.127 52.8066C122.959 57.4039 120.492 61.8512 117.741 66.1184C112.633 73.717 107.177 81.2714 101.903 88.5767L100.069 91.1185C96.1412 96.5645 92.0787 102.054 88.1511 107.363C86.7337 109.278 85.3176 111.194 83.9021 113.112C83.2915 113.939 82.6557 114.75 81.9831 115.609C81.7611 115.892 81.5358 116.18 81.3067 116.474C79.4226 115.692 77.5882 114.927 75.7894 114.18C71.5436 112.417 67.4953 110.735 63.4566 109.028C52.278 104.38 42.1525 97.4841 33.6954 88.7612C25.0244 79.7528 19.0146 70.1155 15.3239 59.2979C11.9585 49.4305 12.7646 39.8909 17.7895 30.135Z"
                    className="fill-red-600 "
                  />
                </g>
              </svg>
            </span>
            <div className="w-full">
              <h3 className="mb-2 text-2xl text-gray-900 font-bold  mt-3 xl:-mt-4">
                Community Driven
              </h3>
              <p className="font-light text-gray-500 ">
                We create a sense of family where young people feel seen, heard,
                and valued.
              </p>
            </div>
          </div>
          <div className="flex flex-row xl:flex-col">
            <span className="h-20 w-24 mt-4 xl:mt-0">
              <svg
                height={50}
                viewBox="0 -0.5 157 157"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.1836 115.576C36.9382 133.366 51.0647 145.947 68.3703 154.04C70.4789 155.085 72.7773 155.698 75.1283 155.843C77.4794 155.988 79.8356 155.661 82.0573 154.881C93.3342 151.097 101.728 146.359 108.473 139.971C112.466 136.19 115.574 132.993 118.255 129.909C134.799 110.882 146.53 87.644 155.18 56.7786C156.22 53.0754 156.291 49.1193 156.226 45.7378C156.191 43.8775 155.653 42.4482 154.629 41.4889C153.515 40.4468 151.815 39.9604 149.59 40.0588L149.498 40.0629C148.694 40.1273 147.886 40.1037 147.087 39.9924C139.417 38.5741 130.529 36.7829 122.157 33.47C111.783 29.3655 103.815 25.158 97.0827 20.2281C93.5961 17.7905 90.6315 14.686 88.3617 11.0954C86.9876 8.73742 85.7955 6.2788 84.7951 3.74121C83.9449 1.68084 82.4623 0.354759 80.7274 0.103605C79.029 -0.143665 77.2675 0.682294 75.8999 2.36917C75.2434 3.18987 74.6863 4.08481 74.2404 5.03581C70.4145 13.0756 64.5435 19.9793 57.2104 25.0614C49.8394 30.3123 40.8695 35.8927 30.2277 37.4689C23.1726 38.513 16.3209 39.1422 8.09715 39.8542C2.72746 40.3203 1.36895 41.7181 1.1746 46.9781C1.15835 47.4228 1.16225 47.8678 1.16615 48.4058C1.16615 48.6802 1.17135 48.9782 1.17135 49.3122C1.17135 49.3336 1.17135 49.3547 1.17135 49.3767C1.28055 50.5011 1.37414 51.6574 1.46969 52.8329C1.69524 55.6027 1.92795 58.4644 2.3797 61.3164C3.05007 65.4823 3.95323 69.6076 5.085 73.6733C8.83678 87.1838 15.2211 100.499 25.1836 115.576ZM9.3107 47.7591L11.5362 47.6946C13.4004 47.6382 15.1931 47.5844 16.9852 47.5248C28.1242 47.1585 37.5694 45.3345 45.8608 41.951C55.7939 37.7913 64.9012 31.8984 72.7539 24.5501C74.1189 23.2248 75.3734 21.7908 76.5044 20.2623C76.8547 19.8137 77.2051 19.3665 77.5606 18.925C78.2756 18.0421 78.9406 17.1125 79.6458 16.1215C79.8064 15.8976 79.9702 15.6695 80.1372 15.4369L81.3371 17.2616C83.9826 21.3234 87.2963 24.9122 91.1398 27.8773C103.345 37.2664 117.4 43.8831 134.105 48.1068C136.499 48.7113 138.899 49.2687 141.438 49.8584C142.454 50.094 143.491 50.3354 144.558 50.5859C144.455 51.1543 144.363 51.7265 144.267 52.3C144.035 53.9583 143.687 55.5987 143.227 57.2091C136.084 80.024 128.483 96.426 118.58 110.392C111.404 120.513 104.17 128.526 96.4665 134.889C91.548 138.952 85.7337 142.249 77.6165 145.579C76.1378 146.187 75.0035 145.749 73.4429 145.011C57.5081 137.478 44.4815 126.083 33.6193 110.174C24.632 97.1924 17.7104 82.9064 13.0988 67.8217C11.3952 62.1151 10.5489 56.2796 9.65383 50.1018C9.54028 49.325 9.42594 48.544 9.3107 47.7591Z"
                  className="fill-red-600 "
                />
              </svg>
            </span>
            <div className="w-full">
              <h3 className="mb-2 text-2xl text-gray-900 font-bold  mt-3 xl:-mt-4">
                Award Winning Impact
              </h3>
              <p className="font-light text-gray-500 ">
                We{"'"}ve received multiple awards but the real reward is the
                positive change we see every day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-20 pb-12 xl:p-0 gap-6 p-6">
        <div className="h-full">
          <div className="grid grid-cols-1 relative xl:grid-cols-2 items-center mb-6 xl:mb-32 bg-gray-50 rounded-t-xl xl:rounded-l-none xl:rounded-r-xl">
            <div className="p-6 xl:p-8 absolute bottom-0 bg-gradient-to-b from-transparent to-red-800 h-full md:relative md:to-transparent md:h-auto flex flex-col justify-end text-white z-10">
              <p className="xl:text-3xl text-xl mt-4 xl:mt-8 tracking-tighter font-semibold md:text-gray-700 ">
                Boxing Club
              </p>

              <p className="xl:mt-4 mt-2 pb-4 md:text-gray-700 text-lg">
                We encourage all participants regardless of experience to grow
                stronger inside and out.
              </p>
            </div>
            <div className=" md:order-first h-full w-full relative overflow-hidden aspect-square ">
              <Image
                src="/assets/images/boxing-2.jpg"
                alt="Boxing acadamey"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className=" bg-gray-200 shadow-box shadow-gray-500/30"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 relative xl:grid-cols-2 items-center xl:mb-20 bg-gray-50 rounded-t-xl xl:rounded-l-none xl:rounded-r-xl">
            <div className="p-6 xl:p-8 absolute bottom-0 bg-gradient-to-b from-transparent to-red-800 h-full md:relative md:to-transparent md:h-auto flex flex-col justify-end text-white z-10">
              <p className="xl:text-3xl text-xl mt-4 xl:mt-8 tracking-tighter font-semibold md:text-gray-700 ">
                Media Workshops
              </p>

              <p className="xl:mt-4 mt-2 pb-4 md:text-gray-700 text-lg">
                These workshops equip young people with the tools to
                <span className="pl-1.5">
                  express themselves and build real-world skills
                </span>
                .
              </p>
            </div>
            <div className=" md:order-first h-full w-full relative overflow-hidden aspect-square ">
              <Image
                src="/assets/images/media.jpg"
                alt="Media training"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className=" bg-gray-200 shadow-box shadow-gray-500/30"
              />
            </div>
           
          </div>
        </div>
        <div className="h-full xl:pt-64">
          <div className="grid grid-cols-1 relative xl:grid-cols-2 items-center mb-6 xl:mb-32 bg-gray-50 rounded-t-xl xl:rounded-r-none xl:rounded-l-xl">
            <div className="p-6 xl:p-8 absolute bottom-0 bg-gradient-to-b from-transparent to-red-800 h-full md:relative md:to-transparent md:h-auto flex flex-col justify-end text-white z-10">
              <p className="xl:text-3xl text-xl mt-4 xl:mt-8 tracking-tighter font-semibold md:text-gray-700 ">
                Music Studio
              </p>

              <p className="xl:mt-4 mt-2 pb-4 md:text-gray-700 text-lg">
                Our goal is to help young people find their voice, both
                literally and metaphorically.
              </p>
            </div>
            <div className=" md:order-first h-full w-full relative overflow-hidden aspect-square rounded-t-xl xl:rounded-r-none xl:rounded-l-xl ">
              <Image
                src="/assets/images/studio.jpg"
                alt="Studio music production"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className=" bg-gray-200 shadow-box shadow-gray-500/30"
              />
            </div>
            
          </div>
          <div className="grid grid-cols-1 relative xl:grid-cols-2 items-center md:flex-row-reverse bg-gray-50 rounded-t-xl xl:rounded-r-none xl:rounded-l-xl">
            <div className="p-6 xl:p-8 absolute bottom-0 bg-gradient-to-b from-transparent to-red-800 h-full md:relative md:to-transparent md:h-auto flex flex-col justify-end text-white z-10">
              <p className="xl:text-3xl text-xl mt-4 xl:mt-8 tracking-tighter font-semibold md:text-gray-700 ">
                Mentorship
              </p>

              <p className="xl:mt-4 mt-2 pb-4 md:text-gray-700 text-lg">
                Through regular 1:1 sessions, we create lasting relationships
                that{" "}
                <span className="pl-1.5">nurture growth, trust, and hope</span>.
              </p>
            </div>

            <div className=" md:order-first h-full w-full relative overflow-hidden aspect-square rounded-t-xl xl:rounded-r-none xl:rounded-l-xl ">
              <Image
                src="/assets/images/mentorship.jpg"
                alt="Studio music production"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className=" bg-gray-200 shadow-box shadow-gray-500/30"
              />
            </div>
            
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAlt;
