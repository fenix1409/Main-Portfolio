"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Zap, Eye, Layout, Target, Clock } from "lucide-react"

const achievements = [
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapts to new technologies and frameworks with ease",
  },
  {
    icon: Eye,
    title: "Strong Eye for UI/UX",
    description: "Exceptional attention to visual details and user experience",
  },
  {
    icon: Layout,
    title: "Responsive Design Master",
    description: "Creates flawless layouts that work on any device or screen size",
  },
  {
    icon: Target,
    title: "Visual Accuracy",
    description: "Pixel-perfect implementations that match designs precisely",
  },
  {
    icon: Clock,
    title: "Discipline & Consistency",
    description: "Early riser with a productive and disciplined approach to work",
  },
]

export function AchievementsSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          {/* Header */}
          <div
            className={cn(
              "text-center space-y-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest">Strengths</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">What sets me apart</h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={cn(
                  "group glass-card rounded-3xl p-8 hover:bg-card transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  index === 4 && "sm:col-span-2 lg:col-span-1",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
