import { CategoriesSection } from "@/components/home/categories";
import { DealsSection } from "@/components/home/deals";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero";
import { RankingSection } from "@/components/home/ranking";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-[#111827]">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <DealsSection />
      <RankingSection />
    </main>
  );
}
