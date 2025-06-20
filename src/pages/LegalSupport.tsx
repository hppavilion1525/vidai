
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, Clock } from "lucide-react";

const LegalSupport = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            IP & Legal Support
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access legal templates and connect with partner law firms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-cyan-600" />
                Free Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Download NDAs, equity splits, and other legal documents</p>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Download Templates</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-cyan-600" />
                Book Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Schedule consultations with partner law firms</p>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Book Slot</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-600" />
                Partner Firms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Browse our network of startup-friendly law firms</p>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">View Partners</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LegalSupport;
