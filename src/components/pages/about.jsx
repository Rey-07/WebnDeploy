import React from "react";
import image2 from "../../assets/ui2.png";
import image1 from "../../assets/canva5.png";
import image3 from "../../assets/block.png";
import bg from "../../assets/bgabout.png";
import teampic from "../../assets/team.jpg";
import AOS from "aos";

const about = ({}) => {
  return (
    <section className="relative bg-slate-100 dark:bg-my-custom-grey2">
      {/* Background image */}
      <div
        className="absolute top-4 left-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <main className="bg-slate-100 dark:bg-my-custom-grey2 dark:text-white z-10">
        <h1
          data-aos="fade-up"
          className="mb-5 mt-5  md:pt-10 pl-2 text-center text-4xl font-bold dark:text-white "
        >
          About Us
        </h1>
        <section className="container flex flex-col items-center justify-center md:min-h-[calc(100vh - 100px)]">
          <div className="flex flex-col items-center justify-center h-full">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="transform scale-110">
                  <img
                    src={teampic}
                    alt="Team Image"
                    className="h-auto w-64 md:w-96 object-cover rounded-lg hover:drop-shadow-md mt-4"
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl text-center pt-8">
                Who are we?
              </h1>
              <div className="max-w-3xl overflow-hidden flex flex-col items-center">
                <p
                  className="text-base md:text-lg text-slate-900 text-center dark:text-slate-300 font-light mt-2 pb-6"
                  style={{ wordWrap: "break-word" }}
                >
                  Welcome to WebnD, IIT Bhubaneswar! At WebnD, we're more than
                  just a student society—we're a vibrant community dedicated to
                  exploring the frontiers of web development, design, and
                  blockchain technology. Through a rich tapestry of interactive
                  workshops, insightful seminars, and engaging industry
                  collaborations, we provide our members with the tools,
                  knowledge, and inspiration to thrive in these exciting fields.
                  Join us at WebnD and be part of a journey where together,
                  we'll shape the future of technology and make meaningful
                  contributions to the digital world!
                </p>
              </div>
            </div>
          </div>
        </section>
        <h1
          data-aos="fade-up"
          className="mb-3 mt-5  md:pt-14 pl-2 text-center text-4xl font-bold dark:text-white "
        >
          Our Clubs
        </h1>
        <div className="relative">
          <section className="text-black">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  src={image2}
                  alt="Hero"
                  className="object-cover object-center rounded"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
                  UXphere: The UI UX Club
                </h1>
                <p className="mb-8 leading-relaxed text-center text-lg text-slate-900 dark:text-slate-300">
                  Introducing UXphere, where design meets innovation! A vibrant
                  community of designers, thinkers, and creators as we explore
                  the dynamic world of user interface and user experience. From
                  mastering design principles to crafting intuitive digital
                  experiences, we're here to inspire, educate, and empower our
                  members.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="relative">
          <section className="text-black">
            <div className="container mx-auto flex px-5 py-12 md:flex-row-reverse flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  src={image1}
                  alt="Hero"
                  className="object-cover object-center rounded"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
                <h1 className=" sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
                  DevSquad: The Web Development Club
                </h1>
                <p className="mb-8 leading-relaxed text-center text-lg text-slate-900 dark:text-slate-300">
                  Your Hub for Web Development Excellence! A community where
                  passionate developers converge to learn, collaborate, and
                  create. From mastering the latest frameworks to exploring
                  cutting-edge technologies, we're dedicated to honing skills
                  and crafting innovative solutions.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="relative">
          <section className="text-black">
            <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  src={image3}
                  alt="Hero"
                  className="object-cover object-center rounded"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
                  ChainCrafters: The Blockchain Club
                </h1>
                <p className="mb-8 leading-relaxed text-center text-lg text-slate-900 dark:text-slate-300">
                  Your gateway to the future of decentralized innovation! Here's
                  our dynamic community of blockchain enthusiasts. From
                  understanding the fundamentals of blockchain to diving into
                  smart contracts and decentralized applications (DApps), we're
                  committed to educating and empowering our members on this
                  transformative technology.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default about;
