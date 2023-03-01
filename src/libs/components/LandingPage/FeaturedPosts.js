"use client";
import Card from "@/libs/elements/Card";
import React from "react";

const FeaturedPosts = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-8 py-7 px-10 bg-white">
        <div className="w-full max-w-xl h-5 relative">
          <div className="w-full h-full absolute flex items-center">
            <div className="w-full h-px bg-[#14203e]/25" />
          </div>
          <div className="w-full h-full absolute flex items-center justify-center ">
            <p className="h-full font-serif font-semibold text-sm leading-5 text-[#14203e] text-center px-2 bg-white">
              We share our thoughts on design
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-7">
          {blogs.map((blog) => (
            <Card image={blog.img} title={blog.title} date={blog.date} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;

const blogs = [
  {
    img: "/Assets/pexels-kaboompics-com-6213.jpg",
    title: "Why do people hate redesigns?",
    date: "Jul 1, 2020",
  },
  {
    img: "/Assets/pexels-burst-374016.jpg",
    title: "A comprehensive list of human-computer interactions",
    date: "Jul 1, 2020",
  },
  {
    img: "/Assets/pexels-startup-stock-photos-7063.jpg",
    title: "Design handoff: What engineers really want to see",
    date: "Jul 1, 2020",
  },
  {
    img: "/Assets/pexels-隔壁光头老王-wangming'photo-354939.jpg",
    title: "Redesigning my site increased sales by over 400% in one week.",
    date: "Jul 1, 2020",
  },
];
