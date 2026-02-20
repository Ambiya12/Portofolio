import { Cursor } from './components/Cursor'
import { Marquee } from './components/Marquee'
import { AboutSection } from './sections/AboutSection.tsx'
import { ContactSection } from './sections/ContactSection.tsx'
import { ExperienceSection } from './sections/ExperienceSection.tsx'
import { HeroSection } from './sections/HeroSection.tsx'
import { MindsetSection } from './sections/MindsetSection.tsx'
import { ProjectsSection } from './sections/ProjectsSection.tsx'
import { SchoolSection } from './sections/SchoolSection.tsx'
import { SkillsSection } from './sections/SkillsSection.tsx'
import './styles/fun-theme.css'

function App() {
  return (
    <div className="app-shell">
      <Cursor />

      <main>
        <HeroSection />
        <Marquee />
        <AboutSection />
        <ExperienceSection />
        <SchoolSection />
        <ProjectsSection />
        <SkillsSection />
        <MindsetSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
