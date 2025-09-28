import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

const Projects = () => {
  const { profile } = useProfile();
  const [current, setCurrent] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % profile.projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? profile.projects.length - 1 : prev - 1));
  };

  const currentProject = profile.projects[current];

  return (
    <section id="projects" className="scroll-mt-20 px-[50px] my-12">
      <div
        className="max-w-7xl mx-auto bg-white/80 dark:bg-gray-800/80 
        p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
        hover:shadow-[0_8px_40px_rgb(236,72,153,0.4)] 
        transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-pink-500 inline-block pb-2">
          Projects
        </h2>

        <div className="relative flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              className="w-[420px] md:w-[500px] lg:w-[580px] h-[500px]
        bg-white/85 dark:bg-gray-700/80 p-6 rounded-2xl shadow-xl 
        border-l-4 border-transparent hover:border-pink-400 flex flex-col 
        justify-between transition-all duration-500"
            >
              <div className="relative h-56 w-full mb-4">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="h-full w-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full bg-black/50 text-center py-2 rounded-t-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {currentProject.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                {currentProject.desc.split(" ").slice(0, 20).join(" ")}...
              </p>

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-base font-semibold text-pink-600 dark:text-pink-400 hover:underline"
                >
                  View details →
                </button>

                {currentProject.github ? (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900"
                  >
                    View Source
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">Source unavailable</span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between w-full max-w-[580px] mt-6">
            <button
              onClick={prevProject}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600"
            >
              ← Previous
            </button>
            <button
              onClick={nextProject}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className={`p-8 rounded-2xl shadow-2xl w-[95%] md:w-[750px] max-h-[90vh] 
                          overflow-y-auto transition-colors duration-500 
                          bg-gradient-to-r ${currentProject.bgGradient}`}
            >
              <div className="w-full h-60 mb-6">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="h-full w-full object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>

              <h3 className="text-3xl font-extrabold mb-4 text-center">
                {currentProject.title}
              </h3>

              <p className="mb-3">
                <strong>Description:</strong> {currentProject.desc}
              </p>
              <p className="mb-3">
                <strong>Technologies:</strong> {currentProject.tech}
              </p>
              <p className="mb-3">
                <strong>Purpose:</strong> {currentProject.purpose}
              </p>
              <p className="mb-3">
                <strong>Future Scope:</strong> {currentProject.scope}
              </p>

              <div className="flex justify-between mt-6">
                {currentProject.github ? (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900"
                  >
                    View Source
                  </a>
                ) : <span />}

                <button
                  onClick={() => setShowDetails(false)}
                  className="px-5 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
