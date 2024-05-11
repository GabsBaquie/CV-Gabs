import Link from "next/link";
import React from "react";
import { Card, CardContent } from "./ui/card";

type NavBarProps = {
  onNavClick: (section: string) => void;
};

export default function NavBar({ onNavClick }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Card className=" mx-auto bg-opacity-5">
      <CardContent className="text-center text-lg p-0">
        <ul className="flex justify-center my-3 text-muted-foreground sm:flex-row gap-4 sm:gap-12 ">
          <li
            onClick={() => onNavClick("Header")}
            className="hover:bg-indigo-900 hover:text-white p-2 px-4 rounded-md cursor-pointer md:border-r-2">
            <Link href="/">CV</Link>
          </li>
          <li
            onClick={() => onNavClick("Motivation")}
            className="hover:bg-indigo-900 hover:text-white py-2 px-4 rounded-md cursor-pointer md:border-x-2">
            <Link href="/">Motivation</Link>
          </li>
          <li
            onClick={() => onNavClick("Portfolio")}
            className="hover:bg-indigo-900 hover:text-white p-2 px-4 rounded-md cursor-pointer md:border-x-2 ">
            <Link href="/">Portfolio</Link>
          </li>
          {/* <li
            onClick={() => onNavClick("Contact")}
            className="hover:bg-indigo-900 hover:text-white p-2 px-4 rounded-md md:border-l-2 cursor-pointer">
            <Link href="/">Contact</Link>
          </li> */}
        </ul>
      </CardContent>
    </Card>
  );
}
