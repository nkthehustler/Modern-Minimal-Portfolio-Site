import { TypeAnimation } from "react-type-animation";
import pizzroni from "../assets/pizzroni.png";
import krypt from "../assets/krypt.png";
import tindog from "../assets/tindog.png";

export default function App() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div id="projects"></div>
        <div className="flex flex-col text-center w-full mb-20 reveal">
          <h1 className="title sm:text-4xl text-2xl font-medium mb-4 text-green-400">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                `Projects`,
                1000,
              ]}
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="regular g:w-2/3 mx-auto leading-relaxed text-base">
            hand on projects made by me
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 reveal">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
                src={pizzroni}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="project-title title-font text-lg font-medium text-white mb-3 cursor-pointer">
                  Pizzroni
                </h1>
                <p className="regular text-sm leading-relaxed mb-3 cursor-pointer">
                  Pizzroni is a Real-Time pizza delivery application based on
                  the MVC model, made using Web-Sockets, MongoDB; Express.js;
                  React.js; Node.js, deployed on AWS EC2 Instance.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-500 cursor-pointer"
                    href="https://pizzroni.ml"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800"
                    href="https://github.com/nkthehustler/Pizzroni-Real-Time-Web-Application"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      class="w-[24px] h-[24px] text-gray-800 dark:text-gray-700 hover:text-gray-300 cursor-pointer"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 reveal">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
                src={krypt}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="project-title title-font text-lg font-medium text-white mb-3 cursor-pointer">
                  Krypt
                </h1>
                <p className="regular text-sm leading-relaxed mb-3 cursor-pointer">
                  A Web 3.0-based Ethereum based, real-time; secured; reliable,
                  trading platform of the cryptocurrency, created using
                  Solidity; HardHat; Blockchain and React.js-like technologies.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-500 cursor-pointer"
                    href="https://krypt-psi.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800"
                    href="https://github.com/nkthehustler/Krypt-Web-3.0-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      class="w-[24px] h-[24px] text-gray-800 dark:text-gray-700 hover:text-gray-300 cursor-pointer"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 reveal">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
                src={tindog}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="project-title title-font text-lg font-medium text-white mb-3 cursor-pointer">
                  Tindog
                </h1>
                <p className="regular text-sm leading-relaxed mb-3 cursor-pointer">
                  A dating site for your dog, finds profiles and match and can
                  swipe like tinder, used for healthy breeding for your pet on
                  cheap prices. It's simple minimal and easy to use.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a
                    className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0 hover:text-green-500 cursor-pointer"
                    href="https://nkthehustler.github.io/TinnDog/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800"
                    href="https://github.com/nkthehustler/TinnDog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      class="w-[24px] h-[24px] text-gray-800 dark:text-gray-700 hover:text-gray-300 cursor-pointer"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
