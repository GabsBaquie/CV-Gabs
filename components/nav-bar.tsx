import Link from "next/link";
import { Card } from "./ui/card";

type NavBarProps = {
  onNavClick: (section: string) => void;
};

export default function NavBar({ onNavClick }: NavBarProps) {
  return (
    <Card className=" mx-auto">
      <ul className="flex gap-12 justify-center my-3 text-muted-foreground">
        <li
          onClick={() => onNavClick("Header")}
          className="hover:bg-indigo-900 hover:text-white p-2 px-4 rounded-md cursor-pointer border-r-2">
          <Link href="/">CV</Link>
        </li>
        <li
          onClick={() => onNavClick("Motivation")}
          className="hover:bg-indigo-900 hover:text-white py-2 px-4 rounded-md cursor-pointer border-x-2">
          <Link href="/">Motivation</Link>
        </li>
        <li
          onClick={() => onNavClick("Portfolio")}
          className="hover:bg-indigo-900 hover:text-white p-2 px-4 rounded-md cursor-pointer border-x-2 ">
          <Link href="/">Portfolio</Link>
        </li>
        <li
          onClick={() => onNavClick("Contact")}
          className="hover:bg-indigo-900 hover:text-white p-2 px-4 rounded-md border-l-2 cursor-pointer">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </Card>
  );
}
