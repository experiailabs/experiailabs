import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import StructuredData, { serviceSchema, aiExperienceDesignFaqSchema } from '@/components/StructuredData';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * AI Experience Design Pillar Content Page
 * Comprehensive 2,000+ word guide on AI experience design
 * SEO Target Keywords: AI experience design, personalisation at scale, intelligent automation, AI-driven customer experiences
 */

export default function AIExperienceDesign() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StructuredData schema={serviceSchema} />
      <StructuredData schema={aiExperienceDesignFaqSchema} />
      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-abstract.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="container relative z-10">
          <div className="inline-block mb-4 md:mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary text-xs md:text-sm font-semibold">Comprehensive Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-foreground leading-tight mb-4 md:mb-6">
            AI Experience <span className="text-primary">Design</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mb-6 md:mb-8">
            Master the art of creating intelligent, personalised experiences at scale. Learn how adaptive experience design transforms customer interactions through intelligent automation and personalisation at scale.
          </p>
          <a href="#content" className="neon-button inline-flex items-center justify-center gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
            Read Full Guide <ArrowRight size={16} className="md:w-5 md:h-5" />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Table of Contents */}
      <section className="py-12 md:py-16 lg:py-20 bg-card/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-8">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: 1, title: 'What Makes an Experience Adaptive?', id: 'what-is' },
              { num: 2, title: 'The Evolution of Customer Experience', id: 'evolution' },
              { num: 3, title: 'Core Design Principles', id: 'principles' },
              { num: 4, title: 'Making Content Relevant', id: 'personalisation' },
              { num: 5, title: 'Automation in Practice', id: 'automation' },
              { num: 6, title: 'AI-Driven Customer Experiences', id: 'experiences' },
              { num: 7, title: 'Implementation Strategy', id: 'implementation' },
              { num: 8, title: 'Measuring Success & ROI', id: 'measurement' },
            ].map((item) => (
              <a
                key={item.num}
                href={`#${item.id}`}
                className="p-4 bg-background border border-border rounded-sm hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">{item.num}.</span>
                  <span className="text-foreground hover:text-primary transition-colors">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="content" className="py-16 md:py-20 lg:py-32">
        <div className="container max-w-4xl">
          {/* Section 1 */}
          <div id="what-is" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">1. What Makes an Experience Adaptive?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Adaptive experience design is the practice of creating intelligent, adaptive interfaces and interactions that leverage artificial intelligence to deliver personalised, contextually relevant experiences to users. It represents the intersection of user experience design, machine learning, and behavioral psychology—creating systems that feel intuitive, responsive, and deeply personal.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Unlike traditional UX design, which focuses on static interfaces and predetermined user flows, adaptive experience design creates dynamic systems that learn from user behavior, adapt in real-time, and anticipate needs before users articulate them. This approach enables tailored digital experiences—delivering unique experiences to millions of users simultaneously without sacrificing quality or authenticity.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At ExperiAI Labs, we believe that adaptive experience design is not about replacing human judgment with algorithms. Rather, it's about augmenting human capabilities, creating systems that work smarter and adapt intelligently to serve users better. Through AI-assisted workflows, we eliminate friction, reduce cognitive load, and create responsive customer journeys that delight users and drive measurable business results.
            </p>
          </div>

          {/* Section 2 */}
          <div id="evolution" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">2. The Evolution of Customer Experience</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Customer experience has evolved dramatically over the past two decades. In the early 2000s, companies focused on basic usability—making websites functional and easy to navigate. The 2010s brought the era of personalisation, where companies used data to tailor content and recommendations. Today, we're entering the era of responsive customer journeys, where intelligent systems anticipate needs, adapt in real-time, and create seamless interactions across all touchpoints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {[
                { era: '2000s', focus: 'Usability', desc: 'Functional interfaces' },
                { era: '2010s', focus: 'Personalisation', desc: 'Data-driven content' },
                { era: '2020s', focus: 'AI Intelligence', desc: 'Adaptive experiences' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-card border border-border rounded-sm">
                  <p className="text-primary font-bold text-sm mb-2">{item.era}</p>
                  <h3 className="text-xl font-bold font-mono text-foreground mb-2">{item.focus}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              This evolution reflects a fundamental shift in how businesses think about customer engagement. Rather than pushing content to users, adaptive experience design creates pull—systems that users want to interact with because they consistently deliver value, relevance, and delight.
            </p>
          </div>

          {/* Section 3 */}
          <div id="principles" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">3. Core Design Principles</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Effective adaptive experience design rests on five foundational principles that guide all decisions and implementations.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: 'Contextual Intelligence',
                  desc: 'Understand user context—their goals, preferences, device, location, and history—to deliver truly relevant experiences. AI systems should be aware of the full picture, not just isolated transactions.',
                },
                {
                  title: 'Seamless Adaptation',
                  desc: 'Systems should adapt gracefully to changing user needs and preferences. Through AI-assisted workflows, experiences evolve in real-time, anticipating what users need before they ask.',
                },
                {
                  title: 'Human-Centered Design',
                  desc: 'AI should enhance human capabilities, not replace them. The best adaptive experience design puts users in control, with AI as a helpful assistant that respects user agency and preferences.',
                },
                {
                  title: 'Transparency & Trust',
                  desc: 'Users should understand why they\'re seeing specific content or recommendations. Explainable AI builds trust and enables users to provide feedback that improves the system.',
                },
                {
                  title: 'Continuous Learning',
                  desc: 'Use feedback and observed outcomes to evaluate the system and improve recommendations over time.',
                },
              ].map((principle, idx) => (
                <div key={idx} className="p-6 md:p-8 bg-card border border-border rounded-sm">
                  <div className="flex gap-4">
                    <CheckCircle className="text-primary flex-shrink-0 w-6 h-6 md:w-8 md:h-8" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-mono text-foreground mb-2">{principle.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{principle.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div id="personalisation" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">4. Making Content Relevant</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Personalisation helps people find content and services relevant to their needs. Start with a specific use case and enough reliable data to test whether tailored recommendations improve the experience.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              The key to effective personalisation is understanding that it's not about collecting more data—it's about using data intelligently. These systems use behavioural signals, contextual information, and predictive analytics to deliver the right content, at the right time, through the right channel.
            </p>
            <div className="p-6 md:p-8 bg-primary/10 border border-primary/30 rounded-sm my-8">
              <h3 className="text-xl font-bold font-mono text-foreground mb-4">Personalisation in Practice</h3>
              <ul className="space-y-3">
                {[
                  'Dynamic content that changes based on user behavior and preferences',
                  'Intelligent recommendations that improve with every interaction',
                  'Adaptive interfaces that reorganize based on user patterns',
                  'Predictive suggestions that anticipate user needs',
                  'Personalised pricing and offers based on customer value and context',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm md:text-base text-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div id="automation" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">5. Automation in Practice</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              AI can support tasks that involve interpreting information, such as classifying a request or suggesting a response. Define how the system handles uncertainty and when a person needs to review its output.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Automation can reduce repetitive steps, route requests to the right team and help people find answers. Test these changes against the existing service before expanding their use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Real-Time Decision Making',
                  desc: 'AI systems make intelligent decisions instantly, without human intervention, based on contextual data and learned patterns.',
                },
                {
                  icon: Users,
                  title: 'Behavioral Routing',
                  desc: 'Route users to the most appropriate experience, product, or support channel based on their behavior and needs.',
                },
                {
                  icon: TrendingUp,
                  title: 'Predictive Optimization',
                  desc: 'Predict user needs and optimize experiences proactively, increasing engagement and conversion rates.',
                },
                {
                  icon: Code,
                  title: 'Continuous Improvement',
                  desc: 'Systems learn from every interaction, continuously improving recommendations and decision-making over time.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-6 bg-card border border-border rounded-sm">
                    <Icon className="text-primary w-8 h-8 mb-4" />
                    <h3 className="text-lg font-bold font-mono text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 6 */}
          <div id="experiences" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">6. Designing the Whole Journey</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Responsive customer journeys represent the ultimate application of these principles. They're not just about better recommendations or faster response times—they're about creating moments of delight that customers remember and share.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Consider how travel platforms like Silly Suitcase use adaptive experience design to transform vacation planning. Rather than forcing users to search through thousands of options, intelligent systems understand their preferences, budget, travel style, and past experiences to surface exactly what they need. The experience feels personalised, effortless, and surprising—in the best way.
            </p>
            <div className="p-6 md:p-8 bg-card border border-border rounded-sm">
              <h3 className="text-xl font-bold font-mono text-foreground mb-6">Key Characteristics of AI-Driven Experiences</h3>
              <div className="space-y-4">
                {[
                  { label: 'Anticipatory', desc: 'Systems predict needs before users articulate them' },
                  { label: 'Contextual', desc: 'Experiences adapt based on situation, device, and user state' },
                  { label: 'Personalised', desc: 'Every interaction feels tailored to the individual user' },
                  { label: 'Seamless', desc: 'Frictionless interactions across all touchpoints' },
                  { label: 'Intelligent', desc: 'Systems learn and improve from every interaction' },
                  { label: 'Delightful', desc: 'Experiences surprise and exceed user expectations' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div id="implementation" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">7. Implementation Strategy</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Implementing adaptive experience design requires a strategic approach that balances ambition with pragmatism. Here's a proven framework for success.
            </p>
            <div className="space-y-6">
              {[
                {
                  num: 1,
                  title: 'Assess Current State',
                  desc: 'Evaluate your existing customer experience, data infrastructure, and organizational capabilities. Identify quick wins and long-term opportunities.',
                },
                {
                  num: 2,
                  title: 'Define Target Experiences',
                  desc: 'Prioritize which customer journeys will benefit most from adaptive experience design. Start with high-impact, high-frequency interactions.',
                },
                {
                  num: 3,
                  title: 'Build Data Foundation',
                  desc: 'Ensure you have clean, accessible data about user behavior, preferences, and outcomes. Data quality is critical for AI success.',
                },
                {
                  num: 4,
                  title: 'Pilot & Learn',
                  desc: 'Start with small pilots, measure results rigorously, and iterate based on learnings before scaling.',
                },
                {
                  num: 5,
                  title: 'Scale Intelligently',
                  desc: 'Once proven, scale successful pilots across more users, channels, and use cases while maintaining quality and personalisation.',
                },
              ].map((step) => (
                <div key={step.num} className="p-6 md:p-8 bg-card border border-border rounded-sm">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/20 border border-primary/50 rounded-sm flex items-center justify-center">
                      <span className="font-bold font-mono text-primary">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-mono text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8 */}
          <div id="measurement" className="mb-16 md:mb-20 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">8. Measuring Success & ROI</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              The ultimate measure of adaptive experience design success is business impact. While user satisfaction matters, what truly counts is whether AI-assisted workflows and tailored digital experiences drive measurable business results.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Key metrics to track include conversion rate improvements, customer lifetime value increases, engagement metrics, and operational efficiency gains. The best responsive customer journeys deliver value to both customers and the business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { metric: 'Conversion Rate', target: '+15-30%' },
                { metric: 'Customer Lifetime Value', target: '+20-40%' },
                { metric: 'Engagement Rate', target: '+25-50%' },
                { metric: 'Customer Satisfaction', target: '+10-20%' },
                { metric: 'Operational Efficiency', target: '+30-50%' },
                { metric: 'Time to Value', target: '-40-60%' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-card border border-border rounded-sm">
                  <p className="text-sm text-muted-foreground mb-2">Expected Improvement</p>
                  <p className="text-2xl font-bold font-mono text-primary mb-1">{item.target}</p>
                  <p className="text-foreground font-semibold">{item.metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-6 md:p-8 bg-primary/10 border border-primary/30 rounded-sm mt-16">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-4">The Future is AI-Driven</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Adaptive experience design is no longer a competitive advantage—it's becoming table stakes. Organizations that master tailored digital experiences, implement AI-assisted workflows, and create responsive customer journeys will capture disproportionate value in their markets.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At ExperiAI Labs, we help organizations navigate this transformation. Whether you're just beginning your AI journey or looking to scale existing initiatives, we bring expertise, proven frameworks, and deep industry knowledge to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-32 relative">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-3 md:mb-4 lg:mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss how adaptive experience design, tailored digital experiences, and AI-assisted workflows can drive measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="neon-button inline-flex items-center justify-center gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Schedule Consultation <ArrowRight size={16} className="md:w-5 md:h-5" />
            </a>
            <a href="/capabilities" className="inline-flex items-center justify-center gap-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 border border-primary/50 text-primary hover:bg-primary/10 transition-colors rounded-sm">
              Explore Our Services <ArrowRight size={16} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
