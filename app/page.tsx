import { Links } from "@/lib/data";
import TopNav from "@/app/component/topNav";
import Intro from "@/app/component/intro";
import SectionDevider from "@/app/component/sectionDevider";
import AboutMe from "@/app/component/aboutMe";
import Projects from "@/app/component/projects";
import Skills from "@/app/component/skills";
import MyExperience from "@/app/component/myExperience";
import ContactMe from "@/app/component/contactMe";

export default function Portfolio() {
  return (
    <main className="w-full h-screen flex items-center flex-col">
      <TopNav />
      <Intro />
      <SectionDevider />
      <AboutMe />
      <Projects />
      <Skills />
      <MyExperience />
      <ContactMe />
    </main>
  );
}
