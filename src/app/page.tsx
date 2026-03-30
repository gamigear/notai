import { CategoriesSection } from "@/components/home/categories";
import { DealsSection } from "@/components/home/deals";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero";
import { HomeHubNav } from "@/components/home/home-hub-nav";
import { PromotionsSection } from "@/components/home/promotions";
import { RankingSection } from "@/components/home/ranking";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-[#111827]">
      <Header />
      <HeroSection />
      <HomeHubNav />
      <DealsSection />
      <RankingSection />
      <CategoriesSection />
      <PromotionsSection />
      <Footer />
    </main>
  );
}
