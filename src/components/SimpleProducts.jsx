import React from "react";
import SimpleSlider from "./ui/SimpleSlider";
import { Categoriesimages } from "../../lib/data";

const SimpleProducts = () => {


  return (
    <div className="px-4 ">
      <SimpleSlider>
        {Categoriesimages.map((item) => (
          <div
            key={item.id}
            className="min-w-80 h-48 rounded-xl overflow-hidden bg-white shadow-md relative"
          >
            <img
          loading="lazy"
              src={item.url}
              alt={item.title}
              className=" object-cover absolute w-full h-full hover:scale-105 transition-all ease-in-out"
            />
            <div className="p-3 bottom-0 absolute">
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>             
            </div>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
};

export default SimpleProducts;