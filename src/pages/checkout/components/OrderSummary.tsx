
import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  deliveryMethod: "delivery" | "pickup";
}

const OrderSummary = ({ subtotal, shipping, total, deliveryMethod }: OrderSummaryProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-fit space-y-4">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>EGP {subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
        </div>
        {deliveryMethod === "delivery" && (
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>EGP {shipping.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
          </div>
        )}
        <div className="border-t pt-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>EGP {total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
          </div>
        </div>
      </div>
      <Button size="lg" className="w-full">
        <CreditCard className="mr-2 h-5 w-5" />
        Place Order
      </Button>
    </div>
  );
};

export default OrderSummary;
