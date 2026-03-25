import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Developer",
    company: "RT-RK / TTTech Industrial",
    location: "Novi Sad, Serbia",
    description: "A cloud-based web application used to monitor nodes, manage workloads, and control distributed system environments.",
    contributions: [
      "Designed and developed responsive, data-intensive UI components for node and workload monitoring dashboards",
      "Implemented centralized state management with Vuex to ensure data consistency across complex system views",
      "Built advanced filtering, sorting, and pagination mechanisms for large datasets",
      "Integrated REST APIs to display real-time system status, workload execution data, and operational metrics",
      "Wrote unit and end-to-end tests using Cypress to ensure stability and reliability",
    ],
    technologies: ["Vue.js", "Vuetify", "Vuex", "Axios", "REST APIs", "Cypress"],
    link: "#",
  },
  {
    period: "2019 — 2023",
    title: "Frontend Developer",
    company: "Smart Home Solutions",
    location: "Novi Sad, Serbia",
    description: "Control and monitoring application for smart home devices with real-time state synchronization.",
    contributions: [
      "Integrated new smart devices into the system by adapting UI components to different device capabilities",
      "Collaborated closely with backend and IoT teams to ensure correct handling of device states and synchronization",
      "Translated Figma designs into reusable and responsive UI components",
      "Maintained the REST API backend using Nest.js for seamless frontend-backend communication",
      "Implemented WebSocket communication to enable real-time data updates",
    ],
    technologies: ["React.js", "Angular.js", "Nest.js", "WebSocket", "REST APIs"],
    link: "#",
  },
  {
    period: "2018 — 2019",
    title: "Junior Developer",
    company: "Mindful Technologies",
    location: "Novi Sad, Serbia",
    description: "A fully functional e-commerce platform featuring user accounts, product catalogs, shopping carts, and secure online payment processing.",
    contributions: [
      "Designed and developed the overall system architecture, ensuring scalability and maintainability",
      "Implemented user authentication and authorization mechanisms to protect sensitive user data",
      "Collaborated with designers to create an intuitive and visually appealing user interface",
    ],
    technologies: ["PHP", "JavaScript", "MySQL"],
    link: "#",
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 print:scroll-mt-0">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only print:not-sr-only print:mb-3 print:text-xs print:border-b print:border-primary print:pb-1">
        Experience
      </h2>
      <div className="space-y-12 print:space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({
  period,
  title,
  company,
  description,
  contributions,
  technologies,
}: {
  period: string
  title: string
  company: string
  location: string
  description: string
  contributions: string[]
  technologies: string[]
  link: string
}) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 print:grid-cols-[100px_1fr] print:gap-3 print:pb-3 print:border-b print:border-border last:print:border-b-0">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg print:hidden" />
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 print:col-span-1 print:mb-0 print:mt-0 print:text-[10px]">
        {period}
      </header>
      
      <div className="z-10 sm:col-span-6 print:col-span-1">
        <h3 className="font-medium leading-snug text-foreground">
          <div>
            <span className="inline-flex items-baseline text-base font-semibold leading-tight text-foreground group-hover:text-primary print:text-sm">
              {title}
              <span className="ml-1 inline-block print:hidden">
                <ArrowUpRight className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </span>
            <div className="text-muted-foreground print:text-xs">{company}</div>
          </div>
        </h3>
        
        <p className="mt-2 text-sm leading-normal text-muted-foreground print:mt-1 print:text-[10px] print:leading-snug">
          {description}
        </p>
        
        <ul className="mt-4 space-y-2 print:mt-2 print:space-y-0.5">
          {contributions.map((contribution, index) => (
            <li key={index} className="flex gap-2 text-sm text-muted-foreground print:text-[10px] print:gap-1.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary print:mt-1 print:h-1 print:w-1" />
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
        
        <ul className="mt-4 flex flex-wrap gap-2 print:mt-2 print:gap-1">
          {technologies.map((tech) => (
            <li key={tech}>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary print:px-1.5 print:py-0.5 print:text-[9px] print:bg-muted print:text-muted-foreground print:border print:border-border">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
