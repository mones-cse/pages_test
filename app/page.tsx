import { Links } from "@/lib/data";
import TopNav from "@/app/component/topNav";
import Intro from "@/app/component/intro";
import SectionDevider from "@/app/component/sectionDevider";
import AboutMe from "@/app/component/aboutMe";
import Projects from "@/app/component/projects";
import Skills from "@/app/component/skills";

export default function Portfolio() {
  return (
    <main className="w-full h-screen flex items-center flex-col">
      <TopNav />
      <Intro />
      <SectionDevider />
      <AboutMe />
      <Projects />
      <Skills />
      <div className="mt-32 block">1</div>
      <div className="mt-32 ">2</div>
      <div className="mt-32 ">3</div>
    </main>
  );
}
