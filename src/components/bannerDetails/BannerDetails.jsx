import React from "react";
import image1 from "../../assets/canva5.png";
import image2 from "../../assets/ui2.png";
import bg from "../../assets/bg.png";

const BannerDetails = ({ reverse, content, heading, image, l1, l2, l3 }) => {
  return (
    <section className="relative">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <main className="bg-slate-100 dark:bg-my-custom-grey2 dark:text-white z-10">
        <section className="container flex flex-col items-center justify-center py-5 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-3  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 items-center text-center md:items-center md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl">{heading}</h1>
              <p className="text-m text-slate-800 text-center dark:text-slate-400">
                {content}
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={reverse ? image2 : image}
                alt="No image"
                className=" h-full max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
