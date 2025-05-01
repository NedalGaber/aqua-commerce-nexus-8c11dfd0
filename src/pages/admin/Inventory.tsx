import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, PackageCheck, PackageOpen, AlertTriangle, Plus } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for inventory
const mockInventory = [
  {
    id: "PROD-1001",
    name: "Apple MacBook Pro 16\" M2 Pro",
    sku: "MBPM2-16",
    quantity: 28,
    status: "in_stock",
    location: "Warehouse A",
    lastUpdated: "2024-05-01",
    threshold: 10,
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1002",
    name: "Samsung 65\" QLED 4K Smart TV",
    sku: "QLED65-4K",
    quantity: 15,
    status: "in_stock",
    location: "Warehouse B",
    lastUpdated: "2024-04-30",
    threshold: 8,
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1003",
    name: "Sony WH-1000XM4 Wireless Headphones",
    sku: "WH1000XM4",
    quantity: 42,
    status: "in_stock",
    location: "Warehouse A",
    lastUpdated: "2024-04-28",
    threshold: 15,
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1004",
    name: "iPhone 15 Pro 256GB",
    sku: "IP15P-256",
    quantity: 8,
    status: "low_stock",
    location: "Warehouse C",
    lastUpdated: "2024-04-29",
    threshold: 10,
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1005",
    name: "Canon EOS R5 Mirrorless Camera",
    sku: "CANONR5",
    quantity: 0,
    status: "out_of_stock",
    location: "Warehouse A",
    lastUpdated: "2024-04-25",
    threshold: 5,
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1006",
    name: "PlayStation 5 Digital Edition",
    sku: "PS5-DE",
    quantity: 5,
    status: "low_stock",
    location: "Warehouse B",
    lastUpdated: "2024-04-27",
    threshold: 8,
    image: "/placeholder.svg",
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

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  
  // Filter inventory based on search term and tab
  const filteredInventory = mockInventory.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (currentTab === "all") return matchesSearch;
    return matchesSearch && item.status === currentTab;
  });

  // Calculate metrics
  const metrics = {
    total: mockInventory.length,
    inStock: mockInventory.filter(p => p.status === "in_stock").length,
    lowStock: mockInventory.filter(p => p.status === "low_stock").length,
    outOfStock: mockInventory.filter(p => p.status === "out_of_stock").length,
  };

  // Extract unique locations
  const locations = [...new Set(mockInventory.map(p => p.location))];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Import Inventory</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Import Inventory Data</DialogTitle>
                  <DialogDescription>
                    Upload a CSV file to bulk update your inventory.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                    <PackageOpen className="h-10 w-10 text-gray-400 mb-2" />
                    <div className="text-sm text-gray-500">
                      Drag and drop a CSV file or <span className="text-blue-500 cursor-pointer">browse</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      File must match the required format
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    <a href="#" className="text-blue-500 hover:underline">Download template</a>
                  </div>
                </div>
                <DialogFooter className="mt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button type="submit">Import</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button>Stock Adjustment</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Stock Adjustment</DialogTitle>
                  <DialogDescription>
                    Adjust inventory quantity for an existing product.
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
                        {mockInventory.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="adjustment-type" className="text-right">
                      Action
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
                    <label htmlFor="quantity" className="text-right">
                      Quantity
                    </label>
                    <Input id="quantity" type="number" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="location" className="text-right">
                      Location
                    </label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select warehouse" />
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
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="reason" className="text-right">
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
                        <SelectItem value="correction">Inventory Correction</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button type="submit">Save Adjustment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {/* Inventory metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Items</p>
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
              <AlertTriangle className="h-8 w-8 text-amber-400" />
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
        
        {/* Inventory list */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Inventory Status</CardTitle>
          </CardHeader>
          
          <CardContent>
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search inventory..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="in_stock">In Stock</SelectItem>
                    <SelectItem value="low_stock">Low Stock</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by location" />
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
            
            {/* Tabs */}
            <Tabs defaultValue="all" className="mb-6" onValueChange={setCurrentTab}>
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="all">All Items</TabsTrigger>
                <TabsTrigger value="in_stock">In Stock</TabsTrigger>
                <TabsTrigger value="low_stock">Low Stock</TabsTrigger>
                <TabsTrigger value="out_of_stock">Out of Stock</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded bg-gray-100 overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="h-full w-full object-contain" 
                              />
                            </div>
                            <div className="font-medium truncate max-w-[200px]" title={item.name}>
                              {item.name}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell className={item.quantity < item.threshold ? "text-red-600 font-medium" : ""}>
                          {item.quantity}
                        </TableCell>
                        <TableCell>
                          <Badge className={statusColors[item.status]}>
                            {formatStatus(item.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Plus className="h-3.5 w-3.5" />
                              <span>Adjust</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              {/* Other tab contents follow the same pattern */}
            </Tabs>
            
            {/* Pagination */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Inventory;
