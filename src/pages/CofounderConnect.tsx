
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MapPin, FileText, Clock } from "lucide-react";

const CofounderConnect = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Co-founder Connect
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Find your perfect co-founder match based on skills and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-pink-600" />
                Skill Matching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Find co-founders with complementary skills</p>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Find Match</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-pink-600" />
                Location Filter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Connect with co-founders in your city</p>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Set Location</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-pink-600" />
                Send Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Send connection requests to potential co-founders</p>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Send Request</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CofounderConnect;
