import { Bell, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  userType: string;
  username: string;
  onLogout: () => void;
}

export const Navbar = ({ userType, username, onLogout }: NavbarProps) => {
  const getRoleDisplayName = (type: string) => {
    switch (type) {
      case "student": return "Student";
      case "faculty": return "Faculty";
      case "admin": return "Administrator";
      default: return "User";
    }
  };

  const getRoleBadgeVariant = (type: string) => {
    switch (type) {
      case "student": return "default";
      case "faculty": return "secondary";
      case "admin": return "destructive";
      default: return "default";
    }
  };

  return (
    <nav className="bg-background border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">
            UniPulse
          </h1>
          <Badge variant={getRoleBadgeVariant(userType)}>
            {getRoleDisplayName(userType)} Portal
          </Badge>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
            >
              3
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{username}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};