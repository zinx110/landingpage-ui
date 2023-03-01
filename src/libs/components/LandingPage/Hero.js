"use client";
import Button from "@/libs/elements/Button";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-8 py-16 sm:py-[80px] lg:py-[100px] xl:py-[120px] 2xl:py-[130px] px-20 sm:px-40 lg:px-56 xl:px-96 2xl:px-[500px] bg-[#FFF8E8]">
        <p className="font-serif font-bold text-6xl leading-[72px] text-[#14203e] text-center">
          A modern way to build websites.
        </p>
        <p className="font-serif font-medium text-2xl leading-7 text-[#14203e] text-center">
          Empower designers to build professional, custom websites in a
          completely visual canvas with no code.
        </p>
        <Button
          size="2"
          onClick={() => {
            router.push("/");
          }}
        >
          {" "}
          Start free Trial
        </Button>
      </div>
      <div className="w-full h-[1px] bg-[#F4E8D8]" />
    </>
  );
};

export default Hero;
