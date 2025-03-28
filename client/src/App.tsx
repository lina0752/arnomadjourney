import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BuranaTower from "@/pages/burana-tower";
import ArFeatures from "@/pages/ar-features";
import Gallery from "@/pages/gallery";
import About from "@/pages/about";
import { useEffect } from "react";

function App() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation for in-page links
    if (location.includes("#")) {
      const id = location.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      // Scroll to top on page change
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2E9] text-[#333333] font-['Roboto',sans-serif]">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/burana-tower" component={BuranaTower} />
          <Route path="/ar-features" component={ArFeatures} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
