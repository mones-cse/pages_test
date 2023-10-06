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
      <div className="mt-32 block">1</div>
      <div className="mt-32 ">2</div>
      <div className="mt-32 ">3</div>
    </main>
  );
}
