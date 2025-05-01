
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BarChart2, Calendar, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for top selling products
const topSellingProducts = [
  { 
    id: "PROD-1001", 
    name: "iPhone 15 Pro 256GB", 
    category: "Smartphones",
    unitsSold: 247,
    revenue: 271699.53,
    profitMargin: 28.5,
    avgRating: 4.8
  },
  { 
    id: "PROD-1004", 
    name: "Samsung 65\" QLED 4K Smart TV", 
    category: "TVs",
    unitsSold: 153,
    revenue: 198898.47,
    profitMargin: 22.3,
    avgRating: 4.7
  },
  { 
    id: "PROD-1002", 
    name: "Apple MacBook Pro 16\" M2 Pro", 
    category: "Laptops",
    unitsSold: 128,
    revenue: 319998.72,
    profitMargin: 25.7,
    avgRating: 4.9
  },
  { 
    id: "PROD-1006", 
    name: "Sony WH-1000XM4 Wireless Headphones", 
    category: "Audio",
    unitsSold: 116,
    revenue: 40598.84,
    profitMargin: 32.1,
    avgRating: 4.8
  },
  { 
    id: "PROD-1008", 
    name: "PlayStation 5 Digital Edition", 
    category: "Gaming",
    unitsSold: 102,
    revenue: 40798.98,
    profitMargin: 18.5,
    avgRating: 4.9
  },
];

// Mock data for revenue by category
const revenueByCategory = [
  { category: "Laptops", revenue: 589750.25, growth: 18.5 },
  { category: "Smartphones", revenue: 427350.75, growth: 22.3 },
  { category: "TVs", revenue: 312480.50, growth: 15.2 },
  { category: "Audio", revenue: 186320.30, growth: 28.7 },
  { category: "Gaming", revenue: 154780.90, growth: 32.5 },
  { category: "Cameras", revenue: 98650.45, growth: 12.8 },
  { category: "Accessories", revenue: 76430.20, growth: 24.3 },
];

// Mock data for inventory value
const inventoryValue = [
  { category: "Laptops", value: 245680.50, itemCount: 124 },
  { category: "Smartphones", value: 187450.75, itemCount: 156 },
  { category: "TVs", value: 176320.30, itemCount: 78 },
  { category: "Audio", value: 98760.25, itemCount: 215 },
  { category: "Gaming", value: 87650.40, itemCount: 102 },
  { category: "Cameras", value: 76540.35, itemCount: 45 },
  { category: "Accessories", value: 34520.15, itemCount: 324 },
];

// Mock data for revenue periods
const revenuePeriods = [
  { period: "May 2024", revenue: 325980.45, orders: 1243, averageOrder: 262.25 },
  { period: "Apr 2024", revenue: 298750.30, orders: 1156, averageOrder: 258.43 },
  { period: "Mar 2024", revenue: 312450.75, orders: 1187, averageOrder: 263.23 },
  { period: "Feb 2024", revenue: 278650.40, orders: 1052, averageOrder: 264.88 },
  { period: "Jan 2024", revenue: 289540.65, orders: 1124, averageOrder: 257.60 },
  { period: "Dec 2023", revenue: 389760.25, orders: 1578, averageOrder: 246.99 },
];

