
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Wishlist() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="relative">
              <div className="p-4">
                <Link to={`/product/${item}`}>
                  <img 
                    src="/placeholder.svg" 
                    alt="Product"
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Product Name</h3>
                </Link>
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-bold">EGP 25,499.99</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">EGP 30,999.99</span>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-[#fff100] hover:bg-[#e6d800] text-black">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full text-red-500 hover:text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
