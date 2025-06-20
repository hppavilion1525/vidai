
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  FileText, 
  Users, 
  Clock, 
  ArrowUp, 
  MapPin,
  Image
} from "lucide-react";

const Dashboard = () => {
  const recentActivity = [
    { action: "Registered for HealthTech Summit", date: "2 hours ago", type: "event" },
    { action: "Applied to Bangalore Incubator", date: "1 day ago", type: "application" },
    { action: "Uploaded pitch deck", date: "3 days ago", type: "document" },
    { action: "Connected with John (Co-founder)", date: "1 week ago", type: "connection" }
  ];

  const upcomingEvents = [
    { title: "HealthTech Innovation Summit", date: "Mar 15, 2024", time: "9:00 AM" },
    { title: "Pitch Workshop", date: "Mar 20, 2024", time: "2:00 PM" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white-900 mb-2">
            Welcome back, Founder! 👋
          </h1>
          <p className="text-xl text-white-600">
            Here's what's happening with your startup journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Applications</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Events Registered</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Connections</p>
                  <p className="text-2xl font-bold text-gray-900">7</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Profile Score</p>
                  <p className="text-2xl font-bold text-gray-900">85%</p>
                </div>
                <ArrowUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gray-600" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">{event.title}</h4>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </span>
                    </div>
                    <Button size="sm" className="mt-3 bg-emerald-600 hover:bg-emerald-700">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center bg-emerald-600 hover:bg-emerald-700">
                <Image className="w-6 h-6 mb-2" />
                <span className="text-sm">Upload Pitch</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700">
                <Calendar className="w-6 h-6 mb-2" />
                <span className="text-sm">Book Event</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700">
                <Users className="w-6 h-6 mb-2" />
                <span className="text-sm">Find Co-founder</span>
              </Button>
              <Button className="h-20 flex flex-col items-center justify-center bg-orange-600 hover:bg-orange-700">
                <FileText className="w-6 h-6 mb-2" />
                <span className="text-sm">Apply Incubator</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
