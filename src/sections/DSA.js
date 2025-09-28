import React, { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

const DSA = () => {
  const { profile } = useProfile();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, profile.dsa.solved, {
      duration: 3.2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [profile.dsa.solved, count]);

  return (
    <section id="dsa" className="scroll-mt-20 px-[50px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/80 
                   p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
                   transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-teal-500 inline-block pb-2">
          DSA
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 
                       dark:from-teal-900 dark:via-teal-800 dark:to-teal-700
                       rounded-2xl shadow-lg hover:shadow-[0_8px_35px_rgb(20,184,166,0.6)] 
                       transition text-center"
          >
            <motion.div className="text-5xl font-extrabold text-teal-800 dark:text-teal-300 tracking-widest">
              <motion.span>{rounded}</motion.span>+
            </motion.div>

            <div className="mt-3 text-sm text-gray-700 dark:text-gray-200">
              Problems solved on <span className="font-semibold">{profile.dsa.platform}</span> ({profile.dsa.lang})
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-gradient-to-br from-purple-100 via-indigo-200 to-indigo-300 
                       dark:from-purple-900 dark:via-indigo-800 dark:to-indigo-700
                       rounded-2xl shadow-lg hover:shadow-[0_8px_35px_rgb(99,102,241,0.6)] 
                       transition"
          >
            <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Focus Areas
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["DP", "Graphs", "Trees", "Greedy", "Two Pointers", "Binary Search"].map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 rounded-full text-sm 
                             bg-white/70 text-gray-800 shadow-sm
                             dark:bg-gray-900/40 dark:text-gray-100"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 
                       dark:from-yellow-600 dark:via-amber-700 dark:to-yellow-800
                       rounded-2xl shadow-lg hover:shadow-[0_8px_35px_rgb(245,158,11,0.6)] 
                       transition flex flex-col items-center justify-center text-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="h-12 mb-4 dark:invert"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              My LeetCode Profile
            </h3>
            <a
              href="https://leetcode.com/u/adchaudhari100/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold px-4 py-2 rounded-lg 
                         text-white bg-teal-600 hover:bg-teal-700 transition shadow-md"
            >
              View Profile →
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DSA;
