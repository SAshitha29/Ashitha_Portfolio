import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const isUIUX =
    project.caseStudy || project.prototype;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
      bg-white
      border
      border-gray-200
      shadow-md
      p-6
      mb-10
      w-full
max-w-[600px]
mx-auto
      rounded-2xl
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
        w-full
        max-w-[500px]
        h-[220px]
sm:h-[260px]
md:h-[320px]
        object-cover
        border
        border-gray-300
        mx-auto
        rounded-xl
        "
      />

      <h3 className="text-2xl md:text-3xl mt-6">
        {project.title}
      </h3>

      {project.subtitle && (
        <p
          className="
          text-[#7C5CC4]
          mt-2
          text-sm
          uppercase
          tracking-wider
          "
        >
          {project.subtitle}
        </p>
      )}

      <p
        className="
        mt-4
        text-gray-700
        leading-relaxed
        "
      >
        {project.description}
      </p>

      {/* UI/UX BUTTONS */}

      {isUIUX ? (
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
            href={project.caseStudy}
            target="_blank"
            rel="noreferrer"
            className="
            px-5
            py-2
            rounded-full
            bg-[#7C5CC4]
            text-white
            hover:opacity-90
            transition
            "
          >
            Read Case Study
          </a>

          <a
            href={project.prototype}
            target="_blank"
            rel="noreferrer"
            className="
            px-5
            py-2
            rounded-full
            border
            border-[#7C5CC4]
            text-[#7C5CC4]
            hover:bg-[#7C5CC4]
            hover:text-white
            transition
            "
          >
            View Prototype
          </a>
        </div>
      ) : (
        /* FRONTEND BUTTON */

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
          inline-block
          mt-6
          px-6
          py-2
          rounded-full
          border
          border-[#7C5CC4]
          text-[#7C5CC4]
          hover:bg-[#7C5CC4]
          hover:text-white
          transition
          "
        >
          View Project
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;