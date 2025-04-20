import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Address } from "@/types";
import { useNavigate } from "react-router-dom";

interface AddressesSectionProps {
  addresses: Address[];
}

export function AddressesSection({ addresses }: AddressesSectionProps) {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Addresses</h2>
        <Button variant="outline" size="sm" onClick={() => navigate('/profile/add-address')}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Address
        </Button>
      </div>
      
      <div className="grid gap-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="p-4 border rounded-lg flex justify-between items-start"
          >
            <div>
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
