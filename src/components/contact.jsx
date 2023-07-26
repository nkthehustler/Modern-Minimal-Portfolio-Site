import "@fontsource/fira-code"; // Defaults to weight 400
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const form = useRef();

  // emailjs configurtaion

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_txhae0k",
        "template_6g7hknq",
        form.current,
        "bBNPUwp1BNeblthWC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // rsetting form after submitting

  const reset = () => {
    form.current.reset();
  };

  // toast notification
  const notify = () =>
    toast("Mesage Sent!", {
      icon: "✔",
      style: {
        borderRadius: "30px",
        background: "#111827",
        color: "#fff",
      },
    });

  // multiple onsubmit functions includes sendmail; resetting the form and notify it

  const handle = (e) => {
    e.preventDefault();
    sendEmail();
    reset();
    notify();
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative py-24">
      <div className="flex flex-col text-center w-full mb-10 reveal">
        <h1 className="title sm:text-4xl text-2xl font-medium mb-4 text-green-400">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              `Contact`,
              1000,
            ]}
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p
          className="regular g:w-2/3 mx-auto leading-relaxed text-base"
          id="contact"
        >
          this is how you can reach me
        </p>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative reveal">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.7444348368699!2d77.49695943432843!3d28.45896926004997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc190c2d5c2d7%3A0x9a671421babb5bac!2sRPH%20Boys%20and%20Girls%20Hostel!5e0!3m2!1sen!2sin!4v1690291044245!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="regular title-font font-semibold text-white tracking-widest text-sm">
                ADDRESS
              </h2>
              <p className="regular mt-5 text-sm">
                RPH Residency, Gniot Gate No.-2, Knowledge Park-2, Gautam Buddha
                Nagar, Greater Noida, UP- 201310
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="regular title-font font-semibold text-white tracking-widest text-sm">
                EMAIL
              </h2>
              <a
                className="regular text-sm text-green-400 leading-relaxed cursor-pointer"
                href="mailto:nitinkumar6e6b@gmail.com"
              >
                nitinkumar6e6b@gmail.com
              </a>
              <h2 className="regular title-font font-semibold text-white tracking-widest text-sm mt-4">
                PHONE
              </h2>
              <p className="regular text-sm leading-relaxed">+91 8810404791</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 reveal">
          <form ref={form} onSubmit={handle}>
            <h2 className="title text-white text-2xl mb-1 font-bold title-font">
              Contact
            </h2>
            <p className="regular text-sm leading-relaxed mb-5">
              Leave your message or queries here.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="regular text-md leading-7  text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Name"
                className="regular text-sm w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-500 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="regular text-md  leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                className="regular text-sm w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-500 outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="regular text-md leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="regular text-sm w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-500 h-32 outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                required
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="regular text-md text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
        <Toaster />
      </div>
    </section>
  );
}
