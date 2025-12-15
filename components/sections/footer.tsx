import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Oripov Bobur — Frontend Developer</p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/fenix1409"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:contact@bobur.dev"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
