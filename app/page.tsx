import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ValueSlideshow } from "@/components/value-slideshow"
import { CategoriesSection } from "@/components/categories-section"
import { BuySellSwap } from "@/components/buy-sell-swap"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ValueSlideshow />
      <CategoriesSection />
      <BuySellSwap />
      <FeaturedProducts />
      <Testimonials />
      <FeaturesSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
