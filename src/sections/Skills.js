import React from "react";
import { motion } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

const Skills = () => {
  const { profile } = useProfile();

  const bgStyles = [
    "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
    "bg-gradient-to-r from-purple-400 to-indigo-600 text-white",
    "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
    "bg-gradient-to-r from-green-400 to-emerald-600 text-white",
    "bg-gradient-to-r from-blue-400 to-cyan-500 text-white",
    "bg-gradient-to-r from-red-400 to-rose-500 text-white",
    "bg-gradient-to-r from-teal-400 to-green-500 text-white",
    "bg-gradient-to-r from-indigo-400 to-violet-600 text-white",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5, y: 40, rotate: -10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="skills" className="scroll-mt-20 px-[50px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 
                   p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
                   hover:shadow-[0_8px_40px_rgb(139,92,246,0.4)] 
                   transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-500 inline-block pb-2">
          Skills
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {profile.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.15, rotate: 3 }}
              className={`p-4 rounded-xl shadow-md text-center font-medium 
                          hover:shadow-xl transition transform hover:-translate-y-1
                          ${bgStyles[idx % bgStyles.length]}`}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
