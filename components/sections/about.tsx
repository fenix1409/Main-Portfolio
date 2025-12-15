"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Years Learning", value: "1.5+" },
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "8+" },
]

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            "grid md:grid-cols-2 gap-16 items-center transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent uppercase tracking-widest">About Me</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                A passionate developer focused on
                <span className="text-muted-foreground"> visual precision</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="text-foreground font-medium">Bobur</span>, a 18-year-old Frontend
                Developer from Uzbekistan. I specialize in building modern, responsive web applications with React,
                Next.js, and TypeScript.
              </p>
              <p>
                I'm an early riser with a disciplined approach to productivity. My strength lies in clean UI
                implementation, pixel-perfect designs, and modern frontend architecture.
              </p>
              <p>
                Every project I take on is crafted with exceptional attention to detail, ensuring visually accurate
                implementations that match design specifications perfectly.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="glass-card rounded-3xl p-8 md:p-10 space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "text-center space-y-2 transition-all duration-500",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-sm font-medium text-muted-foreground mb-4">Core Values</p>
              <div className="flex flex-wrap gap-2">
                {["Clean Code", "Pixel Perfect", "Fast Learner", "Discipline", "Detail-Oriented"].map((value) => (
                  <span key={value} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
