import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section Component - Animated with geometric shapes and neon effects
 * SEO-optimized with target keywords: AI experience design, personalisation at scale, intelligent automation
 */
export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden min-h-screen md:min-h-auto flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/hero-abstract.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />

        {/* Animated Geometric Shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated Accent Lines */}
        <div className="absolute top-20 left-0 w-96 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-50 animate-pulse" />
        <div className="absolute bottom-32 right-0 w-96 h-1 bg-gradient-to-l from-accent via-accent/50 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 md:mb-8 inline-flex px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-semibold text-primary">AI experience design for governments and enterprises</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-foreground leading-tight mb-6">
            Digital services people actually finish.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            We use AI and experience design to remove the steps where citizens and customers give up. We prove the result in a 90-day pilot, measured on completion, not clicks.
          </p>
          <div className="mb-10">
            <a href="/government-services#90-day-pilot" className="neon-button inline-flex w-full sm:w-auto items-center justify-center gap-2 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              See how a 90-day pilot works <ArrowRight size={18} aria-hidden="true" />
            </a>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 text-sm">
              <a href="/government-services" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-primary/50 bg-background/70 px-5 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                For government <ArrowRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
              <a href="/capabilities" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-primary/50 bg-background/70 px-5 py-3 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                For business <ArrowRight size={16} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/50 text-foreground">
            <li>90-day pilot</li>
            <li>Measured on completion rate</li>
            <li>Data stays in your jurisdiction</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
