import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { Navbar } from "@/components/layout/Navbar";
import { StudentDashboard } from "@/components/dashboards/StudentDashboard";
import { FacultyDashboard } from "@/components/dashboards/FacultyDashboard";
import { AdminDashboard } from "@/components/dashboards/AdminDashboard";
import universityHero from "@/assets/university-hero.jpg";

interface User {
  type: string;
  username: string;
  credentials: any;
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userType: string, credentials: any) => {
    setUser({
      type: userType,
      username: credentials.username,
      credentials
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const renderDashboard = () => {
    if (!user) return null;
    
    switch (user.type) {
      case "student":
        return <StudentDashboard />;
      case "faculty":
        return <FacultyDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return null;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${universityHero})` }}
          >
            <div className="absolute inset-0 bg-primary/60" />
          </div>
          
          <div className="relative z-10 text-center text-white mb-8">
            <h1 className="text-6xl font-bold mb-4">UniPulse</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Comprehensive University Management System - 
              Empowering education through seamless academic administration
            </p>
            
            <div className="flex justify-center">
              <LoginForm onLogin={handleLogin} />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">S</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Portal</h3>
                <p className="text-muted-foreground">
                  Course registration, timetables, grades, financial records, and faculty communications
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">F</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Faculty Portal</h3>
                <p className="text-muted-foreground">
                  Grade management, course administration, class rosters, and student communications
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">A</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Portal</h3>
                <p className="text-muted-foreground">
                  Curriculum planning, scheduling, fee processing, and comprehensive academic records management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        userType={user.type} 
        username={user.username} 
        onLogout={handleLogout} 
      />
      <main className="container mx-auto px-6 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
};

export default Index;