import Link from "next/link";
import { Card } from "./ui/card";

export default function NavBar() {
  return (
    <Card>
      <ul className="flex gap-12 justify-center my-3 text-sm text-muted-foreground">
        <li className="hover:bg-indigo-100 p-2 px-4 rounded-md border-r-2">
          <Link href="/">CV</Link>
        </li>
        <li className="hover:bg-indigo-100 py-2 px-4 rounded-md border-x-2">
          <Link href="/motivation">Motivation</Link>
        </li>
        <li className="hover:bg-indigo-100 p-2 px-4 rounded-md border-l-2">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Card>
  );
}
