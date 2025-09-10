
import { User, UserRole, Company, Product, TestResult, ProcessType, calculateWaterActivity, getTestResultStatus } from "../types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@exceltra.com",
    role: UserRole.Admin,
    companyId: "c1",
    createdAt: new Date("2023-01-15")
  },
  {
    id: "u2",
    name: "Maria Santos",
    email: "maria@exceltra.com",
    role: UserRole.Technician,
    companyId: "c1",
    createdAt: new Date("2023-02-20")
  },
  {
    id: "u3",
    name: "Robert Chen",
    email: "robert@exceltra.com",
    role: UserRole.Manager,
    companyId: "c1",
    createdAt: new Date("2023-03-10")
  }
];

// Mock Companies
export const mockCompanies: Company[] = [
  {
    id: "c1",
    name: "Exceltra",
    industry: "Food Manufacturing",
    subscription: "premium",
    address: "Cebu City, Philippines",
    createdAt: new Date("2022-12-01")
  }
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Premium Coconut Flakes",
    description: "Organic dried coconut flakes for export",
    companyId: "c1",
    targetWaMin: 0.35,
    targetWaMax: 0.52,
    createdAt: new Date("2023-01-20")
  },
  {
    id: "p2",
    name: "Virgin Coconut Oil",
    description: "Cold-pressed virgin coconut oil",
    companyId: "c1",
    targetWaMin: 0.20,
    targetWaMax: 0.45,
    createdAt: new Date("2023-02-15")
  },
  {
    id: "p3",
    name: "Banana Chips",
    description: "Fried banana chips for export",
    companyId: "c1",
    targetWaMin: 0.30,
    targetWaMax: 0.50,
    createdAt: new Date("2023-03-05")
  },
  {
    id: "p4",
    name: "Dried Mangoes",
    description: "Preservative-free dried mango slices",
    companyId: "c1",
    targetWaMin: 0.45,
    targetWaMax: 0.55,
    createdAt: new Date("2023-04-10")
  }
];

// Generate some realistic mock test results
const generateMockTestResults = (): TestResult[] => {
  const results: TestResult[] = [];
  const now = new Date();
  const daysToSubtract = [0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25, 30];
  
  // For each product, generate some test results
  mockProducts.forEach(product => {
    daysToSubtract.forEach(days => {
      const date = new Date();
      date.setDate(now.getDate() - days);
      
      // Random values but with some realistic constraints
      const relativeHumidity = Math.round((30 + Math.random() * 40) * 10) / 10; // Between 30-70%
      const temperature = Math.round((20 + Math.random() * 15) * 10) / 10; // Between 20-35°C
      
      // Select a random process type
      const processTypes = Object.values(ProcessType);
      const processType = processTypes[Math.floor(Math.random() * processTypes.length)];
      
      // Calculate water activity
      const waterActivity = calculateWaterActivity(relativeHumidity, temperature, processType);
      
      // Determine status
      const status = getTestResultStatus(waterActivity);
      
      // Create test result
      results.push({
        id: `tr-${product.id}-${date.getTime()}`,
        productId: product.id,
        relativeHumidity,
        temperature,
        processType,
        waterActivity,
        technicianId: "u2", // Assign to the technician
        batchId: `B-${Math.floor(Math.random() * 1000)}-${date.getMonth()+1}`,
        createdAt: date,
        status,
        notes: ""
      });
    });
  });
  
  return results;
};

// Mock Test Results
export const mockTestResults: TestResult[] = generateMockTestResults();

// Helper function to get test results for a specific product
export const getTestResultsByProduct = (productId: string): TestResult[] => {
  return mockTestResults.filter(result => result.productId === productId);
};

// Helper function to get test results for the dashboard
export const getDashboardData = () => {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(now);
  startOfWeek.setDate(startOfWeek.getDate() - now.getDay());
  
  const recentTests = mockTestResults
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 5);
  
  const testsToday = mockTestResults.filter(
    test => test.createdAt >= startOfToday
  ).length;
  
  const testsThisWeek = mockTestResults.filter(
    test => test.createdAt >= startOfWeek
  ).length;
  
  const criticalResults = mockTestResults.filter(
    test => test.status === "critical"
  ).length;
  
  const warningResults = mockTestResults.filter(
    test => test.status === "warning"
  ).length;
  
  // Get unique products that have been tested
  const uniqueTestedProducts = new Set(mockTestResults.map(test => test.productId));
  const productsTested = uniqueTestedProducts.size;
  
  return {
    recentTests,
    testsToday,
    testsThisWeek,
    criticalResults,
    warningResults,
    productsTested
  };
};

// Helper function to get a product by ID
export const getProductById = (productId: string): Product | undefined => {
  return mockProducts.find(product => product.id === productId);
};
