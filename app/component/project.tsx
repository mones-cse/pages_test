"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = {
  name: string;
  description: string;
  tags: string[];
  image: string;
};
const Project = ({ name, description, tags, image }: ProjectProps) => {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 w-auto my-8 flex max-w-[42rem] rounded-lg border-[1px] border-black border-opacity-10 sm:h-[20rem] overflow-hidden relative">
      <section className="flex flex-col w-full sm:w-1/2 pt-4 sm:pt-10  sm:pl-10  sm:pr-10 pb-8 px-5">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="leading-relaxed mt-2 text-gray-700">{description}</p>
        <section className="flex gap-1 mt-4 sm:mt-auto flex-wrap">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </p>
          ))}
        </section>
      </section>
      <section className="w-auto hidden sm:block sm:w-[38rem]  mt-8 absolute left-1/2">
        <motion.div
          whileHover={{
            rotate: -3,
          }}
        >
          <Image
            src={image}
            alt={name}
            width={900}
            height={900}
            className="shadow-2xl rounded-lg"
          />
        </motion.div>
      </section>
    </div>
  );
};
export default Project;
