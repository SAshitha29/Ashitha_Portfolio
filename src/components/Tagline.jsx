import { motion } from "framer-motion";

const Tagline = () => {
  return (
    <section
  className="
  py-20
  px-6
  bg-gradient-to-r
  from-[#F3EEFF]
  via-[#EDE7F6]
  to-[#F3EEFF]
  "
>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2
  className="
  text-xl
  md:text-3xl
  font-medium
  text-center
  "
>
          I don't just design interfaces —
          <br />
          I design experiences people enjoy using.
        </h2>
      </motion.div>
    </section>
  );
};

export default Tagline;