import React, { useEffect, useState } from "react";
import testimonialsData from "../Utilitis/testimonialsData";
import { BsChatQuote } from "react-icons/bs";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleRisize = () => {
      if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };
    handleRisize();
    window.addEventListener("resize", handleRisize);
    return () => window.removeEventListener("resize", handleRisize);
  }, []);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsToShow) % testimonialsData.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsToShow + testimonialsData.length) %
        testimonialsData.length
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="pt-24 pb-8 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Testimonials</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Hear from our Satisfied Clients: Read Our Testimonies to Learn
              about our digital Margeting Services
            </p>
          </div>
        </div>
        {/* Testimonials slider */}
        <div className="relative mb-12 ">
          <div className="flex flex-col gap-3 md:flex-row max-w-7xl mx-auto overflow-hidden">
            {testimonialsData
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((Testimonial, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="w-full relative py-5 md:max-w-md px-2"
                >
                  <div className="absolute top-0 left-0 z-30">
                    <BsChatQuote className="size-8" />
                  </div>
                  <div className="h-48 bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                    <p className="text-base font-medium mb-4">
                      {Testimonial.text}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      {Testimonial.author}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
          {/* Dot Navigation */}
          <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
            <button className="text-black " onClick={handlePrevious}>
              <IoArrowBack />
            </button>
            {/* dots */}
            <div className="flex space-x-3 ">
              {testimonialsData.map((_, index) => (
                <button
                  onClick={() => handleDotClick(index)}
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index >= currentIndex && index < currentIndex + itemsToShow
                      ? "bg-primary"
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            {/* next */}
            <button className="text-black" onClick={handleNext}>
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
