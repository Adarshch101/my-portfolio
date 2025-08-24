import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/Button";
import { Sun, Moon } from "lucide-react";
import Footer from "./components/Footer";
  //  import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
import { ArrowDown, Code2, FolderOpen } from "lucide-react";
// import { useProfile } from "@/context/ProfileContext";

// Context API for Theme
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((v) => !v);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen text-gray-900 dark:text-white bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-black scroll-smooth">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// Context API for Profile Data
const ProfileContext = createContext();

const profileData = {
  name: "Adarsh Kumar Chaudhari",
  qualification: "MCA",
  skills: ["C", "C++", "Java", "Python", "SQL", "PLSQL", "MERN Stack", "JavaScript", "HTML", "CSS"],
  projects: [
    { title: "Get a Friend", desc: "Get a Friend is a pet adoption website that connects animal lovers with shelters and pet owners. The platform simplifies adopting dogs, cats, and other pets through secure profiles, filters, and real-time listings. With an intuitive interface, Get a Friend promotes responsible adoption and makes finding a loving companion easier.", link: "#" },
    { title: "Auto Care", desc: "Auto Care is a vehicle rental website offering cars, bikes, and SUVs for affordable short-term and long-term rentals. With an easy booking system, secure payments, and flexible plans, Auto Care ensures hassle-free travel. Customers can explore vehicles, compare prices, and enjoy reliable service for business, leisure, or daily commuting.", link: "#" },
    { title: "Weather Forecasting", desc: "Our weather forecasting website delivers accurate, real-time weather updates with advanced prediction models. Users can check hourly, daily, and weekly forecasts for temperature, rainfall, wind, and humidity. With interactive maps, location-based alerts, and a user-friendly interface, it ensures reliable climate insights for travel, agriculture, and everyday planning.", link: "#" },
  ],
  dsa: { platform: "LeetCode", lang: "C++", solved: 700 },
  certifications: [
    { name: "Problem Solving (C)", issuer: "HackerRank" },
    { name: "JavaScript (Basic)", issuer: "HackerRank" },
    { name: "SQL (Basic)", issuer: "HackerRank" },
  ],
  contact: { email: "adarsh@example.com", phone: "+91-XXXXXXXXXX" },
};

const ProfileProvider = ({ children }) => {
  const value = useMemo(() => ({ profile: profileData }), []);
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

const useProfile = () => useContext(ProfileContext);



const HeaderNavbar = () => {
  const sections = ["about", "skills", "projects", "dsa", "certs", "contact"];
  const [active, setActive] = useState("about");

  const { darkMode, toggleTheme } = useTheme();
  const { profile } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: Infinity };
        return { id, offset: Math.abs(el.getBoundingClientRect().top) };
      });
      const nearest = offsets.reduce((prev, curr) =>
        prev.offset < curr.offset ? prev : curr
      );
      setActive(nearest.id);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
                 bg-gray-900/90 backdrop-blur
                 shadow-[0_4px_20px_rgb(236,72,153,0.3)]
                 border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left - Profile Name */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-100">
          {profile.name}
        </h1>

        {/* Middle - Navbar */}
        <nav className="flex space-x-6">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              className={`capitalize font-medium transition focus:outline-none ${
                active === s
                  ? "text-pink-400 underline"
                  : "text-gray-300 hover:text-pink-300"
              }`}
            >
              {s}
            </button>
          ))}
        </nav>

        {/* Right - Theme Toggle */}
        <Button
          onClick={toggleTheme}
          variant="outline"
          className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-500" />}
        </Button>
      </div>
    </header>
  );
};




const Hero = () => {
  const { profile } = useProfile();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Name + Title */}
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

        {/* Summary */}
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

        {/* Buttons */}
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

        {/* Scroll Indicator */}
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




// --- Sections (About, Skills, Projects, DSA, Certifications, Contact) remain unchanged ---

// import { motion } from "framer-motion";

