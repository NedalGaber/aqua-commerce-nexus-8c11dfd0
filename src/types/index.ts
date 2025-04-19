
// Define types for the e-commerce app

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  subCategory?: string;
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  rating?: number;
  reviews?: Review[];
  specifications?: Record<string, string>;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  sku: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  subcategories?: Category[];
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "customer" | "delivery" | "warehouse" | "employee";
  permissions?: string[];
  addresses?: Address[];
  phone?: string;
  avatar?: string;
  createdAt: string;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: Address;
  status: OrderStatus;
  paymentMethod: string;
  paymentStatus: "pending" | "completed" | "failed" | "refunded";
  shippingMethod: string;
  shippingCost: number;
  tax: number;
  discount?: number;
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export type OrderStatus = 
  | "pending" 
  | "processing" 
  | "shipped" 
  | "delivered" 
  | "cancelled" 
  | "returned";

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
  options?: Record<string, string>;
}

export interface CartItem extends OrderItem {
  id: string;
}

export interface Warehouse {
  id: string;
  name: string;
  address: Address;
  capacity: number;
  currentOccupancy: number;
  managers: string[];
}

export interface Vendor {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: Address;
  products: string[];
  rating: number;
  status: "active" | "inactive";
}

export interface ReturnRequest {
  id: string;
  orderId: string;
  userId: string;
  items: OrderItem[];
  reason: string;
  status: "pending" | "approved" | "rejected" | "completed";
  createdAt: string;
  updatedAt: string;
}

export interface InventoryItem {
  productId: string;
  warehouseId: string;
  quantity: number;
  location: string;
  minimumStockLevel: number;
  lastRestocked: string;
}

export interface SalesData {
  date: string;
  revenue: number;
  profit: number;
  orders: number;
  averageOrderValue: number;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
  description: string;
}
