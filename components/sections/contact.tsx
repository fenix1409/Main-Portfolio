"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, ArrowRight } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/fenix1409",
    label: "@fenix1409",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bobur-oripov-02064a315/",
    label: "Oripov Bobur",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:oripovbobur208@gmail.com",
    label: "oripovbobur208@gmail.com",
  },
]

export function ContactSection() {
  const { ref, isInView } = useInView()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
  }

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div
            className={cn(
              "space-y-8 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="space-y-4">
              <p className="text-sm font-medium text-accent uppercase tracking-widest">Contact</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Let's work together
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing
                together.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl glass-card hover:bg-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={cn(
              "glass-card rounded-3xl p-8 md:p-10 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="rounded-xl h-12 bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="rounded-xl h-12 bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="rounded-xl min-h-32 bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl h-12">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
