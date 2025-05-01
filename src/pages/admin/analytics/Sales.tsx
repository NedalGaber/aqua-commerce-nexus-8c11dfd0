
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart2, ArrowUp, ArrowDown, DollarSign, TrendingUp, ShoppingCart, Calendar, Download } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Mock sales data by period
const salesByPeriod = [
  { month: "May 2024", revenue: 325980.45, orders: 1243, conversion: 3.7, growth: 9.1 },
  { month: "Apr 2024", revenue: 298750.30, orders: 1156, conversion: 3.5, growth: 7.4 },
  { month: "Mar 2024", revenue: 312450.75, orders: 1187, conversion: 3.6, growth: 10.2 },
  { month: "Feb 2024", revenue: 278650.40, orders: 1052, conversion: 3.3, growth: 5.8 },
  { month: "Jan 2024", revenue: 289540.65, orders: 1124, conversion: 3.4, growth: 8.7 },
  { month: "Dec 2023", revenue: 389760.25, orders: 1578, conversion: 4.2, growth: 15.3 },
];

// Mock best-selling products data
const bestSellingProducts = [
  { name: "iPhone 15 Pro 256GB", category: "Smartphones", revenue: 89450.55, units: 82, growth: 23.5 },
  { name: "Samsung 65\" QLED 4K Smart TV", category: "TVs", revenue: 78320.25, units: 56, growth: 15.2 },
  { name: "Apple MacBook Pro 16\" M2", category: "Laptops", revenue: 75650.75, units: 27, growth: 18.7 },
  { name: "Sony WH-1000XM4 Headphones", category: "Audio", revenue: 28760.50, units: 82, growth: 30.5 },
  { name: "PlayStation 5 Digital Edition", category: "Gaming", revenue: 27990.30, units: 70, growth: 25.8 },
];

// Mock sales by channel
const salesByChannel = [
  { channel: "Website", revenue: 845760.35, percentage: 52.3, growth: 18.5 },
  { channel: "Mobile App", revenue: 456320.25, percentage: 28.2, growth: 32.7 },
  { channel: "Marketplace", revenue: 234560.45, percentage: 14.5, growth: 8.3 },
  { channel: "Physical Store", revenue: 78950.75, percentage: 4.9, growth: -3.5 },
  { channel: "B2B Sales", revenue: 3450.20, percentage: 0.2, growth: 5.2 },
];

// Mock sales by region
const salesByRegion = [
  { region: "North America", revenue: 920450.35, percentage: 56.9, growth: 15.7 },
  { region: "Europe", revenue: 356780.25, percentage: 22.1, growth: 12.3 },
  { region: "Asia Pacific", revenue: 256430.45, percentage: 15.9, growth: 28.5 },
  { region: "Latin America", revenue: 59870.75, percentage: 3.7, growth: 18.9 },
  { region: "Africa & Middle East", revenue: 23510.20, percentage: 1.5, growth: 35.2 },
];

const Sales = () => {
  const [timeRange, setTimeRange] = useState("6months");
  const [activeTab, setActiveTab] = useState("overview");
  
  // Calculate aggregated metrics
  const totalRevenue = salesByPeriod.reduce((acc, period) => acc + period.revenue, 0);
  const totalOrders = salesByPeriod.reduce((acc, period) => acc + period.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;
  
  // Get latest month metrics for comparison calculations
  const latestMonth = salesByPeriod[0];
  const previousMonth = salesByPeriod[1];
  
  // Calculate growth percentages
  const revenueGrowth = ((latestMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100;
  const ordersGrowth = ((latestMonth.orders - previousMonth.orders) / previousMonth.orders) * 100;
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sales Analytics</h1>
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
        
        {/* Sales metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Total Revenue</div>
                <DollarSign className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">${(totalRevenue / 1000).toFixed(1)}k</div>
              <div className="flex items-center mt-1">
                <div className={`text-xs ${revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                  {revenueGrowth >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {Math.abs(revenueGrowth).toFixed(1)}% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Total Orders</div>
                <ShoppingCart className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">{latestMonth.orders.toLocaleString()}</div>
              <div className="flex items-center mt-1">
                <div className={`text-xs ${ordersGrowth >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                  {ordersGrowth >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {Math.abs(ordersGrowth).toFixed(1)}% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Avg. Order Value</div>
                <BarChart2 className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">${avgOrderValue.toFixed(2)}</div>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  2.5% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-gray-500">Conversion Rate</div>
                <TrendingUp className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">{latestMonth.conversion}%</div>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 flex items-center">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  0.2% vs. last month
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Sales analytics tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
            <CardDescription>
              Detailed analysis of sales performance across different dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="products">Top Products</TabsTrigger>
                <TabsTrigger value="channels">Sales Channels</TabsTrigger>
                <TabsTrigger value="regional">Regional Sales</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Performance</CardTitle>
                      <CardDescription>Sales trends over the selected period</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Chart visualization would be displayed here showing monthly revenue and orders
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Period</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Orders</TableHead>
                          <TableHead>Conversion Rate</TableHead>
                          <TableHead>Growth</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {salesByPeriod.map((period, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{period.month}</TableCell>
                            <TableCell>${period.revenue.toLocaleString()}</TableCell>
                            <TableCell>{period.orders.toLocaleString()}</TableCell>
                            <TableCell>{period.conversion}%</TableCell>
                            <TableCell>
                              <div className={`flex items-center ${period.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {period.growth >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                                {Math.abs(period.growth).toFixed(1)}%
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="products">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Best Selling Products</CardTitle>
                      <CardDescription>Top performing products by revenue</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Chart visualization would be displayed here showing top products by revenue
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Units Sold</TableHead>
                          <TableHead>Growth</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bestSellingProducts.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>${product.revenue.toLocaleString()}</TableCell>
                            <TableCell>{product.units.toLocaleString()}</TableCell>
                            <TableCell>
                              <div className={`flex items-center ${product.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {product.growth >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                                {Math.abs(product.growth).toFixed(1)}%
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="channels">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales by Channel</CardTitle>
                      <CardDescription>Revenue distribution across sales channels</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Pie chart visualization would be displayed here showing sales by channel
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Channel Performance</CardTitle>
                      <CardDescription>Revenue and growth by sales channel</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Channel</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>% of Total</TableHead>
                            <TableHead>Growth</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {salesByChannel.map((channel, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{channel.channel}</TableCell>
                              <TableCell>${channel.revenue.toLocaleString()}</TableCell>
                              <TableCell>{channel.percentage}%</TableCell>
                              <TableCell>
                                <div className={`flex items-center ${channel.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {channel.growth >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                                  {Math.abs(channel.growth).toFixed(1)}%
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Channel Trend Analysis</CardTitle>
                      <CardDescription>Performance trends by sales channel over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Line chart visualization would be displayed here showing channel performance over time
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="regional">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales by Region</CardTitle>
                      <CardDescription>Revenue distribution across regions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Map visualization would be displayed here showing sales by region
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Regional Performance</CardTitle>
                      <CardDescription>Revenue and growth by region</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Region</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>% of Total</TableHead>
                            <TableHead>Growth</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {salesByRegion.map((region, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{region.region}</TableCell>
                              <TableCell>${region.revenue.toLocaleString()}</TableCell>
                              <TableCell>{region.percentage}%</TableCell>
                              <TableCell>
                                <div className={`flex items-center ${region.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {region.growth >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                                  {Math.abs(region.growth).toFixed(1)}%
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Top Performing Markets</CardTitle>
                      <CardDescription>Highest revenue cities and countries</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Bar chart visualization would be displayed here showing top markets
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

export default Sales;
