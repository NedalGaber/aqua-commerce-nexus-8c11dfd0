
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";

export default function Checkout() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <h2 className="text-xl font-semibold">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Email" className="col-span-2" />
                <Input placeholder="Phone" className="col-span-2" />
                <Input placeholder="Address" className="col-span-2" />
                <Input placeholder="City" />
                <Input placeholder="Postal Code" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <div className="space-y-4">
                <Input placeholder="Card Number" />
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="MM/YY" />
                  <Input placeholder="CVC" />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>EGP 25,499.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>EGP 150.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>EGP 3,824.99</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>EGP 29,474.98</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full">
              <CreditCard className="mr-2 h-5 w-5" />
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
