"use client";
import React, { useEffect, useState } from "react";

const Button = ({ variant, color, fullwidth, children, onClick, size }) => {
  const [bgColor, setBgColor] = useState("#14203E");

  useEffect(() => {
    if (!color || color === "primary") {
      setBgColor("#14203E");
    }
    if (!color || color === "secondary") {
      setBgColor("#F7F0E8");
    }
  }, [color]);

  return (
    <button
      className={`h-12 flex justify-center items-center  rounded-lg ${
        (!size || size === 1 || size === "1") && "px-7 py-3"
      }   ${(size === 2 || size === "2") && "px-10 py-6"} hover:bg-opacity-80 ${
        (!color || color == "primary") && " bg-primary hover:bg-primary2 "
      } ${color == "secondary" && "bg-secondary hover:bg-secondary2"}`}
      onClick={onClick}
    >
      <span
        className={`font-serif font-normal text-lg leading-6 ${
          (!color || color == "primary") && " text-white  "
        } ${color == "secondary" && " text-black"} `}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
