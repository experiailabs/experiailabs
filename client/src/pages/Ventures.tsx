import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import StructuredData, { sillySuitcaseSchema, synapseSchema, venturesSchema } from '@/components/StructuredData';
import { ArrowRight } from 'lucide-react';
import { use } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

/**
 * Ventures Page - Dark Theme
 * Showcase of successful AI-driven projects
 */
export default function Ventures() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StructuredData schema={venturesSchema} />
      <StructuredData schema={sillySuitcaseSchema} />
      <StructuredData schema={synapseSchema} />
      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-foreground leading-tight mb-4 md:mb-6">
            Our <span className="text-primary">Ventures</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
            Showcase of how we apply AI experience design, personalisation at scale, and intelligent automation to create transformative AI-driven customer experiences.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Silly Suitcase */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <p className="text-sm font-mono text-primary mb-4 font-semibold">PROJECT</p>
              <h2 className="text-4xl font-bold font-mono text-foreground mb-6">Silly Suitcase</h2>
              <p className="text-muted-foreground mb-4">Project concept: the description and features below describe the intended experience. Live availability and measured results are awaiting confirmation.</p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                An AI-powered travel guide that transforms how people discover and plan city breaks. Using intelligent content personalisation, Silly Suitcase curates hyper-relevant travel recommendations, itineraries, and local insights tailored to each user's preferences and travel style.
              </p>
              <dl className="mb-8 space-y-3 text-muted-foreground">
                <div><dt className="font-semibold text-foreground">Problem</dt><dd>Travel planning across fragmented recommendations and local information.</dd></div>
                <div><dt className="font-semibold text-foreground">What was built</dt><dd>The project overview below describes the intended travel companion; the delivered feature set needs confirmation.</dd></div>
                <div><dt className="font-semibold text-foreground">Measurable outcome</dt><dd>Verified usage, completion rates and measurement periods have not yet been supplied.</dd></div>
              </dl>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Concept Features — availability to be confirmed</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-muted-foreground">AI-curated top 10 lists for every city</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-muted-foreground">Personalised itinerary builder</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-muted-foreground">Real-time booking integration</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-muted-foreground">Community-driven recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="https://sillysuitcase.com" target="_blank" rel="noopener noreferrer" className="neon-button inline-flex items-center gap-2">
                Explore Silly Suitcase <ArrowRight size={18} />
              </a>
            </div>
            <div data-aos="fade-left" data-aos-delay="400"
              className="h-96 bg-card border border-border rounded-sm overflow-hidden"
              style={{
                backgroundImage: 'url(/images/travel-abstract.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Synapse */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-left" data-aos-delay="400"
              className="h-96 bg-card border border-border rounded-sm overflow-hidden order-2 md:order-1"
              style={{
                backgroundImage: 'url(/images/synapse-hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="order-1 md:order-2" data-aos="fade-right" data-aos-delay="200">
              <p className="text-sm font-mono text-accent mb-4 font-semibold">PROJECT</p>
              <h2 className="text-4xl font-bold font-mono text-foreground mb-6">Synapse</h2>
              <p className="text-muted-foreground mb-4">Prototype: the linked Manus demo illustrates the concept below. Production deployment and measured results are awaiting confirmation.</p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A next-generation nightclub experience powered by AI. Synapse reimagines entertainment by creating immersive, personalised moments for every guest. From intelligent music curation to dynamic lighting that responds to crowd energy, every element adapts in real-time.
              </p>
              <dl className="mb-8 space-y-3 text-muted-foreground">
                <div><dt className="font-semibold text-foreground">Problem</dt><dd>Creating entertainment that responds to individual guests and the room.</dd></div>
                <div><dt className="font-semibold text-foreground">What was built</dt><dd>A linked Manus concept prototype; production deployment has not been confirmed.</dd></div>
                <div><dt className="font-semibold text-foreground">Measurable outcome</dt><dd>Verified guest engagement results and measurement periods have not yet been supplied.</dd></div>
              </dl>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Concept Features — availability to be confirmed</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">AI-driven music selection</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">Real-time crowd energy analysis</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">Adaptive lighting & visuals</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-muted-foreground">Personalised guest experiences</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="https://synapseclub-wxgjwnyt.manus.space" target="_blank" rel="noopener noreferrer" className="neon-button inline-flex items-center gap-2">
                View Synapse Prototype <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Impact Metrics */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl font-bold font-mono text-foreground mb-12 text-center">
            Impact Measurement
          </h2>
          <p className="text-muted-foreground mb-8 text-center">The figures below are previously stated claims awaiting verification. Measurement periods, source data and cohort definitions have not been published; these are not verified outcomes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-sm text-center hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 hover:bg-card/80 " 
            data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl font-bold text-primary mb-4">100K+</div>
              <p className="text-foreground font-semibold mb-2">Active Users</p>
              <p className="text-muted-foreground">Across our ventures, serving millions of personalised experiences monthly.</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-sm text-center  hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 hover:bg-card/80" 
            data-aos="fade-up" 
            data-aos-delay="400">
              <div className="text-5xl font-bold text-accent mb-4">4.8★</div>
              <p className="text-foreground font-semibold mb-2">Average Rating</p>
              <p className="text-muted-foreground">Users consistently rate our experiences as intuitive and delightful.</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-sm text-center hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 hover:bg-card/80" 
            data-aos="fade-up" data-aos-delay="600">
              <div className="text-5xl font-bold text-primary mb-4">60%</div>
              <p className="text-foreground font-semibold mb-2">Repeat Engagement</p>
              <p className="text-muted-foreground">Users return frequently, driven by personalised value and seamless experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Whether you're looking to partner or invest, we'd love to explore opportunities together.
          </p>
          <a href="/contact" className="neon-button inline-flex items-center justify-center gap-2">
            Start a Conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
