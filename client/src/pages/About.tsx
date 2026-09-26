import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import StructuredData, { serviceSchema, linkedinCompanySchema } from '@/components/StructuredData';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * About Page - SEO-Optimized
 * Keywords: AI experience design, personalisation at scale, intelligent automation, AI-driven customer experience
 */
export default function About() {
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
      <section className="pt-20 md:pt-32 pb-16 md:pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-foreground leading-tight mb-4 md:mb-6">
            About <span className="text-primary">ExperiAI Labs</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
            We're pioneers in AI experience design, building intelligent automation solutions that deliver personalisation at scale and transform how businesses create AI-driven customer experiences.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Mission Section */}
      <section className="py-16 md:py-20 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-6">Our Mission</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                At ExperiAI Labs, we believe that technology should enhance human connection, not replace it. Our mission is to pioneer adaptive experience design that makes everyday interactions more meaningful, efficient, and enjoyable.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                We specialize in building AI-assisted workflows systems that deliver tailored digital experiences. Whether it's travel, entertainment, or emerging markets, we create AI-driven customer experiences that captivate users and drive measurable business results.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our approach combines cutting-edge AI technology with deep human-centered design principles. We don't just build products—we craft experiences that feel intuitive, responsive, and deeply personal.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-card border border-border rounded-sm" data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-primary mb-6">Why We Exist</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">adaptive experience design</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Creating interfaces and interactions that feel naturally intelligent</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">tailored digital experiences</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Delivering unique experiences to millions simultaneously</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">AI-assisted workflows</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Building systems that work smarter and adapt in real-time</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Global Impact</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Bringing AI innovation to emerging markets and high-growth regions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-card/30">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-12 md:mb-16 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'Human-Centered Innovation',
                description: 'We design AI systems that enhance human capabilities. Our adaptive experience design philosophy puts users first, creating intuitive systems that feel natural and empowering.',
              },
              {
                title: 'AI-assisted workflows',
                description: 'We believe in building systems that work smarter. Our AI-assisted workflows solutions reduce friction, increase efficiency, and create seamless experiences at every touchpoint.',
              },
              {
                title: 'tailored digital experiences',
                description: 'Mass personalisation is not a contradiction. We leverage AI to deliver unique, relevant experiences to millions of users without sacrificing quality or authenticity.',
              },
              {
                title: 'Global Perspective',
                description: 'We understand that responsive customer journeys must adapt to different cultures and markets. Our solutions are designed for global reach with local relevance.',
              },
            ].map((value, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-background border border-border rounded-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={idx * 300}>
                <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-3 md:mb-4">{value.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Expertise Section */}
      <section className="py-16 md:py-20 lg:py-32">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-12 md:mb-16 text-center">
            Our Expertise in <span className="text-primary">adaptive experience design</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Machine Learning & AI',
                items: ['Recommendation engines', 'Predictive analytics', 'Natural language processing', 'Computer vision'],
              },
              {
                title: 'Experience Design',
                items: ['User research & insights', 'Interaction design', 'Conversion optimization', 'A/B testing & experimentation'],
              },
              {
                title: 'Personalisation & Automation',
                items: ['Real-time personalisation', 'Behavioral targeting', 'Journey automation', 'Dynamic content delivery'],
              },
            ].map((expertise, idx) => {
              // Dynamic tilt classes
              const tiltClass =
                idx === 0
                  ? 'hover:rotate-0 transition-transform duration-300'
                  : idx === 1
                    ? '' // no tilt
                    : ' hover:rotate-0 transition-transform duration-300';

              // Dynamic AOS animation
              const aosAnimation =
                idx === 0
                  ? 'fade-right'
                  : idx === 1
                    ? 'fade-up'
                    : 'fade-left';

              return (
                <div
                  key={idx}
                  className={`p-6 md:p-8 bg-card border border-border rounded-sm ${tiltClass} hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]`}
                  data-aos={aosAnimation}
                  data-aos-delay="200"
                >
                  <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-4 md:mb-6">
                    {expertise.title}
                  </h3>
                  <ul className="space-y-3">
                    {expertise.items.map((item, iidx) => (
                      <li key={iidx} className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-32 relative">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-3 md:mb-4 lg:mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Whether you need adaptive experience design, tailored digital experiences, or AI-assisted workflows, we're ready to help you create responsive customer journeys that drive real business impact.
          </p>
          <a href="/contact" className="neon-button inline-flex items-center justify-center gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            Get in Touch <ArrowRight size={16} className="md:w-5 md:h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
