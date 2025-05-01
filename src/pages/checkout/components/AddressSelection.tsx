
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Address } from "@/types";

interface AddressSelectionProps {
  addresses: Address[];
  selectedAddressId: string;
  setSelectedAddressId: (id: string) => void;
}

const AddressSelection = ({
  addresses,
  selectedAddressId,
  setSelectedAddressId,
}: AddressSelectionProps) => {
  return (
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
        {addresses.map((address) => (
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
  );
};

export default AddressSelection;
