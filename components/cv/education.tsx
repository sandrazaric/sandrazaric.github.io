import { GraduationCap, Languages } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 print:scroll-mt-0">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only print:not-sr-only print:mb-3 print:text-xs print:border-b print:border-primary print:pb-1">
        Education & Languages
      </h2>
      
      <div className="space-y-8 print:space-y-4">
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 print:grid-cols-[100px_1fr] print:gap-3">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg print:hidden" />
          
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 print:col-span-1 print:mb-0 print:mt-0 print:text-[10px]">
            2015 — 2019
          </header>
          
          <div className="z-10 sm:col-span-6 print:col-span-1">
            <div className="flex items-start gap-3 print:gap-2">
              <div className="rounded-lg bg-primary/10 p-2 print:p-1.5">
                <GraduationCap className="size-5 text-primary print:size-4" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground print:text-sm">
                  {"Bachelor's Degree in Computing and Control Engineering"}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground print:mt-0.5 print:text-[10px]">
                  Faculty of Technical Sciences, University of Novi Sad
                </p>
                <p className="mt-1 text-xs text-muted-foreground print:mt-0 print:text-[10px]">
                  Novi Sad, Serbia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 print:pt-3 print:border-t-0">
          <div className="flex items-start gap-3 print:gap-2">
            <div className="rounded-lg bg-primary/10 p-2 print:p-1.5">
              <Languages className="size-5 text-primary print:size-4" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground print:text-sm">Languages</h3>
              <ul className="mt-3 space-y-2 print:mt-1 print:space-y-0.5 print:flex print:gap-4">
                <li className="flex items-center gap-3 text-sm print:gap-1 print:text-[10px]">
                  <span className="text-foreground">Serbian</span>
                  <span className="text-muted-foreground">—</span>
                  <span className="text-muted-foreground">Native</span>
                </li>
                <li className="flex items-center gap-3 text-sm print:gap-1 print:text-[10px]">
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground">—</span>
                  <span className="text-muted-foreground">Professional Proficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
