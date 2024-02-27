import React from "react";
import Banner from "../../assets/canva3.png";

const Hero = () => {
  return (
    <main className="bg-gradient-to-l from-my-custom-grey1 via-my-custom-grey3 to-my-custom-grey1 pt-6 ">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className=" grid grid-cols-1 items-center gap-10 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-5xl text-my-custom-yellow">
              WebnD: Pioneering Pixel Perfection
            </h1>
            <p className="">
              Where Innovation Meets Interface! Dive into the dynamic world of
              web development and design at IIT Bhubaneswar. Unleash your
              creativity! Join us as we shape the future, one pixel at a time!
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-once="true"
            className="h-full max-auto w-full "
          >
            <img
              src={Banner}
              alt="No image"
              className="  hover:drop-shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
