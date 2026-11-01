import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { FixedWingPage } from "./pages/FixedWingPage";
import { FlexwingPage } from "./pages/FlexwingPage";
import { TrainingPage } from "./pages/TrainingPage";
import { PricesPage } from "./pages/PricesPage";
import { TrialFlightsPage } from "./pages/TrialFlightsPage";
import { ContactPage } from "./pages/ContactPage";
import { HistoryPage } from "./pages/HistoryPage";
import { TermsPage } from "./pages/TermsPage";
import { BookingPage } from "./pages/BookingPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { CreditsPage } from "./pages/CreditsPage";
import { HelmetProvider } from "react-helmet-async";
import { WhatsAppControl } from "./components/WhatsAppControl";
import { Seo } from "./components/Seo";
import { IntroOverlay } from "./components/IntroOverlay";
import { useEffect } from "react";

function MotionObserver() {
  const [location] = useLocation();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(document.querySelectorAll("main section"));
    sections.forEach((section) => section.classList.add("section-reveal"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.06 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location]);
  return null;
}

function RouteScroll() {
  const [location] = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView({ block: "start" });
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [location]);
  return null;
}

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="page-shell min-h-[70vh] flex items-center justify-center">
      <Seo title="Page not found" description="The page you were looking for could not be found. Explore Fly365 Algarve microlight flights and training." />
      <div className="text-center">
        <h1 className="display-heading mb-4 text-7xl text-[var(--navy)]">404</h1>
        <p className="text-[var(--muted-foreground)]">Page not found.</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <div className="min-h-[100dvh] bg-background">
      <Navbar />
      <IntroOverlay />
      <MotionObserver />
      <RouteScroll />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/fixed-wing" component={FixedWingPage} />
          <Route path="/flexwing" component={FlexwingPage} />
          <Route path="/training" component={TrainingPage} />
          <Route path="/prices" component={PricesPage} />
          <Route path="/trial-flights" component={TrialFlightsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/booking" component={BookingPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/credits" component={CreditsPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppControl />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
