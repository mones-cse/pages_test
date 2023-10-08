import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineArrowRight,
  AiOutlineDownload,
} from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";

const Intro = () => {
  return (
    <section className="flex flex-col items-center max-w-[50rem]">
      {/* image of user  */}
      <Image
        className="rounded-full w-28 h-28 mt-16 border-8 border-white"
        src="/pp.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      {/* Hello, I'm Ricardo. I'm a full-stack developer with 8 years of experience. I enjoy building sites & apps. My focus is React (Next.js). */}
      <p className="text-2xl sm:text-4xl text-center mt-4 font-medium px-4">
        <b>Hello, I&apos;m Mones.</b> I&apos;m a <b>full-stack developer</b>{" "}
        with <b> 8 years</b> of experience. I enjoy building <i>sites & apps</i>
        . My focus is <u> React (Next.js)</u>.
      </p>
      {/* 4 button Contact me here, Download CV, linkedin, github */}
      <div className="flex flex-col sm:flex-row gap-2 mt-12">
        <button
          className="bg-black flex items-center gap-1 text-white font-bold py-3 px-7 rounded-full hover:scale-105 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10
        "
        >
          Contact me here
          <AiOutlineArrowRight size="1.25rem" />
        </button>
        <a
          href="/mones_cv.pdf"
          className="bg-white flex items-center gap-1 text-black font-bold py-3 px-7 rounded-full hover:scale-105 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10"
        >
          Download CV
          <AiOutlineDownload size="1.25rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/monesul/"
          target="_blank"
          className="bg-white  text-black font-bold p-4 rounded-full hover:scale-110 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10 flex justify-center
          "
        >
          <AiFillLinkedin size="1.5rem" />
        </a>
        <a
          href="https://github.com/mones-cse"
          target="_blank"
          className="bg-white  text-black font-bold p-4 rounded-full hover:scale-110 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10 flex justify-center
          "
        >
          <AiFillGithub size="1.5rem" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
