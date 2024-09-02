import React from "react";
import footerImg from "../assets/footer-logo.png";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterContant from "./FooterContant";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
      <div className="bg-secondary rounded-t-2xl">
        {/* First Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo */}
          <div>
            <img src={footerImg} alt="" className="h-8" />
          </div>
          {/* Meni Item */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="about-us" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="use-case" className="text-white hover:text-gray-400">
              Use Case
            </a>
            <a href="contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex md:justify-end space-x-4">
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaFacebookF className=" hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaTwitter className="text-black hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaLinkedin className="text-black hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Second Section */}
        <FooterContant />

        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8 " />
        <div className="flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8  py-5 ">
          <p> 2024 Positivus. All Rights Reserved.</p>
          <p className="underline underline-offset-4">
            <a href="">Privarcy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
