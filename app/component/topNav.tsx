// "use client";
import Link from "next/link";
import { Links } from "@/lib/data";

export default function TopNav() {
  return (
    <div className="bg-white h-16 sm:h-12 w-96 rounded-lg mt-4 flex items-center justify-center flex-wrap">
      <nav>
        <ul className="flex gap-4 flex-wrap justify-center px-4">
          {Links.map((link) => (
            <li key={link.hash}>
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
