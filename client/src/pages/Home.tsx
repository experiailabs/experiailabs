import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import HeroSection from '@/components/HeroSection';
import CountryCarousel from '@/components/CountryCarousel';
import ConsultationForm from '@/components/ConsultationForm';
import StructuredData, { serviceSchema, linkedinCompanySchema } from '@/components/StructuredData';
import { ArrowRight, ExternalLink, Zap, Target, Layers } from 'lucide-react';
import AOS from 'aos';
import "aos/dist/aos.css";



import { useEffect } from 'react';
/**
 * Home Page - SEO-Optimized with AI Experience Design Keywords
 * Keywords: AI experience design, personalisation at scale, AI-assisted workflows, AI-driven customer experience
 */
export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <StructuredData schema={linkedinCompanySchema} />
      <StructuredData schema={serviceSchema} />

      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <HeroSection />


      {/* Divider */}
      <div className="section-divider"></div>

      {/* Why ExperiAI Labs Section - SEO Content */}
      <section className="py-16 md:py-20 lg:py-32">
        <div className="container">
          <div className="mb-12 md:mb-16 rounded-sm overflow-hidden border border-border">
            <img
              src="/images/ai-experience-design.png"
              alt="adaptive experience design visualization showing personalised content cards and adaptive UI components"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 md:mb-8 text-center">
            Why Build with <span className="text-primary">ExperiAI Labs</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            We help businesses make their digital services easier to use. Our team combines research, design and engineering to help customers find what they need and complete their tasks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Reason 1 */}
            <div className="p-6 md:p-8 bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 rounded-sm"
            data-aos="fade-right"
              data-aos-delay="500">
              <div className="w-12 h-12 bg-primary/20 rounded-sm mb-4 md:mb-6 flex items-center justify-center">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">Personalisation at Scale</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We design systems that use customer preferences and context to offer relevant content and recommendations as your audience grows.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="p-6 md:p-8 bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 rounded-sm"
            data-aos="fade-up"
              data-aos-delay="500">
              <div className="w-12 h-12 bg-accent/20 rounded-sm mb-4 md:mb-6 flex items-center justify-center">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">Proven AI Expertise</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our work brings together experience design and machine learning, with projects in travel and entertainment.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="p-6 md:p-8 bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 rounded-sm"
            data-aos="fade-left"
              data-aos-delay="500">
              <div className="w-12 h-12 bg-primary/20 rounded-sm mb-4 md:mb-6 flex items-center justify-center">
                <Layers className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">End-to-End Solutions</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We take projects from research and strategy through design and implementation, connecting new services with the systems your team already uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Core Pillars Section */}
      <section className="py-16 md:py-20 lg:py-32 relative">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-12 md:mb-16 text-center">
            How We <span className="text-primary">Design Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Pillar 1: Simplify */}
            <div className="p-6 md:p-8 bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 rounded-sm"
              data-aos="fade-right"
              data-aos-delay="200"
              >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-primary rounded-sm mb-4 md:mb-6 flex items-center justify-center">
                <span className="text-background font-mono font-bold text-sm md:text-base">01</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">Simplify Complex Journeys</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We remove unnecessary steps and automate routine tasks so customers can complete complex processes with less effort.
              </p>
            </div>

            {/* Pillar 2: Personalize */}
            <div className="p-6 md:p-8 bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 rounded-sm"
            data-aos="fade-down"
              data-aos-delay="200">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-accent rounded-sm mb-4 md:mb-6 flex items-center justify-center">
                <span className="text-background font-mono font-bold text-sm md:text-base">02</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">Make Every Interaction Relevant</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We adapt content and recommendations to each person’s needs, while keeping the experience clear and consistent.
              </p>
            </div>

            {/* Pillar 3: Scale */}
            <div className="p-6 md:p-8 bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 rounded-sm"
            data-aos="fade-left"
              data-aos-delay="200">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-primary rounded-sm mb-4 md:mb-6 flex items-center justify-center">
                <span className="text-background font-mono font-bold text-sm md:text-base">03</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">Enterprise Scale</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We plan for growth from the outset, considering performance, integration and the needs of different markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-20 lg:py-32">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 md:mb-8 text-center">
            Explore Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            Explore our travel and entertainment projects, including their intended features and current development status.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Project 1: Silly Suitcase */}
            <div className="group border border-border rounded-sm overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group hover:shadow-primary/20 hover:scale-[1.02]">
              <div
                className="h-56 sm:h-64 md:h-72 lg:h-80 bg-card border-b border-border overflow-hidden relative group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: 'url(/images/travel-abstract.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-background text-xs font-semibold rounded-full">
                  Travel AI
                </div>
              </div>

              <div className="p-6 md:p-8 bg-card">
                <h3 className="text-2xl md:text-3xl font-bold font-mono text-primary mb-3">Silly Suitcase</h3>
                <p className="text-muted-foreground mb-4">Project concept. The description below is the original project overview; feature availability and audience figures are awaiting verification.</p>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  Silly Suitcase demonstrates our expertise in adaptive experience design. Using AI-assisted workflows, we created an AI-powered travel companion that delivers tailored digital experiences to millions of travelers.
                </p>

                <div className="mb-6">
                  <p className="text-xs md:text-sm font-semibold text-foreground mb-3">Concept Features — availability to be confirmed:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>AI-curated personalised recommendations</span>
                    </li>
                    <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>Intelligent itinerary builder</span>
                    </li>
                    <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>Real-time booking integration</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://sillysuitcase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button inline-flex items-center gap-2 text-sm px-4 py-2"
                >
                  Explore Silly Suitcase <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2: Synapse */}
            <div className="group border border-border rounded-sm overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] group hover:shadow-accent/20">
              <div
                className="h-56 sm:h-64 md:h-72 lg:h-80 bg-card border-b border-border overflow-hidden relative group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: 'url(/images/synapse-hero.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                  Entertainment AI
                </div>
              </div>

              <div className="p-6 md:p-8 bg-card">
                <h3 className="text-2xl md:text-3xl font-bold font-mono text-accent mb-3">Synapse</h3>
                <p className="text-muted-foreground mb-4">Concept prototype hosted on Manus. The overview below describes the intended experience, not verified production capabilities.</p>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  Synapse showcases our AI-driven customer experience capabilities in entertainment. Through AI-assisted workflows, we created an immersive nightclub experience that adapts in real-time to crowd energy and preferences.
                </p>

                <div className="mb-6">
                  <p className="text-xs md:text-sm font-semibold text-foreground mb-3">Concept Features — availability to be confirmed:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-accent font-bold">•</span>
                      <span>AI-driven music and content selection</span>
                    </li>
                    <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-accent font-bold">•</span>
                      <span>Real-time crowd energy analysis</span>
                    </li>
                    <li className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-accent font-bold">•</span>
                      <span>Adaptive lighting and visual systems</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://synapseclub-wxgjwnyt.manus.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 font-semibold border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 rounded-sm text-sm"
                >
                  Explore Synapse <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Geographic Focus Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-card/30">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 md:mb-8 text-center">
            Designing for <span className="text-primary">Different Markets</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-10 md:mb-12 text-center max-w-3xl mx-auto">
            We work with organisations exploring digital services in growing markets, adapting the design to local needs and business priorities.
          </p>

          <CountryCarousel />
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Solutions Overview Section */}
      <section className="py-16 md:py-20 lg:py-32">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-12 md:mb-16 text-center">
            What We Can <span className="text-primary">Build Together</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'Experience Design',
                description: 'Craft compelling user experiences powered by AI. We design interfaces and interactions that feel intuitive, responsive, and deeply personalised.',
                features: ['User research & insights', 'AI-powered prototyping', 'Conversion optimization'],
              },
              {
                title: 'Relevant Content and Recommendations',
                description: 'Deliver unique experiences to millions. Our machine learning algorithms learn user preferences and adapt content, recommendations, and interactions in real-time.',
                features: ['Real-time personalisation', 'Behavioral analytics', 'Dynamic content delivery'],
              },
              {
                title: 'Workflow Automation',
                description: 'Automate complex workflows with AI. From customer service to content curation, we build systems that work smarter, not harder.',
                features: ['Process automation', 'Predictive analytics', 'Intelligent routing'],
              },
              {
                title: 'AI-Driven Customer Experience',
                description: 'Transform every touchpoint with AI. We integrate intelligent systems across your entire customer journey to maximize engagement and lifetime value.',
                features: ['Journey mapping', 'Touchpoint optimization', 'Conversion analytics'],
              },
            ].map((solution, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-card border border-border rounded-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}   data-aos-delay={idx*300}>
                <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">{solution.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      <section className="py-16 md:py-20 bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">Public Services People Can Complete</h2>
          <p className="text-muted-foreground mb-6">Explore our approach to citizen service journeys, 90-day pilots, data residency and governance.</p>
          <a href="/government-services" className="neon-button inline-flex items-center gap-2">Government &amp; Public Services <ArrowRight size={18} /></a>
        </div>
      </section>

      {/* Consultation Form Section */}
      <ConsultationForm />

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Pillar Content CTA */}
      <section className="py-16 md:py-20 lg:py-32 bg-primary/5 border-y border-primary/20">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground mb-4 md:mb-6">
            A Practical Guide to <span className="text-primary">AI Design</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Read our guide to designing useful AI features, tailoring content and deciding which tasks to automate.
          </p>
          <a href="/ai-experience-design" className="inline-flex items-center justify-center gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 border border-primary/50 text-primary hover:bg-primary/10 transition-colors rounded-sm">
            Read the Complete Guide <ArrowRight size={16} className="md:w-5 md:h-5" />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-32 relative">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-3 md:mb-4 lg:mb-6">
            Ready to Build Your <span className="text-primary">AI Experience</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Tell us what your customers need and where your current service gets in their way. We can help you plan the next step.
          </p>
          <a href="/contact" className="neon-button inline-flex items-center justify-center gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            Start Your AI Journey <ArrowRight size={16} className="md:w-5 md:h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
