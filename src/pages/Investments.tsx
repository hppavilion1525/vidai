
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, MapPin, Users, FileText } from "lucide-react";

const Investments = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <ArrowUp className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white-900 mb-4">
            Investments & Funding
          </h1>
          <p className="text-xl text-white-600 max-w-2xl mx-auto">
            Connect with VCs, angels, and funding opportunities tailored to your startup stage and sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-600" />
                VC Directory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Browse verified venture capital firms by sector and investment stage</p>
              <Button className="w-full">Explore VCs</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-600" />
                Angel Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Connect with angel investors and startup mentors in your region</p>
              <Button className="w-full">Find Angels</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-green-600" />
                Submit Pitch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Submit your startup profile and pitch deck to potential investors</p>
              <Button className="w-full">Submit Now</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Raise Funding?</h2>
          <p className="text-gray-600 mb-6">Get your startup investor-ready with our comprehensive funding toolkit</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Create Investor Profile
            </Button>
            <Button size="lg" variant="outline">
              Learn About Funding
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
