import Image from "next/image";

type ProjectProps = {
  name: string;
  description: string;
  tags: string[];
  image: string;
};
const Project = ({ name, description, tags, image }: ProjectProps) => {
  return (
    <div className="bg-gray-100 w-auto my-4 flex max-w-[42rem] rounded-lg border-[1px] border-black border-opacity-10 sm:h-[20rem]">
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
      <section className="w-auto hidden sm:block sm:w-1/2 overflow-hidden mt-8">
        <Image
          src={image}
          alt={name}
          width={1500}
          height={1500}
          className="shadow-2xl"
        />
      </section>
    </div>
  );
};
export default Project;
