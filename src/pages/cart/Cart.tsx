
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

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
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 1800; // Adjusted to EGP
  const tax = (subtotal - discount) * 0.14; // Egypt's VAT rate is 14%
  const shipping = 150; // Adjusted to EGP
  const total = subtotal - discount + tax + shipping;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Cart</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
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
                <div key={item.id} className="py-6 border-b last:border-b-0 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  {/* Product */}
                  <div className="col-span-2 flex gap-4">
                    <div className="w-20 h-20">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 hover:text-aqua-600">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                    </div>
                  </div>
                  
                  {/* Color */}
                  <div className="text-sm text-gray-700">
                    <div className="md:hidden font-semibold text-gray-700 mb-1">Color</div>
                    {item.color}
                  </div>
                  
                  {/* Size */}
                  <div className="text-sm text-gray-700">
                    <div className="md:hidden font-semibold text-gray-700 mb-1">Size</div>
                    {item.size}
                  </div>
                  
                  {/* Price */}
                  <div className="text-sm text-gray-700">
                    <div className="md:hidden font-semibold text-gray-700 mb-1">Price</div>
                    {item.price.toLocaleString()} EGP
                  </div>
                  
                  {/* Quantity */}
                  <div>
                    <div className="md:hidden font-semibold text-gray-700 mb-1">Quantity</div>
                    <div className="flex items-center border border-gray-300 rounded-md w-28">
                      <button className="px-3 py-1 text-gray-600 hover:text-aqua-600">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="flex-1 text-center">{item.quantity}</span>
                      <button className="px-3 py-1 text-gray-600 hover:text-aqua-600">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="md:hidden font-semibold text-gray-700 mb-1">Total</div>
                      <span className="text-sm font-medium">{(item.price * item.quantity).toLocaleString()} EGP</span>
                    </div>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              
              {/* Payment Method */}
              <div className="mb-4">
                <select className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-aqua-400">
                  <option>Cash on Delivery</option>
                  <option>Credit Card</option>
                  <option>PayPal</option>
                </select>
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
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax :</span>
                  <span className="font-medium">{tax.toFixed(0).toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-600">Subtotal :</span>
                  <span className="font-medium">{(subtotal - discount + tax).toFixed(0).toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping Cost :</span>
                  <span className="font-medium">{shipping.toLocaleString()} EGP</span>
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
              <Button size="lg" className="w-full bg-aqua-600 hover:bg-aqua-700">
                Proceed to checkout &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
