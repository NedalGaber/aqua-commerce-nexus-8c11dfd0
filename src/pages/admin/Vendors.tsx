
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Truck, FileText, Calendar } from "lucide-react";

// Mock vendors data
const vendors = [
  {
    id: "VEND-001",
    name: "TechSource Inc.",
    contact: "John Miller",
    email: "john@techsource.com",
    phone: "555-123-4567",
    address: "123 Main St, Tech City, CA 94123",
    status: "active",
    categories: ["Electronics", "Computers", "Accessories"],
    lastOrder: "2024-05-01",
  },
  {
    id: "VEND-002",
    name: "Gadget World",
    contact: "Sarah Jones",
    email: "sarah@gadgetworld.com",
    phone: "555-456-7890",
    address: "456 Tech Blvd, Innovation City, CA 95123",
    status: "active",
    categories: ["Smartphones", "Tablets", "Wearables"],
    lastOrder: "2024-04-28",
  },
  {
    id: "VEND-003",
    name: "Audio Masters",
    contact: "Michael Brown",
    email: "michael@audiomasters.com",
    phone: "555-789-1234",
    address: "789 Sound Ave, Audio Park, CA 96123",
    status: "pending",
    categories: ["Headphones", "Speakers", "Audio Accessories"],
    lastOrder: "2024-04-15",
  },
  {
    id: "VEND-004",
    name: "Camera Pros",
    contact: "Emily Wilson",
    email: "emily@camerapros.com",
    phone: "555-234-5678",
    address: "234 Photo Ln, Lens City, CA 97123",
    status: "active",
    categories: ["Cameras", "Lenses", "Photography Accessories"],
    lastOrder: "2024-04-22",
  },
  {
    id: "VEND-005",
    name: "Gaming Universe",
    contact: "David Clark",
    email: "david@gaminguniverse.com",
    phone: "555-567-8901",
    address: "567 Console Rd, Game Town, CA 98123",
    status: "inactive",
    categories: ["Gaming Consoles", "Video Games", "Gaming Accessories"],
    lastOrder: "2024-03-30",
  },
];

// Mock purchase orders
const purchaseOrders = [
  {
    id: "PO-1001",
    vendorId: "VEND-001",
    vendorName: "TechSource Inc.",
    date: "2024-05-01",
    status: "received",
    total: 12560.75,
    items: [
      { id: "ITEM-1", name: "MacBook Pro 16\" M2", quantity: 5, price: 2499.99, total: 12499.95 },
      { id: "ITEM-2", name: "USB-C Adapter", quantity: 10, price: 6.08, total: 60.80 }
    ]
  },
  {
    id: "PO-1002",
    vendorId: "VEND-002",
    vendorName: "Gadget World",
    date: "2024-04-28",
    status: "pending",
    total: 8746.92,
    items: [
      { id: "ITEM-3", name: "iPhone 15 Pro", quantity: 8, price: 999.99, total: 7999.92 },
      { id: "ITEM-4", name: "iPhone Cases", quantity: 15, price: 49.80, total: 747.00 }
    ]
  },
  {
    id: "PO-1003",
    vendorId: "VEND-003",
    vendorName: "Audio Masters",
    date: "2024-04-15",
    status: "received",
    total: 4195.80,
    items: [
      { id: "ITEM-5", name: "Sony WH-1000XM4", quantity: 12, price: 349.65, total: 4195.80 }
    ]
  },
  {
    id: "PO-1004",
    vendorId: "VEND-004",
    vendorName: "Camera Pros",
    date: "2024-04-22",
    status: "received",
    total: 11699.97,
    items: [
      { id: "ITEM-6", name: "Canon EOS R5", quantity: 3, price: 3899.99, total: 11699.97 }
    ]
  },
  {
    id: "PO-1005",
    vendorId: "VEND-005",
    vendorName: "Gaming Universe",
    date: "2024-03-30",
    status: "cancelled",
    total: 2799.95,
    items: [
      { id: "ITEM-7", name: "PlayStation 5", quantity: 7, price: 399.99, total: 2799.93 }
    ]
  },
];

// Status badge color mapping
const vendorStatusColors = {
  active: "bg-green-100 text-green-800",
  pending: "bg-amber-100 text-amber-800",
  inactive: "bg-gray-100 text-gray-800",
};

