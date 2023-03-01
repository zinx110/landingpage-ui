import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/libs/components/LandingPage/Hero";
import FeaturedPosts from "@/libs/components/LandingPage/FeaturedPosts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
