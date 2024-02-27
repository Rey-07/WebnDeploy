import React from "react";

const Card2 = ({ Img, Head, Date, By }) => {
  return (
    <>
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl bg-slate-200 rounded-t-lg rounded-b-lg transition duration-700 hover:skew-x-1 hover:scale-110 dark:bg-my-custom-grey1 dark:text-white">
        <div className="overflow-hidden">
          <img
            src={Img}
            alt="Not found"
            className="mx-auto h-[350px] w-full object-cover "
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-500">
          <p>{Date}</p>
          <p className="line-clamp-1">{By}</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold text-black dark:text-white text-center">
            {Head}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Card2;
