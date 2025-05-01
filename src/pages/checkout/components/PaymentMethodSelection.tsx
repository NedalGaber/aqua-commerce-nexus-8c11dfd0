
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SavedPaymentMethod } from "@/types/checkout";

interface PaymentMethodSelectionProps {
  paymentMethods: SavedPaymentMethod[];
  selectedPaymentId: string;
  setSelectedPaymentId: (id: string) => void;
}

const PaymentMethodSelection = ({
  paymentMethods,
  selectedPaymentId,
  setSelectedPaymentId,
}: PaymentMethodSelectionProps) => {
  return (
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
        {paymentMethods.map((method) => (
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
  );
};

export default PaymentMethodSelection;
