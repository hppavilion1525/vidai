
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Calendar, MapPin } from "lucide-react";

const HRManagement = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            HR Management
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Post jobs and find talent specifically for startups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-red-900/30">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <FileText className="w-5 h-5 mr-2 text-red-500" />
                Post Job Opening
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Post job openings for your startup</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">Post Job</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-red-900/30">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Users className="w-5 h-5 mr-2 text-red-500" />
                Talent Profiles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Browse profiles of startup-interested candidates</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">Browse Talent</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-red-900/30">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                Filter by Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Find talent by experience, sector, and location</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">Set Filters</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HRManagement;
