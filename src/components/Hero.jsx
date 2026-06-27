import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { trackEvent } from "../utils/analytics";

const Hero = () => {
  return (
    <section
      id="home"
      className="
min-h-screen
bg-[#FAFAFA]
flex
items-center
px-6
md:px-[6%]
overflow-hidden
"
    >
      <div className="w-full max-w-[1400px] mx-auto relative">

        {/* Role */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
text-[#7C5CC4]
uppercase
tracking-[0.15em]

text-center
lg:text-left

text-xl
md:text-2xl
mb-8
"
        >
          {profile.role}
        </motion.p>

        <div
  className="
  relative
  flex
  flex-col
  lg:block
  "
>

          {/* Main Title */}

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
leading-none
font-normal

text-center
lg:text-left

text-[52px]
sm:text-[70px]
md:text-[110px]
lg:text-[150px]
"
          >
            MY PORTFOLIO
          </motion.h1>

          {/* Character */}

          <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.4 }}
  className="
  flex
  justify-center

  mt-4
  mb-4

  lg:absolute
  lg:right-[-11%]
  lg:top-[-180px]
  "
>
            <img
              src="/hero/ashitha.png"
              alt="Ashitha"
              className="
w-[120px]
sm:w-[150px]
md:w-[220px]
lg:w-[320px]
"
            />
          </motion.div>

          {/* Name */}

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="
flex
justify-center
lg:justify-end

mt-6
md:mt-8

lg:pr-[20%]
"
>
  <h2
   className="
text-xl
sm:text-2xl
md:text-5xl
tracking-wide
"
  >
    {profile.name}
  </h2>
</motion.div>
        </div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
flex
flex-col
sm:flex-row
gap-4
mt-12
items-center
sm:items-center
lg:items-start

"
        >
          <a
            href="#projects"
            className="
            px-8
            py-4
            rounded-full
            bg-[#7C5CC4]
            text-white
            hover:opacity-90
            transition
            "
          >
            View Projects
          </a>

          <a
            href="/resume/Ashitha_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("resume_view")}
            className="
            px-8
            py-4
            rounded-full
            border
            border-[#7C5CC4]
            text-[#7C5CC4]
            hover:bg-[#7C5CC4]
            hover:text-white
            transition
            "
          >
            Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;