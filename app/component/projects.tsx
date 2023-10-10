import Project from "./project";
import { ProjectsData } from "@/lib/data";
const Projects = () => {
  return (
    <section className="mb-28 sm:mb-40" id="projects">
      <h1 className="text-4xl mb-8 font-medium text-center ">My Projects</h1>
      {ProjectsData.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </section>
  );
};
export default Projects;
