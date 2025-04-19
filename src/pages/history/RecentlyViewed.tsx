
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Card } from "@/components/ui/card";
import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function RecentlyViewed() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Recently Viewed</h1>
          <div className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-gray-500" />
            <span className="text-gray-500">Last 30 days</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
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
                <div className="text-sm text-gray-500 mb-4">
                  Viewed on {new Date().toLocaleDateString()}
                </div>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
