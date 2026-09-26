/**
 * StructuredData Component - JSON-LD Schema Markup
 * Enables rich snippets in Google search results for better visibility
 */

interface StructuredDataProps {
  schema: Record<string, unknown>;
}

export default function StructuredData({ schema }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Venture Schema for Rich Snippets
export const sillySuitcaseSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Silly Suitcase",
  "description": "AI-powered travel guide that transforms how people discover and plan city breaks using intelligent content personalisation and AI-driven customer experiences.",
  "url": "https://sillysuitcase.com",
  "applicationCategory": "TravelApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "author": {
    "@type": "Organization",
    "name": "ExperiAI Labs",
    "url": "https://www.experiailabs.com"
  },
  "image": "https://www.experiailabs.com/images/travel-abstract.png",
  "screenshot": "https://www.experiailabs.com/images/travel-abstract.png",
  "operatingSystem": "Web",
  "inLanguage": "en-AU",
  "keywords": "AI travel guide, personalisation at scale, intelligent automation, AI-driven customer experience"
};

export const synapseSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Synapse",
  "description": "Next-generation nightclub experience powered by AI. Reimagines entertainment by creating immersive, personalised moments for every guest with intelligent music curation and adaptive lighting.",
  "url": "https://synapseclub-wxgjwnyt.manus.space",
  "applicationCategory": "EntertainmentApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "author": {
    "@type": "Organization",
    "name": "ExperiAI Labs",
    "url": "https://www.experiailabs.com"
  },
  "image": "https://www.experiailabs.com/images/synapse-hero.png",
  "screenshot": "https://www.experiailabs.com/images/synapse-hero.png",
  "operatingSystem": "Web",
  "inLanguage": "en-AU",
  "keywords": "AI nightclub, personalisation at scale, intelligent automation, AI-driven customer experience"
};

// FAQ Schema for Contact Page
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What industries do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work across e-commerce, SaaS, media, hospitality, financial services, and entertainment. Our expertise in AI experience design and intelligent automation applies broadly to any industry focused on customer experience and personalisation at scale."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary based on scope and complexity. Discovery typically takes 2-4 weeks, followed by design and development phases. We'll provide a detailed timeline during our initial consultation to discuss your AI-driven customer experience needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide comprehensive support including monitoring, optimization, and continuous improvement of your AI experience design and intelligent automation systems. We can discuss support packages tailored to your needs."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle data privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Privacy is paramount. We follow GDPR, CCPA, and other relevant regulations. All systems are designed with privacy-first principles and transparent data handling practices for personalisation at scale."
      }
    }
  ]
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Experience Design & Intelligent Automation",
  "description": "We specialize in AI experience design, personalisation at scale, and intelligent automation solutions that create transformative AI-driven customer experiences.",
  "provider": {
    "@type": "Organization",
    "name": "ExperiAI Labs",
    "url": "https://www.experiailabs.com",
    "logo": "https://www.experiailabs.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/experiai-labs"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressLocality": "Ras Al Khaimah"
    }
  },
  "areaServed": [
    "AE", "SA", "AU", "UZ", "GE", "LV", "AM", "BT", "NP"
  ],
  "serviceType": "AI Experience Design, Personalisation at Scale, Intelligent Automation",
  "image": "https://www.experiailabs.com/images/hero-abstract.png"
};

