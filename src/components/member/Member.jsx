import React from "react";
import MemberCard from "./MemberCard.jsx";
import Img1 from "../../assets/anuragbhaiya.jpg";
import Img2 from "../../assets/ayushbhaiya.jpg";
import Img3 from "../../assets/lalitbhaiya.jpg";
import Img4 from "../../assets/mohanbhaiya.jpg";
import bg from "../../assets/bg1.png";

const Member = () => {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        <main
          className="bg-slate-100 dark:bg-my-custom-grey2 dark:text-white z-10"
          id="team"
        >
          <section data-aos="fade-up" className="container py-8">
            <h1 className="mb-8 py-2 pt-4 pl-2 text-center text-4xl font-bold">
              Our Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-3 md:px-0 mb-5 gap-4">
              <MemberCard
                Img={Img1}
                Name="Anurag Mani Tripathi"
                Pos="Secretary"
              />
              <MemberCard
                Img={Img2}
                Name="Ayush Tiwari"
                Pos="Governor, Web and Design"
              />
              <MemberCard
                Img={Img3}
                Name="Lalit Mohanani"
                Pos="Governor, Web"
              />
              <MemberCard
                Img={Img4}
                Name="Kattamuri Mohan Krishna"
                Pos="Governor, Design"
              />
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Member;
