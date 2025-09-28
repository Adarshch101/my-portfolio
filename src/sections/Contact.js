import React from "react";
import { motion } from "framer-motion";
import { useProfile } from "../context/ProfileContext";

const Contact = () => {
  const { profile } = useProfile();
  return (
    <section id="contact" className="scroll-mt-20 px-[50px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 
                   p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
                   hover:shadow-[0_8px_40px_rgb(99,102,241,0.4)] 
                   transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-indigo-400 inline-block pb-2">
          Contact
        </h2>

        <div className="space-y-6 text-lg">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              {profile.contact.email}
            </a>
          </div>

          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
            <div className="text-gray-900 dark:text-gray-200 font-medium">
              {profile.contact.phone}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
