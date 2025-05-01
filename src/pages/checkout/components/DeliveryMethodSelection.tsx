
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Truck } from "lucide-react";

interface DeliveryMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  iconType: string;
}

interface DeliveryMethodSelectionProps {
  deliveryMethods: DeliveryMethod[];
  selectedDelivery: string;
  setSelectedDelivery: (method: string) => void;
}

const DeliveryMethodSelection = ({
  deliveryMethods,
  selectedDelivery,
  setSelectedDelivery,
}: DeliveryMethodSelectionProps) => {
  // Function to render the appropriate icon based on iconType
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "truck":
        return <Truck className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Delivery Method</h2>
      </div>
      <RadioGroup
        value={selectedDelivery}
        onValueChange={setSelectedDelivery}
        className="space-y-4"
      >
        {deliveryMethods.map(dm => (
          <div
            key={dm.id}
            className={`flex items-center space-x-3 p-4 rounded-lg border ${
              selectedDelivery === dm.id ? 'border-primary bg-aqua-50' : 'border-gray-200'
            }`}
          >
            <RadioGroupItem value={dm.id} id={dm.id} />
            <div className="flex flex-col">
              <div className="flex items-center font-medium">
                {renderIcon(dm.iconType)}
                {dm.name}
                <span className="ml-4 text-primary font-semibold">
                  {dm.price === 0
                    ? "Free"
                    : `EGP ${dm.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {dm.description}
              </span>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default DeliveryMethodSelection;
