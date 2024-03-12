import React from "react";
import image1 from "../../assets/cd.jpg";
import image2 from "../../assets/pm.jpg";
import image3 from "../../assets/uiux.jpg";
import image4 from "../../assets/blockchain.jpg";
import Card2 from "./Card2.jsx";
import bg from "../../assets/bgabout.png";

const events = () => {
  return (
    <section className="relative bg-slate-100 dark:bg-my-custom-grey2">
      {/* Background image */}
      <div
        className="absolute bottom-8 left-0  w-full h-full bg-center bg-cover bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <main className="bg-slate-100 dark:bg-my-custom-grey2 text-my-blue2 dark:text-white z-10">
        <h1 className="mb-5 mt-5 md:pt-10 pl-2 text-center text-4xl font-bold dark:text-my-custom-yellow ">
          Our Events
        </h1>

        <div className="relative">
          <section className="text-black">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full ml-2 md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                <Card2
                  Img={image1}
                  Head="CODE RELAY"
                  Date="July 15th - July 18th"
                  By="By WebnD"
                  className="px-3"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
                <h1 className="sm:text-3xl text-3xl mb-4 font-medium dark:text-white">
                  CODE RELAY
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
            <div className="container mx-auto flex px-5 py-12 md:flex-row-reverse flex-col items-center">
              <div className="lg:max-w-lg lg:w-full mr-2 md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Card2
                  Img={image2}
                  Head="PRODIFY"
                  Date="Jan 8th - Jan 13th"
                  By="By WebnD and FEBS"
                  className="px-3"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
                <h1 className=" sm:text-3xl text-3xl mb-4 font-medium dark:text-white">
                  PRODIFY
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
              <div className="lg:max-w-lg lg:w-full ml-2 md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Card2
                  Img={image3}
                  Head="DESIGN WORKSHOP"
                  Date="4th November"
                  By="By WebnD"
                  className="px-3"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
                <h1 className="sm:text-3xl text-3xl mb-4 font-medium dark:text-white">
                  UI UX WORKSHOP
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
            <div className="container mx-auto flex px-5 py-12 md:flex-row-reverse flex-col items-center">
              <div className="lg:max-w-lg lg:w-full mr-2 md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Card2
                  Img={image4}
                  Head="BLOCKCHAIN WORKSHOP"
                  Date="8th October"
                  By="By WebnD"
                  className="px-3"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
                <h1 className="sm:text-3xl text-3xl mb-4 font-medium dark:text-white">
                  BLOCKCHAIN WORKSHOP
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
      </main>
    </section>
  );
};

export default events;
