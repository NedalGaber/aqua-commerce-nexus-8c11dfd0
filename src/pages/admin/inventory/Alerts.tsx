
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Bell, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Mock data for low stock alerts
const lowStockAlerts = [
  {
    id: "PRD-1001",
    name: "Apple MacBook Pro 16\" M2 Pro",
    sku: "MBPM2-16",
    currentStock: 5,
    threshold: 10,
    category: "Laptops",
    status: "critical",
    lastUpdated: "2024-05-01",
  },
  {
    id: "PRD-1004",
    name: "iPhone 15 Pro 256GB",
    sku: "IP15P-256",
    currentStock: 8,
    threshold: 10,
    category: "Smartphones",
    status: "low",
    lastUpdated: "2024-04-29",
  },
  {
    id: "PRD-1006",
    name: "PlayStation 5 Digital Edition",
    sku: "PS5-DE",
    currentStock: 5,
    threshold: 8,
    category: "Gaming",
    status: "low",
    lastUpdated: "2024-04-27",
  },
  {
    id: "PRD-1010",
    name: "Samsung 65\" QLED 4K Smart TV",
    sku: "QLED65-4K",
    currentStock: 2,
    threshold: 5,
    category: "TVs",
    status: "critical",
    lastUpdated: "2024-05-01",
  },
  {
    id: "PRD-1012",
    name: "Bose QuietComfort 45 Headphones",
    sku: "BQC45",
    currentStock: 4,
    threshold: 7,
    category: "Audio",
    status: "low",
    lastUpdated: "2024-04-30",
  },
];

// Status colors for alerts
const alertStatusColors = {
  critical: "bg-red-100 text-red-800",
  low: "bg-amber-100 text-amber-800",
};

const Alerts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailAlertsEnabled, setEmailAlertsEnabled] = useState(true);

  // Filter alerts based on search and status
  const filteredAlerts = lowStockAlerts.filter(alert => {
    const matchesSearch = 
      alert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.sku.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === "all") return matchesSearch;
    return matchesSearch && alert.status === filterStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Inventory Alerts</h1>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Configure Alert Settings
          </Button>
        </div>

        {/* Alert metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Alerts</p>
                <p className="text-2xl font-bold">{lowStockAlerts.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-amber-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Critical Alerts</p>
                <p className="text-2xl font-bold">{lowStockAlerts.filter(a => a.status === "critical").length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Low Stock</p>
                <p className="text-2xl font-bold">{lowStockAlerts.filter(a => a.status === "low").length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-amber-400" />
            </CardContent>
          </Card>
        </div>

        {/* Alert notification settings */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Notification Settings</CardTitle>
            <CardDescription>Configure how you want to receive inventory alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="dashboard-notifications">Dashboard Notifications</Label>
                  <p className="text-sm text-gray-500">Show alerts in admin dashboard</p>
                </div>
                <Switch 
                  id="dashboard-notifications" 
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="email-alerts">Email Alerts</Label>
                  <p className="text-sm text-gray-500">Send alerts to admin email</p>
                </div>
                <Switch 
                  id="email-alerts" 
                  checked={emailAlertsEnabled}
                  onCheckedChange={setEmailAlertsEnabled}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts list */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
            <CardDescription>Products that are below their threshold levels</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select defaultValue="all" onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Alerts</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="low">Low Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Current Stock
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Threshold</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium">{alert.name}</TableCell>
                    <TableCell>{alert.sku}</TableCell>
                    <TableCell className="text-red-600 font-medium">{alert.currentStock}</TableCell>
                    <TableCell>{alert.threshold}</TableCell>
                    <TableCell>
                      <Badge className={alertStatusColors[alert.status as keyof typeof alertStatusColors]}>
                        {alert.status === "critical" ? "Critical" : "Low Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell>{alert.category}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Restock</Button>
                        <Button variant="outline" size="sm">Adjust Threshold</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Alerts;