const Reports = () => {
  const [reportType, setReportType] = useState("sales");
  const [periodFilter, setPeriodFilter] = useState("month");
  const [dateRange, setDateRange] = useState({ start: "2024-05-01", end: "2024-05-31" });

  // Total revenue calculation
  const totalRevenue = revenuePeriods.reduce((acc, curr) => acc + curr.revenue, 0);
  // Total inventory value calculation
  const totalInventoryValue = inventoryValue.reduce((acc, curr) => acc + curr.value, 0);
  // Average order value
  const averageOrderValue = revenuePeriods.reduce((acc, curr) => acc + curr.averageOrder, 0) / revenuePeriods.length;
  // Total orders
  const totalOrders = revenuePeriods.reduce((acc, curr) => acc + curr.orders, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Business Reports</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Custom Period
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Report metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-2xl font-bold">${(totalRevenue / 1000000).toFixed(2)}M</p>
                <p className="text-xs text-green-600">↑ 12.5% vs last period</p>
              </div>
              <BarChart2 className="h-8 w-8 text-green-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-2xl font-bold">{totalOrders.toLocaleString()}</p>
                <p className="text-xs text-green-600">↑ 8.3% vs last period</p>
              </div>
              <FileText className="h-8 w-8 text-blue-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Average Order Value</p>
                <p className="text-2xl font-bold">${averageOrderValue.toFixed(2)}</p>
                <p className="text-xs text-green-600">↑ 3.8% vs last period</p>
              </div>
              <FileText className="h-8 w-8 text-purple-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Inventory Value</p>
                <p className="text-2xl font-bold">${(totalInventoryValue / 1000000).toFixed(2)}M</p>
                <p className="text-xs text-amber-600">↑ 5.2% vs last period</p>
              </div>
              <BarChart2 className="h-8 w-8 text-amber-400" />
            </CardContent>
          </Card>
        </div>
        
        {/* Report type selector */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Select defaultValue="month" onValueChange={setPeriodFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Daily</SelectItem>
                <SelectItem value="week">Weekly</SelectItem>
                <SelectItem value="month">Monthly</SelectItem>
                <SelectItem value="quarter">Quarterly</SelectItem>
                <SelectItem value="year">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            />
            <span className="flex items-center text-gray-500">to</span>
            <Input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            />
          </div>
        </div>
        
        {/* Reports tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Reports Dashboard</CardTitle>
            <CardDescription>
              Comprehensive view of your business performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sales" className="mb-6" onValueChange={setReportType}>
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
                <TabsTrigger value="profit">Profit Analysis</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sales">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue by Period</CardTitle>
                      <CardDescription>Monthly revenue and order trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Period</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>Orders</TableHead>
                            <TableHead>Avg Order Value</TableHead>
                            <TableHead>vs Prev. Period</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {revenuePeriods.map((period, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{period.period}</TableCell>
                              <TableCell>${period.revenue.toLocaleString()}</TableCell>
                              <TableCell>{period.orders.toLocaleString()}</TableCell>
                              <TableCell>${period.averageOrder.toFixed(2)}</TableCell>
                              <TableCell>
                                {index < revenuePeriods.length - 1 ? (
                                  <span className={`${period.revenue > revenuePeriods[index + 1].revenue ? 'text-green-600' : 'text-red-600'}`}>
                                    {period.revenue > revenuePeriods[index + 1].revenue ? '↑' : '↓'} 
                                    {Math.abs((period.revenue - revenuePeriods[index + 1].revenue) / revenuePeriods[index + 1].revenue * 100).toFixed(1)}%
                                  </span>
                                ) : (
                                  <span>-</span>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Revenue by Category</CardTitle>
                        <CardDescription>Sales breakdown by product category</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Category</TableHead>
                              <TableHead>Revenue</TableHead>
                              <TableHead>YoY Growth</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {revenueByCategory.map((category, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{category.category}</TableCell>
                                <TableCell>${category.revenue.toLocaleString()}</TableCell>
                                <TableCell className={category.growth > 0 ? 'text-green-600' : 'text-red-600'}>
                                  {category.growth > 0 ? '↑' : '↓'} {Math.abs(category.growth)}%
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Sales Trend Visualization</CardTitle>
                        <CardDescription>Revenue and orders over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 flex items-center justify-center text-gray-500">
                          Chart visualization would be displayed here
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="inventory">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Value by Category</CardTitle>
                      <CardDescription>Current inventory valuation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Items</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inventoryValue.map((category, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{category.category}</TableCell>
                              <TableCell>${category.value.toLocaleString()}</TableCell>
                              <TableCell>{category.itemCount}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Distribution</CardTitle>
                      <CardDescription>Value breakdown by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Pie chart visualization would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Low Stock Items</CardTitle>
                      <CardDescription>Products below reorder threshold</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Low stock items table would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="products">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Selling Products</CardTitle>
                    <CardDescription>Best performing products by units sold</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Units Sold</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Profit Margin</TableHead>
                          <TableHead>Rating</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {topSellingProducts.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div>
                                <div className="font-medium">{product.name}</div>
                                <div className="text-xs text-gray-500">{product.id}</div>
                              </div>
                            </TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.unitsSold.toLocaleString()}</TableCell>
                            <TableCell>${product.revenue.toLocaleString()}</TableCell>
                            <TableCell>{product.profitMargin}%</TableCell>
                            <TableCell>{product.avgRating}/5</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="customers">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Segments</CardTitle>
                      <CardDescription>Revenue by customer segment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Customer segment chart would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>New vs Returning</CardTitle>
                      <CardDescription>Customer acquisition vs retention</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        New vs returning customers chart would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Customer Lifetime Value</CardTitle>
                      <CardDescription>Average revenue generated over customer lifecycle</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        CLV trend chart would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="profit">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue vs. Cost Analysis</CardTitle>
                      <CardDescription>Monthly profit breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Revenue/cost/profit chart would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Profit Margins by Category</CardTitle>
                      <CardDescription>Category profitability analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Profit margin by category chart would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Cost Breakdown</CardTitle>
                      <CardDescription>Analysis of various cost factors</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Cost breakdown chart would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Reports;
