import figma from "../assets/logos/figma.png";
import framer from "../assets/logos/framer.png";
import canva from "../assets/logos/canva.png";

import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";

import chatgpt from "../assets/logos/chatgpt.png";
import gemini from "../assets/logos/gemini.png";

import { motion } from "framer-motion";


const Skills = () => {
  return (
    <section
      id="skills"
     className="py-16 md:py-24 px-4 md:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-center text-[#7C5CC4] text-3xl md:text-5xl mb-4">
          Skills & Tools
        </h2>

        <p className="text-center text-gray-600 mb-12 md:mb-16 text-base md:text-xl px-4">
          A blend of design thinking, frontend development, and modern
          tools for creating impactful digital experiences.
        </p>

        {/* Cards */}

        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">

          {/* UI UX */}

    <motion.div
  className="
  border
  border-gray-300
  p-6 md:p-10
  bg-white
  flex
  flex-col
  h-full
  "
>
            <h3 className="text-2xl md:text-3xl text-center mb-6 md:mb-8">
              UI/UX DESIGN
            </h3>

            
            <ul className="space-y-3 text-center text-base md:text-xl flex-grow">
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Responsive Design</li>
              <li>Design Systems</li>
              <li>UX Writing</li>
            </ul>

            {/* Logos */}

            
            <div className="flex flex-wrap justify-center gap-4 mt-auto pt-8">

              <div className="logo-card">
                <img src={figma} alt="Figma" />
              </div>

              <div className="logo-card">
                <img src={framer} alt="Framer" />
              </div>

              <div className="logo-card">
                <img src={canva} alt="Canva" />
              </div>

            </div>
          </motion.div>

          {/* Frontend */}

  <motion.div
  className="
  border
  border-gray-300
  p-6 md:p-10
  bg-white
  flex
  flex-col
  h-full
  "
>
            <h3 className="text-2xl md:text-3xl text-center mb-6 md:mb-8">
              FRONTEND DEVELOPMENT
            </h3>

            
            <ul className="space-y-3 text-center text-base md:text-xl flex-grow">
              <li>Interactive UI Development</li>
              <li>Design-to-Code Implementation</li>
              <li>Web Accessibility</li>
              <li>Problem Solving</li>
              <li>AI-Assisted Workflows</li>
            </ul>

            <div className="flex justify-center gap-4 mt-10">

              <div className="logo-card">
                <img src={html} alt="HTML" />
              </div>

              <div className="logo-card">
                <img src={css} alt="CSS" />
              </div>

              <div className="logo-card">
                <img src={javascript} alt="JavaScript" />

              </div>

              <div className="logo-card">
                <img src={react} alt="React" />
              </div>

            </div>
          </motion.div>

          {/* AI */}

  <motion.div
  className="
  border
  border-gray-300
  p-6 md:p-10
  bg-white
  flex
  flex-col
  h-full
  "
>
            <h3 className="text-2xl md:text-3xl text-center mb-6 md:mb-8">
              AI ASSISTED SKILLS
            </h3>

            <ul className="space-y-3 text-center text-base md:text-xl flex-grow">
           
              <li>AI-Assisted Design Research</li>
              <li>AI-Powered Content Ideation</li>
              <li>AI-Assisted Frontend Development</li>
              <li>Rapid Prototyping</li>
              <li>Workflow Optimization</li>
            </ul>

            <div className="flex justify-center gap-4 mt-10">

              <div className="logo-card">
                <img src={chatgpt} alt="ChatGPT" />
              </div>

              <div className="logo-card">
                <img src={gemini} alt="Gemini" />
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;