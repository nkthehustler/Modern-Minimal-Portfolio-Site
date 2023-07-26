import "@fontsource/fira-code"; // Defaults to weight 400
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/Nitin Kumar resume.pdf";
import nk from "../assets/nk.jpg";

export default function App() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto" id="about">
          <div className="flex flex-col text-center w-full mb-10 reveal">
            <h1 className="title sm:text-4xl text-2xl font-medium mb-4 text-green-400">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  `About`,
                  1000,
                ]}
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <p className="regular g:w-2/3 mx-auto leading-relaxed text-base">
              a brief introduction about me
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 reveal">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                <img className="rounded-full" src={nk} alt="" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="title font-medium title-font mt-4 text-white text-lg">
                  Nitin Kumar
                </h2>
                <div className="w-12 h-1 bg-green-400 rounded mt-2 mb-4" />
                <p className="regular text-md text-gray-400">
                  UI/UX designer and MERN stack developer.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="regular leading-relaxed text-md mb-4 md:px-0 px-7 reveal">
                I am a self-taught UI/UX designer and MERN Stack developer
                pursuing B.Tech in computer science and engineering from
                Galgotias University (2020-2024).
                <br />
                I'm passionate about modern, pixel-perfect, stunning interfaces
                and UX that are executed with simplicity.
                <br />I enjoy taking pictures as a hobby.
              </p>
              <a
                className=" regular text-green-400 inline-flex items-center cursor-pointer"
                href={resume}
              >
                Download Resume
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
