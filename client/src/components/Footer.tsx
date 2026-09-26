/**
 * Footer Component - Dark Theme with Neon Accents
 */
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-base md:text-lg font-bold font-mono text-primary mb-3 md:mb-4">ExperiAI Labs</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
              Designing intelligent experiences that simplify life and elevate human potential.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/experiailabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/experiailabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Experiailabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Twitter/X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs md:text-sm font-semibold text-foreground mb-3 md:mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="/government-services" className="text-sm text-muted-foreground hover:text-primary">Government &amp; Public Services</a></li>
              <li>
                <a
                  href="/about"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/capabilities"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="/ventures"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Ventures
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h5 className="text-xs md:text-sm font-semibold text-foreground mb-3 md:mb-4">Projects</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://sillysuitcase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Silly Suitcase
                </a>
              </li>
              <li>
                <a
                  href="https://synapseclub-wxgjwnyt.manus.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Synapse
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs md:text-sm font-semibold text-foreground mb-3 md:mb-4">Contact</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:shaily@experiailabs.com"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-muted-foreground gap-4 md:gap-0">
          <p>&copy; 2026 ExperiAI Labs. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-all duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