// FAQ Schema for AI Experience Design Pillar Page
export const aiExperienceDesignFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI experience design and how does it differ from traditional UX design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI experience design is the practice of creating intelligent, adaptive interfaces that leverage artificial intelligence to deliver personalised, contextually relevant experiences. Unlike traditional UX design which focuses on static interfaces and predetermined user flows, AI experience design creates dynamic systems that learn from user behavior, adapt in real-time, and anticipate needs before users articulate them. This approach enables personalisation at scale—delivering unique experiences to millions of users simultaneously."
      }
    },
    {
      "@type": "Question",
      "name": "How can businesses achieve personalisation at scale without overwhelming their teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Personalisation at scale is achieved through intelligent automation and machine learning systems that learn from user behavior and adapt experiences automatically. Rather than requiring manual personalisation for each user, AI systems analyze behavioral signals, contextual information, and predictive analytics to deliver the right content at the right time through the right channel. This enables organizations to deliver hyper-personalised experiences to millions of users simultaneously without proportionally increasing team size or complexity."
      }
    },
    {
      "@type": "Question",
      "name": "What is intelligent automation and how does it improve customer experiences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Intelligent automation combines process automation with AI decision-making to create systems that handle complex workflows intelligently. Rather than following rigid rules, these systems learn from data, adapt to exceptions, and continuously improve their performance. In customer experience contexts, intelligent automation eliminates friction from customer journeys by automating routine tasks, routing complex issues intelligently, and ensuring users always receive the most appropriate response or recommendation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the key principles for implementing successful AI-driven customer experiences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Successful AI-driven customer experiences are built on five core principles: (1) Contextual Intelligence—understanding full user context including goals, preferences, and history; (2) Seamless Adaptation—systems that adapt gracefully to changing user needs in real-time; (3) Human-Centered Design—AI that enhances rather than replaces human capabilities; (4) Transparency & Trust—users understand why they see specific content or recommendations; (5) Continuous Learning—systems improve over time through user interactions and feedback."
      }
    },
    {
      "@type": "Question",
      "name": "How should organizations measure the ROI of AI experience design investments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ultimate measure of AI experience design success is business impact. Key metrics to track include: conversion rate improvements (typically 15-30%), customer lifetime value increases (20-40%), engagement rate improvements (25-50%), customer satisfaction gains (10-20%), operational efficiency improvements (30-50%), and time to value reduction (40-60%). Organizations should establish baseline metrics before implementation, measure results rigorously during pilots, and scale successful initiatives across more users and channels while maintaining quality and personalisation."
      }
    }
  ]
};

// LinkedIn Company Schema for Enhanced Professional Visibility
export const linkedinCompanySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ExperiAI Labs",
  "url": "https://www.experiailabs.com",
  "logo": "https://www.experiailabs.com/logo.png",
  "description": "ExperiAI Labs specializes in AI experience design, personalisation at scale, and intelligent automation solutions. We create transformative AI-driven customer experiences for enterprises across UAE, Saudi Arabia, Australia, and emerging markets.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+918178329362",
    "email": "shaily@experiailabs.com",
    "availableLanguage": ["en"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Hulaila, Al Hulaila Industrial Zone-FZ",
    "addressLocality": "Ras Al Khaimah",
    "addressCountry": "AE",
    "postalCode": "00000"
  },
  "sameAs": [
    "https://www.linkedin.com/company/experiailabs/",
    "https://www.instagram.com/experiailabs/",
    "https://x.com/Experiailabs"
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    {
      "@type": "Country",
      "name": "Australia"
    },
    {
      "@type": "Country",
      "name": "Uzbekistan"
    },
    {
      "@type": "Country",
      "name": "Georgia"
    },
    {
      "@type": "Country",
      "name": "Latvia"
    },
    {
      "@type": "Country",
      "name": "Armenia"
    },
    {
      "@type": "Country",
      "name": "Bhutan"
    },
    {
      "@type": "Country",
      "name": "Nepal"
    }
  ],
  "knowsAbout": [
    "AI Experience Design",
    "Personalisation at Scale",
    "Intelligent Automation",
    "AI-Driven Customer Experiences",
    "Machine Learning",
    "Customer Experience Optimization",
    "Enterprise AI Solutions"
  ],
  "employee": {
    "@type": "Person",
    "name": "Shaily",
    "jobTitle": "Founder & CEO",
    "url": "https://www.linkedin.com/in/shaily/"
  },
  "brand": {
    "@type": "Brand",
    "name": "ExperiAI Labs",
    "description": "Designing Intelligent Experiences at Scale"
  },
  "slogan": "Designing Intelligent Experiences at Scale",
  "image": "https://www.experiailabs.com/images/hero-abstract.png"
};

// Product Schema for Ventures
export const venturesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "ExperiAI Labs Ventures",
  "description": "Showcase of AI-powered ventures demonstrating AI experience design, personalisation at scale, and intelligent automation in real-world applications.",
  "url": "https://www.experiailabs.com/ventures",
  "mainEntity": [
    {
      "@type": "Product",
      "name": "Silly Suitcase",
      "description": "AI-powered travel guide demonstrating personalisation at scale and intelligent automation for travel planning.",
      "url": "https://sillysuitcase.com",
      "image": "https://www.experiailabs.com/images/travel-abstract.png",
      "brand": {
        "@type": "Brand",
        "name": "ExperiAI Labs"
      }
    },
    {
      "@type": "Product",
      "name": "Synapse",
      "description": "AI-powered nightclub experience showcasing intelligent automation and AI-driven customer experiences in entertainment.",
      "url": "https://synapseclub-wxgjwnyt.manus.space",
      "image": "https://www.experiailabs.com/images/synapse-hero.png",
      "brand": {
        "@type": "Brand",
        "name": "ExperiAI Labs"
      }
    }
  ]
};
