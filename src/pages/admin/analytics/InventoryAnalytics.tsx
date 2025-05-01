
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart2, TrendingUp, ArrowUp, ArrowDown, PackageCheck, PackageOpen, AlertTriangle, Download, Calendar } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Mock inventory turnover data
const inventoryTurnover = [
  { category: "Smartphones", turnoverRate: 12.3, avgDaysToSell: 30, value: 245680, trend: "increasing" },
  { category: "Laptops", turnoverRate: 8.7, avgDaysToSell: 42, value: 352450, trend: "stable" },
  { category: "TVs", turnoverRate: 6.5, avgDaysToSell: 56, value: 289720, trend: "increasing" },
  { category: "Audio", turnoverRate: 9.2, avgDaysToSell: 40, value: 158630, trend: "decreasing" },
  { category: "Accessories", turnoverRate: 15.8, avgDaysToSell: 23, value: 76520, trend: "increasing" },
  { category: "Gaming", turnoverRate: 11.5, avgDaysToSell: 32, value: 198450, trend: "stable" },
  { category: "Cameras", turnoverRate: 5.2, avgDaysToSell: 70, value: 126780, trend: "decreasing" },
];

// Mock inventory metrics history
const inventoryHistory = [
  { month: "May 2024", totalValue: 1448230, itemCount: 1245, turnoverRate: 9.8, stockoutsCount: 5 },
  { month: "Apr 2024", totalValue: 1387650, itemCount: 1187, turnoverRate: 9.5, stockoutsCount: 8 },
  { month: "Mar 2024", totalValue: 1425780, itemCount: 1256, turnoverRate: 9.6, stockoutsCount: 6 },
  { month: "Feb 2024", totalValue: 1378920, itemCount: 1165, turnoverRate: 9.3, stockoutsCount: 10 },
  { month: "Jan 2024", totalValue: 1398450, itemCount: 1198, turnoverRate: 9.4, stockoutsCount: 7 },
  { month: "Dec 2023", totalValue: 1587650, itemCount: 1342, turnoverRate: 10.2, stockoutsCount: 3 },
];

// Mock slowest moving inventory
const slowestMovingItems = [
  { name: "Professional Camera Drone", sku: "DRONE-PRO", category: "Cameras", daysInStock: 120, value: 1299.99, stockLevel: 8 },
  { name: "8K Ultra HD Projector", sku: "PROJ-8K", category: "Home Theater", daysInStock: 95, value: 2499.99, stockLevel: 4 },
  { name: "Premium DSLR Camera", sku: "DSLR-PRO", category: "Cameras", daysInStock: 85, value: 1899.99, stockLevel: 6 },
  { name: "Smart Home Security System", sku: "SHSS-PRO", category: "Smart Home", daysInStock: 78, value: 499.99, stockLevel: 12 },
  { name: "High-End Gaming Desktop", sku: "GAME-PC", category: "Computers", daysInStock: 72, value: 2799.99, stockLevel: 3 },
];

// Mock stockouts data
const stockouts = [
  { name: "Smartphone XYZ Pro 128GB", sku: "SP-XYZ-128", category: "Smartphones", stockoutDays: 12, revenue: 3599.97, lostSales: "~9 units" },
  { name: "Wireless Earbuds Pro V2", sku: "EARBUDS-2", category: "Audio", stockoutDays: 8, revenue: 1599.92, lostSales: "~16 units" },
  { name: "Latest Gaming Console", sku: "GAME-CON-5", category: "Gaming", stockoutDays: 15, revenue: 4999.80, lostSales: "~10 units" },
  { name: "Ultra Thin Laptop 13\"", sku: "LT-THIN-13", category: "Laptops", stockoutDays: 5, revenue: 5999.95, lostSales: "~6 units" },
  { name: "Smart Watch Series X", sku: "SWATCH-X", category: "Wearables", stockoutDays: 7, revenue: 1799.93, lostSales: "~12 units" },
];

