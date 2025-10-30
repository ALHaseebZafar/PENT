import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SupportersSection from '@/components/SupportersSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import DashboardFeaturesSection from '@/components/DashboardFeaturesSection';
import DashboardShowcaseSection from '@/components/DashboardShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <SupportersSection />
      <StatsSection />
      <FeaturesSection />
      <DashboardFeaturesSection />
      <DashboardShowcaseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

