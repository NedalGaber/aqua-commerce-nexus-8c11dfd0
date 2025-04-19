
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
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

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Address</h2>
              <div className="space-y-4">
                <Input placeholder="Street Address" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="City" />
                  <Input placeholder="Postal Code" />
                </div>
              </div>
            </div>

            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
