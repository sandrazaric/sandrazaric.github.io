import { MapPin, Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 print:hidden">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        Contact
      </h2>
      
      <div className="rounded-lg border border-border bg-card p-6">
        <p className="mb-6 text-muted-foreground">
          {"I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out."}
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <ContactItem
            icon={<Mail className="size-4" />}
            label="Email"
            value="bugarinsandra4@gmail.com"
            href="mailto:bugarinsandra4@gmail.com"
          />
          <ContactItem
            icon={<Phone className="size-4" />}
            label="Phone"
            value="+381 65 636 7151"
            href="tel:+381656367151"
          />
          <ContactItem
            icon={<MapPin className="size-4" />}
            label="Location"
            value="Novi Sad, Serbia"
          />
          <ContactItem
            icon={<Linkedin className="size-4" />}
            label="LinkedIn"
            value="Sandra Zaric"
            href="http://linkedin.com/in/sandra-zari%C4%87-02b6a8237"
            external
          />
        </div>
      </div>
      
      <footer className="mt-16 border-t border-border pt-8 print:hidden">
        <p className="text-center text-sm text-muted-foreground">
          Designed & built with care. Last updated {new Date().getFullYear()}.
        </p>
      </footer>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const content = (
    <div className="group flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-secondary/50">
      <div className="rounded-md bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-foreground group-hover:text-primary">
          {value}
          {external && (
            <ArrowUpRight className="ml-1 inline-block size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    )
  }

  return content
}
