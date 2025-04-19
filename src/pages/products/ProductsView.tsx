
import React, { useState } from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Filter } from "lucide-react";

export default function ProductsView() {
  const [priceRange, setPriceRange] = useState([0, 50000]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Filter className="h-5 w-5 text-gray-500" />
                </div>
              </div>

              {/* Price Range Filter */}
              <Collapsible defaultOpen className="border-b border-gray-200">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                  <span className="font-medium">Price Range</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0">
                  <div className="space-y-4">
                    <Slider 
                      defaultValue={[0, 50000]}
                      max={50000}
                      step={1000}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex justify-between text-sm">
                      <span>EGP {priceRange[0]}</span>
                      <span>EGP {priceRange[1]}</span>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Availability Filter */}
              <Collapsible defaultOpen className="border-b border-gray-200">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                  <span className="font-medium">Availability</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">In Store (Cairo)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Ready to Ship</span>
                    </label>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Categories Filter */}
              <Collapsible defaultOpen className="border-b border-gray-200">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                  <span className="font-medium">Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Laptops</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Desktop PCs</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Computer Parts</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Monitors</span>
                    </label>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Brands Filter */}
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                  <span className="font-medium">Brands</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Apple</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Samsung</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">Dell</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-sm">HP</span>
                    </label>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Right Section - Products */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Featured Products</h1>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {/* Add more product cards here */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
