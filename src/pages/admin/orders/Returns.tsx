
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, PackageX, CheckCircle, XCircle, ArrowDownUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

// Mock data for return requests
const returnRequests = [
  {
    id: "RET-1001",
    orderId: "ORD-2345",
    customer: "John Doe",
    email: "john.doe@example.com",
    date: "2024-05-01",
    status: "pending",
    items: [
      {
        id: "ITEM-1",
        name: "iPhone 15 Pro 256GB",
        quantity: 1,
        price: 1099.99,
        reason: "Defective product",
        condition: "unopened"
      }
    ],
    totalAmount: 1099.99
  },
  {
    id: "RET-1002",
    orderId: "ORD-2346",
    customer: "Jane Smith",
    email: "jane.smith@example.com",
    date: "2024-04-30",
    status: "approved",
    items: [
      {
        id: "ITEM-2",
        name: "Sony WH-1000XM4 Wireless Headphones",
        quantity: 1,
        price: 349.99,
        reason: "Changed mind",
        condition: "opened"
      }
    ],
    totalAmount: 349.99
  },
  {
    id: "RET-1003",
    orderId: "ORD-2347",
    customer: "Robert Johnson",
    email: "robert.j@example.com",
    date: "2024-04-29",
    status: "completed",
    items: [
      {
        id: "ITEM-3",
        name: "Samsung 65\" QLED 4K Smart TV",
        quantity: 1,
        price: 1299.99,
        reason: "Wrong item shipped",
        condition: "unopened"
      }
    ],
    totalAmount: 1299.99
  },
  {
    id: "RET-1004",
    orderId: "ORD-2348",
    customer: "Emily Davis",
    email: "emily.d@example.com",
    date: "2024-04-28",
    status: "rejected",
    items: [
      {
        id: "ITEM-4",
        name: "Apple MacBook Pro 16\" M2 Pro",
        quantity: 1,
        price: 2499.99,
        reason: "Changed mind",
        condition: "used"
      }
    ],
    totalAmount: 2499.99
  },
  {
    id: "RET-1005",
    orderId: "ORD-2349",
    customer: "Michael Wilson",
    email: "michael.w@example.com",
    date: "2024-04-27",
    status: "pending",
    items: [
      {
        id: "ITEM-5",
        name: "Canon EOS R5 Mirrorless Camera",
        quantity: 1,
        price: 3899.99,
        reason: "Not as described",
        condition: "unopened"
      },
      {
        id: "ITEM-6",
        name: "Canon RF 24-70mm f/2.8L Lens",
        quantity: 1,
        price: 2299.99,
        reason: "Not as described",
        condition: "unopened"
      }
    ],
    totalAmount: 6199.98
  }
];

// Return reasons data for reporting
const returnReasons = [
  { reason: "Defective product", count: 12, percentage: 30 },
  { reason: "Changed mind", count: 10, percentage: 25 },
  { reason: "Wrong item shipped", count: 8, percentage: 20 },
  { reason: "Not as described", count: 6, percentage: 15 },
  { reason: "Arrived too late", count: 4, percentage: 10 }
];

// Status badge color mapping
const statusColors = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

