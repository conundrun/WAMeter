
export enum UserRole {
  Admin = "admin",
  Technician = "technician",
  Manager = "manager"
}

export enum ProcessType {
  Centrifugation = "centrifugation",
  Expeller = "expeller",
  NaturalFermentation = "naturalFermentation"
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyId: string;
  createdAt: Date;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  subscription: "basic" | "premium" | "enterprise";
  address?: string;
  logo?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  companyId: string;
  targetWaMin?: number;
  targetWaMax?: number;
  createdAt: Date;
}

export interface TestResult {
  id: string;
  productId: string;
  relativeHumidity: number;
  temperature: number;
  processType: ProcessType;
  waterActivity: number;
  notes?: string;
  technicianId: string;
  batchId?: string;
  createdAt: Date;
  status: "normal" | "warning" | "critical";
}

export interface Dashboard {
  recentTests: TestResult[];
  testsToday: number;
  testsThisWeek: number;
  criticalResults: number;
  warningResults: number;
  productsTested: number;
}

export const ProcessTypeValues = {
  [ProcessType.Centrifugation]: 0.023,
  [ProcessType.Expeller]: -0.0054,
  [ProcessType.NaturalFermentation]: -0.019
};

// Water activity thresholds
export const WA_WARNING_THRESHOLD = 0.54;
export const WA_CRITICAL_THRESHOLD = 0.60;

// Calculate water activity based on the formula: Predicted Aw = 0.015 RH - 0.065 T + Type + 1.3
export const calculateWaterActivity = (
  relativeHumidity: number,
  temperature: number,
  processType: ProcessType
): number => {
  const typeValue = ProcessTypeValues[processType];
  const wa = 0.015 * relativeHumidity - 0.065 * temperature + typeValue + 1.3;
  // Round to 3 decimal places
  return Math.round(wa * 1000) / 1000;
};

// Determine test result status based on water activity
export const getTestResultStatus = (waterActivity: number): "normal" | "warning" | "critical" => {
  if (waterActivity >= WA_CRITICAL_THRESHOLD) {
    return "critical";
  } else if (waterActivity >= WA_WARNING_THRESHOLD) {
    return "warning";
  } else {
    return "normal";
  }
};
