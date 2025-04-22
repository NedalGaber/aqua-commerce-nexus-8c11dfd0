import React, { useState } from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Filter } from "lucide-react";
import { ProductsBreadcrumbs } from "@/pages/products/ProductsBreadcrumbs";

// Temporary mock data for demo
const mockProducts = [
  {
    id: "1",
    title: "Alienware - m16 16\" 240Hz Gaming Laptop QHD+ - AMD Ryzen 9 7000 Series...",
    image: "/placeholder.svg",
    price: 2239.99,
    oldPrice: 2799.99,
    sku: "6543536",
    rating: 4.5,
    reviews: 156,
    promoText: "Clearance",
    promoColor: "text-red-700",
    promoSave: 560,
    sponsored: true,
  },
  {
    id: "2",
    title: "HP - Victus 15.6\" Full HD 144Hz Gaming Laptop - Intel Core i5 - 8GB Memory...",
    image: "/placeholder.svg",
    price: 499.99,
    oldPrice: 899.99,
    sku: "6570600",
    rating: 4.2,
    reviews: 397,
    promoText: "",
    promoColor: "",
    promoSave: 400,
    sponsored: false,
  },
  {
    id: "3",
    title: "ASUS - ROG Zephyrus G16 16\" OLED QHD 240Hz Gaming Laptop - Intel Core Ultra 9...",
    image: "/placeholder.svg",
    price: 1499.99,
    oldPrice: 1999.99,
    sku: "6570222",
    rating: 4.3,
    reviews: 506,
    promoText: "",
    promoColor: "",
    promoSave: 500,
    sponsored: false,
  }
];

function renderStars(rating: number, count: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const starsArr = [];
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsArr.push(
        <svg key={i} aria-hidden="true" className="w-4 h-4 fill-yellow-400 text-yellow-400 inline" viewBox="0 0 20 20"><polygon points="10,1 12.59,6.88 19,7.64 14,12.14 15.18,18.46 10,15.3 4.82,18.46 6,12.14 1,7.64 7.41,6.88"/></svg>
      );
    } else if (i === fullStars && halfStar) {
      starsArr.push(
        <svg key={i} aria-hidden="true" className="w-4 h-4 fill-yellow-400 text-yellow-400 inline" viewBox="0 0 20 20"><defs><linearGradient id={`half${count}`}><stop offset="50%" stopColor="#facc15" /><stop offset="50%" stopColor="#e5e7eb" /></linearGradient></defs><polygon fill={`url(#half${count})`} points="10,1 12.59,6.88 19,7.64 14,12.14 15.18,18.46 10,15.3 4.82,18.46 6,12.14 1,7.64 7.41,6.88"/></svg>
      );
    } else {
      starsArr.push(
        <svg key={i} aria-hidden="true" className="w-4 h-4 text-gray-300 fill-gray-300 inline" viewBox="0 0 20 20"><polygon points="10,1 12.59,6.88 19,7.64 14,12.14 15.18,18.46 10,15.3 4.82,18.46 6,12.14 1,7.64 7.41,6.88"/></svg>
      );
    }
  }
  return (
    <span className="flex items-center gap-1">
      {starsArr}
      <span className="ml-1 text-blue-700 font-medium text-xs">
        {`(${count})`}
      </span>
    </span>
  );
}

export default function ProductsView() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  // Simulate real data
  const searchQuery = undefined; // e.g., "hv"
  const categoryPath = ["Computers & Tablets", "PC Gaming"];
  const products = mockProducts; // Replace with real data fetch in future

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-2">
          <ProductsBreadcrumbs searchQuery={searchQuery} categoryPath={categoryPath} />
        </div>

        {/* Count and Sort */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
          <div className="text-base font-medium text-[#222]">
            {products.length} items
          </div>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* ---- Left Sidebar ---- */}
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
          {/* ---- Product Grid ---- */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, idx) => (
                <div
                  key={p.id}
                  className="relative transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg flex flex-col"
                >
                  <div className="px-4 pt-4 pb-1">
                    {p.sponsored && (
                      <div className="text-[11px] text-gray-400 mb-1">Sponsored</div>
                    )}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-40 object-contain mb-2"
                    />
                    <div className="mb-2 text-xs text-gray-500 font-mono">
                      SKU: {p.sku}
                    </div>
                    <div className="font-bold text-base leading-tight mb-1">
                      {p.title}
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(p.rating, idx)}
                    </div>
                    <div className="flex flex-col mb-1">
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-[#222]">
                          EGP {p.price.toLocaleString()}
                        </span>
                        {p.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            EGP {p.oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {p.promoText && (
                        <span className={`block font-semibold ${p.promoColor} text-xs`}>
                          {p.promoText}
                        </span>
                      )}
                      {p.promoSave > 0 && (
                        <span className="text-xs text-[#b12704] font-medium">
                          Save EGP {p.promoSave}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-3 mt-auto border-t flex flex-col gap-2">
                    <Button className="w-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 rounded shadow-none border-none">
                      Add to Cart
                    </Button>
                    <div className="flex items-center justify-between text-xs pt-2 text-gray-500">
                      <div />
                      <label className="flex items-center gap-1 select-none">
                        <input type="checkbox" className="accent-blue-500" />
                        Save
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
