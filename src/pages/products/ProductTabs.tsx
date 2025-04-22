
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ProductTabsProps {
  description: React.ReactNode;
  reviews: React.ReactNode;
  specifications: React.ReactNode;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({ description, reviews, specifications }) => (
  <div className="bg-white rounded-lg border border-gray-200">
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="gap-2 bg-[#f6f6f7] rounded-t-lg border-b border-gray-200">
        <TabsTrigger value="description" className="rounded-t-md">Description</TabsTrigger>
        <TabsTrigger value="reviews" className="rounded-t-md">Reviews</TabsTrigger>
        <TabsTrigger value="specs" className="rounded-t-md">Specifications</TabsTrigger>
      </TabsList>
      <div className="p-6">
        <TabsContent value="description">{description}</TabsContent>
        <TabsContent value="reviews">{reviews}</TabsContent>
        <TabsContent value="specs">{specifications}</TabsContent>
      </div>
    </Tabs>
  </div>
);
