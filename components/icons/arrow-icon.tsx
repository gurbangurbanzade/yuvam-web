import React from "react";

const ArrowIcon = ({ color = "#1B1B1F", size = 28, direction = "right" }) => {
  // Rotate the SVG based on direction
  const getRotation = () => {
    switch (direction) {
      case "up":
        return "rotate(90 14 11.5)"; // Yeni `up` üçün
      case "down":
        return "rotate(-90 14 11.5)"; // Yeni `down` üçün
      case "left":
        return ""; // Sol istiqamət üçün fırlanma yoxdur
      case "right":
        return "rotate(180 14 11.5)"; // Sağ istiqamət üçün
      default:
        return ""; // Default olaraq heç bir fırlanma yoxdur
    }
  };

  return (
    <svg
      width={size}
      height={size * (23 / 28)} // Maintain aspect ratio (28:23)
      viewBox="0 0 28 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform={getRotation()}>
        <path
          d="M2.01917 11.723L26 11.723"
          stroke={color}
          strokeWidth="2.55966"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6243 21.12L2 11.5581L11.6243 1.99615"
          stroke={color}
          strokeWidth="2.55966"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowIcon;
