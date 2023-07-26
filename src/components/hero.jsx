import man from "../assets/man.svg";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/Nitin Kumar resume.pdf";

export default function App() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start  md:text-left mb-16 md:mb-0 items-center text-center regular">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500 md:mx-7 sm:mx-auto">
            Hi!
            <br />
            <p className="lg:inline-block text-white">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  `I am Nitin Kumar`,
                  1000,
                ]}
                speed={10}
                repeat={Infinity}
              />
            </p>
          </h1>
          <p className="mb-8 leading-relaxed md:mx-7 sm:mx-auto">
            My name is Nitin Kumar, a MERN-stack developer based in New Delhi,
            India.
          </p>

          <div className="flex justify-center">
            <a href={resume}>
              <button
                type="button"
                className="regular resume text-white bg-green-400 hover:bg-green-500 font-medium rounded-md text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-green-500 dark:hover:bg-green-600 md:mx-7 sm:mx-auto"
              >
                Resume
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mx-7 sm:mx-auto">
          <img width="450px" height="450px" src={man} alt="" />
        </div>
      </div>
    </section>
  );
}
