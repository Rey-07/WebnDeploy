import React, { useState } from "react";
import BlogCard from "./BlogCard.jsx";
import Img3 from "../../assets/pm.png";
import Img1 from "../../assets/cd.jpg";
import Img2 from "../../assets/uiux.png";
import bg from "../../assets/bg2.png";

const Blogs = () => {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        <main className="bg-slate-100 dark:bg-my-custom-grey2 dark:text-white z-10">
          <section data-aos="fade-up" className="container py-8 pb-0">
            <h1 className="mb-8 py-2 pl-2 text-center text-4xl font-bold dark:text-white">
              Our Events
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 md:px-0 gap-5">
              <BlogCard
                Img={Img1}
                Head="CODE RELAY"
                Date="July 15th - July 18th"
                Des="Code Relay is the annual hackathon presented by WebnD."
                By="By WebnD"
              />
              <BlogCard
                Img={Img2}
                Head="DESIGN WORKSHOP"
                Date="4th November"
                Des="UI, UX workshop organized by UXphere, the design club."
                By="By WebnD"
              />
              <BlogCard
                Img={Img3}
                Head="PRODIFY"
                Date="Jan 8th - Jan 13th"
                Des="A week-long Product Management workshop organized by WebnD in collaboration with FEBS."
                By="By WebnD and FEBS"
              />
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Blogs;
