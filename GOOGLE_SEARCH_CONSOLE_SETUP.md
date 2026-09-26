# Google Search Console Setup Guide for ExperiAI Labs

This guide will help you submit your website to Google Search Console and get your site indexed for better search visibility.

## Prerequisites

- A Google account
- Your website domain or Manus URL
- Access to domain DNS settings (if using custom domain)

## Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Start now"** or sign in with your Google account
3. You'll see two options: **URL prefix** and **Domain**

## Step 2: Add Your Property

### Option A: Using Manus Domain (Recommended for Quick Start)

1. Select **"URL prefix"** property type
2. Enter your Manus URL: `https://experiailabs.com/`
3. Click **"Continue"**
4. Google will show verification options

### Option B: Using Custom Domain (If You Have One)

1. Select **"Domain"** property type
2. Enter your custom domain: `experiai-labs.com` (or your domain)
3. Click **"Continue"**
4. Add DNS TXT record verification (see Step 3)

## Step 3: Verify Your Website Ownership

### For Manus Domain:

1. Google will show **HTML file upload** or **HTML tag** verification methods
2. Choose **"HTML tag"** method (easier)
3. Copy the meta tag provided
4. Add it to your HTML head section (already done in your project)
5. Click **"Verify"** in Google Search Console

### For Custom Domain:

1. Copy the DNS TXT record provided
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Add the TXT record to your DNS settings
4. Wait 24-48 hours for DNS propagation
5. Return to Google Search Console and click **"Verify"**

## Step 4: Submit Your Sitemap

1. Once verified, you'll be taken to your Search Console dashboard
2. In the left sidebar, click **"Sitemaps"**
3. Enter your sitemap URL: `https://experiailabs.com/sitemap.xml`
4. Click **"Submit"**
5. Google will crawl and index your pages

## Step 5: Request Indexing (Optional but Recommended)

1. Go to **"URL Inspection"** in the left sidebar
2. Enter your home page URL: `https://experiailabs.com/`
3. Click the **"Request Indexing"** button
4. Repeat for key pages:
   - `/about`
   - `/capabilities`
   - `/ventures`
   - `/contact`

## Step 6: Monitor Your Site's Performance

### Check Indexing Status:
1. Go to **"Coverage"** in the left sidebar
2. You should see your pages listed as "Indexed"
3. Monitor for any errors or excluded pages

### Monitor Search Performance:
1. Go to **"Performance"** in the left sidebar
2. Track:
   - Clicks from search results
   - Impressions (how often your site appears)
   - Average click-through rate (CTR)
   - Average position in search results

### Check Mobile Usability:
1. Go to **"Mobile Usability"** in the left sidebar
2. Ensure all pages pass mobile usability tests
3. Fix any issues reported

## Step 7: Submit to Bing Webmaster Tools (Optional)

For additional search engine visibility, also submit to Bing:

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with your Microsoft account
3. Click **"Add a site"**
4. Enter your website URL
5. Verify ownership using the same methods as Google
6. Submit your sitemap

## Your Website's Sitemap

Your sitemap is located at: `https://experiailabs.com/sitemap.xml`

It includes:
- **Home Page** (Priority: 1.0) - Updated weekly
- **About Page** (Priority: 0.9) - Updated monthly
- **Capabilities Page** (Priority: 0.9) - Updated monthly
- **Ventures Page** (Priority: 0.9) - Updated monthly
- **Contact Page** (Priority: 0.8) - Updated monthly

All pages include:
- Last modification dates
- Change frequency indicators
- Images with titles for better indexing
- Proper XML structure for search engines

## Robots.txt Configuration

Your robots.txt file is located at: `https://experiailabs.com/robots.txt`

It currently:
- Allows all search engines to crawl your site
- Points to your sitemap location
- Has no disallowed paths (all content is crawlable)

## SEO Checklist

After submission, verify these SEO elements:

- ✅ Sitemap submitted to Google Search Console
- ✅ Robots.txt properly configured
- ✅ Meta tags in HTML head (title, description, keywords)
- ✅ Structured data (JSON-LD schema markup) implemented
- ✅ Breadcrumb navigation with schema markup
- ✅ Mobile-responsive design
- ✅ Fast page load speed
- ✅ Internal linking strategy
- ✅ Open Graph tags for social sharing
- ✅ All pages have unique, descriptive titles and meta descriptions

## Expected Indexing Timeline

- **Initial Crawl**: 24-48 hours after sitemap submission
- **Full Indexing**: 1-2 weeks for all pages
- **Search Results**: 2-4 weeks to start appearing in search results
- **Ranking**: 6-12 weeks to establish rankings for target keywords

## Next Steps

1. **Submit to Google Search Console** (today)
2. **Monitor indexing progress** (check after 48 hours)
3. **Create blog content** (target long-tail keywords)
4. **Build backlinks** (reach out to industry publications)
5. **Monitor search performance** (weekly in Search Console)
6. **Optimize for top keywords** (based on performance data)

## Support & Resources

- [Google Search Console Help Center](https://support.google.com/webmasters)
- [Google Search Central Blog](https://developers.google.com/search/blog)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)

---

**Questions?** Contact ExperiAI Labs at contact@experiai-labs.com or visit our Contact page.
