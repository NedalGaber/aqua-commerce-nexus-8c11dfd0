
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from "lucide-react";
import { ProductReviewSummary } from './ProductReviewSummary';
import { ProductReviewList } from './ProductReviewList';
import { ProductOptions } from './ProductOptions';
import { ProductTabs } from './ProductTabs';

const sampleProduct = {
  name: "Apple MacBook Pro 16\" M2 Pro",
  price: 25499.99,
  originalPrice: 30999.99,
  sku: "MBPM2-16",
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  description: `The new MacBook Pro delivers game-changing performance for pro workflows with Apple silicon.`,
  rating: 4.6,
  numRatings: 128,
  specifications: [
    { key: "Processor", value: "Apple M2 Pro" },
    { key: "Display", value: "16.2‑inch Liquid Retina XDR" },
    { key: "Memory", value: "16GB Unified RAM" },
    { key: "Storage", value: "512GB SSD" },
    { key: "Graphics", value: "Apple 19-core GPU" },
    { key: "Battery Life", value: "Up to 21 hours" },
    { key: "OS", value: "macOS Sonoma" },
    { key: "Color", value: "Space Gray" },
  ],
  reviews: [
    {
      id: "1",
      user: "Montasir Abdelrahim",
      rating: 5,
      title: "Good quality mechanical keyboard",
      comment: "Very Happy",
      date: "3 September 2023",
      verified: true,
    },
    {
      id: "2",
      user: "عبدالله راشد الدبلي",
      rating: 4,
      title: "ما يستحق المبلغ. عطاني النسخة القديمة عند اللي طلبته.",
      comment: "لكن الكيبورد جيد",
      date: "19 November 2024",
      verified: true,
    },
  ],
};

// Helper for rating breakdown calculation (example data)
const ratingBreakdown = [
  { star: 5, percent: 69 },
  { star: 4, percent: 0 },
  { star: 3, percent: 0 },
  { star: 2, percent: 31 },
  { star: 1, percent: 0 },
];

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
                src={sampleProduct.images[0]}
                alt={sampleProduct.name}
                className="w-full h-[400px] object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {sampleProduct.images.map((img, idx) => (
                <div key={idx} className="border rounded-lg p-2 cursor-pointer hover:border-aqua-500">
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{sampleProduct.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="flex items-center">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className={`h-5 w-5 ${sampleProduct.rating >= n ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{sampleProduct.rating.toFixed(1)}</span>
                </span>
                <span className="text-sm text-gray-500">{sampleProduct.numRatings} ratings</span>
              </div>
              <p className="text-gray-500">SKU: {id || sampleProduct.sku}</p>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-bold">EGP {sampleProduct.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              <span className="text-xl text-gray-500 line-through">EGP {sampleProduct.originalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>

            {/* Options Configurator */}
            <ProductOptions />

            <div className="flex space-x-4">
              <Button size="lg" className="flex-1 bg-[#fff100] hover:bg-[#e6d800] text-black">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Tabs (Description, Reviews, Specifications) */}
        <div className="mt-12">
          <ProductTabs
            description={
              <div className="rounded-md bg-[#f3f3f3] text-gray-700 px-5 py-4 text-base">
                {sampleProduct.description}
              </div>
            }
            reviews={
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <ProductReviewSummary
                    avgRating={sampleProduct.rating}
                    totalRatings={sampleProduct.numRatings}
                    ratingBreakdown={ratingBreakdown}
                  />
                </div>
                <div className="md:col-span-2">
                  <ProductReviewList reviews={sampleProduct.reviews} />
                </div>
              </div>
            }
            specifications={
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <ul className="text-sm text-gray-700 space-y-2">
                  {sampleProduct.specifications.map((item, idx) => (
                    <li key={idx} className="flex justify-between gap-3">
                      <span className="font-medium">{item.key}</span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </MainLayout>
  );
}
