import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import StructuredData, { governmentServiceSchema } from '@/components/StructuredData';
import { ArrowRight, ShieldCheck, Landmark, Workflow, Globe2 } from 'lucide-react';

/**
 * Government & Public Services page.
 * Covers: citizen service journeys, 90-day pilot phases, data residency,
 * governance, and national-scale programmes.
 *
 * TODO before this goes in front of ministers:
 * - Replace the pilot-phase durations/deliverables with your real methodology.
 * - Replace the data residency bullet points with your actual hosting/compliance
 *   posture (which regions/clouds, which certifications you actually hold).
 * - The NEOM The Line reference is illustrative of scale ambition only —
 *   confirm you want it named at all, or swap for a programme you can speak to
 *   directly if asked in the room.
 * - Add real case studies / pilot results once you have them; right now the
 *   "Flagship Projects" style proof points from Home are NOT duplicated here
 *   on purpose, since this page needs government-specific evidence.
 */

export default function GovernmentPublicServices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <StructuredData schema={governmentServiceSchema} />
      <Header />
      <Breadcrumb />
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container max-w-4xl">
          <p className="text-xs md:text-sm font-mono uppercase tracking-widest text-primary mb-4">
            Government &amp; Public Services
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-foreground leading-tight mb-6">
            Public services citizens actually finish — built for national scale.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            We design and deliver digital public services around completion, not
            just launch — with the data residency, governance, and pilot
            discipline that government programmes require.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Citizen Service Journeys */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <Workflow className="text-primary shrink-0 mt-1" size={28} />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-3">
                Citizen Service Journeys
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We map the full end-to-end journey a citizen takes to complete a
                service — application, verification, payment, follow-up — and
                redesign each handoff to remove the points where people drop
                off or call the help line. The result is a service measured on
                completion rate, not just page views.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 90-Day Pilot Phases */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-10 text-center">
            A 90-Day Pilot, Not a Multi-Year Commitment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                phase: 'Days 1–30',
                title: 'Discovery & Mapping',
                // TODO: replace with your real methodology
                description:
                  'Map the current citizen journey, identify drop-off points, and agree success metrics with the sponsoring ministry.',
              },
              {
                phase: 'Days 31–60',
                title: 'Build & Integrate',
                description:
                  'Build the redesigned journey in a contained environment, integrated with existing identity and payment systems.',
              },
              {
                phase: 'Days 61–90',
                title: 'Pilot & Measure',
                description:
                  'Run the pilot with a defined citizen cohort, measure completion rate against baseline, and produce a go/no-go report for national rollout.',
              },
            ].map((step) => (
              <div
                key={step.phase}
                className="p-6 bg-card border border-border rounded-sm"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
                  {step.phase}
                </p>
                <h3 className="text-lg font-bold font-mono text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Data Residency & Governance */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-accent shrink-0 mt-1" size={28} />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-6">
                Data Residency &amp; Governance
              </h2>
              <ul className="space-y-4">
                {[
                  // TODO: replace with your actual hosting regions / certifications
                  'Citizen data stays within an agreed jurisdiction, with residency terms set before the pilot begins.',
                  'Every AI-assisted decision has a documented, auditable trail and a human sign-off point.',
                  'Access controls and data-handling practices are reviewed against the standards your ministry already requires.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                  >
                    <span className="text-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* National-Scale Programmes */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-4">
            <Globe2 className="text-primary shrink-0 mt-1" size={28} />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-4">
                Designed to Scale Nationally
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A successful pilot is the start, not the finish line. We
                architect every service so the same system that serves a pilot
                cohort of a few thousand citizens can serve a national
                population — the kind of scale ambition behind giga-programmes
                like NEOM The Line, applied to everyday government services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Landmark className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-foreground mb-4">
            Ready to scope a 90-day pilot?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a consultation to discuss your programme, data residency
            requirements, and pilot scope.
          </p>
          <a
            href="/contact"
            className="neon-button inline-flex items-center justify-center gap-2 text-sm md:text-base px-6 py-3"
          >
            Book a Consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
