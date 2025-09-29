import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Menu, Bell, User, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { Input } from './ui/input';


export function Navigation() {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-primary rounded-lg animate-pulse-glow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">Smart Talent</h1>
              <p className="text-xs text-muted-foreground -mt-1">Acquisition System</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Students
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Jobs
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {searchVisible ? (
              <Input
                type="text"
                placeholder="Search..."
                className="w-48 transition-all duration-300 ease-in-out"
                onBlur={() => setSearchVisible(false)}
              />
            ) : (
              <Button variant="ghost" size="sm" className="hidden md:flex" onClick={() => setSearchVisible(true)}>
                <Search className="w-4 h-4" />
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-4 h-4" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-primary text-primary-foreground p-0 flex items-center justify-center">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New student signed up: Priya Sharma</DropdownMenuItem>
                <DropdownMenuItem>Your job posting "Frontend Developer" has 5 new applicants</DropdownMenuItem>
                <DropdownMenuItem>Reminder: Interview with Rohan Verma at 3 PM</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
