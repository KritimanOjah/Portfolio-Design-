import React, { useState } from "react";
import Navbar from "./Navbar";
import Connect from "./Connect";
import Card from "./Card";
import Cycle from "./Cycle";
import Planet from "./Planet";
import IconStack from "./IconStack";
import Footer from "./Footer";
import Box from "./Box";
import Copy from "./Copy";
import ContactUS from "./ContactUS";
import Cross from "./Cross";


import Button from "./Icons";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

import {
  fadeInUp,
  fadeIn,
  hoverEffect,
  sectionBackground,
  buttonHover,
  navbarVariants,
} from "./animations";

export default function Bar() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="relative bg-black w-full h-screen text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="bg6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        
      >
        <Navbar />
      </motion.div>

      <div id="home" className="mt-30 text-center relative z-10">
        <motion.h1
       style={{ paddingTop: '100px' }}
          className="text-6xl font-serif font-extrabold leading-tight tracking-wide"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <span className="text-white">I help founders turn ideas</span>
          <span>
            <br /> into seamless{" "}
          </span>
          <span className="text-gray-400 decoration-4 font-semibold italic">
            digital experiences
          </span>
        </motion.h1>
        <motion.p
          className="text-3xl text-center relative mt-8 text-gray-400 font-light tracking-normal"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Hello, I'm Kritiman Ojah, a Full Stack Developer
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-10 mx-auto">
        <Connect onClick={openModal} />
        {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="relative bg-[#111] p-6 rounded-xl shadow-xl max-w-md w-full">
      <ContactUS closeModal={closeModal} />
<div className="absolute top-2 right-3 text-white text-2xl hover:text-gray-300 ">
<Cross
 onClick={closeModal}></Cross> </div>
    </div>
  </div>
)}

  <Copy />
</div>

        <div className="flex flex-wrap gap-15 mt-40 justify-center">
        <Box title="1.5yr" subtitle="Experience" />
<Box title="10+" subtitle="Projects" />
<Box title="95%" subtitle="Success Rate" />

        </div>

        {/* Recent Projects Section */}
        <motion.div
        id="work"
        style={{ paddingTop: '100px' }}
          className="mt-60 flex flex-col items-center gap-y-20 pl-22 pr-22"
          variants={sectionBackground}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-serif font-extrabold flex items-center">
            <span className=" decoration-4">
              <Cycle />
              Recent <span className="text-gray-400">Projects</span>
            </span>
          </h1>
          <div className="flex justify-center items-center min-h-screen bg-black text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                >
                  <Card />
                </motion.div>
              ))}
            </div>
          </div>

         
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
        id="about"
          className="flex flex-row flex-wrap justify-center mt- 60 gap-15"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          style={{ paddingTop: '100px' }}
        >
          <h1 className="text-4xl  font-extrabold flex text-center underline decoration-gray-500 decoration-4">
            My Tech Stack
          </h1>
        </motion.div>
        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={FaHtml5} label="HTML" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={FaCss3Alt} label="CSS" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={FaJsSquare} label="JavaScript" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={FaReact} label="ReactJS" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={SiTypescript} label="Typescript" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={RiNextjsFill} label="NextJS" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={RiTailwindCssFill} label="TailwindCSS" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={FaNodeJs} label="NodeJS" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={SiExpress} label="ExpressJS" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={SiMongodb} label="MongoDB" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={SiMysql} label="MySQL" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={FaGitAlt} label="Git" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={FaGithub} label="GitHub" />
          </motion.div>
          <motion.div whileHover="hover" variants={buttonHover}>
            <Button icon={SiPostman} label="Postman" />
          </motion.div>
        </div>

        {/* About Me Section */}
        <motion.div
          className="w-full min-h-screen bg-black text-white flex justify-center items-center px-6 py-20"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-30">
            <div className="md:w-1/2 text-left">
              <motion.h2
                className="text-4xl font-bold underline decoration-gray-500 decoration-4 mb-6"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                About Me
              </motion.h2>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm Kritiman Ojah, a proactive full-stack developer driven by
                the passion to craft seamless and impactful web experiences.
                Whether it’s designing intuitive frontends or building robust
                backends, I thrive on transforming complex challenges into
                elegant, efficient solutions.
                <br />
                <br />
                With hands-on expertise in technologies like React, Next.js, and
                Node.js, I constantly push myself to learn, grow, and stay ahead
                in this ever-evolving digital world.
                <br />
                <br />
                Beyond code, I’m a curious mind — always exploring, ideating,
                and embracing new perspectives. I believe life is about balance,
                creativity, and purpose. Each day, I wake up with the drive to
                improve, to create, and to make a difference — one line of code at
                a time.
                <IconStack />
              </p>
            </div>
            <div className="md:w-1/2">
              <Planet />
            </div>
          </div>
        </motion.div>

        {/* conatact Section */}
        <motion.div
         id="contact"
          className="w-full bg-black text-white px-6 py-20 flex justify-center font-sans"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl w-full text-center space-y-10">
            <motion.h2
              className="text-5xl font-extrabold tracking-tight uppercase text-white drop-shadow-sm"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              From Concept to Creation
            </motion.h2>
            <motion.h3
              className="text-2xl sm:text-3xl font-medium text-gray-400 tracking-wide"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Let’s Make It Happen!
            </motion.h3>
            <Connect />
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              I'm available for{" "}
              <span className="text-white font-semibold">full-time roles</span> &
              <span className="text-white font-semibold">freelance projects</span>.
              I thrive on crafting{" "}
              <span className="text-white font-medium">dynamic web applications</span>{" "}
              and delivering{" "}
              <span className="text-white font-medium">seamless user experiences</span>
              .
            </p>
          </div>
        </motion.div>
        
        {/* Footer Section */}
        <div className="w-full h-[2px] bg-[linear-gradient(90deg,#2a2a2a,#444,#2a2a2a)] bg-[length:200%_100%] animate-river transition-all duration-500 ease-out hover:scale-x-110 hover:opacity-70"></div>
        <div className="flex justify-center items-center w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

