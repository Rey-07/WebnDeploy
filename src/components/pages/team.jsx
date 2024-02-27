import React from "react";
import image1 from "../../assets/anuragbhaiya1.jpg";
import image2 from "../../assets/ayushbhaiya1.jpg";
import image3 from "../../assets/lalitbhaiya.jpg";
import image4 from "../../assets/mohanbhaiya.jpg";
import Card1 from "./Card1.jsx";
import bg from "../../assets/bgevents.png";

const team = () => {
  return (
    <section className="relative bg-slate-100 dark:bg-my-custom-grey2">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <main className="bg-slate-100 dark:bg-my-custom-grey2 dark:text-white z-10">
        <h1 className="mb-5 mt-5 md:pt-10 pl-2 text-center text-4xl font-bold dark:text-white ">
          Our Team
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
            <div className="flex justify-center">
              <Card1
                Img={image1}
                Name="Anurag Mani Tripathi"
                Pos="Secretary"
                Link="https://www.linkedin.com/in/anurag-mani-tripathi-71413b22a/"
              />
            </div>
            <div className="flex justify-center">
              <Card1
                Img={image2}
                Name="Ayush Tiwari"
                Pos="Governor, Web and Design"
                Link="https://www.linkedin.com/in/tiwari-ayush/"
              />
            </div>
            <div className="flex justify-center">
              <Card1
                Img={image3}
                Name="Lalit Mohanani"
                Pos="Governor, Web"
                Link="https://www.linkedin.com/in/lalit-mohanani/"
              />
            </div>
            <div className="flex justify-center">
              <Card1
                Img={image4}
                Name="Kattamuri Mohan Krishna"
                Pos="Governor, Design"
                Link="https://www.linkedin.com/in/kattamuri-mohankrishna-62a3b3239/"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default team;
