import { SkillsData } from "@/lib/data";
const Skills = () => {
  return (
    <section className="max-w-[45rem]">
      <p className="text-3xl font-medium text-center mb-8">My Skills</p>
      <ul className=" flex text-lg gap-2  flex-wrap items-center justify-center">
        {SkillsData.map((skill) => (
          <p
            key={skill}
            className="bg-white rounded-xl px-5 py-3 border-[1px] border-black border-opacity-10 
            "
          >
            {skill}
          </p>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
