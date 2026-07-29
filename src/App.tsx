import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";

// Both routes are rarely-visited relative to "/", so keep them out of the
// main bundle and fetch on demand.
const NotFound = lazy(() => import("./pages/NotFound"));
const Support = lazy(() => import("./pages/Support"));

const RouteFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-background" aria-hidden="true" />
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/support" element={<Support />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <CookieConsent />
  </BrowserRouter>
);

export default App;
