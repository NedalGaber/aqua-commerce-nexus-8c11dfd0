
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { SavedPaymentMethod } from "@/types/checkout";
import { Link } from 'react-router-dom';

interface PaymentMethodsSectionProps {
  paymentMethods: SavedPaymentMethod[];
}

export function PaymentMethodsSection({ paymentMethods }: PaymentMethodsSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Payment Methods</h2>
        <Button variant="outline" size="sm" asChild>
          <Link to="/add-payment">
            <Plus className="h-4 w-4 mr-2" />
            Add New Payment Method
          </Link>
        </Button>
      </div>
      
      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="p-4 border rounded-lg flex justify-between items-start"
          >
            <div>
              <p className="font-medium">
                {method.cardType} ending in {method.cardNumber}
                {method.isDefault && (
                  <span className="ml-2 text-sm text-primary">(Default)</span>
                )}
              </p>
              <p className="text-sm text-gray-500">Expires {method.expiryDate}</p>
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
