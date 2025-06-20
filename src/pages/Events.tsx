
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Events = () => {
  const [filterSector, setFilterSector] = useState("all");
  const [filterStage, setFilterStage] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      id: 1,
      title: "HealthTech Innovation Summit 2024",
      description: "Join leading healthcare entrepreneurs and investors for a day of insights and networking.",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Bangalore, Karnataka",
      sector: "HealthTech",
      stage: "All Stages",
      attendees: 250,
      price: "Free",
      organizer: "HealthTech India",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "AgriTech Startup Pitch Day",
      description: "Present your AgriTech solution to top VCs and industry experts.",
      date: "2024-03-20",
      time: "02:00 PM",
      location: "Pune, Maharashtra",
      sector: "AgriTech",
      stage: "Seed",
      attendees: 100,
      price: "₹500",
      organizer: "AgriVenture Capital",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "FinTech Workshop: Blockchain & DeFi",
      description: "Deep dive into blockchain technology and decentralized finance for startups.",
      date: "2024-03-25",
      time: "10:00 AM",
      location: "Mumbai, Maharashtra",
      sector: "FinTech",
      stage: "Growth",
      attendees: 150,
      price: "₹1,200",
      organizer: "FinTech Forum",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "EdTech Founders Meetup",
      description: "Monthly networking event for education technology entrepreneurs.",
      date: "2024-04-01",
      time: "06:30 PM",
      location: "Delhi, NCR",
      sector: "EdTech",
      stage: "All Stages",
      attendees: 80,
      price: "Free",
      organizer: "EdTech Collective",
      image: "/placeholder.svg"
    }
  ];

  const sectors = ["All", "HealthTech", "AgriTech", "FinTech", "EdTech", "E-commerce", "SaaS"];
  const stages = ["All", "Ideation", "MVP", "Seed", "Pre-Series A", "Series A", "Growth"];

  const filteredEvents = events.filter(event => {
    const matchesSector = filterSector === "all" || event.sector === filterSector;
    const matchesStage = filterStage === "all" || event.stage === filterStage || event.stage === "All Stages";
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSector && matchesStage && matchesSearch;
  });

  const handleRegister = (eventId: number, eventTitle: string) => {
    toast({
      title: "Registration Successful!",
      description: `You've been registered for "${eventTitle}". Check your email for confirmation.`,
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Startup Events
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Discover networking events, conferences, and workshops to accelerate your startup journey
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
              <Input
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
              <Select value={filterSector} onValueChange={setFilterSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  {sectors.slice(1).map((sector) => (
                    <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stage</label>
              <Select value={filterStage} onValueChange={setFilterStage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  {stages.slice(1).map((stage) => (
                    <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Post Event
              </Button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    {event.sector}
                  </Badge>
                  <Badge variant="outline">{event.stage}</Badge>
                </div>
                <CardTitle className="text-lg leading-6">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-IN', {
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees} attendees
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Organized by</p>
                    <p className="font-medium text-gray-900">{event.organizer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600">{event.price}</p>
                    <Button 
                      size="sm"
                      onClick={() => handleRegister(event.id, event.title)}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
            <Button variant="outline">Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
