
import { MainLayout } from "@/components/layouts/main-layout";
import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

// Dummy cart data
const cartItems = [
  {
    id: "item1",
    name: "Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress...",
    color: "Glossy black",
    size: "XL",
    price: 199,
    quantity: 2,
    image: "/placeholder.svg",
  },
  {
    id: "item2",
    name: "iPhone 13 pro max-Pacific Blue-128GB storage",
    color: "Glossy black",
    size: "XL",
    price: 150,
    quantity: 2,
    image: "/placeholder.svg",
  },
  {
    id: "item3",
    name: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    color: "Glossy Golden",
    size: "34mm",
    price: 65,
    quantity: 2,
    image: "/placeholder.svg",
  }
];

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 1800; // Adjusted to EGP
  const shipping = 150; // Adjusted to EGP

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Cart</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Header */}
              <div className="hidden md:grid md:grid-cols-6 gap-4 pb-4 border-b text-sm font-semibold text-gray-700">
                <div className="col-span-2">PRODUCTS</div>
                <div>COLOR</div>
                <div>SIZE</div>
                <div>PRICE</div>
                <div>QUANTITY</div>
                <div>TOTAL</div>
              </div>
              {/* Cart Items */}
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          {/* Order summary */}
          <div className="lg:w-1/3">
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              shipping={shipping}
              paymentMethod={paymentMethod}
              onPaymentMethodChange={(value: "card" | "cash") => setPaymentMethod(value)}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
