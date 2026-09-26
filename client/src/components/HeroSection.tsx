import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ShinyText from './SplitText';
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
          {/* Subheading with Badge */}
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            
            <span className="text-xs md:text-sm font-semibold text-primary">
              

<ShinyText
  text="✨ AI-Powered Experience Innovation"
  speed={2}
  delay={0}
  color="#FF9F1C"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/></span>
          </div>

          {/* Main Headline - SEO Optimized */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-foreground leading-tight mb-4 md:mb-6">
            Designing <span className="text-primary"> 
              <ShinyText
  text="Intelligent"
  speed={2}
  delay={0}
  color="#FF9F1C"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/></span> Experiences at Scale
          </h1>

          {/* Subheading with Keywords */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-2xl">
            We specialize in AI experience design and personalisation at scale. Our intelligent automation solutions embed AI-driven innovation into every customer touchpoint, delivering AI-driven customer experiences that captivate users and drive measurable business results.
          </p>

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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="/capabilities"
              className="
    neon-button relative overflow-hidden
    inline-flex items-center justify-center gap-2
    text-sm md:text-base px-4 md:px-6 py-2 md:py-3
    group transition-all duration-300 hover:bg-none
  "
            >
              <span className="relative z-10">Explore AI Solutions</span>

              <ArrowRight
                size={16}
                className="relative z-10 md:w-5 md:h-5 transition-transform group-hover:translate-x-1"
              />

              {/* Hover overlay */}
              <span
                className="
    absolute inset-0 bg-primary/70
    scale-x-0 opacity-0 origin-left
    transition-all duration-400 z-40
    group-hover:scale-x-100 group-hover:opacity-100
  "
              />

            </a>

            <a href="/contact" className="px-4 md:px-6 py-2 md:py-3 font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-sm text-sm md:text-base group">
              Start Your Project <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
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
