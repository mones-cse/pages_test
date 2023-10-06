import { Links } from "@/lib/data";
import TopNav from "@/app/component/topNav";
import Intro from "@/app/component/intro";

export default function Portfolio() {
  return (
    <main className="w-full h-screen flex items-center flex-col">
      <TopNav />
      <Intro />
    </main>
  );
}
