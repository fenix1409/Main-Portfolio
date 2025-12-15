export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.5 0.2 240) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent-tertiary/5 via-transparent to-transparent" />
    </div>
  )
}
