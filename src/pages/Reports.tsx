
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Calendar, Filter } from 'lucide-react';
import { mockProducts, mockTestResults } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Reports: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground">
              Generate and download reports for your test data
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="product-reports">
          <TabsList className="grid grid-cols-3 max-w-md">
            <TabsTrigger value="product-reports">Product Reports</TabsTrigger>
            <TabsTrigger value="batch-reports">Batch Reports</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="product-reports" className="mt-6">
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Performance Report</CardTitle>
                  <CardDescription>
                    Generate a comprehensive report for a specific product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Product</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            {mockProducts.map((product) => (
                              <SelectItem key={product.id} value={product.id}>
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Date Range</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="last-7">Last 7 days</SelectItem>
                            <SelectItem value="last-30">Last 30 days</SelectItem>
                            <SelectItem value="last-90">Last 90 days</SelectItem>
                            <SelectItem value="custom">Custom range</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Format</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pdf">PDF Report</SelectItem>
                            <SelectItem value="csv">CSV Export</SelectItem>
                            <SelectItem value="excel">Excel Workbook</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>
                        <Download className="mr-2 h-4 w-4" /> Generate Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">Monthly Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Calendar className="h-10 w-10 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Generate a comprehensive monthly report with all test data and trends
                      </p>
                      <Button variant="outline">Generate</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">Product Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Filter className="h-10 w-10 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Compare water activity data across multiple products
                      </p>
                      <Button variant="outline">Generate</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">Custom Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center text-center space-y-3">
                      <FileText className="h-10 w-10 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Build custom reports with specific parameters and metrics
                      </p>
                      <Button variant="outline">Create</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="batch-reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Batch Reports</CardTitle>
                <CardDescription>
                  Generate reports for specific product batches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">Batch Reporting Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    This feature is currently in development and will be available in an upcoming release.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compliance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Export Compliance Documentation</CardTitle>
                <CardDescription>
                  Generate certification documents for export requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">Compliance Features Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    This feature is currently in development and will be available in an upcoming release.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Saved Reports</CardTitle>
            <CardDescription>
              Access your previously generated reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Report Name</th>
                    <th className="text-left py-3 px-4 font-medium">Type</th>
                    <th className="text-left py-3 px-4 font-medium">Generated Date</th>
                    <th className="text-left py-3 px-4 font-medium">Format</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">Premium Coconut Flakes - February Report</td>
                    <td className="py-3 px-4">Product Report</td>
                    <td className="py-3 px-4">2023-02-15</td>
                    <td className="py-3 px-4">PDF</td>
                    <td className="py-3 px-4 text-right">
                      <Button size="sm" variant="outline" className="h-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">Dried Mangoes Q1 Analysis</td>
                    <td className="py-3 px-4">Product Report</td>
                    <td className="py-3 px-4">2023-04-02</td>
                    <td className="py-3 px-4">Excel</td>
                    <td className="py-3 px-4 text-right">
                      <Button size="sm" variant="outline" className="h-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">January Monthly Summary</td>
                    <td className="py-3 px-4">Monthly Report</td>
                    <td className="py-3 px-4">2023-02-01</td>
                    <td className="py-3 px-4">PDF</td>
                    <td className="py-3 px-4 text-right">
                      <Button size="sm" variant="outline" className="h-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
