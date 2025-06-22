import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";


function ImageSlider({ images=[] }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images?.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images?.length) % images?.length);
  };

  if (images?.length === 0) return <p>No images</p>;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Image */}
      <div className="w-full h-64 overflow-hidden rounded-md border shadow">
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="w-full h-full object-contain transition-all duration-300"
        />
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full hover:bg-gray-900"
      >
        <FaCircleArrowLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full hover:bg-gray-900"
      >
        <FaCircleArrowRight/>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-2 gap-2">
        {images?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
