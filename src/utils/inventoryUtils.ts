
/**
 * Utility functions for inventory management
 */

/**
 * Calculate inventory turnover rate
 * @param cogs Cost of goods sold
 * @param avgInventory Average inventory value
 */
export const calculateTurnoverRate = (
  cogs: number,
  avgInventory: number
): number => {
  if (avgInventory === 0) return 0;
  return cogs / avgInventory;
};

/**
 * Calculate days to sell inventory
 * @param turnoverRate Inventory turnover rate
 */
export const calculateDaysToSell = (turnoverRate: number): number => {
  if (turnoverRate === 0) return 0;
  return Math.round(365 / turnoverRate);
};

/**
 * Check if item is at low stock level
 * @param currentStock Current stock level
 * @param threshold Low stock threshold
 */
export const isLowStock = (currentStock: number, threshold: number): boolean => {
  return currentStock <= threshold && currentStock > 0;
};

/**
 * Check if item is out of stock
 * @param currentStock Current stock level
 */
export const isOutOfStock = (currentStock: number): boolean => {
  return currentStock <= 0;
};

/**
 * Generate stock status
 * @param currentStock Current stock level
 * @param threshold Low stock threshold
 */
export const getStockStatus = (
  currentStock: number,
  threshold: number
): "in_stock" | "low_stock" | "out_of_stock" => {
  if (currentStock <= 0) return "out_of_stock";
  if (currentStock <= threshold) return "low_stock";
  return "in_stock";
};

/**
 * Format currency value
 * @param value Numeric value
 * @param currency Currency code
 */
export const formatCurrency = (
  value: number,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
};

/**
 * Calculate estimated lost sales due to stockouts
 * @param dailyAvgSales Average daily sales
 * @param stockoutDays Number of days out of stock
 */
export const calculateLostSales = (
  dailyAvgSales: number,
  stockoutDays: number
): number => {
  return dailyAvgSales * stockoutDays;
};

/**
 * Calculate inventory health score (0-100)
 * Based on turnover rate, stockouts, and other factors
 * @param turnoverRate Inventory turnover rate
 * @param stockoutRate Percentage of time items are out of stock
 * @param slowMovingPercentage Percentage of inventory that is slow-moving
 */
export const calculateInventoryHealthScore = (
  turnoverRate: number,
  stockoutRate: number,
  slowMovingPercentage: number
): number => {
  // Normalize turnover rate (higher is better, max score of 40)
  const turnoverScore = Math.min(turnoverRate * 4, 40);
  
  // Stockout rate (lower is better, max score of 30)
  const stockoutScore = Math.max(30 - stockoutRate * 100, 0);
  
  // Slow-moving inventory (lower is better, max score of 30)
  const slowMovingScore = Math.max(30 - slowMovingPercentage * 60, 0);
  
  // Calculate total score (0-100)
  const totalScore = turnoverScore + stockoutScore + slowMovingScore;
  
  return Math.round(totalScore);
};

/**
 * Types
 */
export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  threshold: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
  location: string;
  supplier: string;
  batchNumber?: string;
  category: string;
  lastUpdated: string;
}

export interface InventoryAdjustment {
  productId: string;
  quantity: number;
  type: "add" | "remove" | "set";
  reason: string;
  location: string;
  timestamp: string;
  userId: string;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  status: "active" | "pending" | "inactive";
}

export interface PurchaseOrder {
  id: string;
  vendorId: string;
  vendorName: string;
  date: string;
  status: "pending" | "received" | "cancelled";
  items: PurchaseOrderItem[];
  total: number;
}

export interface PurchaseOrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface ReturnRequest {
  id: string;
  orderId: string;
  customer: string;
  email: string;
  date: string;
  status: "pending" | "approved" | "completed" | "rejected";
  items: ReturnItem[];
  totalAmount: number;
}

export interface ReturnItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  reason: string;
  condition: "unopened" | "opened" | "damaged" | "used";
}
