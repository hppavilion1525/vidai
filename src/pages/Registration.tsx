
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Users, Calendar } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Company Registration & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Incorporate your startup and manage compliance requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-lime-600" />
                Incorporation Forms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Complete incorporation forms with expert guidance</p>
              <Button className="w-full bg-lime-600 hover:bg-lime-700">Start Process</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-lime-600" />
                Status Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Track your registration and compliance status</p>
              <Button className="w-full bg-lime-600 hover:bg-lime-700">Check Status</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-lime-600" />
                Expert Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Get help from registration and compliance experts</p>
              <Button className="w-full bg-lime-600 hover:bg-lime-700">Get Help</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;
