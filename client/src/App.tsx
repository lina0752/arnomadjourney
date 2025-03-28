import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BuranaTower from "@/pages/burana-tower";
import ArFeatures from "@/pages/ar-features";
import Gallery from "@/pages/gallery";
import About from "@/pages/about";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/burana-tower" component={BuranaTower} />
      <Route path="/ar-features" component={ArFeatures} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
