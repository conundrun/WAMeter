
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Globe, CheckCircle2, ClipboardCheck } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Compliance: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Export Compliance</h1>
          <p className="text-muted-foreground">
            Generate certification documents and ensure regulatory compliance
          </p>
        </div>
        
        <Tabs defaultValue="certifications">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="certifications" className="mt-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Generate Export Certification</CardTitle>
                <CardDescription>
                  Create an export certificate for your products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Product</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="p1">Premium Coconut Flakes</SelectItem>
                          <SelectItem value="p2">Virgin Coconut Oil</SelectItem>
                          <SelectItem value="p3">Banana Chips</SelectItem>
                          <SelectItem value="p4">Dried Mangoes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Destination Country</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="japan">Japan</SelectItem>
                          <SelectItem value="korea">South Korea</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="eu">European Union</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Certification Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quality">Quality Certification</SelectItem>
                          <SelectItem value="safety">Food Safety Certificate</SelectItem>
                          <SelectItem value="analysis">Analysis Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Batch ID</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select batch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="b1">B-12345</SelectItem>
                          <SelectItem value="b2">B-12346</SelectItem>
                          <SelectItem value="b3">B-12347</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>
                      <FileText className="mr-2 h-4 w-4" /> Generate Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Japan Export Certificate</CardTitle>
                  <CardDescription>Documentation for exporting to Japan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center py-4 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Generate a Japan-specific export certificate with required quality parameters
                    </p>
                    <Button variant="outline">Generate</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Korea Export Certificate</CardTitle>
                  <CardDescription>Documentation for exporting to South Korea</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center py-4 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Generate a South Korea-specific export certificate with required quality parameters
                    </p>
                    <Button variant="outline">Generate</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Generic Certificate</CardTitle>
                  <CardDescription>Standard quality certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center py-4 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Generate a generic quality certificate for any destination
                    </p>
                    <Button variant="outline">Generate</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="requirements" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Export Requirements by Country</CardTitle>
                <CardDescription>
                  View water activity requirements for different export destinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Country</th>
                        <th className="text-left py-3 px-4 font-medium">Product Category</th>
                        <th className="text-left py-3 px-4 font-medium">Max Water Activity</th>
                        <th className="text-left py-3 px-4 font-medium">Required Documents</th>
                        <th className="text-right py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Japan</td>
                        <td className="py-3 px-4">Dried Fruits</td>
                        <td className="py-3 px-4">0.55</td>
                        <td className="py-3 px-4">Quality Certificate, Analysis Report</td>
                        <td className="py-3 px-4 text-right">
                          <Button size="sm" variant="outline" className="h-8">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">South Korea</td>
                        <td className="py-3 px-4">Coconut Products</td>
                        <td className="py-3 px-4">0.50</td>
                        <td className="py-3 px-4">Safety Certificate, Analysis Report</td>
                        <td className="py-3 px-4 text-right">
                          <Button size="sm" variant="outline" className="h-8">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">European Union</td>
                        <td className="py-3 px-4">All Products</td>
                        <td className="py-3 px-4">0.60</td>
                        <td className="py-3 px-4">Safety Certificate, Quality Certificate</td>
                        <td className="py-3 px-4 text-right">
                          <Button size="sm" variant="outline" className="h-8">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">United States</td>
                        <td className="py-3 px-4">Dried Foods</td>
                        <td className="py-3 px-4">0.52</td>
                        <td className="py-3 px-4">FDA Certificate, Analysis Report</td>
                        <td className="py-3 px-4 text-right">
                          <Button size="sm" variant="outline" className="h-8">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Certifications</CardTitle>
            <CardDescription>
              Previously generated export certificates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Certificate ID</th>
                    <th className="text-left py-3 px-4 font-medium">Product</th>
                    <th className="text-left py-3 px-4 font-medium">Destination</th>
                    <th className="text-left py-3 px-4 font-medium">Created Date</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">CERT-2023-001</td>
                    <td className="py-3 px-4">Premium Coconut Flakes</td>
                    <td className="py-3 px-4">Japan</td>
                    <td className="py-3 px-4">2023-02-15</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        <ClipboardCheck className="mr-1 h-3 w-3" /> Valid
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button size="sm" variant="outline" className="h-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">CERT-2023-002</td>
                    <td className="py-3 px-4">Dried Mangoes</td>
                    <td className="py-3 px-4">South Korea</td>
                    <td className="py-3 px-4">2023-03-10</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        <ClipboardCheck className="mr-1 h-3 w-3" /> Valid
                      </span>
                    </td>
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

export default Compliance;
