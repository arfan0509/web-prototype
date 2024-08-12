import React, { useState, useRef } from "react";

interface InteractiveCardProps {
  image: string;
  whcode: string;
  warehouse: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  image,
  whcode,
  warehouse,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: `rotateY(${mousePosition.x / 20}deg) rotateX(${
      -mousePosition.y / 20
    }deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePosition.x / -40}px) translateY(${
      mousePosition.y / -40
    }px)`,
  };

  return (
    <div
      ref={cardRef}
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px", transformStyle: "preserve-3d" }}
    >
      <div
        className="card relative w-full max-w-none sm:max-w-sm md:max-w-md h-60 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        style={cardStyle}
      >
        <div
          className="card-bg absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${image})`,
            ...cardBgTransform,
            opacity: isHovering ? 0.8 : 0.5,
          }}
        />
        <div className="card-info absolute bottom-0 p-4 text-white transition-all duration-500">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">{whcode}</h1>
          <p
            className={`text-xs sm:text-sm md:text-base transform transition-all duration-500 ${
              isHovering
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {warehouse}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
