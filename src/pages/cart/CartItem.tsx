
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  // Note: Quantity and remove handlers can be passed here in the future
  return (
    <div className="py-6 border-b last:border-b-0 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
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
  );
};

export default CartItem;
