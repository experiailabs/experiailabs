import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Ventures from "./pages/Ventures";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import AIExperienceDesign from "./pages/AIExperienceDesign";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import IntroVideo from "./pages/IntroPage";

function Router() {
  const [location, setLocation] = useLocation();

  // SPA-safe redirect: If the URL path is unknown, send it to `/` (IntroVideo)
  useEffect(() => {
    const allowedPaths = [
      "/",
      "/home",
      "/about",
      "/capabilities",
      "/ventures",
      "/contact",
      "/team",
      "/ai-experience-design",
      "/admin",
      "/404",
    ];

    // Normalize case
    const currentPath = location.toLowerCase();

    if (!allowedPaths.includes(currentPath)) {
      setLocation("/"); // redirect to IntroVideo
    }
  }, [location, setLocation]);

  return (
    <Switch>
      <Route path="/" component={IntroVideo} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/capabilities" component={Capabilities} />
      <Route path="/ventures" component={Ventures} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/ai-experience-design" component={AIExperienceDesign} />
      <Route path="/admin" component={Admin} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} /> {/* catch-all */}
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
