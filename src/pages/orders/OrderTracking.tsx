
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package } from "lucide-react";

export default function OrderTracking() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Track Your Order</h1>
          
          {/* Order Search */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex gap-4">
              <Input placeholder="Enter your order number" className="flex-1" />
              <Button>Track Order</Button>
            </div>
          </div>

          {/* Order Status */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Order #123456</h2>
                <p className="text-gray-500">Expected delivery: April 25, 2025</p>
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
        </div>
      </div>
    </MainLayout>
  );
}
