
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { AddressesSection } from "@/components/profile/AddressesSection";
import { PaymentMethodsSection } from "@/components/profile/PaymentMethodsSection";

// Mock data (in real app, this would come from your backend)
const mockAddresses = [
  {
    id: "1",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    isDefault: true,
  },
];

const mockPaymentMethods = [
  {
    id: "1",
    cardNumber: "4242",
    expiryDate: "12/25",
    cardType: "Visa",
    isDefault: true,
  },
];

export default function Profile() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            {/* Personal Information Section */}
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-10 w-10 text-gray-500" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" defaultValue="John" />
                <Input placeholder="Last Name" defaultValue="Doe" />
                <Input placeholder="Email" defaultValue="john.doe@example.com" className="col-span-2" />
                <Input placeholder="Phone" defaultValue="+20 123 456 789" className="col-span-2" />
              </div>
            </div>

            {/* Addresses Section */}
            <AddressesSection addresses={mockAddresses} />

            {/* Payment Methods Section */}
            <PaymentMethodsSection paymentMethods={mockPaymentMethods} />

            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
