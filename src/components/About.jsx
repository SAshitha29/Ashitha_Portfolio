import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
  <h2 className="text-[#7C5CC4] text-5xl mb-4">
    About Me
  </h2>

  <p className="text-gray-500">
    UI/UX Designer & Frontend Developer
  </p>
</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side */}
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center lg:text-left"
>
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              I'm S. Ashitha, a UI/UX Designer and Frontend Developer
              focused on creating intuitive, user-centered digital
              experiences.
            </p>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-gray-800">
              I combine design thinking, frontend development, and
              AI-powered workflows to transform ideas into responsive,
              engaging, and meaningful products.
            </p>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-gray-800">
              From wireframes and prototypes to interactive interfaces,
              I enjoy crafting experiences that are visually appealing,
              accessible, and easy to use.
            </p>

            <a
  href="/resume/Ashitha_Resume.pdf"
  download
  className="
inline-block
mt-10
px-8
py-3
rounded-full
bg-[#B8A2E3]
text-white
hover:bg-[#A78BFA]
transition
duration-300
mx-auto
lg:mx-0
"
>
  Download Resume
</a>


          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/about/ashitha-about.jpg"
              alt="Ashitha"
              className="
w-[220px]
h-[220px]
sm:w-[280px]
sm:h-[280px]
md:w-[320px]
md:h-[320px]
object-cover
border
border-gray-300
rounded-2xl
"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;