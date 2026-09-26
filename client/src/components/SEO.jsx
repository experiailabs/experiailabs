import { Helmet } from 'react-helmet-async';

/**
 * Drop this at the top of every page component with page-specific values.
 * Fixes the "every page has the same title" problem by rendering a real
 * <title>/<meta> per route instead of relying on the static index.html title.
 */
export default function SEO({
  title,
  description,
  canonical,
  image = 'https://www.experiailabs.com/images/og-default.png',
  noindex = false,
}) {
  const siteName = 'ExperiAI Labs';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <html lang="en-AU" />
      <title>{fullTitle}</title>
      <meta property="og:locale" content="en_AU" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ExperiAI Labs — Designing Intelligent Experiences at Scale" />
      {canonical && ['en-AU', 'en-AE', 'x-default'].map(language => (
        <link key={language} rel="alternate" hrefLang={language} href={canonical} />
      ))}
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}