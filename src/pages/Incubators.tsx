
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, MapPin, FileText, Users } from "lucide-react";

const Incubators = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FolderOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Incubators in India
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find and apply to startup incubators across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-red-900/30">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                Find by Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Browse incubators by state and city</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">Search Location</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-red-900/30">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <FileText className="w-5 h-5 mr-2 text-red-500" />
                Application Forms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Direct application links to incubator programs</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">Apply Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-red-900/30">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Users className="w-5 h-5 mr-2 text-red-500" />
                Success Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Learn from successful incubated startups</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">Read Stories</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Incubators;
