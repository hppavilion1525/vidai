
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  FileText,
  Image,
  FolderOpen,
  Clock,
  Folder,
  ArrowUp,
  ArrowDown,
  Youtube
} from "lucide-react";

const Index = () => {
  const modules = [
    {
      title: "Events",
      description: "Discover startup events, conferences, and networking opportunities",
      icon: Calendar,
      path: "/events",
      color: "from-red-500 to-red-600",
      features: ["Filter by sector", "Calendar view", "Event registration"]
    },
    {
      title: "Investments",
      description: "Connect with VCs, angels, and funding opportunities",
      icon: ArrowUp,
      path: "/investments",
      color: "from-red-600 to-red-700",
      features: ["VC directory", "Sector filtering", "Funding applications"]
    },
    {
      title: "Workshops",
      description: "Join skill-building workshops and masterclasses",
      icon: Users,
      path: "/workshops",
      color: "from-red-500 to-red-600",
      features: ["Live sessions", "Certificates", "Expert mentors"]
    },
    {
      title: "Courses",
      description: "Access structured learning paths for entrepreneurs",
      icon: FileText,
      path: "/courses",
      color: "from-red-600 to-red-700",
      features: ["Video content", "Progress tracking", "Skill levels"]
    },
    {
      title: "Pitch Room",
      description: "Present your startup to investors and get feedback",
      icon: Youtube,
      path: "/pitch-room",
      color: "from-red-500 to-red-600",
      features: ["Live pitching", "Video uploads", "Investor feedback"]
    },
    {
      title: "Incubators",
      description: "Find and apply to startup incubators across India",
      icon: FolderOpen,
      path: "/incubators",
      color: "from-red-600 to-red-700",
      features: ["State-wise listing", "Application forms", "Success stories"]
    },
    {
      title: "Facilities",
      description: "Book maker spaces, labs, and co-working facilities",
      icon: Folder,
      path: "/facilities",
      color: "from-red-500 to-red-600",
      features: ["Interactive maps", "Booking system", "Facility reviews"]
    },
    {
      title: "Co-founder Connect",
      description: "Find your perfect co-founder match",
      icon: Users,
      path: "/cofounder-connect",
      color: "from-red-600 to-red-700",
      features: ["Skill matching", "Location filters", "Direct messaging"]
    },
    {
      title: "Legal Support",
      description: "Access legal templates and partner law firms",
      icon: FileText,
      path: "/legal-support",
      color: "from-red-500 to-red-600",
      features: ["Free templates", "Legal consultations", "Compliance help"]
    },
    {
      title: "HR Management",
      description: "Post jobs and find talent for your startup",
      icon: Users,
      path: "/hr-management",
      color: "from-red-600 to-red-700",
      features: ["Job postings", "Talent profiles", "Startup-focused"]
    },
    {
      title: "Registration",
      description: "Incorporate your startup and ensure compliance",
      icon: FileText,
      path: "/registration",
      color: "from-red-500 to-red-600",
      features: ["Company registration", "Compliance tracking", "Expert guidance"]
    },
    {
      title: "Cloud Credits",
      description: "Get cloud credits and technical resources",
      icon: ArrowDown,
      path: "/cloud-credits",
      color: "from-red-600 to-red-700",
      features: ["AWS/GCP credits", "Eligibility checker", "Application tracking"]
    }
  ];

  const sectors = [
    "HealthTech", "AgriTech", "FinTech", "EdTech", "E-commerce", "SaaS", "CleanTech", "FoodTech"
  ];

  const stages = [
    "Ideation", "MVP", "Seed", "Pre-Series A", "Series A", "Growth", "Scale-up"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900/20 py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <img 
                src="/uploads/Vidhai White Logo.png" 
                alt="Vidhai Logo" 
                className="h-16 w-auto mx-auto mb-6"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white text-3xl sm:text-5xl">
                Where Startups Sprout
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your complete ecosystem for startup success. From ideation to scale-up, 
              access everything you need to grow your startup in India.
            </p>
            
            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-300">Sectors:</span>
                {sectors.slice(0, 4).map((sector) => (
                  <Badge key={sector} variant="secondary" className="bg-red-900/30 text-red-300 hover:bg-red-900/50 border-red-500/30">
                    {sector}
                  </Badge>
                ))}
                <Badge variant="outline" className="border-red-500/30 text-red-300">+4 more</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-300">Stages:</span>
                {stages.slice(0, 3).map((stage) => (
                  <Badge key={stage} variant="secondary" className="bg-red-900/30 text-red-300 hover:bg-red-900/50 border-red-500/30">
                    {stage}
                  </Badge>
                ))}
                <Badge variant="outline" className="border-red-500/30 text-red-300">+4 more</Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Startup Support Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access 12 comprehensive modules designed to support every aspect of your startup journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.path} to={module.path}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-red-900/30 shadow-md bg-gray-800 hover:bg-gray-700">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {module.description}
                      </p>
                      <div className="space-y-1">
                        {module.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-400">
                            <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Startup?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of entrepreneurs who are building the future with Vidhai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Create Account
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
