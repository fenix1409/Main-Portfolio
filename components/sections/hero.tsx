"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/20 to-accent-secondary/10 rounded-full blur-[120px] animate-glow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent-tertiary/15 to-accent/10 rounded-full blur-[100px] animate-glow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-accent-secondary/10 to-transparent rounded-full blur-[80px] animate-pulse-glow" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-xl animate-float" />
        <div
          className="absolute top-40 right-20 w-16 h-16 border border-accent-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-24 h-24 border border-accent-tertiary/20 rounded-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className={`space-y-8 ${mounted ? "animate-slideUp" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for work
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-balance">
            Crafting modern, fast,
            <br />
            <span className="text-muted-foreground">and visually perfect</span>
            <br />
            web experiences<span className="text-accent">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Frontend Developer — React, Next.js, TypeScript.
            <br className="hidden sm:block" />
            Building pixel-perfect interfaces with exceptional attention to detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-medium">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base font-medium bg-transparent"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Link
              href="https://github.com/fenix1409"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </section>
  )
}
