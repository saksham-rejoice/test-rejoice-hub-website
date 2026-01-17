import { useEffect, useState } from "react";

interface AutoCarouselProps {
  screenshots: string[];
}

const AutoCarousel = ({ screenshots }: AutoCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!screenshots.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [screenshots]);

  if (!screenshots.length) return null;

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-xl">
      <img
        src={screenshots[current]}
        alt={`Screenshot ${current + 1}`}
        className="w-full h-auto object-cover transition-all duration-500"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {screenshots.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
