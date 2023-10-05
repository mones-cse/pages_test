// "use client";
import Link from "next/link";
import { Links } from "@/lib/data";

export default function TopNav() {
  return (
    <div className="bg-white h-24 rounded-lg sm:h-12 w-auto sm:rounded-full mt-8 flex items-center justify-center flex-wrap transition">
      <nav>
        <ul className="flex gap-6 flex-wrap justify-center px-8 py-1">
          {Links.map((link) => (
            <li
              key={link.hash}
              className="text-gray-500 hover:cursor-pointer hover:text-gray-950
            "
            >
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
