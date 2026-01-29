import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * ConsultationForm Component - Dark Theme with EmailJS Integration
 */
export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // EmailJS parameters
    const serviceID = 'service_krhkgml';
    const templateID = 'template_alxe497';
    const publicKey = 'jJaPC927BXF72gO2k';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      inquiry: formData.inquiry,
      message: `Consultation request from ${formData.name} (${formData.email}) at ${formData.company}. Interested in: ${formData.inquiry}`,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSubmitted(true);
        setIsLoading(false);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', inquiry: '' });
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsLoading(false);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <section className="py-16 md:py-20 lg:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-foreground mb-4 md:mb-6">
              Ready to Transform Your <span className="text-primary">Customer Experience</span>?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Request a consultation with our team to explore how <span className="text-accent font-semibold">AI experience design</span>, <span className="text-accent font-semibold">personalization at scale</span>, and <span className="text-accent font-semibold">intelligent automation</span> can drive growth for your business.
            </p>
          </div>

          {/* Form Card */}
          <div className="p-8 md:p-12 bg-card border border-border rounded-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground rounded-sm focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground rounded-sm focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm md:text-base font-semibold text-foreground mb-2">Company</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground rounded-sm focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"
                    placeholder="Your company name"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiry" className="block text-sm md:text-base font-semibold text-foreground mb-2">What are you interested in?</label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground rounded-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="ai-experience-design">AI Experience Design</option>
                    <option value="personalization">Personalization at Scale</option>
                    <option value="intelligent-automation">Intelligent Automation</option>
                    <option value="ai-driven-experiences">AI-Driven Customer Experiences</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full neon-button inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <>⚙️ Sending...</> : <>Request Consultation <ArrowRight size={18} /></>}
                </button>

                {/* Form Note */}
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours to discuss your needs and explore how we can help.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-2">Thank You!</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  Your consultation request has been received. We'll be in touch shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
