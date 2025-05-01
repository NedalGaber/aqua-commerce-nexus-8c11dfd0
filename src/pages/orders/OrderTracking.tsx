
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Package, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Mock order data
const orderData = {
  id: "ORD-20250419",
  date: "April 19, 2025",
  status: "Shipped",
  expectedDelivery: "April 25, 2025",
  items: [
    {
      id: "1",
      name: "Apple MacBook Pro 16\" M2 Pro",
      price: 25499.99,
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "Wireless Keyboard",
      price: 1999.99,
      quantity: 1,
      image: "/placeholder.svg"
    }
  ],
  shippingAddress: {
    fullName: "John Doe",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA"
  }
};

export default function OrderTracking() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="mr-2">
              <Link to="/orders-and-invoices">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Orders
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Order Tracking</h1>
          </div>
          
          {/* Order Status */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Order #{orderData.id}</h2>
                <p className="text-gray-500">Expected delivery: {orderData.expectedDelivery}</p>
              </div>
              <Package className="h-8 w-8 text-aqua-600" />
            </div>

            {/* Progress Steps */}
            <div className="relative">
              <div className="h-1 bg-gray-200 absolute w-full top-5"></div>
              <div className="h-1 bg-aqua-600 absolute w-3/4 top-5"></div>
              <div className="relative flex justify-between">
                {[
                  { status: "Order Placed", date: "Apr 20" },
                  { status: "Processing", date: "Apr 21" },
                  { status: "Shipped", date: "Apr 22" },
                  { status: "Delivered", date: "Apr 25" }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-10 h-10 mx-auto rounded-full border-2 flex items-center justify-center mb-2 
                      ${index <= 2 ? "border-aqua-600 bg-aqua-600 text-white" : "border-gray-300 bg-white"}`}>
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium">{step.status}</div>
                    <div className="text-xs text-gray-500">{step.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Contents Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-4">Order Contents</h2>
            <div className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex border-b pb-4 last:border-0 last:pb-0">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">Quantity: {item.quantity}</div>
                    <div className="text-sm font-medium">EGP {item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <div className="text-gray-600">
              <p>{orderData.shippingAddress.fullName}</p>
              <p>{orderData.shippingAddress.street}</p>
              <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}</p>
              <p>{orderData.shippingAddress.country}</p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex justify-between">
            <Button asChild variant="outline">
              <Link to="/returns">Return Items</Link>
            </Button>
            <Button asChild>
              <Link to={`/invoice/${orderData.id}`}>View Invoice</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
