
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImagePlus, Plus, Minus, Save, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

// Mock categories
const categories = [
  { id: '1', name: 'Laptops' },
  { id: '2', name: 'Smartphones' },
  { id: '3', name: 'Audio' },
  { id: '4', name: 'TVs' },
  { id: '5', name: 'Cameras' },
  { id: '6', name: 'Gaming' },
  { id: '7', name: 'Monitors' },
];

const AddProduct = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [specs, setSpecs] = useState<{key: string, value: string}[]>([
    { key: '', value: '' }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addSpec = () => {
    setSpecs([...specs, { key: '', value: '' }]);
  };

  const removeSpec = (index: number) => {
    const newSpecs = [...specs];
    newSpecs.splice(index, 1);
    setSpecs(newSpecs);
  };

  const updateSpec = (index: number, field: 'key' | 'value', value: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = value;
    setSpecs(newSpecs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Product Added",
        description: "The product has been successfully added.",
      });
      setIsSubmitting(false);
      navigate('/admin/products');
    }, 1500);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/admin/products')}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <h1 className="text-2xl font-bold">Add New Product</h1>
          </div>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? "Saving..." : "Save Product"}
          </Button>
        </div>
        
        <Tabs defaultValue="basic">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="details">Details & Description</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="images">Images & Media</TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleSubmit}>
            <TabsContent value="basic" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the essential product information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Product Name</Label>
                      <Input id="name" placeholder="Enter product name" required />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="sku">SKU</Label>
                      <Input id="sku" placeholder="e.g., PROD-1001" required />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" step="0.01" placeholder="0.00" required />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="stock">Stock Quantity</Label>
                      <Input id="stock" type="number" placeholder="0" required />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>Add detailed information about the product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="short-description">Short Description</Label>
                      <Textarea 
                        id="short-description" 
                        placeholder="Brief description (displayed in product cards)"
                        className="min-h-20"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="full-description">Full Description</Label>
                      <Textarea 
                        id="full-description" 
                        placeholder="Detailed product description"
                        className="min-h-32"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="features">Key Features</Label>
                      <Textarea 
                        id="features" 
                        placeholder="Key features (one per line)"
                        className="min-h-20"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="warranty">Warranty Information</Label>
                      <Input id="warranty" placeholder="e.g., 1 Year Manufacturer Warranty" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Technical Specifications</CardTitle>
                    <CardDescription>Add technical details for this product</CardDescription>
                  </div>
                  <Button type="button" onClick={addSpec} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Spec
                  </Button>
                </CardHeader>
                <CardContent>
                  {specs.map((spec, index) => (
                    <div key={index} className="flex gap-2 mb-3">
                      <Input
                        value={spec.key}
                        onChange={(e) => updateSpec(index, 'key', e.target.value)}
                        placeholder="Spec name (e.g., Processor)"
                        className="flex-1"
                      />
                      <Input
                        value={spec.value}
                        onChange={(e) => updateSpec(index, 'value', e.target.value)}
                        placeholder="Spec value (e.g., Intel Core i7)"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeSpec(index)}
                        disabled={specs.length === 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="images" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>Upload images of the product</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div>
                      <Label htmlFor="main-image">Main Product Image</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                        <ImagePlus className="h-8 w-8 text-gray-400 mb-2" />
                        <div className="text-sm text-gray-500">
                          Drag and drop an image or <span className="text-blue-500 cursor-pointer">browse</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          PNG, JPG, GIF up to 5MB
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label>Additional Images</Label>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                            <ImagePlus className="h-6 w-6 text-gray-400 mb-1" />
                            <div className="text-xs text-gray-500">Add image</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="video-url">Video URL (optional)</Label>
                      <Input
                        id="video-url"
                        type="url"
                        placeholder="e.g., YouTube or Vimeo URL"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-gray-500">
                    Images should clearly show the product from different angles and highlight key features.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </form>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AddProduct;
