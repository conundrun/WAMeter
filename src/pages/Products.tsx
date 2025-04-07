
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProducts, getTestResultsByProduct } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import WaterActivityChart from '@/components/charts/WaterActivityChart';
import { AlertCircle, Check } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';

const Products: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Product Management</h1>
            <p className="text-muted-foreground">
              Manage your products and view their test history
            </p>
          </div>
          <Button>Add New Product</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => {
            const testResults = getTestResultsByProduct(product.id);
            const latestTest = testResults.length > 0 
              ? testResults.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0]
              : null;
              
            const hasWarningOrCritical = testResults.some(
              test => test.status === 'warning' || test.status === 'critical'
            );
            
            return (
              <Card key={product.id} className="card-hover">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{product.name}</CardTitle>
                    {hasWarningOrCritical ? (
                      <AlertCircle className="text-amber-500 h-5 w-5" />
                    ) : (
                      <Check className="text-green-500 h-5 w-5" />
                    )}
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-muted-foreground">Target Water Activity</p>
                        <p className="font-medium">
                          {product.targetWaMin} - {product.targetWaMax}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Last Tested</p>
                        <p className="font-medium">
                          {latestTest 
                            ? new Date(latestTest.createdAt).toLocaleDateString() 
                            : 'Never'
                          }
                        </p>
                      </div>
                    </div>
                    
                    {latestTest && (
                      <div className="border-t pt-3">
                        <p className="text-sm text-muted-foreground mb-2">Latest Result:</p>
                        <div className="flex justify-between items-center">
                          <div className="text-2xl font-bold">
                            <span className={
                              latestTest.status === 'normal' ? 'text-green-600' :
                              latestTest.status === 'warning' ? 'text-amber-500' :
                              'text-red-600'
                            }>
                              {latestTest.waterActivity}
                            </span>
                          </div>
                          <StatusBadge status={latestTest.status} />
                        </div>
                      </div>
                    )}
                    
                    <div className="h-[120px]">
                      {testResults.length > 0 ? (
                        <WaterActivityChart data={testResults} height={120} />
                      ) : (
                        <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
                          No test data available
                        </div>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" className="w-full">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Products;
