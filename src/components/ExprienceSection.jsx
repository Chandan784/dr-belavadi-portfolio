import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="experience">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Experience
      </motion.h2>

      <motion.ul>
        <motion.li
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Senior Cardiologist at Apollo Hospital (2015–Present)
        </motion.li>

        <motion.li
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Consultant Cardiologist at AIIMS Delhi (2012–2015)
        </motion.li>

        <motion.li
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          MD Cardiology – AIIMS Delhi
        </motion.li>
      </motion.ul>
    </section>
  );
}
