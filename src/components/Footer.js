import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                 text-white py-8 mt-16 
                 shadow-[0_-6px_20px_rgba(255,255,255,0.5)]" // ✅ white shadow upwards
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold">Adarsh Kumar Chaudhari</h2>
        <p className="text-sm text-gray-200 dark:text-gray-400 mt-2">
          MCA | MERN Stack Developer | Problem Solver
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Adarshch101?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/adarsh-kumar-chaudhari-6b820b279/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:adchaudhari100@gmail.com"
            className="hover:text-gray-300 transition-transform transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>

          {/* LeetCode Icon */}
          <a
            href="https://leetcode.com/your-leetcode-username/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFA116"
              className="w-6 h-6"
            >
              <path d="M14.09 2.25c.46 0 .9.18 1.23.51l5.92 5.92a1.75 1.75 0 010 2.48l-5.92 5.92a1.75 1.75 0 01-2.48 0l-2.63-2.63-3.82 3.82a1.75 1.75 0 11-2.48-2.48l5.06-5.06a1.75 1.75 0 012.48 0l2.63 2.63 4.68-4.68-4.68-4.68-2.63 2.63a1.75 1.75 0 01-2.48-2.48l3.82-3.82c.33-.33.77-.51 1.23-.51z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-300 dark:text-gray-500 mt-6">
          © {new Date().getFullYear()} Adarsh Kumar Chaudhari. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
