import React from "react";
import { motion } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

const About = () => {
  const { profile } = useProfile();
  return (
    <section id="about" className="scroll-mt-20 px-[50px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 
                   p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
                   hover:shadow-[0_8px_40px_rgb(236,72,153,0.4)] 
                   transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-pink-500 inline-block pb-2">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Hi, I'm <span className="font-semibold">{profile.name}</span>, a{" "}
          <span className="font-semibold">{profile.qualification}</span> graduate
          with strong problem-solving skills and a passion for building
          full-stack apps.
        </p>

        <ul className="list-disc ml-6 mt-4 space-y-2 text-base text-gray-700 dark:text-gray-300">
          <li>
            Solving DSA on {profile.dsa.platform} in {profile.dsa.lang} —{" "}
            <span className="font-semibold">{profile.dsa.solved}+ problems</span>.
          </li>
          <li>Comfortable across the MERN stack and databases (SQL/PLSQL).</li>
          <li>Clean, accessible UI with Tailwind and React.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
