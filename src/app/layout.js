import NavProfile from "@/libs/components/NavProfile";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full px-12 h-[100px] bg-white flex items-center justify-between ">
          <p className="h-7  font-serif font-bold text-2xl leading-7 uppercase text-[#14203e]/25 hover:cursor-pointer">
            Logo
          </p>
          <NavOptions />
          <NavProfile />
        </div>
        <div className="w-full h-[1px] bg-[#F4E8D8]" />

        {children}
        <div className="w-full h-20" />
      </body>
    </html>
  );
}

const pages = [
  { name: "Home", link: "/" },
  { name: "Articles", link: "/Articles" },
  { name: "Pricing", link: "/Pricing" },
  { name: "About", link: "/About" },
  { name: "Contact", link: "/Contact" },
];

const NavOptions = () => {
  return (
    <nav className="flex gap-10 h-6">
      {pages.map((page) => (
        <NavLink key={page.name} page={page} />
      ))}
    </nav>
  );
};

const NavLink = ({ page }) => {
  return (
    <Link
      className="font-normal text-lg leading-6 text-[#14203E] inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded  before:transition-all before:duration-500 before:bg-secondary2 hover:before:w-full "
      href={`${page?.link || "/"}`}
    >
      {page?.name}
    </Link>
  );
};
