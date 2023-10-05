"use client";
import Link from "next/link";
import { Links } from "@/lib/data";
import { useEffect, useState } from "react";

export default function TopNav() {
  const [fragment, setFragment] = useState(window.location.hash);
  return (
    <div className="bg-white h-24 rounded-lg sm:h-12 w-auto sm:rounded-full mt-8 flex items-center justify-center flex-wrap transition">
      <nav>
        <ul className="flex gap-6 flex-wrap justify-center px-8 py-1">
          {Links.map((link) => (
            <li
              key={link.hash}
              className={
                "text-gray-500 hover:cursor-pointer hover:text-gray-950 px-1 transition " +
                (link.hash == fragment && "bg-gray-200 rounded-lg")
              }
            >
              <Link href={link.hash} onClick={() => setFragment(link.hash)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