const orderStatusColors = {
  received: "bg-green-100 text-green-800",
  pending: "bg-amber-100 text-amber-800",
  cancelled: "bg-red-100 text-red-800",
};

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("vendors");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter vendors based on search term and status
  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = 
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === "all") return matchesSearch;
    return matchesSearch && vendor.status === statusFilter;
  });

  // Filter purchase orders based on search term
  const filteredOrders = purchaseOrders.filter(order => {
    return order.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vendor Management</h1>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Vendor
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Add New Vendor</DialogTitle>
                  <DialogDescription>
                    Fill in the details to add a new vendor to your system
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="vendor-name">Vendor Name</label>
                      <Input id="vendor-name" placeholder="Company name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="vendor-id">Vendor ID</label>
                      <Input id="vendor-id" placeholder="E.g., VEND-006" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="contact-name">Contact Person</label>
                      <Input id="contact-name" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email">Email</label>
                      <Input id="contact-email" type="email" placeholder="Email address" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone">Phone</label>
                      <Input id="phone" placeholder="Phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="status">Status</label>
                      <Select defaultValue="active">
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="address">Address</label>
                    <Textarea id="address" placeholder="Full address" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="categories">Product Categories</label>
                    <Input id="categories" placeholder="E.g., Electronics, Computers (comma separated)" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Vendor</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  New Purchase Order
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create Purchase Order</DialogTitle>
                  <DialogDescription>
                    Create a new purchase order to order products from a vendor
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="po-id">Purchase Order #</label>
                      <Input id="po-id" placeholder="E.g., PO-1006" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="po-date">Date</label>
                      <Input id="po-date" type="date" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="vendor">Vendor</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vendor" />
                      </SelectTrigger>
                      <SelectContent>
                        {vendors.filter(v => v.status === "active").map((vendor) => (
                          <SelectItem key={vendor.id} value={vendor.id}>
                            {vendor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label>Order Items</label>
                      <Button variant="outline" size="sm">
                        <Plus className="h-3.5 w-3.5 mr-1" />
                        Add Item
                      </Button>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      {/* Sample item - in a real app this would be dynamic */}
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-5">
                          <Input placeholder="Product name" />
                        </div>
                        <div className="col-span-2">
                          <Input type="number" placeholder="Qty" min="1" />
                        </div>
                        <div className="col-span-2">
                          <Input type="number" placeholder="Price" step="0.01" />
                        </div>
                        <div className="col-span-2">
                          <Input disabled placeholder="Total" />
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            &times;
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="delivery-date">Expected Delivery Date</label>
                      <Input id="delivery-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="payment-terms">Payment Terms</label>
                      <Select defaultValue="net30">
                        <SelectTrigger>
                          <SelectValue placeholder="Select terms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="net15">Net 15</SelectItem>
                          <SelectItem value="net30">Net 30</SelectItem>
                          <SelectItem value="net60">Net 60</SelectItem>
                          <SelectItem value="cod">Cash on Delivery</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="notes">Notes</label>
                    <Textarea id="notes" placeholder="Additional information or special instructions" />
                  </div>
                </div>
                <DialogFooter>
                  <div className="flex items-center mr-auto">
                    <span className="font-semibold">Total: $0.00</span>
                  </div>
                  <Button variant="outline">Cancel</Button>
                  <Button>Create Order</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Vendor metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Vendors</p>
                <p className="text-2xl font-bold">{vendors.length}</p>
              </div>
              <Truck className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Vendors</p>
                <p className="text-2xl font-bold">{vendors.filter(v => v.status === "active").length}</p>
              </div>
              <Truck className="h-8 w-8 text-green-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Purchase Orders</p>
                <p className="text-2xl font-bold">{purchaseOrders.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-400" />
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs for vendors and purchase orders */}
        <Card>
          <CardHeader>
            <CardTitle>Vendor Management</CardTitle>
            <CardDescription>
              Manage your vendors and purchase orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search vendors or orders..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {activeTab === "vendors" && (
                <Select defaultValue="all" onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
            
            <Tabs defaultValue="vendors" className="mb-6" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="vendors">Vendors</TabsTrigger>
                <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vendors">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Categories</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVendors.map((vendor) => (
                      <TableRow key={vendor.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-xs text-gray-500">{vendor.id}</div>
                          </div>
                        </TableCell>
                        <TableCell>{vendor.contact}</TableCell>
                        <TableCell>{vendor.email}</TableCell>
                        <TableCell>{vendor.phone}</TableCell>
                        <TableCell>
                          <Badge className={vendorStatusColors[vendor.status as keyof typeof vendorStatusColors]}>
                            {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {vendor.categories.slice(0, 2).map((category, idx) => (
                              <Badge key={idx} variant="outline">{category}</Badge>
                            ))}
                            {vendor.categories.length > 2 && (
                              <Badge variant="outline">+{vendor.categories.length - 2}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View</Button>
                            <Button size="sm" variant="outline">Edit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="orders">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>PO Number</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.vendorName}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge className={orderStatusColors[order.status as keyof typeof orderStatusColors]}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>{order.items.length}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View</Button>
                            <Button size="sm" variant="outline">Receive</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Vendors;
