import { BookOpen, Calendar, CreditCard, FileText, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const StudentDashboard = () => {
  const quickActions = [
    { title: "Course Registration", icon: BookOpen, description: "Add or drop courses" },
    { title: "View Timetable", icon: Calendar, description: "Check your class schedule" },
    { title: "Grades & Transcripts", icon: FileText, description: "View academic records" },
    { title: "Financial Records", icon: CreditCard, description: "Tuition and payments" },
    { title: "Messages", icon: MessageSquare, description: "Faculty communications" },
  ];

  const upcomingClasses = [
    { course: "Advanced Programming", time: "10:00 AM", room: "Lab 201", professor: "Dr. Smith" },
    { course: "Database Systems", time: "2:00 PM", room: "Room 305", professor: "Prof. Johnson" },
    { course: "Software Engineering", time: "4:00 PM", room: "Room 410", professor: "Dr. Wilson" },
  ];

  const recentGrades = [
    { course: "Data Structures", grade: "A-", credits: 3 },
    { course: "Computer Networks", grade: "B+", credits: 3 },
    { course: "Operating Systems", grade: "A", credits: 4 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Student Dashboard</h2>
        <Badge variant="secondary" className="text-sm">
          Spring 2024 Semester
        </Badge>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {quickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <action.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">{action.title}</h3>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingClasses.map((cls, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">{cls.course}</h4>
                  <p className="text-sm text-muted-foreground">{cls.professor}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{cls.time}</p>
                  <p className="text-sm text-muted-foreground">{cls.room}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Grades
            </CardTitle>
            <CardDescription>Your latest academic performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentGrades.map((grade, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">{grade.course}</h4>
                  <p className="text-sm text-muted-foreground">{grade.credits} Credits</p>
                </div>
                <Badge 
                  variant={grade.grade.startsWith('A') ? 'default' : grade.grade.startsWith('B') ? 'secondary' : 'outline'}
                  className="text-lg font-bold"
                >
                  {grade.grade}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View Complete Transcript
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Academic Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Progress</CardTitle>
          <CardDescription>Current semester overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">3.7</h3>
              <p className="text-sm text-muted-foreground">Current GPA</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">15</h3>
              <p className="text-sm text-muted-foreground">Credits This Semester</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">85</h3>
              <p className="text-sm text-muted-foreground">Total Credits Earned</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">55</h3>
              <p className="text-sm text-muted-foreground">Credits Remaining</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};