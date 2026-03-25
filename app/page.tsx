import { Header } from "@/components/cv/header"
import { About } from "@/components/cv/about"
import { Experience } from "@/components/cv/experience"
import { Skills } from "@/components/cv/skills"
import { Education } from "@/components/cv/education"
import { Contact } from "@/components/cv/contact"
import { PrintButton } from "@/components/cv/print-button"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background print:min-h-0 print:bg-white">
      <PrintButton />
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-24 print:max-w-none print:px-4 print:py-4">
        <Header />
        <main className="mt-16 grid gap-20 lg:grid-cols-[240px_1fr] lg:gap-16 print:mt-4 print:block print:space-y-4">
          <nav className="hidden lg:block print:hidden">
            <Navigation />
          </nav>
          <div className="space-y-20 print:space-y-4">
            <About />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}

function Navigation() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <div className="sticky top-24">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group flex items-center gap-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary" />
              <span className="uppercase tracking-widest">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
