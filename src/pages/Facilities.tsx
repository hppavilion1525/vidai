
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, MapPin, Calendar, Users } from "lucide-react";

const Facilities = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Folder className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Incubation Facilities
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Book maker spaces, labs, and co-working facilities for your startup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                Interactive Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Find facilities near you with interactive maps</p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">View Map</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                Book Facility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Book maker spaces and labs for your projects</p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Book Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-indigo-600" />
                Facility Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Read reviews and ratings from other startups</p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Read Reviews</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
