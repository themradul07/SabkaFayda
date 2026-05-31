import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TailwindSlider = ({slides}) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScrollIndex, setMaxScrollIndex] = useState(3);

  // Mock Data mimicking your screenshot cards
  

  // Calculate slide index on scroll to update dots active states
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      
      // Calculate active dot index dynamically
      const index = Math.round(scrollLeft / (scrollWidth / slides.length));
      setCurrentIndex(index);

      // Dynamically calculate how many dot segments we have based on screen size
      const maxIndex = Math.ceil((scrollWidth - clientWidth) / (scrollWidth / slides.length));
      setMaxScrollIndex(maxIndex);
    }
  };

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      // Scroll by roughly one viewport width area
      const scrollAmount = clientWidth * 0.85; 
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Determine dots count layout on initial screen paint
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 relative group">
      
      {/* Scrollable Container */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hides default ugly scrollbar
      >
        {/* Style hack to hide webkit scrollbars natively */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-90 snap-start rounded-md overflow-hidden shadow-md relative h-40 cursor-pointer hover:scale-[1.01] transition-transform duration-200"
          >
            {/* Background Image */}
            <img
          loading="lazy"
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              draggable="false"
            />
            {/* Decorative Color Overlay (Similar to banners in screenshot) */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${slide.gradient} flex flex-col justify-end p-6 text-white`}>
              <span className="text-xs font-bold tracking-wider opacity-90">{slide.subtitle}</span>
              <h3 className="text-3xl font-extrabold tracking-tight mt-1">{slide.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-gray-100 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:bg-gray-100 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom Progress Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-2">
        {slides.map((_, idx) => {
          // Only show dots up to the max horizontal boundaries computed
          if (idx > maxScrollIndex + 1) return null;
          
          return (
            <button
              key={idx}
              onClick={() => {
                if (sliderRef.current) {
                  const width = sliderRef.current.scrollWidth / slides.length;
                  sliderRef.current.scrollTo({ left: width * idx, behavior: "smooth" });
                }
              }}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === idx ? "w-6 bg-[#0278FF]" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to section ${idx + 1}`}
            />
          );
        })}
      </div>

    </div>
  );
};

export default TailwindSlider;