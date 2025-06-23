
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Youtube, Clock, Users } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Entrepreneur Courses
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Structured learning paths to master entrepreneurship and startup skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Youtube className="w-5 h-5 mr-2 text-orange-600" />
                Video Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Comprehensive video courses on startup fundamentals</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">Browse Courses</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange-600" />
                Self-Paced Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Learn at your own pace with flexible scheduling</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">Start Learning</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-600" />
                Creator Portal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Become a course creator and share your expertise</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">Create Course</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
