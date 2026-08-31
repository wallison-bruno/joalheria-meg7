import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CollectionsGrid from "@/components/CollectionsGrid";
import Editorial from "@/components/Editorial";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <CollectionsGrid />
      <Editorial />
      <SocialProof />
      <Footer />
    </main>
  );
}
