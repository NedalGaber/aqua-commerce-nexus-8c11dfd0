
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, Phone } from "lucide-react";

interface PhoneNumber {
  id: string;
  number: string;
  type: 'mobile' | 'home' | 'work';
  isDefault?: boolean;
}

interface PhoneNumbersSectionProps {
  phoneNumbers: PhoneNumber[];
}

export function PhoneNumbersSection({ phoneNumbers }: PhoneNumbersSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Phone Numbers</h2>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add New Phone
        </Button>
      </div>
      
      <div className="grid gap-4">
        {phoneNumbers.map((phone) => (
          <div
            key={phone.id}
            className="p-4 border rounded-lg flex justify-between items-start"
          >
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <div>
                <p className="font-medium">
                  {phone.number}
                  {phone.isDefault && (
                    <span className="ml-2 text-sm text-primary">(Default)</span>
                  )}
                </p>
                <p className="text-sm text-gray-500 capitalize">{phone.type}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
