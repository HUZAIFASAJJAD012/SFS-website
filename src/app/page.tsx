import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ChallengesSection } from '@/components/challenges-section'
import { SolutionSection } from '@/components/solution-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
