"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Core",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "📘" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Nuxt", icon: "💚" },
      { name: "Vite", icon: "⚡" },
    ],
  },
  {
    title: "State & API",
    skills: [
      { name: "Redux Toolkit", icon: "🔄" },
      { name: "React Query", icon: "🔍" },
    ],
  },
  {
    title: "Styling & Tools",
    skills: [
      { name: "Tailwind CSS", icon: "🎯" },
      { name: "Git", icon: "📦" },
      { name: "Figma", icon: "🎨" },
      { name: "Three.js", icon: "🧊" },
    ],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          {/* Header */}
          <div
            className={cn(
              "text-center space-y-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest">Skills</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Technologies I work with</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, performant web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={cn(
                  "space-y-4 transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group glass-card rounded-2xl p-4 hover:bg-card transition-all duration-300 cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
