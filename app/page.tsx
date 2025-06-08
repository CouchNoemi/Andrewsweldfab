import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <div className="h-[2000px] bg-blue-400"></div>
    </div>
  );
}
