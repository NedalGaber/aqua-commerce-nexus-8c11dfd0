
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet, Truck, Store } from "lucide-react";
import { Link } from "react-router-dom";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  onPaymentMethodChange?: (method: "card" | "cash") => void;
  paymentMethod: "card" | "cash";
}

const CartSummary = ({
  subtotal,
  discount,
  paymentMethod,
  onPaymentMethodChange
}: CartSummaryProps) => {
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  const cashFee = paymentMethod === "cash" ? 50 : 0;
  const total = subtotal - discount + cashFee;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      
      {/* Delivery Method Selection */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Delivery Method</h3>
        <RadioGroup
          value={deliveryMethod}
          onValueChange={(value: "delivery" | "pickup") => setDeliveryMethod(value)}
          className="space-y-3"
        >
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
            <RadioGroupItem value="delivery" id="delivery" />
            <Label htmlFor="delivery" className="flex items-center gap-2 cursor-pointer">
              <Truck className="h-4 w-4" />
              Delivery to Address
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
            <RadioGroupItem value="pickup" id="pickup" />
            <Label htmlFor="pickup" className="flex items-center gap-2 cursor-pointer">
              <Store className="h-4 w-4" />
              Pickup from Store
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Payment Method</h3>
        <RadioGroup
          value={paymentMethod}
          onValueChange={onPaymentMethodChange}
          className="space-y-3"
        >
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
              <CreditCard className="h-4 w-4" />
              Pay with Card
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
              <Wallet className="h-4 w-4" />
              Pay with Cash (+50 EGP)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Order Summary */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Items subtotal :</span>
          <span className="font-medium">{subtotal.toLocaleString()} EGP</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount :</span>
          <span>-{discount.toLocaleString()} EGP</span>
        </div>
        {paymentMethod === "cash" && (
          <div className="flex justify-between text-gray-600">
            <span>Cash handling fee :</span>
            <span>{cashFee.toLocaleString()} EGP</span>
          </div>
        )}
        <div className="flex justify-between border-t pt-3">
          <span className="text-gray-600">Subtotal :</span>
          <span className="font-medium">{(subtotal - discount + cashFee).toFixed(0).toLocaleString()} EGP</span>
        </div>
      </div>

      {/* Voucher */}
      <div className="flex mb-6">
        <Input placeholder="Voucher" className="rounded-r-none focus-visible:ring-aqua-500" />
        <Button className="rounded-l-none bg-aqua-600 hover:bg-aqua-700">Apply</Button>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center text-xl font-bold mb-6">
        <span>Total :</span>
        <span>{total.toFixed(0).toLocaleString()} EGP</span>
      </div>

      {/* Checkout Button */}
      <Link to="/checkout" state={{ deliveryMethod }}>
        <Button size="lg" className="w-full bg-aqua-600 hover:bg-aqua-700">
          Proceed to checkout &rarr;
        </Button>
      </Link>
    </div>
  );
};

export default CartSummary;
