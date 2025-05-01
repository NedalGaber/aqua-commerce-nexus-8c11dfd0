
import React, { useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Town {
  id: string;
  name: string;
}

interface PickupLocation {
  id: string;
  name: string;
  address: string;
}

interface PickupLocationSelectionProps {
  towns: Town[];
  selectedTown: string;
  setSelectedTown: (town: string) => void;
  pickupLocations: PickupLocation[];
  selectedPickup: string;
  setSelectedPickup: (location: string) => void;
}

const PickupLocationSelection = ({
  towns,
  selectedTown,
  setSelectedTown,
  pickupLocations,
  selectedPickup,
  setSelectedPickup,
}: PickupLocationSelectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Pickup Location</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Select Town</label>
        <Select
          value={selectedTown}
          onValueChange={(value) => setSelectedTown(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select town" />
          </SelectTrigger>
          <SelectContent>
            {towns.map((town) => (
              <SelectItem key={town.id} value={town.id}>
                {town.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <RadioGroup
        value={selectedPickup}
        onValueChange={setSelectedPickup}
        className="space-y-4"
      >
        {pickupLocations.map((pl) => (
          <div
            key={pl.id}
            className={`flex items-start space-x-3 p-4 rounded-lg border ${
              selectedPickup === pl.id ? 'border-primary bg-aqua-50' : 'border-gray-200'
            }`}
          >
            <RadioGroupItem value={pl.id} id={pl.id} />
            <div className="space-y-1">
              <p className="font-medium">{pl.name}</p>
              <p className="text-sm text-gray-500">{pl.address}</p>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PickupLocationSelection;
