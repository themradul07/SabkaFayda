import { useState } from "react";

export default function MultipleImagesCard() {
  const [selectedImage, setSelectedImage] = useState(1);

  const thumbnails = [
    "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=300",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300",
    "https://images.unsplash.com/photo-1585232351009-aa87416fca90?w=300",
    "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=300",
  ];

  return (
    <div className="min-w-80 h-96 overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200 hover:scale-[101%] ease-in-out transition-all duration-75">
      {/* Header */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900">
          Best Sellers in Beauty
        </h2>
      </div>

      {/* Product Image */}
      <div className="flex justify-center px-8">
        <img
          
          loading="lazy"
          src={thumbnails[selectedImage]}
          alt="Product"
          className="h-[140px] object-fill"
        />
      </div>

      {/* Product Details */}
      <div className="px-5 pb-5">
        <h3 className="line-clamp-2 text-xs font-medium leading-4 text-gray-800">
          Simple Kind to Skin Refreshing Facial Wash | 100%
          Soap-Free Gentle Cleanser with Vitamin E &
          Glycerine
        </h3>

        {/* Price */}
        <div className="mt-4 flex items-end gap-3">
          <span className="text-2xl font-semibold text-black">
            ₹199
          </span>

          <span className="mb-1 text-sm text-gray-500">
            M.R.P:
          </span>

          <span className="mb-1 text-sm text-gray-500 line-through">
            ₹249.00
          </span>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 flex gap-3">
          {thumbnails.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`h-16 w-24 overflow-hidden rounded-2xl border transition-all ${
                selectedImage === index
                  ? "border-4 border-blue-600"
                  : "border-gray-300"
              }`}
            >
              <img
          loading="lazy"
                src={image}
                alt=""
                className="h-full w-full object-contain p-2"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}