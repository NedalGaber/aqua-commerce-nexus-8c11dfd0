
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Mock order items for return
const orderItems = [
  {
    id: "1",
    name: "Apple MacBook Pro 16\" M2 Pro",
    price: 25499.99,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Wireless Keyboard",
    price: 1999.99,
    image: "/placeholder.svg",
  },
];

// Return reasons
const returnReasons = [
  "Defective/doesn't work properly",
  "Wrong item received",
  "Item damaged upon arrival",
  "Missing parts or accessories",
  "Changed my mind",
  "Better price available elsewhere",
  "Product not as described",
  "Other (please specify)",
];

export default function Returns() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="mr-2">
              <Link to="/order-tracking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Order
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Return Items</h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Order #ORD-20250419</h2>
            
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">Please select the items you wish to return:</p>
              
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4 mb-4 last:border-0">
                  <Checkbox id={`item-${item.id}`} className="mr-4" />
                  <div className="w-16 h-16 flex-shrink-0 mr-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <label htmlFor={`item-${item.id}`} className="cursor-pointer">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm font-medium">EGP {item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <h3 className="text-base font-medium mb-2">Reason for Return</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {returnReasons.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`reason-${index}`} />
                    <label htmlFor={`reason-${index}`} className="cursor-pointer text-sm">
                      {reason}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-base font-medium mb-2">Additional Information</h3>
              <Textarea 
                placeholder="Please provide any additional details about your return..." 
                className="w-full"
                rows={4}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-base font-medium mb-2">Return Method</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="return-drop-off" defaultChecked />
                  <label htmlFor="return-drop-off" className="cursor-pointer">Drop-off at shipping center</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="return-pickup" />
                  <label htmlFor="return-pickup" className="cursor-pointer">Schedule pickup (additional fee may apply)</label>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <Button>Submit Return Request</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
