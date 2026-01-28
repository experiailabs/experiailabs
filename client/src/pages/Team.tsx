import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import StructuredData, { linkedinCompanySchema } from '@/components/StructuredData';
import { Linkedin, Mail } from 'lucide-react';

/**
 * Team Page - Dark Theme with Saffron Accents
 * Professional leadership and team showcase
 * SEO Keywords: ExperiAI Labs team, leadership, AI experts, innovation
 */

const teamData = [
  {
    name: "Ashwini Kumar Sharma",
    designation: "Co Founder & CEO",
    photo: "team-ashwini.png",
    linkedin: "https://www.linkedin.com/in/ashwini-sharma-59b2748/"
  },
  {
    name: "Shailendra Kumar",
    designation: "Co Founder & CAIO",
    photo: "team-shaily.png",
    linkedin: "https://www.linkedin.com/in/shaily/"
  },
  {
    name: "Swapnil Hemant Kumar",
    designation: "Executive Director",
    photo:"Swapnil.png",
    linkedin: "https://www.linkedin.com/in/swapnil-hemant-kumar-3b0b481b/"
  },
  {
    name: "Vijay Ranveer Bhalla",
    designation: "Vice President – Hotels & Hospitality",
    photo: "Vijay.png",
    linkedin: "https://www.linkedin.com/in/vijay-ranvir-bhalla-18365320/"
  },
  {
    name: "Rohit Malhotra",
    designation: "General Manager – Digital",
    photo: "Rohit.png",
    linkedin: ""
  },
  {
    name: "Nikita Abrol",
    designation: "GM - Luxury & Lifestyle",
    photo: "Nikita.png",
    linkedin: "https://www.linkedin.com/in/nikita-abrol-519013134/"
  },
  {
    name: "Akrity Chetri",
    designation: "AGM - Digital Marketing",
    photo: "team-akrity.png",
    linkedin: "https://www.linkedin.com/in/monisha-chetri-72785a172/"
  },
  {
    name: "Gopal Jha",
    designation: "AGM - Budgets & Controls",
    photo: "team-gopal.png",
    linkedin: ""
  }
];

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StructuredData schema={linkedinCompanySchema} />
      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-foreground leading-tight mb-4 md:mb-6">
            Meet Our <span className="text-primary">Leadership Team</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl">
            Visionary leaders driving <span className="text-accent font-semibold">AI experience innovation</span> and <span className="text-accent font-semibold">personalization at scale</span> across global markets. Our team combines deep industry expertise with cutting-edge AI capabilities.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Team Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="group relative bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  {member.photo ? (
                    <img
                      src={`/images/${member.photo}`}
                      alt={member.name}
                      className="w-full h-full  group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary/30 mb-2">?</div>
                        <p className="text-sm text-muted-foreground/50">Coming Soon</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay with LinkedIn Link */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* LinkedIn Link Reveal on Hover */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 no-underline"
                      title="View LinkedIn Profile"
                    >
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-full font-semibold hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/50 hover:shadow-accent/50">
                        <Linkedin size={20} />
                        <span>View Profile</span>
                      </div>
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-4">
                    {member.designation}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/50"
                        title="LinkedIn Profile"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push boundaries in AI experience design and personalization at scale, constantly exploring new possibilities."
              },
              {
                title: "Client Success",
                description: "Your success is our success. We're committed to delivering measurable business impact through intelligent automation."
              },
              {
                title: "Global Vision",
                description: "Serving clients across 9+ countries with deep understanding of local markets and AI-driven customer experiences."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center">
                  <span className="text-lg font-bold text-background">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold font-mono text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're building the future of <span className="text-accent font-semibold">AI experience design</span> and <span className="text-accent font-semibold">intelligent automation</span>. If you're passionate about innovation, we'd love to hear from you.
          </p>
          <a href="/contact" className="neon-button inline-flex items-center gap-2">
            Get In Touch <Mail size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
