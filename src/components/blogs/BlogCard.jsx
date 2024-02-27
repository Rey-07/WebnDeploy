import React from "react";

const BlogCard = ({ Img, Head, Date, Des, By }) => {
  return (
    <>
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl bg-white rounded-t-lg rounded-b-lg dark:bg-my-custom-grey1 dark:text-white">
        <div className="overflow-hidden">
          <img
            src={Img}
            alt="Not found"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-500">
          <p>{Date}</p>
          <p className="line-clamp-1">{By}</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold">{Head}</h1>
          <p className="line-clamp-2">{Des}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
