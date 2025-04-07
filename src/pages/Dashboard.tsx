
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertTriangle, Check, BarChart3, ClipboardList } from 'lucide-react';
import { getDashboardData, getProductById } from '@/data/mockData';
import StatusBadge from '@/components/StatusBadge';
import WaterActivityChart from '@/components/charts/WaterActivityChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { mockTestResults } from '@/data/mockData';
import { TestResult } from '@/types';
import { useNavigate } from 'react-router-dom';

const RecentTestCard: React.FC<{ test: TestResult }> = ({ test }) => {
  const product = getProductById(test.productId);
  const navigate = useNavigate();
  
  return (
    <Card className="card-hover cursor-pointer" onClick={() => navigate('/test-data')}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">{product?.name || 'Unknown Product'}</h3>
            <div className="flex items-center mt-1">
              <p className="text-sm text-muted-foreground">
                Batch: {test.batchId || 'N/A'}
              </p>
              <span className="mx-2 text-muted-foreground">•</span>
              <p className="text-sm text-muted-foreground">
                {new Date(test.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <StatusBadge status={test.status} />
        </div>
        
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="text-center p-2 bg-secondary rounded-md">
            <p className="text-xs text-muted-foreground">Water Activity</p>
            <p className={`font-semibold ${
              test.status === 'normal' ? 'text-green-600' : 
              test.status === 'warning' ? 'text-amber-500' : 
              'text-red-600'
            }`}>{test.waterActivity}</p>
          </div>
          <div className="text-center p-2 bg-secondary rounded-md">
            <p className="text-xs text-muted-foreground">RH%</p>
            <p className="font-semibold">{test.relativeHumidity}%</p>
          </div>
          <div className="text-center p-2 bg-secondary rounded-md">
            <p className="text-xs text-muted-foreground">Temp °C</p>
            <p className="font-semibold">{test.temperature}°C</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [chartData, setChartData] = useState<TestResult[]>(mockTestResults);
  const [timeRange, setTimeRange] = useState<'7days' | '30days' | '90days'>('7days');
  
  const dashboardData = getDashboardData();
  
  const filterChartData = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    
    return mockTestResults.filter(test => test.createdAt >= date);
  };
  
  const handleTimeRangeChange = (range: '7days' | '30days' | '90days') => {
    setTimeRange(range);
    
    switch (range) {
      case '7days':
        setChartData(filterChartData(7));
        break;
      case '30days':
        setChartData(filterChartData(30));
        break;
      case '90days':
        setChartData(filterChartData(90));
        break;
    }
  };
  
  // Initialize with 7 days of data
  React.useEffect(() => {
    setChartData(filterChartData(7));
  }, []);
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, {user?.name}</h1>
          <p className="text-muted-foreground">
            Here's a summary of your recent water activity testing data
          </p>
        </div>
        
        {/* Stats Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tests Today</p>
                <h3 className="text-2xl font-bold mt-1">{dashboardData.testsToday}</h3>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Activity size={24} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tests This Week</p>
                <h3 className="text-2xl font-bold mt-1">{dashboardData.testsThisWeek}</h3>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <BarChart3 size={24} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Critical Results</p>
                <h3 className="text-2xl font-bold mt-1 text-red-600">{dashboardData.criticalResults}</h3>
              </div>
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <AlertTriangle size={24} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Products Tested</p>
                <h3 className="text-2xl font-bold mt-1">{dashboardData.productsTested}</h3>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ClipboardList size={24} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Chart and Recent Tests */}
        <div className="grid gap-6 md:grid-cols-7">
          {/* Chart */}
          <Card className="md:col-span-4">
            <CardHeader className="pb-2">
              <CardTitle>Water Activity Trends</CardTitle>
              <CardDescription>
                Overview of water activity results across all products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end space-x-2 mb-4">
                <Button 
                  size="sm" 
                  variant={timeRange === '7days' ? 'default' : 'outline'}
                  onClick={() => handleTimeRangeChange('7days')}
                >
                  7 Days
                </Button>
                <Button 
                  size="sm" 
                  variant={timeRange === '30days' ? 'default' : 'outline'}
                  onClick={() => handleTimeRangeChange('30days')}
                >
                  30 Days
                </Button>
                <Button 
                  size="sm" 
                  variant={timeRange === '90days' ? 'default' : 'outline'}
                  onClick={() => handleTimeRangeChange('90days')}
                >
                  90 Days
                </Button>
              </div>
              <WaterActivityChart data={chartData} />
            </CardContent>
          </Card>
          
          {/* Recent Tests */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Recent Tests</CardTitle>
              <CardDescription>
                Your most recent testing results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.recentTests.slice(0, 3).map((test) => (
                  <RecentTestCard key={test.id} test={test} />
                ))}
                <Button variant="outline" className="w-full" onClick={() => navigate('/test-data')}>
                  View All Test Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Status Summary */}
        <Tabs defaultValue="critical">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Status Summary</h2>
            <TabsList>
              <TabsTrigger value="critical">Critical</TabsTrigger>
              <TabsTrigger value="warning">Warning</TabsTrigger>
              <TabsTrigger value="normal">Normal</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="critical" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockTestResults
                .filter(test => test.status === 'critical')
                .slice(0, 3)
                .map(test => (
                  <RecentTestCard key={test.id} test={test} />
                ))}
              {mockTestResults.filter(test => test.status === 'critical').length === 0 && (
                <div className="md:col-span-3 py-8 flex flex-col items-center justify-center text-muted-foreground">
                  <Check size={48} className="text-green-500 mb-2" />
                  <p>No critical results found</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="warning" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockTestResults
                .filter(test => test.status === 'warning')
                .slice(0, 3)
                .map(test => (
                  <RecentTestCard key={test.id} test={test} />
                ))}
              {mockTestResults.filter(test => test.status === 'warning').length === 0 && (
                <div className="md:col-span-3 py-8 flex flex-col items-center justify-center text-muted-foreground">
                  <Check size={48} className="text-green-500 mb-2" />
                  <p>No warning results found</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="normal" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockTestResults
                .filter(test => test.status === 'normal')
                .slice(0, 3)
                .map(test => (
                  <RecentTestCard key={test.id} test={test} />
                ))}
              {mockTestResults.filter(test => test.status === 'normal').length === 0 && (
                <div className="md:col-span-3 py-8 flex flex-col items-center justify-center text-muted-foreground">
                  <Check size={48} className="text-green-500 mb-2" />
                  <p>No normal results found</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
