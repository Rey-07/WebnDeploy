import React from "react";

const MemberCard = ({ Img, Name, Pos }) => {
  return (
    <>
      <div className="p-4  shadow-lg transition-all duration-500 hover:shadow-xl bg-white rounded-t-lg rounded-b-lg dark:bg-slate-900 dark:text-white">
        <div className="overflow-hidden">
          <img
            src={Img}
            alt="Not found"
            className="mx-auto h-[250px] w-full object-cover"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600"></div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold text-center">{Name}</h1>
          <p className="line-clamp-2 text-center">{Pos}</p>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
