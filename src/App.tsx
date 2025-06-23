
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Investments from "./pages/Investments";
import Workshops from "./pages/Workshops";
import Courses from "./pages/Courses";
import PitchRoom from "./pages/PitchRoom";
import Incubators from "./pages/Incubators";
import Facilities from "./pages/Facilities";
import CofounderConnect from "./pages/CofounderConnect";
import LegalSupport from "./pages/LegalSupport";
import HRManagement from "./pages/HRManagement";
import Registration from "./pages/Registration";
import CloudCredits from "./pages/CloudCredits";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/events" element={<Events />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/pitch-room" element={<PitchRoom />} />
              <Route path="/incubators" element={<Incubators />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/cofounder-connect" element={<CofounderConnect />} />
              <Route path="/legal-support" element={<LegalSupport />} />
              <Route path="/hr-management" element={<HRManagement />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/cloud-credits" element={<CloudCredits />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
