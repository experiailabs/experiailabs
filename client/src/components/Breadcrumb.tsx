import { useLocation } from 'wouter';
import { ChevronRight } from 'lucide-react';

/**
 * Breadcrumb Component - Futuristic Minimalism Design
 * Displays navigation hierarchy with schema markup for SEO
 */

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const [location] = useLocation();

  // Define breadcrumb paths for each route
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    '/': [{ label: 'Home', href: '/' }],
    '/about': [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
    '/capabilities': [
      { label: 'Home', href: '/' },
      { label: 'Capabilities', href: '/capabilities' },
    ],
    '/ventures': [
      { label: 'Home', href: '/' },
      { label: 'Ventures', href: '/ventures' },
    ],
    '/contact': [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  const breadcrumbs = breadcrumbMap[location] || [{ label: 'Home', href: '/' }];

  // Generate JSON-LD schema markup
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.experiailabs.com${item.href}`,
    })),
  };

  // Don't show breadcrumbs on home page
  if (location === '/') {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    );
  }

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        className="bg-background/50 border-b border-border py-3 backdrop-blur-sm"
        aria-label="Breadcrumb"
      >
        <div className="container">
          <ol className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="text-primary hover:text-accent transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
