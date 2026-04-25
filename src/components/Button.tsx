import React, { useState, ReactNode } from "react";

interface ButtonProp {
  children: ReactNode;
  buttonNames: string[];
  onBtnClick: () => void;
}

export default function Button({
  children,
  buttonNames,
  onBtnClick,
}: ButtonProp) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   const handleClick = () => {
  //     setSelectedIndex((prev) => (prev + 1) % buttonNames.length);
  //   };
  const incrementButton = (prev: number) => (prev + 1) % buttonNames.length;
  return (
    <button
      onClick={() => {
        setSelectedIndex(incrementButton);
        onBtnClick();
        console.log(selectedIndex);
      }}
      className={`btn btn-${buttonNames[selectedIndex]}`}
    >
      {children}
    </button>
  );
}
