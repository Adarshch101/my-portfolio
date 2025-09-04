import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence,useMotionValue,useTransform,animate } from "framer-motion";
import { Button } from "./components/ui/Button";
import { Sun, Moon ,Menu,X} from "lucide-react";
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
  skills: [
    "C", "C++", "Java", "Python", "SQL", "PLSQL",
    "MERN Stack", "JavaScript", "HTML", "CSS"
  ],
  projects: [
    {
      title: "Get a Friend",
      desc: "Get a Friend is a pet adoption website that connects animal lovers with shelters and pet owners. The platform simplifies adopting dogs, cats, and other pets through secure profiles, filters, and real-time listings. With an intuitive interface, Get a Friend promotes responsible adoption and makes finding a loving companion easier.",
      link: "#",
      image: "https://th.bing.com/th/id/OIP.E7NVi0JVmAtQu33adVRrXQHaHa?w=201&h=201&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3",   // Add your image path
      tech: "MERN Stack, Tailwind CSS, JWT Authentication",
      purpose: "To provide a reliable and easy-to-use platform for pet adoption.",
      scope: "Adding AI-based pet recommendations and integrating NGO/charity partnerships.",
      bgGradient: "from-pink-500 via-red-400 to-yellow-400 dark:from-pink-700 dark:via-red-600 dark:to-yellow-500",
      github:"https://github.com/Adarshch101/Pet-Adoption"

    },
    {
      title: "Auto Care",
      desc: "Auto Care is a vehicle rental website offering cars, bikes, and SUVs for affordable short-term and long-term rentals. With an easy booking system, secure payments, and flexible plans, Auto Care ensures hassle-free travel. Customers can explore vehicles, compare prices, and enjoy reliable service for business, leisure, or daily commuting.",
      link: "#",
      image: "https://th.bing.com/th/id/OIP.f5pSrxxnRNFepor4YejZ5wHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7",
      tech: "React, Node.js, Express, MongoDB, Razorpay API",
      purpose: "To simplify vehicle rentals with a secure and user-friendly platform.",
      scope: "Integration with GPS tracking and subscription-based rental models.",
      bgGradient: "from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-800 dark:via-purple-700 dark:to-pink-700",
      github:"https://github.com/Adarshch101/vehicle-rental"

    },
    {
      title: "Weather Forecasting",
      desc: "Our weather forecasting website delivers accurate, real-time weather updates with advanced prediction models. Users can check hourly, daily, and weekly forecasts for temperature, rainfall, wind, and humidity. With interactive maps, location-based alerts, and a user-friendly interface, it ensures reliable climate insights for travel, agriculture, and everyday planning.",
      link: "#",
      image: "https://cdn.dribbble.com/userupload/4246709/file/original-7ec7d3e380f5f080b4d0fea878dc4375.jpg?compress=1&resize=1504x1128",
      tech: "React, OpenWeatherMap API, Chart.js",
      purpose: "To provide accurate and accessible weather updates to users worldwide.",
      scope: "Adding AI-based prediction models and mobile app support.",
      bgGradient: "from-green-400 via-emerald-500 to-teal-500 dark:from-green-700 dark:via-emerald-800 dark:to-teal-700",
      github:""

    },
  ],
  dsa: { platform: "LeetCode", lang: "C++", solved: 700 },
  certifications:[
    {
      name: "SQL(Basic)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/9e4eadf7d2ef",
    },
    {
      name: "SQL(Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/91396f260dc2",
    },
    {
      name: "SQL(Advanced)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/eff33bceecb9",
    },
    {
      name: "JavaScript(Basic)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/320d07b70fbb",
    },
    {
      name: "JavaScript(Intermediate)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/5e05cc9ed4fb",
    },
    {
      name: "Problem Solving(Basic)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/bb862a07b66b",
    },
  ],
  contact: { email: "adchaudhari100@gmail.com", phone: "+91-8707059003" },
};

const ProfileProvider = ({ children }) => {
  const value = useMemo(() => ({ profile: profileData }), []);
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

const useProfile = () => useContext(ProfileContext);




const HeaderNavbar = () => {
  const sections = ["about", "skills", "projects", "dsa", "certificates", "contact"];
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false); // close menu after click
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
        {/* <h1 className="text-3xl font-bold tracking-tight text-gray-100">
          {profile.name}
        </h1> */}

        {/* Middle - Navbar (Desktop/Tablet) */}
        <nav className="hidden md:flex space-x-6 text-xl">
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

        {/* Right - Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={toggleTheme}
            variant="outline"
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-blue-500" />
            )}
          </Button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-pink-400"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900 text-white p-6 space-y-6 shadow-2xl transform transition-transform duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <button
                className="p-2 text-gray-400 hover:text-pink-400"
                onClick={() => setMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-lg"> 
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollToSection(s)}
                  className={`capitalize text-left ${
                    active === s
                      ? "text-pink-400 underline"
                      : "text-gray-300 hover:text-pink-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </nav>
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
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

  // 🎬 Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay each skill
        delayChildren: 0.2,    // start after container fade
      },
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

        {/* Animate container with stagger */}
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








const Projects = () => {
  const { profile } = useProfile();
  const [current, setCurrent] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % profile.projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? profile.projects.length - 1 : prev - 1
    );
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

        {/* Project Card */}
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
              {/* Project Image with Title Overlay */}
              <div className="relative h-56 w-full mb-4">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full bg-black/50 text-center py-2 rounded-t-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {currentProject.title}
                  </h3>
                </div>
              </div>

              {/* Trimmed description */}
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

                {/* View Source Button */}
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900"
                >
                  View Source
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
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

      {/* Modal for Details */}
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
              {/* Project Image */}
              <div className="w-full h-60 mb-6">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="h-full w-full object-cover rounded-xl shadow-lg"
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
                {/* Source Code Button in Modal */}
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900"
                >
                  View Source
                </a>

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







const DSA = () => {
  const { profile } = useProfile();

  // 🎯 Motion value for the counter
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
          {/* Solved Problems Card */}
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
            className="p-6 bg-gradient-to-br from-purple-100 via-indigo-200 to-indigo-300 
                       dark:from-purple-900 dark:via-indigo-800 dark:to-indigo-700
                       rounded-2xl shadow-lg hover:shadow-[0_8px_35px_rgb(99,102,241,0.6)] 
                       transition"
          >
            <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Focus Areas
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["DP", "Graphs", "Trees", "Greedy", "Two Pointers", "Binary Search"].map(
                (t) => (
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
                )
              )}
            </div>
          </motion.div>

          {/* LeetCode Profile */}
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

        {/* Grid of Certifications */}
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

              {/* View Certificate Button */}
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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DSA />
      <Certifications />
      <Contact />
      <Footer />
    </AppProviders>
  );
};

export default Portfolio;
