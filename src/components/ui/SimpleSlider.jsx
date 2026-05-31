import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SimpleSlider = ({ children }) => {
  const sliderRef = useRef(null);

  const totalSlides = React.Children.count(children);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current || totalSlides === 0) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    const maxScrollableWidth = scrollWidth - clientWidth;

    if (maxScrollableWidth <= 0) {
      setCurrentIndex(0);
      return;
    }

    const index = Math.round(
      (scrollLeft / maxScrollableWidth) * (totalSlides - 1)
    );

    setCurrentIndex(index);
  };

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const { scrollLeft, clientWidth } = sliderRef.current;

    const scrollAmount = clientWidth * 0.85;

    sliderRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mx-auto px-4 md:px-8 py-10 relative group">
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex  gap-5  overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>

      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <button
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-gray-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-gray-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      {/* <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-black w-5"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default SimpleSlider;