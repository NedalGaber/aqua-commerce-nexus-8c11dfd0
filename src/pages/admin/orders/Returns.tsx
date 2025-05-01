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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, CheckCircle, XCircle } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

// Mock data for returns
const mockReturns = [
  {
    id: "RTN-1001",
    orderId: "ORD-1234",
    customer: "John Doe",
    date: "2024-04-28",
    status: "pending",
    reason: "Defective product",
    items: 1,
    amount: 499.99,
    product: "Apple MacBook Pro 16\" M2 Pro"
  },
  {
    id: "RTN-1002",
    orderId: "ORD-1236",
    customer: "Robert Brown",
    date: "2024-04-27",
    status: "approved",
    reason: "Wrong item received",
    items: 1,
    amount: 349.99,
    product: "Sony WH-1000XM4 Wireless Headphones"
  },
  {
    id: "RTN-1003",
    orderId: "ORD-1235",
    customer: "Jane Smith",
    date: "2024-04-26",
    status: "rejected",
    reason: "Changed mind",
    items: 1,
    amount: 1099.99,
    product: "iPhone 15 Pro 256GB"
  },
  {
    id: "RTN-1004",
    orderId: "ORD-1237",
    customer: "Alice Johnson",
    date: "2024-04-25",
    status: "pending",
    reason: "Item damaged during shipping",
    items: 1,
    amount: 299.99,
    product: "Samsung 65\" QLED 4K Smart TV"
  },
  {
    id: "RTN-1005",
    orderId: "ORD-1239",
    customer: "Emily Davis",
    date: "2024-04-24",
    status: "approved",
    reason: "Defective product",
    items: 1,
    amount: 649.99,
    product: "LG 34\" UltraWide Monitor"
  },
  {
    id: "RTN-1006",
    orderId: "ORD-1240",
    customer: "David Rodriguez",
    date: "2024-04-23",
    status: "completed",
    reason: "Wrong size",
    items: 1,
    amount: 399.99,
    product: "PlayStation 5 Digital Edition"
  },
];

// Status badge color mapping
const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-blue-100 text-blue-800",
  rejected: "bg-red-100 text-red-800",
  completed: "bg-green-100 text-green-800",
};

const Returns = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  const [returns, setReturns] = useState(mockReturns);
  const [viewReturn, setViewReturn] = useState<typeof mockReturns[0] | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  
  // Filter returns based on search term and current tab
  const filteredReturns = returns.filter(returnItem => {
    const matchesSearch = 
      returnItem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      returnItem.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      returnItem.customer.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (currentTab === "all") return matchesSearch;
    return matchesSearch && returnItem.status === currentTab;
  });

  // Calculate metrics
  const metrics = {
    total: returns.length,
    pending: returns.filter(r => r.status === "pending").length,
    approved: returns.filter(r => r.status === "approved").length,
    rejected: returns.filter(r => r.status === "rejected").length,
    completed: returns.filter(r => r.status === "completed").length,
  };

  const handleStatusChange = (returnId: string, newStatus: string) => {
    const updatedReturns = returns.map(returnItem => 
      returnItem.id === returnId ? { ...returnItem, status: newStatus } : returnItem
    );
    
    setReturns(updatedReturns);
    setIsViewDialogOpen(false);
    
    toast({
      title: "Return Status Updated",
      description: `Return ${returnId} status changed to ${newStatus}.`,
    });
  };

  const openViewDialog = (returnItem: typeof mockReturns[0]) => {
    setViewReturn(returnItem);
    setIsViewDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Returns Management</h1>
        </div>
        
        {/* Return metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Returns</p>
                <p className="text-2xl font-bold">{metrics.total}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold">{metrics.pending}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Approved</p>
                <p className="text-2xl font-bold">{metrics.approved}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Rejected</p>
                <p className="text-2xl font-bold">{metrics.rejected}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold">{metrics.completed}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Returns list */}
        <Card>
          <CardHeader>
            <CardTitle>Return Requests</CardTitle>
          </CardHeader>
          
          <CardContent>
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search returns..."
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
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="all" className="mb-6" onValueChange={setCurrentTab}>
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Return ID</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReturns.map((returnItem) => (
                      <TableRow key={returnItem.id}>
                        <TableCell className="font-medium">{returnItem.id}</TableCell>
                        <TableCell>{returnItem.orderId}</TableCell>
                        <TableCell>{returnItem.customer}</TableCell>
                        <TableCell>{returnItem.date}</TableCell>
                        <TableCell>
                          <Badge className={statusColors[returnItem.status as keyof typeof statusColors]}>
                            {returnItem.status.charAt(0).toUpperCase() + returnItem.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate">{returnItem.reason}</TableCell>
                        <TableCell>${returnItem.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => openViewDialog(returnItem)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              {/* Other tab contents would follow the same pattern */}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* View Return Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Return Details - {viewReturn?.id}</DialogTitle>
            <DialogDescription>
              Review the return request and update its status.
            </DialogDescription>
          </DialogHeader>
          
          {viewReturn && (
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Order ID</p>
                  <p>{viewReturn.orderId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Customer</p>
                  <p>{viewReturn.customer}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date Requested</p>
                  <p>{viewReturn.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <Badge className={statusColors[viewReturn.status as keyof typeof statusColors]}>
                    {viewReturn.status.charAt(0).toUpperCase() + viewReturn.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Product</p>
                  <p>{viewReturn.product}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p>${viewReturn.amount.toFixed(2)}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Return Reason</p>
                <p className="p-3 bg-gray-50 rounded-md">{viewReturn.reason}</p>
              </div>
              
              {viewReturn.status === 'pending' && (
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Admin Notes</p>
                  <Textarea placeholder="Add notes about this return request..." />
                </div>
              )}
              
              <div className="flex justify-between mt-2">
                {viewReturn.status === 'pending' && (
                  <>
                    <Button
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => handleStatusChange(viewReturn.id, 'rejected')}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Reject Return
                    </Button>
                    <Button
                      onClick={() => handleStatusChange(viewReturn.id, 'approved')}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Approve Return
                    </Button>
                  </>
                )}
                {viewReturn.status === 'approved' && (
                  <Button
                    className="ml-auto"
                    onClick={() => handleStatusChange(viewReturn.id, 'completed')}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark as Completed
                  </Button>
                )}
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Returns;
