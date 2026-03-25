import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header id="header" className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8 print:flex-row print:gap-4 print:items-center print:border-b print:border-primary print:pb-4">
      <div className="shrink-0">
        <Image
          src="/images/sandra-profile.jpg"
          alt="Sandra Zaric"
          width={140}
          height={140}
          className="rounded-full border-2 border-primary/30 object-cover shadow-lg print:size-20 print:border-primary"
          priority
        />
      </div>
      <div className="space-y-4 print:space-y-1 print:flex-1">
        <div className="space-y-1 print:space-y-0">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl print:text-2xl">
            Sandra Zaric
          </h1>
          <p className="text-lg font-medium text-primary md:text-xl print:text-sm">
            Senior Frontend Developer
          </p>
          <p className="text-muted-foreground print:text-xs">
            Smart Home & Web Platforms
          </p>
        </div>
        <div className="flex items-center gap-5 pt-1 print:hidden">
          <SocialLink 
            href="http://linkedin.com/in/sandra-zari%C4%87-02b6a8237" 
            label="LinkedIn"
            icon={<Linkedin className="size-5" />}
          />
          <SocialLink 
            href="mailto:bugarinsandra4@gmail.com" 
            label="Email"
            icon={<Mail className="size-5" />}
          />
        </div>
        <div className="hidden text-xs text-muted-foreground print:flex print:gap-4 print:pt-1">
          <a href="mailto:bugarinsandra4@gmail.com" className="hover:text-primary">bugarinsandra4@gmail.com</a>
          <a href="tel:+381656367151" className="hover:text-primary">+381 65 636 7151</a>
          <span>Novi Sad, Serbia</span>
          <a href="http://linkedin.com/in/sandra-zari%C4%87-02b6a8237" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/sandra-zaric</a>
        </div>
      </div>
    </header>
  )
}

function SocialLink({ 
  href, 
  label, 
  icon 
}: { 
  href: string
  label: string
  icon: React.ReactNode 
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground transition-colors hover:text-primary"
    >
      {icon}
    </a>
  )
}
