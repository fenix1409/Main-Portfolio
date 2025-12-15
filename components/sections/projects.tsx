"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projectsData } from "../../lib/projects-data"

export function ProjectsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="space-y-16">
          {/* Header */}
          <div
            className={cn(
              "text-center space-y-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest">Projects</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my skills in frontend development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-24">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projectsData)[0]
  index: number
  isInView: boolean
}) {
  const isReversed = index % 2 !== 0

  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        isReversed && "lg:flex-row-reverse",
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Project Image */}
      <div className={cn("relative group", isReversed && "lg:order-2")}>
        <div className="relative overflow-hidden rounded-3xl glass-card">
          {/* Laptop Mockup */}
          <div className="relative aspect-[16/10] bg-secondary/50 p-4 sm:p-6 md:p-8">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Laptop Base */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-muted-foreground/20 rounded-t-sm" />
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-20 sm:w-28 md:w-32 glass-card rounded-2xl overflow-hidden shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="aspect-[9/16] bg-secondary/50 p-1">
            <div className="w-full h-full rounded-xl overflow-hidden bg-background">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.name} mobile`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className={cn("space-y-6", isReversed && "lg:order-1")}>
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">{project.name}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4">
          <Button asChild className="rounded-full">
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Preview Project
            </Link>
          </Button>
          {project.github && (
            <Button asChild variant="outline" size="icon" className="rounded-full bg-transparent">
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                <span className="sr-only">View on GitHub</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
