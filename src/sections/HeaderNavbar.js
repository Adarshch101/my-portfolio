import React, { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useTheme } from "../context/ThemeContext";
import { useProfile } from "../context/ProfileContext";

const HeaderNavbar = () => {
  const sections = ["home", "about", "skills", "projects", "dsa", "certificates", "contact"];
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();
  const { profile } = useProfile();

  const hamburgerRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id && sections.includes(id)) setActive(id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        firstMobileLinkRef.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      hamburgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
                 bg-gray-900/90 backdrop-blur
                 shadow-[0_4px_20px_rgb(236,72,153,0.3)]
                 border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-100">
          {profile.name}
        </h1>

        <nav className="hidden md:flex space-x-6 text-xl" role="navigation" aria-label="Primary">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              aria-current={active === s ? "page" : undefined}
              className={`capitalize font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 rounded ${
                active === s
                  ? "text-pink-400 underline"
                  : "text-gray-300 hover:text-pink-300"
              }`}
            >
              {s}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            onClick={toggleTheme}
            variant="outline"
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-blue-500" />
            )}
          </Button>

          <button
            ref={hamburgerRef}
            className="md:hidden p-2 text-gray-300 hover:text-pink-400 focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div id="mobile-menu" className="w-64 bg-gray-900 text-white p-6 space-y-6 shadow-2xl transform transition-transform duration-300">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <button
                className="p-2 text-gray-400 hover:text-pink-400 focus-visible:ring-2 focus-visible:ring-pink-400 rounded"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 text-lg" role="navigation" aria-label="Primary">
              {sections.map((s, idx) => (
                <button
                  key={s}
                  ref={idx === 0 ? firstMobileLinkRef : null}
                  onClick={() => scrollToSection(s)}
                  aria-current={active === s ? "page" : undefined}
                  className={`capitalize text-left min-h-[44px] px-2 rounded focus-visible:ring-2 focus-visible:ring-pink-400 ${
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

          <div
            className="flex-1 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default HeaderNavbar;
