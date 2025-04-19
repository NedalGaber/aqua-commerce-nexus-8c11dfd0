
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <img 
                src="/placeholder.svg"
                alt="Product"
                className="w-full h-[400px] object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-lg p-2 cursor-pointer hover:border-aqua-500">
                  <img 
                    src="/placeholder.svg"
                    alt={`Thumbnail ${item}`}
                    className="w-full h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Product Name</h1>
              <p className="text-gray-500">SKU: {id}</p>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-bold">EGP 25,499.99</span>
              <span className="text-xl text-gray-500 line-through">EGP 30,999.99</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Description</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
