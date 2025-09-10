
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockProducts, mockTestResults } from '@/data/mockData';
import { ProcessType, calculateWaterActivity, getTestResultStatus } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatusBadge from '@/components/StatusBadge';

const TestDataEntry: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form state
  const [productId, setProductId] = useState<string>("");
  const [relativeHumidity, setRelativeHumidity] = useState<string>("");
  const [temperature, setTemperature] = useState<string>("");
  const [processType, setProcessType] = useState<ProcessType>(ProcessType.Centrifugation);
  const [batchId, setBatchId] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  
  // Derived values
  const [calculatedWaterActivity, setCalculatedWaterActivity] = useState<number | null>(null);
  const [resultStatus, setResultStatus] = useState<"normal" | "warning" | "critical" | null>(null);
  
  // Handle calculation
  const calculateResult = () => {
    if (!relativeHumidity || !temperature) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please enter both Relative Humidity and Temperature values."
      });
      return;
    }
    
    const rh = parseFloat(relativeHumidity);
    const temp = parseFloat(temperature);
    
    if (isNaN(rh) || isNaN(temp)) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter valid numbers for Relative Humidity and Temperature."
      });
      return;
    }
    
    if (rh < 0 || rh > 100) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Relative Humidity must be between 0% and 100%."
      });
      return;
    }
    
    if (temp < 0 || temp > 50) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Temperature must be between 0°C and 50°C."
      });
      return;
    }
    
    const wa = calculateWaterActivity(rh, temp, processType);
    setCalculatedWaterActivity(wa);
    
    const status = getTestResultStatus(wa);
    setResultStatus(status);
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!productId || !relativeHumidity || !temperature || !calculatedWaterActivity) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please complete all required fields and calculate the water activity."
      });
      return;
    }
    
    // In a real app, this would save to the database
    const newTest = {
      id: `tr-${Date.now()}`,
      productId,
      relativeHumidity: parseFloat(relativeHumidity),
      temperature: parseFloat(temperature),
      processType,
      waterActivity: calculatedWaterActivity,
      notes,
      technicianId: user?.id || "",
      batchId,
      createdAt: new Date(),
      status: resultStatus || "normal"
    };
    
    console.log("New test result:", newTest);
    
    // Add to mock data
    mockTestResults.push(newTest as any);
    
    toast({
      title: "Test Result Saved",
      description: `Water activity: ${calculatedWaterActivity} (${resultStatus?.toUpperCase()})`,
      variant: resultStatus === "critical" ? "destructive" : resultStatus === "warning" ? "default" : "default",
    });
    
    // Reset form
    setProductId("");
    setRelativeHumidity("");
    setTemperature("");
    setProcessType(ProcessType.Centrifugation);
    setBatchId("");
    setNotes("");
    setCalculatedWaterActivity(null);
    setResultStatus(null);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Test Data Management</h1>
          <p className="text-muted-foreground">
            Enter, calculate, and save water activity test results
          </p>
        </div>
        
        <Tabs defaultValue="new">
          <TabsList>
            <TabsTrigger value="new">New Test</TabsTrigger>
            <TabsTrigger value="history">Test History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="new" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Test Data Entry Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Test Data Entry</CardTitle>
                  <CardDescription>
                    Enter the readings from your WAMETER device
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="product">Product</Label>
                        <Select 
                          value={productId} 
                          onValueChange={setProductId}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Available Products</SelectLabel>
                              {mockProducts.map(product => (
                                <SelectItem key={product.id} value={product.id}>
                                  {product.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="batchId">Batch ID</Label>
                        <Input
                          id="batchId"
                          placeholder="e.g. B-12345"
                          value={batchId}
                          onChange={(e) => setBatchId(e.target.value)}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="relativeHumidity">Top Metric</Label>
                          <Input
                            id="relativeHumidity"
                            placeholder="e.g. 65.4"
                            value={relativeHumidity}
                            onChange={(e) => setRelativeHumidity(e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="temperature">Bottom Metric</Label>
                          <Input
                            id="temperature"
                            placeholder="e.g. 25.2"
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="processType">Process Type</Label>
                        <Select 
                          value={processType} 
                          onValueChange={(value) => setProcessType(value as ProcessType)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select process type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={ProcessType.Centrifugation}>Centrifugation</SelectItem>
                            <SelectItem value={ProcessType.Expeller}>Expeller</SelectItem>
                            <SelectItem value={ProcessType.NaturalFermentation}>Natural Fermentation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any additional notes about the test"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={calculateResult}
                      >
                        Calculate Water Activity
                      </Button>
                      
                      <Button 
                        type="submit" 
                        disabled={calculatedWaterActivity === null}
                      >
                        Save Test Result
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              {/* Results Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Calculation Results</CardTitle>
                  <CardDescription>
                    Water activity calculation and interpretation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {calculatedWaterActivity === null ? (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <div className="rounded-full bg-secondary p-6 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium mb-2">No Calculation Yet</h3>
                      <p className="text-muted-foreground">
                        Enter the relative humidity and temperature readings from your WAMETER device,
                        then click "Calculate Water Activity"
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Water Activity</h3>
                        <div className={`text-5xl font-bold mb-4 ${
                          resultStatus === 'normal' ? 'text-green-600' : 
                          resultStatus === 'warning' ? 'text-amber-500' : 
                          'text-red-600'
                        }`}>
                          {calculatedWaterActivity}
                        </div>
                        <StatusBadge status={resultStatus || 'normal'} className="text-sm py-1 px-4" />
                      </div>
                      
                      <div className="bg-secondary p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Interpretation:</h4>
                        {resultStatus === 'normal' && (
                          <p className="text-sm">
                            This water activity reading is <span className="font-medium text-green-600">NORMAL</span> and within 
                            safe limits. The product is unlikely to support microbial growth.
                          </p>
                        )}
                        {resultStatus === 'warning' && (
                          <p className="text-sm">
                            This water activity reading is in the <span className="font-medium text-amber-500">WARNING</span> range 
                            (above 0.54). Some microorganisms may be able to grow at this level. 
                            Consider additional testing or processing.
                          </p>
                        )}
                        {resultStatus === 'critical' && (
                          <p className="text-sm">
                            This water activity reading is <span className="font-medium text-red-600">CRITICAL</span> and exceeds 
                            safe limits (above 0.60). Most microorganisms can grow at this level, 
                            including some pathogens. Immediate action is recommended.
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Calculation Formula:</h4>
                        <code className="bg-muted p-2 block rounded text-sm">
                          Aw = 0.015 × RH - 0.065 × T + Type + 1.3
                        </code>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Where:</p>
                            <p className="text-sm">RH = {relativeHumidity}%</p>
                            <p className="text-sm">T = {temperature}°C</p>
                            <p className="text-sm">Type = {processType}</p>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <p className="text-xs text-muted-foreground">Process Value:</p>
                            <p className="text-sm">
                              {processType === ProcessType.Centrifugation && "0.023 (Centrifugation)"}
                              {processType === ProcessType.Expeller && "-0.0054 (Expeller)"}
                              {processType === ProcessType.NaturalFermentation && "-0.019 (Natural Fermentation)"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <div className="text-xs text-center text-muted-foreground">
                    <p>Water Activity Thresholds</p>
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-green-600"></span>
                        <span>Normal: &lt;0.54</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span>Warning: 0.54-0.60</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-red-600"></span>
                        <span>Critical: &gt;0.60</span>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Test History</CardTitle>
                <CardDescription>
                  Recent water activity test results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">Date</th>
                        <th className="text-left py-3 px-2 font-medium">Product</th>
                        <th className="text-left py-3 px-2 font-medium">Batch</th>
                        <th className="text-left py-3 px-2 font-medium">RH%</th>
                        <th className="text-left py-3 px-2 font-medium">Temp °C</th>
                        <th className="text-left py-3 px-2 font-medium">Process</th>
                        <th className="text-left py-3 px-2 font-medium">Water Activity</th>
                        <th className="text-left py-3 px-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockTestResults
                        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                        .slice(0, 10)
                        .map((test) => {
                          const product = mockProducts.find(p => p.id === test.productId);
                          return (
                            <tr key={test.id} className="border-b hover:bg-muted/50">
                              <td className="py-3 px-2">{test.createdAt.toLocaleDateString()}</td>
                              <td className="py-3 px-2">{product?.name || 'Unknown'}</td>
                              <td className="py-3 px-2">{test.batchId || 'N/A'}</td>
                              <td className="py-3 px-2">{test.relativeHumidity}%</td>
                              <td className="py-3 px-2">{test.temperature}°C</td>
                              <td className="py-3 px-2">
                                {test.processType === ProcessType.Centrifugation && 'Centrifugation'}
                                {test.processType === ProcessType.Expeller && 'Expeller'}
                                {test.processType === ProcessType.NaturalFermentation && 'Natural'}
                              </td>
                              <td className="py-3 px-2 font-medium">
                                <span className={
                                  test.status === 'normal' ? 'text-green-600' :
                                  test.status === 'warning' ? 'text-amber-500' :
                                  'text-red-600'
                                }>
                                  {test.waterActivity}
                                </span>
                              </td>
                              <td className="py-3 px-2">
                                <StatusBadge status={test.status} />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex justify-center w-full">
                  <Button variant="outline" onClick={() => navigate('/reports')}>
                    View Full Reports
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TestDataEntry;
