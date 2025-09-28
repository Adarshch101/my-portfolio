import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, FolderOpen } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useProfile } from "../context/ProfileContext";

const Hero = () => {
  const { profile } = useProfile();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4"
        >
          Hi, I’m <span className="text-pink-500">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl text-gray-300 mb-6"
        >
          MCA Graduate | Full Stack Developer | Problem Solver
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed"
        >
          Skilled in <span className="text-pink-400 font-semibold">C, C++, Java, Python, SQL, PLSQL, MERN Stack, JavaScript, HTML, CSS</span>.
          Experienced in building impactful projects like <span className="text-pink-400">Pet Adoption System</span>,
          <span className="text-pink-400"> Vehicle Rental System</span>, and a <span className="text-pink-400">Weather Forecasting App</span>.
          Passionate about <span className="text-pink-400">DSA</span> and creating innovative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            className="px-6 py-3 text-lg rounded-xl bg-pink-600 hover:bg-pink-700"
            onClick={() =>
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }
          >
            <FolderOpen className="mr-2" /> View Projects
          </Button>

          <Button
            variant="outline"
            className="px-6 py-3 text-lg rounded-xl border-pink-500 text-pink-400 hover:bg-pink-500/20"
            onClick={() =>
              document.getElementById("skills").scrollIntoView({ behavior: "smooth" })
            }
          >
            <Code2 className="mr-2" /> My Skills
          </Button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
