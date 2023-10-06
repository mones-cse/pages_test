"use client";
import Link from "next/link";
import { Links } from "@/lib/data";
import { useState } from "react";
import { motion } from "framer-motion";
interface SelectedNavProps {
  isActivate: boolean;
}
const SelectedNavLink = ({ isActivate }: SelectedNavProps) => {
  return isActivate ? (
    <motion.span
      className="absolute inset-0 bg-gray-100 rounded-full"
      style={{ zIndex: -1 }}
      layoutId={"underline"}
    ></motion.span>
  ) : null;
};
export default function TopNav() {
  const [fragment, setFragment] = useState(window.location.hash);
  return (
    <div className="mt-12 sm:mt-12 flex items-center justify-center flex-wrap transition z-10 relative">
      <nav className="w-auto fixed  backdrop-blur bg-white/80 h-24 rounded-lg sm:h-12 sm:rounded-full flex items-center">
        <motion.ul className="flex gap-1 sm:gap-6 flex-wrap justify-center px-4 py-1">
          {Links.map((link) => (
            <motion.li
              key={link.hash}
              className={
                "text-gray-500 hover:cursor-pointer hover:text-gray-950 px-1 py-1 transition relative"
              }
              onClick={() => setFragment(link.hash)}
            >
              <Link href={link.hash}>
                <span className="text-black px-2 ">{link.name}</span>
                <SelectedNavLink isActivate={fragment === link.hash} />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}
