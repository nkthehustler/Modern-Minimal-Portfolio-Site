import { TypeAnimation } from "react-type-animation";
import db from "../assets/icons/db.png";
import ex from "../assets/icons/ex.svg";
import rc from "../assets/icons/rc.svg";
import nd from "../assets/icons/nd.svg";
import gt from "../assets/icons/gt.svg";
import gb from "../assets/icons/gb.svg";
import tw from "../assets/icons/tw.svg";
import fg from "../assets/icons/fg.svg";
import js from "../assets/icons/js.svg";

export default function App() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 md:pb-48 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 reveal">
          <h1 className="title sm:text-4xl text-2xl font-medium mb-4 text-green-400">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                `Skills`,
                1000,
              ]}
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="regular g:w-2/3 mx-auto leading-relaxed text-base">
            my skillset and technologies
          </p>
        </div>

        <div className="container px-3 lg:px-24 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-green-500">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={db}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-gray-400">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={ex}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-sky-400">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={rc}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-emerald-500">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={nd}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-yellow-300">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={js}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-blue-400">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={tw}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-orange-400">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={gt}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-gray-700">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={gb}
                />
                <div className="flex-grow"></div>
              </div>
            </div>

            <div className="p-2 lg:w-fit md:w-1/2 w-fit reveal">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:bg-violet-400">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
                  src={fg}
                />
                <div className="flex-grow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
