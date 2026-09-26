import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SEO from "@/components/SEO";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Ventures from "./pages/Ventures";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import AIExperienceDesign from "./pages/AIExperienceDesign";
import GovernmentPublicServices from "./pages/GovernmentPublicServices";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const SITE_URL = "https://www.experiailabs.com";

/**
 * Central SEO map, keyed by route path.
 * Add a page here and it gets its own title/description automatically —
 * no need to touch the individual page component.
 */
const seoByPath: Record<string, { title: string; description: string; noindex?: boolean }> = {
  "/": {
    title: "AI Experience Design for Government Services",
    description:
      "ExperiAI Labs designs public-sector digital services people actually finish — built with intelligent automation and personalisation at scale.",
  },
  "/about": {
    title: "About ExperiAI Labs",
    description:
      "Who we are, what we build, and why we focus on public-sector completion rates over launch-day headlines.",
  },
  "/capabilities": {
    title: "Capabilities",
    description:
      "How we design and ship AI-driven, accessible public-sector services — from research to production.",
  },
  "/ventures": {
    title: "Ventures",
    description:
      "Products and ventures built by ExperiAI Labs, including Silly Suitcase and Synapse.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Book a consultation with ExperiAI Labs to discuss your public-sector digital service.",
  },
  "/team": {
    title: "Our Team",
    description:
      "Meet the team behind ExperiAI Labs' AI experience design and public-sector work.",
  },
  "/ai-experience-design": {
    title: "AI Experience Design: A Complete Guide",
    description:
      "A deep-dive guide to AI experience design, personalisation at scale, and intelligent automation.",
  },
  "/government-services": {
    title: "Government & Public Services",
    description:
      "Citizen service journeys, 90-day pilot phases, data residency, and governance for national-scale government programmes.",
  },
  "/admin": {
    title: "Admin",
    description: "Internal admin area.",
    noindex: true,
  },
  "/404": {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    noindex: true,
  },
};

const fallbackSeo = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  noindex: true,
};

/** Redirects /home (and any legacy path) to / so there's one canonical homepage. */
function RedirectTo({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(to, { replace: true });
  }, [to, setLocation]);
  return null;
}

function Router() {
  const [location, setLocation] = useLocation();
  const currentPath = location.toLowerCase();

  const seo = seoByPath[currentPath] ?? fallbackSeo;

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={`${SITE_URL}${currentPath === "/" ? "" : currentPath}`}
        noindex={seo.noindex}
      />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home">
          <RedirectTo to="/" />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/capabilities" component={Capabilities} />
        <Route path="/ventures" component={Ventures} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        <Route path="/ai-experience-design" component={AIExperienceDesign} />
        <Route path="/government-services" component={GovernmentPublicServices} />
        <Route path="/admin" component={Admin} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App({ helmetContext = {} }) {
  return (
    <HelmetProvider context={helmetContext}>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;