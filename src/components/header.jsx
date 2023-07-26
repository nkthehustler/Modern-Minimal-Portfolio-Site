import "@fontsource/fira-code"; // Defaults to weight 400
import { Link, animateScroll as scroll } from "react-scroll";

export default function App() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div
        className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        id="home"
      >
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer md:mx-7 sm:mx-auto">
          <svg
            class="w-[40px] h-[40px] text-gray-1000 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 10"
          >
            <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z " />
          </svg>
          <span className="title ml-3 mt-1 text-3xl text-green-400 font-medium cursor-pointer">
            Nitin Kumar
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center nav md:mx-7 sm:mx-auto">
          <Link
            className="mr-5 hover:text-green-400 cursor-pointer"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Projects
          </Link>
          <Link
            className="mr-5 hover:text-green-400 cursor-pointer"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            About
          </Link>
          <Link
            className="mr-5 hover:text-green-400 cursor-pointer"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
