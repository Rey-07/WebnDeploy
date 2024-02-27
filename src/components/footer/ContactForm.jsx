import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xleqnjdq");

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-5 mx-auto flex flex-wrap justify-center ">
        <div className="lg:w-2/3 md:w-2/3 md:pr-4 mb-10 lg:mb-0 w-full md:w-auto">
          <div className="w-full bg-gray-300 rounded-2xl h-full">
            <iframe
              className="rounded-2xl w-full h-full"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.1227120045605!2d85.67155698909002!3d20.14838391111869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19ac2e52a057f5%3A0x564b6e83a7504a16!2sIndian%20Institute%20Of%20Technology%20(IIT)%20Bhubaneswar!5e1!3m2!1sen!2sin!4v1705138207885!5m2!1sen!2sin&t=m"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
        {state.succeeded ? (
          <div className="lg:w-1/3 md:w-1/2  p-6 flex flex-col md:ml-auto mt-20 md:mt-0 relative z-10  w-full md:w-auto">
            <h2 className="text-gray-300 text-center text-2xl mb-1 font-bold title-font">
              Contact Us
            </h2>
            <p className="text-gray-900 text-lg mb-1 mt-6 text-center text-white font-medium title-font">
              Thank You for reaching out to us!
            </p>
          </div>
        ) : (
          <div className="lg:w-1/3 md:w-1/3 bg-white dark:bg-my-custom-grey3  rounded-lg p-8 flex flex-col justify-center">
            <h2 className="text-black text-center dark:text-white text-2xl mb-1 font-bold title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 mt-2 text-center  text-gray-600 dark:text-gray-400">
              Got a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600 dark:text-gray-400">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="w-full bg-white dark:bg-slate-700 dark:text-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white dark:bg-slate-700 dark:text-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white dark:bg-slate-700 dark:text-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
