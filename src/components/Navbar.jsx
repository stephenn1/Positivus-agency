import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };

  const menuItem = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use case", href: "#use-case" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const sections = menuItem.map((item) => document.querySelector(item.href));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";
      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop < scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveItem(
        menuItem.find((item) => item.href === "#${currentSection}")?.name || ""
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItem]);

  return (
    <nav className="fixed top-0 w-full left-0 right-0 shadow-md bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div>
            <a href="">
              <img src="/logo.png" alt="" className="h-8 " />
            </a>
          </div>
          {/* NavItems */}
          <div
            className="
        space-x-8 hidden md:flex items-center"
          >
            {menuItem.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={` text-black px-2 hover:bg-primary rounded-sm hover:underline-offset-4 transition-all duration-300
                    ${activeItem === item.name ? "bg-primary" : ""}
                    
                    `}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose className="size-6" />
              ) : (
                <HiOutlineMenuAlt3 className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3 ">
            {menuItem.map((item, index) => (
              <a
                onClick={() => handleMenuClick(item.name)}
                className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline-offset-4 transition-all duration-300
                    ${
                      activeItem === item.name
                        ? "bg-primary text-black underline-offset-4"
                        : ""
                    }
                    
                    `}
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className=" block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
