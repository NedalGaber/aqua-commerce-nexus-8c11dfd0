import React, { useState } from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Plus } from "lucide-react";
import { Address } from "@/types";
import { SavedPaymentMethod } from "@/types/checkout";

// Mock data (in a real app, this would come from your backend)
const mockAddresses: Address[] = [
  {
    id: "1",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    isDefault: true,
  },
  {
    id: "2",
    street: "456 Park Ave",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    country: "USA",
    isDefault: false,
  },
];

const mockPaymentMethods: SavedPaymentMethod[] = [
  {
    id: "1",
    cardNumber: "4242",
    expiryDate: "12/25",
    cardType: "Visa",
    isDefault: true,
  },
  {
    id: "2",
    cardNumber: "5555",
    expiryDate: "01/26",
    cardType: "Mastercard",
    isDefault: false,
  },
];

export default function Checkout() {
  const [selectedAddressId, setSelectedAddressId] = useState(
    mockAddresses.find(addr => addr.isDefault)?.id || ""
  );
  const [selectedPaymentId, setSelectedPaymentId] = useState(
    mockPaymentMethods.find(pm => pm.isDefault)?.id || ""
  );

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address Selection */}
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Shipping Address</h2>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Address
                </Button>
              </div>
              
              <RadioGroup
                value={selectedAddressId}
                onValueChange={setSelectedAddressId}
                className="space-y-4"
              >
                {mockAddresses.map((address) => (
                  <div
                    key={address.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border ${
                      selectedAddressId === address.id ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <RadioGroupItem value={address.id} id={`address-${address.id}`} />
                    <div className="space-y-1">
                      <p className="font-medium">
                        {address.street}
                        {address.isDefault && (
                          <span className="ml-2 text-sm text-primary">(Default)</span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                      <p className="text-sm text-gray-500">{address.country}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Card
                </Button>
              </div>
              
              <RadioGroup
                value={selectedPaymentId}
                onValueChange={setSelectedPaymentId}
                className="space-y-4"
              >
                {mockPaymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border ${
                      selectedPaymentId === method.id ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <RadioGroupItem value={method.id} id={`payment-${method.id}`} />
                    <div className="space-y-1">
                      <p className="font-medium">
                        {method.cardType} ending in {method.cardNumber}
                        {method.isDefault && (
                          <span className="ml-2 text-sm text-primary">(Default)</span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">Expires {method.expiryDate}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
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
              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>EGP 25,649.99</span>
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
