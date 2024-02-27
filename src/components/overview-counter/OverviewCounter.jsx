import React from "react";
import CountUp from "react-countup";

const OverviewCounter = () => {
  return (
    <section className="container h-12 md:h-32  bg-my-custom-pink2/60 md:pt-1 dark:bg-my-custom-grey2">
      <div className="mx-auto my-4 grid w-full -translate-y-10 grid-cols-4 divide-x divide-slate-700 bg-white p-2 shadow-lg dark:bg-my-custom-pink2/90  md:max-w-[800px] md:-translate-y-16 md:p-8">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={50} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md text-xs  md:text-lg">Events</h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={10} suffix="k+" duration={5.5} />
          </h1>
          <h1 className=" sm:text-md text-xs md:text-lg">Participants</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={600} suffix="k+" duration={1.75} />
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg text-center">
            Media Outreach
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp
              end={30}
              duration={3.0}
              separator=" "
              // decimals={4}
              // decimal=","
              suffix="+"
            />
          </h1>
          <h1 className="sm:text-md text-xs  md:text-lg">Competitions</h1>
        </div>
      </div>
    </section>
  );
};

export default OverviewCounter;
