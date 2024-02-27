import React from "react";

const Card1 = ({ Img, Name, Pos, Link }) => {
  return (
    <>
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-900 dark:text-white">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
          <img src={Img} alt="profile-picture" />
        </div>
        <div class="p-6 text-center">
          <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {Name}
          </h4>
          <p class="block mb-2 font-sans text-2xl antialiased font-md leading-snug tracking-normal text-blue-gray-700">
            {Pos}
          </p>
        </div>
        <div class="flex justify-center p-6 pt-2 gap-7">
          <a
            href={Link}
            class="text-gray-500 hover:text-my-blue1 dark:hover:text-my-blue1"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 50 50"
              aria-hidden="true"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card1;
