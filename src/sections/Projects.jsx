import React, { Suspense } from "react";
import { myProjects } from "../constants";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Html, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
const projectCount = myProjects.length;

const Projects = () => {
  const [selectProjectIndex, setselectProjectIndex] = useState(0);
  const currentProject = myProjects[selectProjectIndex];
  const handleNavigation = (direction) => {
    setselectProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="flex flex-row justify-between">
        <p className="head-text transition ease-in-out duration-100 hover:scale-105 hover:border-b">
          My Projects
        </p>
        <p className="text-gray-400">Rotate Computer Screen and Check on it</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left side section of projects  */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shawdow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText text-gray-400">{currentProject.desc}</p>
            <p className="animatedText text-gray-400">
              {currentProject.subdesc}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              href={currentProject.href}
              className="flex items-center gap-2 cursor-pointer text-white-600"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-gray-100">Check Live Site</p>
              <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            {/* left button or previous direction  */}
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>

            {/* right direction or next button  */}

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* canvas container Right side section  */}
        <div className="border border-red bg-black-200 rounded-lg h-96 md:h-full ">
          {/* CANT RENDER DIV INSIDE CANVAS CONTAINER  */}
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
