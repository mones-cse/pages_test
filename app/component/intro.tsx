import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

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
      <div className="flex gap-2 mt-12">
        <button
          className="bg-black  text-white font-bold py-3 px-7 rounded-full hover:scale-105 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10
        "
        >
          button Contact me here
        </button>
        <button className="bg-white  text-black font-bold py-3 px-7 rounded-full hover:scale-105 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10">
          Download CV
        </button>
        <a
          href="https://www.linkedin.com/in/monesul/"
          target="_blank"
          className="bg-white  text-black font-bold p-4 rounded-full hover:scale-105 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10
          "
        >
          <AiFillLinkedin size="1.5rem" />
        </a>
        <a
          href="https://github.com/mones-cse"
          target="_blank"
          className="bg-white  text-black font-bold p-4 rounded-full hover:scale-105 transition duration-100 ease-in-out border-[1px] border-black border-opacity-10
          "
        >
          <AiFillGithub size="1.5rem" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
