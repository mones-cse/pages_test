import { Links } from "@/lib/data";
import TopNav from "@/app/component/topNav";
import Intro from "@/app/component/intro";
import SectionDevider from "./component/SectionDevider";
import AboutMe from "./component/aboutMe";

export default function Portfolio() {
  return (
    <main className="w-full h-screen flex items-center flex-col">
      <TopNav />
      <Intro />
      <SectionDevider />
      <AboutMe />
      <div className="h-400">1</div>
    </main>
  );
}
