import { Links } from "@/lib/data";
import TopNav from "@/app/component/topNav";
export default function Home() {
  console.log({ Links });
  return (
    <main className="w-full h-screen flex justify-center">
      <TopNav />
    </main>
  );
}
