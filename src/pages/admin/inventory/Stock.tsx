
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  PackageCheck, 
  PackageOpen, 
  Search,
  Plus,
  ArrowUpDown
} from "lucide-react";

// Mock data for stock inventory
const stockInventory = [
  {
    id: "PROD-1001",
    name: "Apple MacBook Pro 16\" M2 Pro",
    sku: "MBPM2-16",
    category: "Laptops",
    quantity: 28,
    threshold: 10,
    status: "in_stock",
    location: "Warehouse A",
    lastUpdated: "2024-05-01",
    supplier: "Apple Inc.",
    batchNumber: "AP-202404-BT1",
  },
  {
    id: "PROD-1002",
    name: "Samsung 65\" QLED 4K Smart TV",
    sku: "QLED65-4K",
    category: "TVs",
    quantity: 15,
    threshold: 8,
    status: "in_stock",
    location: "Warehouse B",
    lastUpdated: "2024-04-30",
    supplier: "Samsung Electronics",
    batchNumber: "SE-202404-BT3",
  },
  {
    id: "PROD-1003",
    name: "Sony WH-1000XM4 Wireless Headphones",
    sku: "WH1000XM4",
    category: "Audio",
    quantity: 42,
    threshold: 15,
    status: "in_stock",
    location: "Warehouse A",
    lastUpdated: "2024-04-28",
    supplier: "Sony Corporation",
    batchNumber: "SC-202404-BT2",
  },
  {
    id: "PROD-1004",
    name: "iPhone 15 Pro 256GB",
    sku: "IP15P-256",
    category: "Smartphones",
    quantity: 8,
    threshold: 10,
    status: "low_stock",
    location: "Warehouse C",
    lastUpdated: "2024-04-29",
    supplier: "Apple Inc.",
    batchNumber: "AP-202404-BT2",
  },
  {
    id: "PROD-1005",
    name: "Canon EOS R5 Mirrorless Camera",
    sku: "CANONR5",
    category: "Cameras",
    quantity: 0,
    threshold: 5,
    status: "out_of_stock",
    location: "Warehouse A",
    lastUpdated: "2024-04-25",
    supplier: "Canon Inc.",
    batchNumber: "CI-202403-BT5",
  },
  {
    id: "PROD-1006",
    name: "PlayStation 5 Digital Edition",
    sku: "PS5-DE",
    category: "Gaming",
    quantity: 5,
    threshold: 8,
    status: "low_stock",
    location: "Warehouse B",
    lastUpdated: "2024-04-27",
    supplier: "Sony Corporation",
    batchNumber: "SC-202404-BT1",
  },
];

// Status badge color mapping
const statusColors = {
  in_stock: "bg-green-100 text-green-800",
  low_stock: "bg-amber-100 text-amber-800",
  out_of_stock: "bg-red-100 text-red-800",
};

// Format status for display
const formatStatus = (status) => {
  switch (status) {
    case 'in_stock': return 'In Stock';
    case 'low_stock': return 'Low Stock';
    case 'out_of_stock': return 'Out of Stock';
    default: return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
};

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  // Extract unique values for filters
  const categories = [...new Set(stockInventory.map(item => item.category))];
  const locations = [...new Set(stockInventory.map(item => item.location))];

  // Filter and sort inventory based on selected filters and sort options
  const filteredInventory = stockInventory
    .filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || item.status === statusFilter;
      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
      const matchesLocation = locationFilter === "all" || item.location === locationFilter;
      
      return matchesSearch && matchesStatus && matchesCategory && matchesLocation;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return sortDirection === "asc" 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortBy === "quantity") {
        return sortDirection === "asc"
          ? a.quantity - b.quantity
          : b.quantity - a.quantity;
      }
      return 0;
    });

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  // Calculate metrics
  const metrics = {
    total: stockInventory.length,
    inStock: stockInventory.filter(p => p.status === "in_stock").length,
    lowStock: stockInventory.filter(p => p.status === "low_stock").length,
    outOfStock: stockInventory.filter(p => p.status === "out_of_stock").length,
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Stock Management</h1>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Stock
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Add Stock</DialogTitle>
                  <DialogDescription>
                    Update inventory levels for an existing product
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="product" className="text-right">
                      Product
                    </label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        {stockInventory.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="quantity" className="text-right">
                      Quantity
                    </label>
                    <Input id="quantity" type="number" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="batch" className="text-right">
                      Batch Number
                    </label>
                    <Input id="batch" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="supplier" className="text-right">
                      Supplier
                    </label>
                    <Input id="supplier" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="location" className="text-right">
                      Warehouse
                    </label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Add Stock</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  Export Inventory
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Export Inventory Report</DialogTitle>
                  <DialogDescription>
                    Generate inventory report in your preferred format
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="export-format" className="text-right">
                      Format
                    </label>
                    <Select defaultValue="csv">
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="data-range" className="text-right">
                      Include
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select data range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Products</SelectItem>
                        <SelectItem value="low">Low Stock Only</SelectItem>
                        <SelectItem value="out">Out of Stock Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Export</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {/* Stock metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Products</p>
                <p className="text-2xl font-bold">{metrics.total}</p>
              </div>
              <PackageCheck className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Stock</p>
                <p className="text-2xl font-bold">{metrics.inStock}</p>
              </div>
              <PackageCheck className="h-8 w-8 text-green-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Low Stock</p>
                <p className="text-2xl font-bold">{metrics.lowStock}</p>
              </div>
              <PackageOpen className="h-8 w-8 text-amber-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Out of Stock</p>
                <p className="text-2xl font-bold">{metrics.outOfStock}</p>
              </div>
              <PackageOpen className="h-8 w-8 text-red-400" />
            </CardContent>
          </Card>
        </div>
        
        {/* Stock inventory table */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory</CardTitle>
            <CardDescription>
              Manage your product stock levels across all warehouses
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select defaultValue="all" onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="in_stock">In Stock</SelectItem>
                    <SelectItem value="low_stock">Low Stock</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all" onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all" onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead 
                    className="cursor-pointer"
                    onClick={() => toggleSort("quantity")}
                  >
                    <div className="flex items-center">
                      Quantity
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Threshold</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell className={item.quantity < item.threshold ? "text-red-600 font-medium" : ""}>
                      {item.quantity}
                    </TableCell>
                    <TableCell>{item.threshold}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[item.status]}>
                        {formatStatus(item.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.supplier}</TableCell>
                    <TableCell>{item.batchNumber}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">Adjust</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Adjust Inventory</DialogTitle>
                              <DialogDescription>
                                Update inventory for {item.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">
                                  Current Stock
                                </label>
                                <div className="col-span-3">
                                  <Input value={item.quantity} disabled />
                                </div>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">
                                  Adjustment
                                </label>
                                <Select defaultValue="add">
                                  <SelectTrigger className="col-span-3">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="add">Add to Stock</SelectItem>
                                    <SelectItem value="remove">Remove from Stock</SelectItem>
                                    <SelectItem value="set">Set Exact Quantity</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">
                                  Quantity
                                </label>
                                <Input type="number" min="0" className="col-span-3" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <label className="text-right">
                                  Reason
                                </label>
                                <Select>
                                  <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select reason" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="new_stock">New Stock</SelectItem>
                                    <SelectItem value="return">Customer Return</SelectItem>
                                    <SelectItem value="damaged">Damaged</SelectItem>
                                    <SelectItem value="correction">Count Correction</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline">Cancel</Button>
                              <Button>Save Changes</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" variant="outline">History</Button>
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

export default Stock;
