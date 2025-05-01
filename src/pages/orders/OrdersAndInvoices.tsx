
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { FileText, Package } from "lucide-react";

// Mock data for orders
const mockOrders = [
  {
    id: "ORD-20250419",
    date: "April 19, 2025",
    status: "Delivered",
    total: 1300.00,
    items: 2,
  },
  {
    id: "ORD-20250417",
    date: "April 17, 2025",
    status: "Shipped",
    total: 499.00,
    items: 1,
  },
  {
    id: "ORD-20250410",
    date: "April 10, 2025",
    status: "Processing",
    total: 1899.00,
    items: 3,
  }
];

// Mock data for invoices
const mockInvoices = [
  {
    id: "INV-2025-123",
    date: "April 20, 2025",
    orderId: "ORD-20250419",
    total: 1300.00,
  },
  {
    id: "INV-2025-122",
    date: "April 18, 2025",
    orderId: "ORD-20250417",
    total: 499.00,
  },
  {
    id: "INV-2025-120",
    date: "April 11, 2025",
    orderId: "ORD-20250410",
    total: 1899.00,
  }
];

export default function OrdersAndInvoices() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">My Orders and Invoices</h1>
          
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">My Orders</h2>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === "Delivered" ? "bg-green-100 text-green-800" : 
                            order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>EGP {order.total.toLocaleString(undefined, {minimumFractionDigits: 2})}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <Button asChild size="sm" variant="outline" className="w-full">
                              <Link to="/order-tracking">
                                <Package className="mr-2 h-4 w-4" />
                                Track
                              </Link>
                            </Button>
                            <Button asChild size="sm" variant="outline" className="w-full">
                              <Link to="/returns">
                                Return
                              </Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="invoices">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">My Invoices</h2>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice Number</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.orderId}</TableCell>
                        <TableCell>EGP {invoice.total.toLocaleString(undefined, {minimumFractionDigits: 2})}</TableCell>
                        <TableCell>
                          <Button asChild size="sm" variant="outline">
                            <Link to={`/invoice/${invoice.id}`}>
                              <FileText className="mr-2 h-4 w-4" />
                              View
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
}
