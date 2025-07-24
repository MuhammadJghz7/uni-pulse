import { Users, BookOpen, ClipboardList, MessageSquare, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const FacultyDashboard = () => {
  const quickActions = [
    { title: "Grade Entry", icon: ClipboardList, description: "Enter and manage grades" },
    { title: "Course Management", icon: BookOpen, description: "Manage course content" },
    { title: "Class Rosters", icon: Users, description: "View enrolled students" },
    { title: "Student Messages", icon: MessageSquare, description: "Communications" },
  ];

  const myCourses = [
    { code: "CS301", name: "Advanced Programming", students: 45, pending: 12 },
    { code: "CS401", name: "Software Engineering", students: 38, pending: 8 },
    { code: "CS501", name: "Database Systems", students: 32, pending: 5 },
  ];

  const todaySchedule = [
    { course: "CS301", time: "9:00 AM", room: "Lab 201", activity: "Lecture" },
    { course: "CS401", time: "2:00 PM", room: "Room 305", activity: "Lab Session" },
    { course: "CS501", time: "4:00 PM", room: "Room 410", activity: "Office Hours" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Faculty Dashboard</h2>
        <Badge variant="secondary" className="text-sm">
          Spring 2024 Semester
        </Badge>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        {/* My Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              My Courses
            </CardTitle>
            <CardDescription>Courses you're teaching this semester</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {myCourses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">{course.code}</h4>
                  <p className="text-sm text-muted-foreground">{course.name}</p>
                </div>
                <div className="text-right space-x-2">
                  <Badge variant="outline">{course.students} Students</Badge>
                  {course.pending > 0 && (
                    <Badge variant="destructive">{course.pending} Pending</Badge>
                  )}
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Manage All Courses
            </Button>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your activities for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaySchedule.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">{item.course}</h4>
                  <p className="text-sm text-muted-foreground">{item.activity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.time}</p>
                  <p className="text-sm text-muted-foreground">{item.room}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Teaching Performance Overview
          </CardTitle>
          <CardDescription>Summary of your courses this semester</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">115</h3>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">3</h3>
              <p className="text-sm text-muted-foreground">Active Courses</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">25</h3>
              <p className="text-sm text-muted-foreground">Pending Grades</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold text-primary">4.2</h3>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest updates and notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Assignment submitted: CS301 Project</p>
              <p className="text-sm text-muted-foreground">John Doe submitted Programming Assignment 2</p>
            </div>
            <Badge variant="outline">2 hours ago</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Grade entry reminder</p>
              <p className="text-sm text-muted-foreground">Midterm grades due for CS401</p>
            </div>
            <Badge variant="destructive">Due Tomorrow</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Student inquiry</p>
              <p className="text-sm text-muted-foreground">Sarah Wilson asked about office hours</p>
            </div>
            <Badge variant="outline">1 day ago</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};