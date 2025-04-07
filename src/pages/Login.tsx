
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import AppLogo from '@/components/AppLogo';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Validation error",
        description: "Email and password are required",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      // Toast is already handled in the Auth context
    } finally {
      setIsLoading(false);
    }
  };

  // Demo accounts
  const demoAccounts = [
    { email: "john@saintechnologies.com", role: "Admin" },
    { email: "maria@saintechnologies.com", role: "Technician" },
    { email: "robert@saintechnologies.com", role: "Manager" }
  ];

  const setDemoAccount = (email: string) => {
    setEmail(email);
    setPassword("password"); // In a real app, this would be a secure password
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <AppLogo size="lg" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Sign in to your account
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your credentials to access your dashboard
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Access your WA-Meter dashboard and test data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-4 w-full">
              <p className="text-sm text-center mb-2 text-muted-foreground">Demo Accounts</p>
              <div className="grid grid-cols-1 gap-2 w-full">
                {demoAccounts.map((account) => (
                  <Button 
                    key={account.email} 
                    variant="outline" 
                    type="button"
                    className="w-full text-xs flex justify-between"
                    onClick={() => setDemoAccount(account.email)}
                  >
                    <span>{account.email}</span>
                    <span className="bg-secondary text-secondary-foreground rounded px-2 py-0.5">
                      {account.role}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
