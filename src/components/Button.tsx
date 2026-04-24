import React, { useState, ReactNode } from "react";

interface ButtonProp {
  children: ReactNode;
  buttonNames: string[];
}

export default function Button({
  children,

  buttonNames,
}: ButtonProp) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = () => {
    setSelectedIndex((prev) => (prev + 1) % buttonNames.length);
  };
  return (
    <button
      onClick={handleClick}
      className={`btn btn-${buttonNames[selectedIndex]}`}
    >
      {children}
    </button>
  );
}
