
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ProductsView() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        {/* Filters and Category Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h2 className="font-semibold text-lg mb-4">Get it Fast</h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  <span>Ready for pickup in 1 hour at Cairo & nearby stores</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  <span>Ships by Tomorrow to 11511</span>
                </label>
              </div>

              <div className="mt-6">
                <h2 className="font-semibold text-lg mb-4">Category</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <span>PC Gaming</span>
                    </label>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                  {/* Add more categories */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Products */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Featured Products</h1>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sample Product Card */}
              <Card className="relative">
                <div className="p-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Product"
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">Samsung Galaxy Book4 Edge</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl font-bold">EGP 25,499.99</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">EGP 30,999.99</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Free pickup Tomorrow at Cairo</p>
                    <p className="text-sm text-gray-600">Free shipping</p>
                  </div>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </div>
              </Card>
              {/* Add more product cards */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
