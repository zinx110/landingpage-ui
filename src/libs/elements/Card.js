"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = ({
  variant,
  color,
  fullwidth,
  children,
  onClick,
  size,
  image,
  title,
  date,
}) => {
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
    <div
      className={`h-[330px] w-[290px] hover:border-x hover:border-y  border-gray-400 flex flex-col justify-between gap-4 hover:cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-full h-[230px]">
        <Image
          width={290}
          height={230}
          alt=""
          src={image}
          className="object-cover"
        />
      </div>
      <h1 className="font-serif font-bold text-2xl leading-7 text-[#14203e]  capitalize">
        {" "}
        {title}
      </h1>
      <p className="font-serif font-normal text-sm leading-5 text-[#14203e] ">
        {date}
      </p>
    </div>
  );
};

export default Card;