// Format status for display
const formatStatus = (status) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const AdminReturns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateSort, setDateSort] = useState("desc");
  const [activeTab, setActiveTab] = useState("returns");

  // Filter returns based on search term and status
  const filteredReturns = returnRequests.filter(request => {
    const matchesSearch = 
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.customer.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === "all") return matchesSearch;
    return matchesSearch && request.status === statusFilter;
  })
  .sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateSort === "desc" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  // Calculate metrics
  const metrics = {
    total: returnRequests.length,
    pending: returnRequests.filter(r => r.status === "pending").length,
    approved: returnRequests.filter(r => r.status === "approved").length,
    completed: returnRequests.filter(r => r.status === "completed").length,
    rejected: returnRequests.filter(r => r.status === "rejected").length,
    totalAmount: returnRequests.reduce((total, request) => total + request.totalAmount, 0)
  };

  const toggleDateSort = () => {
    setDateSort(dateSort === "desc" ? "asc" : "desc");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Returns Management</h1>
          <Button>
            Generate Returns Report
          </Button>
        </div>
        
        {/* Return metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Returns</p>
                <p className="text-2xl font-bold">{metrics.total}</p>
              </div>
              <PackageX className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold">{metrics.pending}</p>
              </div>
              <PackageX className="h-8 w-8 text-amber-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Approved</p>
                <p className="text-2xl font-bold">{metrics.approved}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-blue-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold">{metrics.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Rejected</p>
                <p className="text-2xl font-bold">{metrics.rejected}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-2xl font-bold">${metrics.totalAmount.toFixed(2)}</p>
              </div>
              <PackageX className="h-8 w-8 text-purple-400" />
            </CardContent>
          </Card>
        </div>
        
        {/* Returns management tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Returns Management</CardTitle>
            <CardDescription>
              Process return requests and manage return inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search returns by ID, order, or customer..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all" onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Tabs defaultValue="returns" className="mb-6" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="returns">Return Requests</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="policy">Return Policy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="returns">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Return ID</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="cursor-pointer" onClick={toggleDateSort}>
                        <div className="flex items-center">
                          Date
                          <ArrowDownUp className="ml-1 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReturns.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.orderId}</TableCell>
                        <TableCell>
                          <div>
                            <div>{request.customer}</div>
                            <div className="text-xs text-gray-500">{request.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>
                          <Badge className={statusColors[request.status]}>
                            {formatStatus(request.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.items.length}</TableCell>
                        <TableCell>${request.totalAmount.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">View</Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                  <DialogTitle>Return Request Details</DialogTitle>
                                  <DialogDescription>
                                    Return ID: {request.id}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p className="text-sm text-gray-500">Order ID</p>
                                      <p className="font-medium">{request.orderId}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Date</p>
                                      <p className="font-medium">{request.date}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Customer</p>
                                      <p className="font-medium">{request.customer}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Email</p>
                                      <p className="font-medium">{request.email}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Status</p>
                                      <Badge className={statusColors[request.status]}>
                                        {formatStatus(request.status)}
                                      </Badge>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Total Amount</p>
                                      <p className="font-medium">${request.totalAmount.toFixed(2)}</p>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <p className="font-medium mb-2">Items</p>
                                    <div className="border rounded-md">
                                      <Table>
                                        <TableHeader>
                                          <TableRow>
                                            <TableHead>Item</TableHead>
                                            <TableHead>Quantity</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead>Reason</TableHead>
                                            <TableHead>Condition</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {request.items.map((item) => (
                                            <TableRow key={item.id}>
                                              <TableCell>{item.name}</TableCell>
                                              <TableCell>{item.quantity}</TableCell>
                                              <TableCell>${item.price.toFixed(2)}</TableCell>
                                              <TableCell>{item.reason}</TableCell>
                                              <TableCell>{item.condition}</TableCell>
                                            </TableRow>
                                          ))}
                                        </TableBody>
                                      </Table>
                                    </div>
                                  </div>
                                  
                                  {request.status === "pending" && (
                                    <div className="space-y-2">
                                      <label htmlFor="return-note">Decision Notes</label>
                                      <Textarea id="return-note" placeholder="Add a note about this return decision" />
                                    </div>
                                  )}
                                </div>
                                <DialogFooter>
                                  {request.status === "pending" && (
                                    <div className="flex gap-2">
                                      <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                                        <XCircle className="mr-2 h-4 w-4" />
                                        Reject
                                      </Button>
                                      <Button className="bg-green-600 hover:bg-green-700">
                                        <CheckCircle className="mr-2 h-4 w-4" />
                                        Approve
                                      </Button>
                                    </div>
                                  )}
                                  {request.status === "approved" && (
                                    <Button>
                                      Mark as Received
                                    </Button>
                                  )}
                                  {(request.status === "completed" || request.status === "rejected") && (
                                    <Button variant="outline">
                                      Close
                                    </Button>
                                  )}
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm">Print</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="analysis">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Return Reasons</CardTitle>
                      <CardDescription>Most common reasons for product returns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Reason</TableHead>
                            <TableHead>Count</TableHead>
                            <TableHead>Percentage</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {returnReasons.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.reason}</TableCell>
                              <TableCell>{item.count}</TableCell>
                              <TableCell>{item.percentage}%</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Return Rate by Category</CardTitle>
                      <CardDescription>Product categories with highest return rates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Chart visualization would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Return Trends</CardTitle>
                      <CardDescription>Monthly return volumes and amounts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Chart visualization would be displayed here
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="policy">
                <Card>
                  <CardHeader>
                    <CardTitle>Return Policy Configuration</CardTitle>
                    <CardDescription>
                      Configure your store's return policy settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="return-window">Return Window (days)</label>
                        <Input id="return-window" type="number" defaultValue={30} />
                        <p className="text-sm text-gray-500">
                          Number of days customers have to return products after purchase
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="restocking-fee">Restocking Fee (%)</label>
                        <Input id="restocking-fee" type="number" defaultValue={0} />
                        <p className="text-sm text-gray-500">
                          Percentage fee charged on returned items (0 for no fee)
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="return-policy">Return Policy Text</label>
                      <Textarea 
                        id="return-policy" 
                        rows={8}
                        defaultValue="Our standard return policy allows returns within 30 days of purchase. Products must be in their original condition with all packaging and accessories. Some products may be subject to restocking fees. Please contact customer service for more information."
                      />
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminReturns;
