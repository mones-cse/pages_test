const Experience = () => {
  return (
    <div
      className="flex justify-between flex-col lg:flex-row  p-8 even:flex-row-reverse group gap-24"
      id="experience"
    >
      {/*  p-4 rounded-lg border border-black/10 shadow-lg relative group */}
      <div
        className="bg-gray-100 border border-black/10 shadow-lg lg:w-1/2 relative p-4
      "
      >
        <div
          className="absolute top-6 border-r-gray-400  border-solid border-transparent border-[7px]
         lg:group-odd:rotate-[180deg]
         -left-4
         lg:-right-4
         lg:left-auto
         lg:group-even:-left-4
         lg:group-even:right-auto
       "
        ></div>
        <div>
          <p className="font-semibold capitalize">Front-End Developer</p>
          <p className="font-normal !mt-0">Orlando, FL</p>
          <p className="!mt-1 !font-normal text-gray-700 ">
            I&apos;m now a full-stack developer working as a freelancer. My
            stack includes React, Next.js, TypeScript, Tailwind, Prisma and
            MongoDB. I&apos;m open to full-time opportunities.
          </p>
          <p className="lg:hidden">2019 - 2021</p>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 relative">
        <p className="absolute left-0 group-even:right-0 group-even:left-auto top-4">
          2019 - 2022
        </p>
      </div>
    </div>
  );
};

const myExperience = () => {
  return (
    <div className="mb-28 sm:mb-40 px-8">
      <p className="text-3xl font-medium text-center">My Experience</p>
      <div className="flex justify-center mt-8 relative">
        <div className="bg-gray-500 h-full flex-1 w-1 absolute left-4 lg:left-1/2"></div>
        <div className="flex flex-col gap-4">
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default myExperience;
