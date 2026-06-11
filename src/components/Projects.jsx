import { uiuxProjects, frontendProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}

        <div className="text-center mb-28">
          <h2 className=" text-[#7C5CC4] text-5xl mb-6">
            Projects
          </h2>

          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            A showcase of projects where design meets functionality—
            combining UI/UX principles, frontend development, and
            creative problem-solving to deliver impactful digital
            experiences.
          </p>
        </div>

        {/* UI UX SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 lg:mb-40">

          {/* Left */}

          <div className="lg:sticky lg:top-24 self-start">
            <h3 className="text-[#7C5CC4] text-3xl md:text-4xl lg:text-5xl mb-6">
              UI/UX Projects
            </h3>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Exploring user problems, design decisions,
              and the process of creating intuitive digital
              experiences through research, wireframing,
              prototyping, and usability testing.
            </p>
          </div>

          {/* Right */}

          <div>
            {uiuxProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
              />
            ))}
          </div>

        </div>

        {/* FRONTEND SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 lg:mb-40">

          {/* Left */}

          <div className="lg:sticky lg:top-24 self-start">
           <h3 className="text-[#7C5CC4] text-3xl md:text-4xl lg:text-5xl mb-6">
              Frontend Projects
            </h3>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Building responsive and interactive web
              applications using modern frontend technologies,
              focusing on performance, accessibility,
              user experience, and clean code practices.
            </p>
          </div>

          {/* Right */}

          <div>
            {frontendProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;