const InventoryAnalytics = () => {
  const [timeRange, setTimeRange] = useState("6months");
  const [activeTab, setActiveTab] = useState("overview");

  // Calculate aggregated metrics for current month
  const currentMonth = inventoryHistory[0];
  const previousMonth = inventoryHistory[1];
  
  // Calculate changes/growth
  const valueChange = ((currentMonth.totalValue - previousMonth.totalValue) / previousMonth.totalValue) * 100;
  const turnoverChange = ((currentMonth.turnoverRate - previousMonth.turnoverRate) / previousMonth.turnoverRate) * 100;
  const stockoutsChange = ((currentMonth.stockoutsCount - previousMonth.stockoutsCount) / previousMonth.stockoutsCount) * 100;
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Inventory Analytics</h1>
          <div className="flex gap-2">
            <Select defaultValue="6months" onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Custom Range
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>
        
        {/* Inventory metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Total Inventory Value</div>
                <PackageCheck className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">${(currentMonth.totalValue / 1000000).toFixed(2)}M</div>
              <div className="flex items-center mt-1">
                <div className={`text-xs ${valueChange >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                  {valueChange >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {Math.abs(valueChange).toFixed(1)}% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Inventory Turnover Rate</div>
                <TrendingUp className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">{currentMonth.turnoverRate.toFixed(1)}</div>
              <div className="flex items-center mt-1">
                <div className={`text-xs ${turnoverChange >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                  {turnoverChange >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {Math.abs(turnoverChange).toFixed(1)}% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Total Products</div>
                <PackageCheck className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">{currentMonth.itemCount.toLocaleString()}</div>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  4.9% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Stockouts This Month</div>
                <AlertTriangle className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">{currentMonth.stockoutsCount}</div>
              <div className="flex items-center mt-1">
                <div className={`text-xs ${stockoutsChange >= 0 ? 'text-red-600' : 'text-green-600'} flex items-center`}>
                  {stockoutsChange >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {Math.abs(stockoutsChange).toFixed(1)}% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Inventory analytics tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Performance</CardTitle>
            <CardDescription>
              Analysis of inventory metrics and trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="turnover">Turnover Analysis</TabsTrigger>
                <TabsTrigger value="slow-moving">Slow Moving</TabsTrigger>
                <TabsTrigger value="stockouts">Stockouts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Value Trend</CardTitle>
                      <CardDescription>Changes in inventory value over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Chart visualization would be displayed here showing inventory value trends
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Month</TableHead>
                        <TableHead>Total Value</TableHead>
                        <TableHead>Item Count</TableHead>
                        <TableHead>Turnover Rate</TableHead>
                        <TableHead>Stockouts</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inventoryHistory.map((period, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{period.month}</TableCell>
                          <TableCell>${period.totalValue.toLocaleString()}</TableCell>
                          <TableCell>{period.itemCount.toLocaleString()}</TableCell>
                          <TableCell>{period.turnoverRate.toFixed(1)}</TableCell>
                          <TableCell>{period.stockoutsCount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="turnover">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Turnover Rate by Category</CardTitle>
                      <CardDescription>How quickly inventory sells through by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Bar chart visualization would be displayed here showing turnover rates
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Average Days to Sell</CardTitle>
                      <CardDescription>Average time inventory sits before selling</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Turnover Rate</TableHead>
                            <TableHead>Avg. Days to Sell</TableHead>
                            <TableHead>Trend</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inventoryTurnover.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{item.category}</TableCell>
                              <TableCell>{item.turnoverRate.toFixed(1)}</TableCell>
                              <TableCell>{item.avgDaysToSell}</TableCell>
                              <TableCell>
                                {item.trend === "increasing" && (
                                  <Badge className="bg-green-100 text-green-800">Improving</Badge>
                                )}
                                {item.trend === "stable" && (
                                  <Badge className="bg-blue-100 text-blue-800">Stable</Badge>
                                )}
                                {item.trend === "decreasing" && (
                                  <Badge className="bg-amber-100 text-amber-800">Slowing</Badge>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Inventory Efficiency</CardTitle>
                      <CardDescription>Value to turnover ratio analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Scatter plot visualization would be displayed here showing inventory value vs. turnover
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="slow-moving">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Slow Moving Inventory</CardTitle>
                      <CardDescription>Products that have been in stock for extended periods</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Days in Stock</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Current Stock</TableHead>
                            <TableHead>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {slowestMovingItems.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{item.name}</div>
                                  <div className="text-xs text-gray-500">{item.sku}</div>
                                </div>
                              </TableCell>
                              <TableCell>{item.category}</TableCell>
                              <TableCell className="text-amber-600 font-medium">{item.daysInStock}</TableCell>
                              <TableCell>${item.value.toLocaleString()}</TableCell>
                              <TableCell>{item.stockLevel}</TableCell>
                              <TableCell>
                                <Button variant="outline" size="sm">Recommend Action</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Slow Moving Recommendations</CardTitle>
                      <CardDescription>Suggested actions to optimize slow moving inventory</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Bundle with Fast Movers</h3>
                          <p className="text-sm text-gray-600">
                            Create product bundles that pair slow-moving items with popular products to increase their movement.
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Special Promotions</h3>
                          <p className="text-sm text-gray-600">
                            Run limited-time discounts or promotions specifically targeting slow-moving inventory.
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Supplier Returns</h3>
                          <p className="text-sm text-gray-600">
                            For items over 90 days, check if supplier return agreements can be leveraged.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="stockouts">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Stockout Impact Analysis</CardTitle>
                      <CardDescription>Revenue impact of stockout events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Chart visualization would be displayed here showing stockout trends and impact
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Days Out of Stock</TableHead>
                        <TableHead>Est. Lost Revenue</TableHead>
                        <TableHead>Est. Lost Sales</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stockouts.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.sku}</div>
                            </div>
                          </TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell>{item.stockoutDays}</TableCell>
                          <TableCell className="text-red-600 font-medium">${item.revenue.toLocaleString()}</TableCell>
                          <TableCell>{item.lostSales}</TableCell>
                          <TableCell>
                            {item.stockoutDays > 10 ? (
                              <Badge className="bg-red-100 text-red-800">Critical</Badge>
                            ) : (
                              <Badge className="bg-amber-100 text-amber-800">Attention Needed</Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default InventoryAnalytics;
