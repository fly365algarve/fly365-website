import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

const POSTERS = [
  { file: 'fixed-front.html', name: 'Fixed wing — front' },
  { file: 'fixed-back.html', name: 'Fixed wing — back' },
  { file: 'flex-front.html', name: 'Flexwing — front' },
  { file: 'flex-back.html', name: 'Flexwing — back' },
];

function Home() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="min-h-[100dvh] w-full px-6 py-10" style={{ background: '#E9E3D8', color: '#0B2A3C' }}>
      <header className="mx-auto max-w-6xl border-b border-[#0B2A3C] pb-3 mb-8">
        <h1 className="text-xl font-semibold">Fly365 · A5 print posters</h1>
        <p className="text-sm mt-1">Four A5 portrait pages (148 × 210 mm). Open a page and print at 100%, no margins.</p>
      </header>
      <div className="mx-auto max-w-6xl grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {POSTERS.map((p) => (
          <div key={p.file}>
            <div className="relative overflow-hidden bg-[#F7F3EC]" style={{ width: 260, height: 369 }}>
              <iframe
                title={p.name}
                src={`${base}posters/${p.file}`}
                tabIndex={-1}
                style={{ width: 560, height: 794, border: 0, transform: 'scale(0.4643)', transformOrigin: '0 0', pointerEvents: 'none', position: 'absolute', top: 0, left: 0 }}
              />
            </div>
            <p className="mt-2 text-sm font-semibold">{p.name}</p>
            <p className="text-sm flex gap-4 mt-1">
              <a className="underline" href={`${base}posters/${p.file}`} target="_blank" rel="noreferrer">Open</a>
              <a className="underline" href={`${base}posters/${p.file}?print=1`} target="_blank" rel="noreferrer">Print</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
