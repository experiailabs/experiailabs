import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import CountUp from './CountUp';

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
            <a href="/government-services#90-day-pilot" className="neon-button inline-flex items-center justify-center gap-2">
              See how a 90-day pilot works <ArrowRight size={18} aria-hidden="true" />
            </a>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="/government-services" className="text-foreground underline underline-offset-4 hover:text-primary">For government</a>
              <a href="/capabilities" className="text-foreground underline underline-offset-4 hover:text-primary">For business</a>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="p-3 md:p-4 bg-card/50 border border-border rounded-sm backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1"><CountUp
  from={0}
  to={2}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
  
/></div>
              <p className="text-xs md:text-sm text-muted-foreground">Flagship Projects</p>
            </div>
            <div className="p-3 md:p-4 bg-card/50 border border-border rounded-sm backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1"><CountUp
  from={0}
  to={9}
  separator=","
  direction="up"
  duration={2}
  className="count-up-text"
 
/>+</div>
              <p className="text-xs md:text-sm text-muted-foreground">Target Markets</p>
            </div>
            <div className="p-3 md:p-4 bg-card/50 border border-border rounded-sm backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1"><CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={5}
  className="count-up-text"
  
/>%</div>
              <p className="text-xs md:text-sm text-muted-foreground">AI-Focused</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-border/50">
            <p className="text-xs md:text-sm text-muted-foreground mb-3 font-semibold">Trusted by innovative companies</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="text-xs md:text-sm text-muted-foreground">✓ Enterprise-Grade AI</div>
              <div className="text-xs md:text-sm text-muted-foreground">✓ Proven Track Record</div>
              <div className="text-xs md:text-sm text-muted-foreground">✓ Global Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
