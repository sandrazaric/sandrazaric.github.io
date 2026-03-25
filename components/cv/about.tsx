export function About() {
  return (
    <section id="about" className="scroll-mt-24 print:scroll-mt-0">
      <h2 className="sr-only print:not-sr-only print:mb-3 print:text-xs print:font-semibold print:uppercase print:tracking-widest print:border-b print:border-primary print:pb-1">Summary</h2>
      <div className="space-y-4 text-muted-foreground print:space-y-2">
        <p className="leading-relaxed print:text-[11px] print:leading-snug">
          Frontend Developer with <span className="font-medium text-foreground">6+ years of experience</span> working 
          on complex web applications, primarily in <span className="font-medium text-foreground">smart home</span>, 
          <span className="font-medium text-foreground"> IoT</span>, and <span className="font-medium text-foreground">cloud-based systems</span>.
        </p>
        <p className="leading-relaxed print:text-[11px] print:leading-snug">
          Strong focus on frontend architecture, device control UIs, and real-time data visualization, 
          with extensive experience in <span className="font-medium text-foreground">Vue.js</span>, 
          <span className="font-medium text-foreground"> React.js</span>, and <span className="font-medium text-foreground">Angular.js</span>.
        </p>
        <p className="leading-relaxed print:text-[11px] print:leading-snug">
          Comfortable working closely with backend teams and understanding distributed systems concepts 
          such as nodes, workloads, and cloud-managed environments. Experienced in translating 
          <span className="font-medium text-foreground"> Figma designs</span> into production-ready interfaces.
        </p>
      </div>
    </section>
  )
}
