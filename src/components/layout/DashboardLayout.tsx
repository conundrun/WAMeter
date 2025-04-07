
import React, { ReactNode, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AppLogo from '../AppLogo';
import { 
  Home, 
  FileText, 
  Database, 
  Settings, 
  ClipboardList,
  LogIn,
  User,
  PieChart,
  ClipboardCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const mainNavItems = [
    { href: '/', label: 'Dashboard', icon: <Home className="mr-2 h-4 w-4" /> },
    { href: '/test-data', label: 'Test Data', icon: <FileText className="mr-2 h-4 w-4" /> },
    { href: '/products', label: 'Products', icon: <Database className="mr-2 h-4 w-4" /> },
    { href: '/reports', label: 'Reports', icon: <PieChart className="mr-2 h-4 w-4" /> },
    { href: '/compliance', label: 'Compliance', icon: <ClipboardCheck className="mr-2 h-4 w-4" /> }
  ];

  const settingsNavItems = [
    { href: '/profile', label: 'Profile', icon: <User className="mr-2 h-4 w-4" /> },
    { href: '/settings', label: 'Settings', icon: <Settings className="mr-2 h-4 w-4" /> }
  ];

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <AppLogo size="lg" />
        <p className="text-muted-foreground">You need to be logged in to access this page</p>
        <Button onClick={() => navigate('/login')}>
          <LogIn className="mr-2 h-4 w-4" /> Log In
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-sidebar overflow-y-auto border-r">
          <div className="px-4 mb-6">
            <AppLogo />
          </div>
          
          <div className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Main
          </div>
          <nav className="flex-1 px-2 space-y-1">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="px-4 mt-6 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Settings
          </div>
          <nav className="flex-1 px-2 space-y-1">
            {settingsNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="px-4 mt-6">
            <Button variant="outline" className="w-full" onClick={handleLogout}>
              <LogIn className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
          
          <div className="flex items-center px-4 py-4 mt-auto border-t">
            <div className="flex-shrink-0">
              <span className="inline-flex h-8 w-8 rounded-full bg-primary text-primary-foreground items-center justify-center">
                {user?.name.charAt(0)}
              </span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Header */}
      <div className="md:hidden fixed w-full z-10 bg-background border-b">
        <div className="px-4 py-3 flex items-center justify-between">
          <AppLogo />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full py-4">
                <div className="mb-8">
                  <AppLogo size="md" />
                </div>
                
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Main
                </div>
                <nav className="space-y-1 mb-6">
                  {mainNavItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) => cn(
                        "flex items-center px-2 py-2 text-base font-medium rounded-md",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Settings
                </div>
                <nav className="space-y-1 mb-6">
                  {settingsNavItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) => cn(
                        "flex items-center px-2 py-2 text-base font-medium rounded-md",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                
                <Button variant="outline" className="mt-auto" onClick={handleLogout}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col md:pl-64 flex-1">
        <main className="flex-1 overflow-y-auto bg-background pt-4 md:pt-0">
          <div className="py-6 px-4 sm:px-6 md:py-8 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
