import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SupportersSection from '@/assets/SupportersSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <SupportersSection />
      <StatsSection />
      <FeaturesSection />
    </main>
  );
}

