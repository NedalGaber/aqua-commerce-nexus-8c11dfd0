
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Star, ThumbsUp, ThumbsDown } from "lucide-react";

const sampleProduct = {
  name: "Apple MacBook Pro 16” M2 Pro",
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
      user: "Sarah A.",
      rating: 5,
      title: "Super fast and beautiful display",
      comment: "Battery life is incredible. Using for software development and no lag at all.",
      date: "2024-04-20",
      helpful: 19,
      notHelpful: 2,
    },
    {
      id: "2",
      user: "Ahmed R.",
      rating: 4,
      title: "Great for design and video",
      comment: "Handles all my heavy Photoshop and Final Cut Pro work with ease. Could be cheaper.",
      date: "2024-04-16",
      helpful: 10,
      notHelpful: 3,
    },
  ],
};

export default function ProductDetails() {
  const { id } = useParams();
  // Stars
  const renderStars = (score: number) => {
    return (
      <span className="flex items-center">
        {[1,2,3,4,5].map(n => (
          <Star key={n} className={`h-5 w-5 ${score >= n ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
        <span className="ml-2 text-sm text-gray-500">{score.toFixed(1)}</span>
      </span>
    );
  };

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
                    alt={`Thumbnail ${idx+1}`}
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
                {renderStars(sampleProduct.rating)}
                <span className="text-sm text-gray-500">{sampleProduct.numRatings} ratings</span>
              </div>
              <p className="text-gray-500">SKU: {id || sampleProduct.sku}</p>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-bold">EGP {sampleProduct.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              <span className="text-xl text-gray-500 line-through">EGP {sampleProduct.originalPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Description</h3>
              <p className="text-gray-600">
                {sampleProduct.description}
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

        {/* Specifications & Reviews (like Amazon) */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Specs */}
          <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4">Product Specifications</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              {sampleProduct.specifications.map((item, idx) => (
                <li key={idx} className="flex justify-between gap-3">
                  <span className="font-medium">{item.key}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4">Customer Reviews</h3>
            <div className="space-y-6">
              {sampleProduct.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0 space-y-1">
                  <div className="flex items-center space-x-2">
                    {renderStars(review.rating)}
                    <span className="font-medium">{review.user}</span>
                    <span className="text-gray-400 text-xs">{review.date}</span>
                  </div>
                  <div className="font-semibold">{review.title}</div>
                  <div className="text-gray-600 text-sm">{review.comment}</div>
                  <div className="flex items-center mt-2 gap-2 text-xs text-gray-500">
                    <ThumbsUp className="w-4 h-4" /> {review.helpful} 
                    <ThumbsDown className="w-4 h-4 ml-4" /> {review.notHelpful}
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

