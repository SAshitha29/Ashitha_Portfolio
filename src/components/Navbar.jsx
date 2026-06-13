import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      border-t
      border-b
      border-gray-300
      bg-[#B8A2E3]
      py-5
      sticky
      top-0
      z-50
      "
    >
      {/* Desktop Navbar */}

      <ul
        className="
        hidden
        lg:flex
        justify-center
        gap-12
        text-lg
        text-white
        font-medium
        "
      >
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills & Tools</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      {/* Mobile Navbar */}

      <div
        className="
        lg:hidden
        flex
        justify-between
        items-center
        px-6
        "
      >
        <h3 className="text-white font-semibold text-xl">
          Portfolio
        </h3>

        <button
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div
          className="
          lg:hidden
          mt-5
          px-6
          "
        >
          <ul
            className="
            flex
            flex-col
            gap-5
            text-white
            text-lg
            "
          >
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills & Tools</a></li>
          <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;