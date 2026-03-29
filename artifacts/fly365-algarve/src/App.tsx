import { Switch, Route, Router as WouterRouter } from "wouter";
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
import { ContactPage } from "./pages/ContactPage";
import { HistoryPage } from "./pages/HistoryPage";
import { TermsPage } from "./pages/TermsPage";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <p className="text-[hsl(35,10%,55%)]">Page not found.</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/fixed-wing" component={FixedWingPage} />
          <Route path="/flexwing" component={FlexwingPage} />
          <Route path="/training" component={TrainingPage} />
          <Route path="/prices" component={PricesPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/terms" component={TermsPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
