import { Users, BookOpen, Calendar, DollarSign, FileText, TrendingUp, Settings, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AdminDashboard = () => {
  const quickActions = [
    { title: "Curriculum Planning", icon: BookOpen, description: "Manage academic programs" },
    { title: "Scheduling", icon: Calendar, description: "Course and room scheduling" },
    { title: "Fee Processing", icon: DollarSign, description: "Financial management" },
    { title: "Academic Records", icon: FileText, description: "Student records management" },
    { title: "System Settings", icon: Settings, description: "Platform configuration" },
  ];

  const systemStats = [
    { title: "Total Students", value: "2,847", change: "+12%", trend: "up" },
    { title: "Active Faculty", value: "156", change: "+3%", trend: "up" },
    { title: "Course Offerings", value: "342", change: "+8%", trend: "up" },
    { title: "Pending Applications", value: "89", change: "-15%", trend: "down" },
  ];

  const recentAlerts = [
    { type: "warning", message: "Server maintenance scheduled for Sunday 2AM", time: "2 hours ago" },
    { type: "info", message: "New semester registration opens next week", time: "1 day ago" },
    { type: "urgent", message: "Payment gateway requires immediate attention", time: "3 hours ago" },
  ];

  const departmentOverview = [
    { name: "Computer Science", students: 485, faculty: 28, budget: "85%" },
    { name: "Engineering", students: 567, faculty: 34, budget: "92%" },
    { name: "Business", students: 623, faculty: 41, budget: "78%" },
    { name: "Liberal Arts", students: 445, faculty: 32, budget: "88%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Administration Dashboard</h2>
        <Badge variant="secondary" className="text-sm">
          Spring 2024 Semester
        </Badge>
      </div>

      {/* System Alerts */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            System Alerts
          </CardTitle>
          <CardDescription>Important notifications requiring attention</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentAlerts.map((alert, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  alert.type === 'urgent' ? 'bg-destructive' : 
                  alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                <p className="font-medium">{alert.message}</p>
              </div>
              <Badge variant="outline">{alert.time}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

      {/* System Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            System Overview
          </CardTitle>
          <CardDescription>Key metrics and performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {systemStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-muted rounded-lg">
                <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                  {stat.change}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Department Overview
            </CardTitle>
            <CardDescription>Summary by academic department</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {departmentOverview.map((dept, index) => (
              <div key={index} className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{dept.name}</h4>
                  <Badge variant="outline">Budget: {dept.budget}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{dept.students} Students</span>
                  <span>{dept.faculty} Faculty</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View Detailed Reports
            </Button>
          </CardContent>
        </Card>

        {/* Financial Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Financial Summary
            </CardTitle>
            <CardDescription>Current semester financial overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <h4 className="text-lg font-bold text-success">$2.4M</h4>
                <p className="text-sm text-muted-foreground">Tuition Collected</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <h4 className="text-lg font-bold text-primary">$1.8M</h4>
                <p className="text-sm text-muted-foreground">Operating Expenses</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <h4 className="text-lg font-bold text-destructive">$125K</h4>
                <p className="text-sm text-muted-foreground">Outstanding Fees</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <h4 className="text-lg font-bold text-primary">89%</h4>
                <p className="text-sm text-muted-foreground">Collection Rate</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Generate Financial Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Administrative Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Administrative Actions</CardTitle>
          <CardDescription>Latest system activities and changes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Course CS502 approved for next semester</p>
              <p className="text-sm text-muted-foreground">Advanced Machine Learning added to curriculum</p>
            </div>
            <Badge variant="outline">1 hour ago</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Faculty hiring approved: Dr. Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Computer Science Department</p>
            </div>
            <Badge variant="outline">3 hours ago</Badge>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Semester fees updated</p>
              <p className="text-sm text-muted-foreground">3% increase for Fall 2024 semester</p>
            </div>
            <Badge variant="outline">1 day ago</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};