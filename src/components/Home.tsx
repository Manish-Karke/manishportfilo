"use client"; // Add this at the top for client-side rendering
import pdfURL from "/resume.pdf?url";
import { ModeToggle } from "./mode-toggle";
import { EducationTimeline } from "./timeliness/education.timeliness";
import { Data } from "../data";
import { ProjectDetails } from "./projectDetails";
import { useState } from "react";
const { education } = Data.about;
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import ContactForm from "./contact/contact";
const Home = () => {
  const project = ProjectDetails;
  const maxIndex = project.length - 5;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightClick = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleLeftClick = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  console.log(currentIndex);
  return (
    <div className=" w-[99vw] overflow-x-clip items-center pb-[1vw] justify-center min-h-screen bg-gray-100 flex flex-col dark:bg-gray-900 text-gray-800 dark:text-gray-200">
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

      <main className="flex-grow w-screen min-h-screen items-center justify-center  pt-50 px-4">
        <div className="flex w-full h-full items-center justify-center">
          <div
            id="home"
            className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-8 "
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                className="rounded-full w-48 sm:w-64 md:w-80 border-4 border-blue-500 object-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-1/137211431_687068468841302_5288679597929366902_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=OwCFGchWkusQ7kNvwH1Nk3U&_nc_oc=Adm5Cv4Oa4NZSmeRipAXcN3vyEOeaOs23_0iLm5FMk8AphWSf45QVVEazw2Joqh-4kfXvE3JKoXzVoyKf0kDH-GR&_nc_zt=24&_nc_ht=scontent.fktm3-1.fna&_nc_gid=L5bifnMHm2hJp2ymZeLlIw&oh=00_AfT_p5_zX7OY7fppYGiKcn7Hm791B3ChJ14_EieXeaaCcw&oe=689D7190"
                alt="Manish Karki Profile"
              />
            </div>

            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="group text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-4 group-hover:scale-105 transition-transform duration-300">
                  Hi, I'm Manish Karki
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-lg">
                  Full Stack Developer & UI/UX Designer: I build fast,
                  accessible, and visually engaging web experiences.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  Contact
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = pdfURL;
                    link.download = "report.pdf";
                    link.click();
                  }}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  Download resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-600 dark:text-blue-400">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:items-start">
            {/* Left: Profile / Description */}
            <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Hi, I'm{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Manish Karki
                </span>
                , a Full Stack Developer and UI/UX Designer from Nepal. I’m
                passionate about crafting seamless digital experiences by
                blending clean, efficient code with intuitive, accessible
                design. I specialize in building fast, engaging, and scalable
                web applications.
              </p>

              {/* Education Timeline */}
              <EducationTimeline education={education} />
            </div>

            {/* Right: Skills & Experience */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  Skills
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Full Stack Development (React, Next.js, Node.js)</li>
                  <li>UI/UX Design (Figma, Adobe XD)</li>
                  <li>Performance Optimization & Accessibility</li>
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With <strong>[X years]</strong> of experience, I’ve delivered
                  projects such as{" "}
                  <strong>[e-commerce platform for local artisans]</strong>. I
                  take pride in achievements like{" "}
                  <strong>
                    [improving site performance by 30% through code
                    optimization]
                  </strong>
                  .
                </p>
              </div>

              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition self-center md:self-start"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-20 px-4" // This section will inherit the bg-gray-100/dark:bg-gray-900 from the parent <div>
      >
        <div
          className="max-w-6xl mx-auto flex flex-col gap-12 w-full items-center text-lg" // Remove 'bg' here
        >
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-600 dark:text-blue-400">
            projects
          </h2>
          <div className="flex flex-col w-screen h-auto text-justify text-xl font-light px-10 p-1">
            <div
              className="flex w-full h-[8vh] items-center text-lg font-semibold mb-[1vw]"
              id="projects"
            >
              Projects
            </div>
            <div className="flex">
              <div className="flex w-[90vw] h-[26vw] overflow-hidden gap-10 ">
                <div
                  className="flex transition-transform ease-in-out duration-500"
                  style={{ transform: `translateX(-${currentIndex * 17.8}vw)` }}
                >
                  {project.map((items, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col hover:scale-110 w-[16.78vw] ml-[1vw] h-[6vw] bg-red-500"
                    >
                      <img
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/graphic-designer-portfolio-template-fb9c4dfd70d3320113358110cd3a7d86_screen.jpg?ts=1673590850"
                        alt={items.title}
                      />
                      <div className="flex flex-col items-center justify-center font-semibold">
                        {items.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col z-30 justify-center items-center mb-20 w-[5vw] gap-5">
                <button
                  onClick={handleLeftClick}
                  className="flex items-center justify-center border rounded-xl py-4 bg-teal-600 text-white cursor-pointer"
                >
                  <FaCaretLeft size={38} />
                </button>
                <button
                  onClick={handleRightClick}
                  className="flex items-center justify-center border rounded-xl py-4 bg-teal-600 text-white cursor-pointer"
                >
                  <FaCaretRight size={38} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm/>
    </div>
  );
};

export default Home;
