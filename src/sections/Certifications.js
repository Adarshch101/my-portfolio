import React from "react";
import { motion } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

const Certifications = () => {
  const { profile } = useProfile();

  return (
    <section id="certificates" className="scroll-mt-20 px-[50px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/80 
                   p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
                   hover:shadow-[0_8px_40px_rgb(251,191,36,0.4)] 
                   transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-amber-400 inline-block pb-2">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.certifications.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/70 dark:bg-gray-800/70 
                         rounded-2xl shadow-md hover:shadow-xl 
                         transition flex flex-col justify-between"
            >
              <div>
                <div className="font-semibold text-lg text-gray-900 dark:text-white">
                  {c.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {c.issuer}
                </div>
              </div>

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold px-4 py-2 rounded-lg 
                           text-amber-600 dark:text-amber-400 border border-amber-400 
                           hover:bg-amber-500 hover:text-white transition"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
