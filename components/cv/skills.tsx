const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "Vue.js",
      "React.js",
      "Angular.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Vuex / Redux",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git / GitHub",
      "REST APIs",
      "WebSocket",
      "Cypress",
      "Figma",
      "Axios",
      "Vuetify",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Next.js",
      "MySQL",
    ],
  },
  {
    title: "Concepts",
    skills: [
      "IoT Systems",
      "Smart Home",
      "Cloud Architecture",
      "Real-time Data",
      "Responsive Design",
      "State Management",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 print:scroll-mt-0">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only print:not-sr-only print:mb-3 print:text-xs print:border-b print:border-primary print:pb-1">
        Skills
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 print:grid-cols-2 print:gap-4">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4 print:space-y-2">
            <h3 className="text-sm font-semibold text-foreground print:text-xs print:text-primary">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2 print:gap-1">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30 print:px-1.5 print:py-0.5 print:text-[9px] print:bg-muted">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
