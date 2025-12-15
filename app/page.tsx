import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { GridBackground } from "@/components/grid-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <GridBackground />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