const About = () => {
  const { profile } = useProfile();
  return (
    <section id="about" className="scroll-mt-20 px-[50px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}   // Start faded + lower
        whileInView={{ opacity: 1, y: 0 }} // Animate into place
        viewport={{ once: true, amount: 0.3 }} // Trigger only once
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



// (Skills, Projects, DSA, Certifications, Contact components remain the same)

// import { motion } from "framer-motion";

const Skills = () => {
  const { profile } = useProfile();

  // 🎨 Different gradient / color styles
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {profile.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className={`p-4 rounded-xl shadow-md text-center font-medium 
                          hover:shadow-xl transition transform hover:-translate-y-1
                          ${bgStyles[idx % bgStyles.length]}`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};






const Projects = () => {
  const { profile } = useProfile();
  const [current, setCurrent] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % profile.projects.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [profile.projects.length]);

  return (
    <section id="projects" className="scroll-mt-20 px-[50px] my-12">
      <div className="max-w-7xl mx-auto bg-white/80 dark:bg-gray-800/80 
                      p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
                      hover:shadow-[0_8px_40px_rgb(236,72,153,0.4)] 
                      transition-all duration-300">
        
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-pink-500 inline-block pb-2">
          Projects
        </h2>

        <div className="relative flex items-center justify-center overflow-hidden h-[450px]">
          {profile.projects.map((project, idx) => {
            let position = "hidden";
            if (idx === current) position = "center";
            else if (idx === (current - 1 + profile.projects.length) % profile.projects.length) position = "left";
            else if (idx === (current + 1) % profile.projects.length) position = "right";

            return (
              <AnimatePresence key={idx}>
                {position !== "hidden" && (
                  <motion.div
                    initial={{ opacity: 0, x: position === "left" ? -400 : 400, scale: 0.8 }}
                    animate={{
                      opacity: position === "center" ? 1 : 0.5,
                      x: position === "center" ? 0 : position === "left" ? -350 : 350,
                      scale: position === "center" ? 1 : 0.85,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className={`absolute w-[420px] md:w-[500px] lg:w-[580px] h-[400px]
                                bg-white/85 dark:bg-gray-700/80 p-8 rounded-2xl shadow-xl 
                                border-l-4 border-transparent hover:border-pink-400 flex flex-col 
                                justify-between transition-all duration-500
                                ${position !== "center" ? "blur-sm" : ""}`}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base overflow-hidden">
                        {project.desc}
                      </p>
                    </div>
                    {position === "center" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block text-base font-semibold text-pink-600 dark:text-pink-400 hover:underline"
                      >
                        View details →
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
};




// import { motion } from "framer-motion";

const DSA = () => {
  const { profile } = useProfile();
  return (
    <section id="dsa" className="scroll-mt-20 px-[50px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/80 
                   p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.25)] 
                   hover:shadow-[0_8px_40px_rgb(45,212,191,0.4)] 
                   transition-all duration-300"
      >
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-teal-500 inline-block pb-2">
          DSA
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Solved Problems Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white/70 dark:bg-gray-800/70 
                       rounded-2xl shadow-md hover:shadow-xl 
                       transition text-center"
          >
            <div className="text-4xl font-bold text-teal-500">
              {profile.dsa.solved}+
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Problems solved on{" "}
              <span className="font-semibold">{profile.dsa.platform}</span> (
              {profile.dsa.lang})
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white/70 dark:bg-gray-800/70 
                       rounded-2xl shadow-md hover:shadow-xl 
                       transition md:col-span-2"
          >
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Focus Areas
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["DP", "Graphs", "Trees", "Greedy", "Two Pointers", "Binary Search"].map(
                (t, idx) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-sm 
                               bg-teal-100 text-teal-700 
                               dark:bg-teal-900/40 dark:text-teal-200"
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


// import { motion } from "framer-motion";

const Certifications = () => {
  const { profile } = useProfile();
  return (
    <section id="certs" className="scroll-mt-20 px-[50px] my-10">
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
                         transition"
            >
              <div className="font-semibold text-lg text-gray-900 dark:text-white">
                {c.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {c.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


// import { motion } from "framer-motion";

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


const AppProviders = ({ children }) => (
  <ThemeProvider>
    <ProfileProvider>{children}</ProfileProvider>
  </ThemeProvider>
);

const Portfolio = () => {
  return (
    <AppProviders>
      <HeaderNavbar />
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <DSA />
      <Certifications />
      <Contact />
      <Footer/>
    </AppProviders>
  );
};

export default Portfolio;
