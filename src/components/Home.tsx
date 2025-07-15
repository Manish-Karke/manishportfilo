"use client"; // Add this at the top for client-side rendering

import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 w-full dark:bg-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">Manish Karki</div>
            <div className="flex space-x-6">
              <a
                href="#home"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                Contact
              </a>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center pt-20 px-4">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              className="rounded-full w-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-blue-500 object-cover h-auto max-w-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-1/137211431_687068468841302_5288679597929366902_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=OwCFGchWkusQ7kNvwH1Nk3U&_nc_oc=Adm5Cv4Oa4NZSmeRipAXcN3vyEOeaOs23_0iLm5FMk8AphWSf45QVVEazw2Joqh-4kfXvE3JKoXzVoyKf0kDH-GR&_nc_zt=24&_nc_ht=scontent.fktm3-1.fna&_nc_gid=L5bifnMHm2hJp2ymZeLlIw&oh=00_AfT_p5_zX7OY7fppYGiKcn7Hm791B3ChJ14_EieXeaaCcw&oe=689D7190"
              alt="Manish Karki Profile"
            />
          </div>

          {/* Introduction Text with Hover Animation */}
          <div className="group">
            <div className="text-center md:text-left group-hover:animate-bounce-once group-hover:text-white transition-colors duration-300">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-gray">
                Hi, I'm Manish Karki
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-lg group-hover:text-gray">
                Full Stack Developer & UI/UX Designer: I build fast, accessible,
                and visually engaging web experiences.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                hey touch the image
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
