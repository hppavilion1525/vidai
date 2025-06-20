
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Clock, Users } from "lucide-react";

const CloudCredits = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <ArrowDown className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cloud Credits & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access cloud credits and technical resources for your startup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowDown className="w-5 h-5 mr-2 text-violet-600" />
                Cloud Providers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Browse available cloud credits from AWS, GCP, and Azure</p>
              <Button className="w-full bg-violet-600 hover:bg-violet-700">View Providers</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-violet-600" />
                Eligibility Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Check your startup's eligibility for cloud credits</p>
              <Button className="w-full bg-violet-600 hover:bg-violet-700">Check Eligibility</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-violet-600" />
                Application Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Track your cloud credit application progress</p>
              <Button className="w-full bg-violet-600 hover:bg-violet-700">Track Progress</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CloudCredits;
