
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, PlusCircle, Package, Pencil, Trash2, ImagePlus } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for products
const mockProducts = [
  {
    id: "PROD-1001",
    name: "Apple MacBook Pro 16\" M2 Pro",
    sku: "MBPM2-16",
    category: "Laptops",
    price: 2499.99,
    stock: 28,
    status: "in_stock",
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1002",
    name: "Samsung 65\" QLED 4K Smart TV",
    sku: "QLED65-4K",
    category: "TVs",
    price: 1299.99,
    stock: 15,
    status: "in_stock",
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1003",
    name: "Sony WH-1000XM4 Wireless Headphones",
    sku: "WH1000XM4",
    category: "Audio",
    price: 349.99,
    stock: 42,
    status: "in_stock",
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1004",
    name: "iPhone 15 Pro 256GB",
    sku: "IP15P-256",
    category: "Smartphones",
    price: 1099.99,
    stock: 8,
    status: "low_stock",
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1005",
    name: "Canon EOS R5 Mirrorless Camera",
    sku: "CANONR5",
    category: "Cameras",
    price: 3899.99,
    stock: 0,
    status: "out_of_stock",
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1006",
    name: "PlayStation 5 Digital Edition",
    sku: "PS5-DE",
    category: "Gaming",
    price: 399.99,
    stock: 5,
    status: "low_stock",
    image: "/placeholder.svg",
  },
  {
    id: "PROD-1007",
    name: "LG 34\" UltraWide Monitor",
    sku: "LG34UW",
    category: "Monitors",
    price: 649.99,
    stock: 20,
    status: "in_stock",
    image: "/placeholder.svg",
  },
];

// Status badge color mapping
const statusColors = {
  in_stock: "bg-green-100 text-green-800",
  low_stock: "bg-amber-100 text-amber-800",
  out_of_stock: "bg-red-100 text-red-800",
};

// Format status for display
const formatStatus = (status) => {
  switch (status) {
    case 'in_stock': return 'In Stock';
    case 'low_stock': return 'Low Stock';
    case 'out_of_stock': return 'Out of Stock';
    default: return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  
  // Filter products based on search term and category
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (currentCategory === "all") return matchesSearch;
    return matchesSearch && product.category.toLowerCase() === currentCategory.toLowerCase();
  });

  // Calculate metrics
  const metrics = {
    total: mockProducts.length,
    inStock: mockProducts.filter(p => p.status === "in_stock").length,
    lowStock: mockProducts.filter(p => p.status === "low_stock").length,
    outOfStock: mockProducts.filter(p => p.status === "out_of_stock").length,
  };

  // Extract unique categories
  const categories = ["All", ...new Set(mockProducts.map(p => p.category))];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Products Management</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                  Fill in the details to add a new product to your inventory.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="product-name" className="text-right">
                    Product Name
                  </label>
                  <Input id="product-name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="product-sku" className="text-right">
                    SKU
                  </label>
                  <Input id="product-sku" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="category" className="text-right">
                    Category
                  </label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(c => c !== "All").map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="price" className="text-right">
                    Price
                  </label>
                  <div className="relative col-span-3">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                    <Input id="price" type="number" step="0.01" className="pl-7" />
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="stock" className="text-right">
                    Stock Quantity
                  </label>
                  <Input id="stock" type="number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="image" className="text-right">
                    Product Image
                  </label>
                  <div className="col-span-3">
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                      <ImagePlus className="h-10 w-10 text-gray-400 mb-2" />
                      <div className="text-sm text-gray-500">
                        Drag and drop an image or <span className="text-blue-500 cursor-pointer">browse</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        PNG, JPG, GIF up to 10MB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Add Product</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Product metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Products</p>
                <p className="text-2xl font-bold">{metrics.total}</p>
              </div>
              <Package className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Stock</p>
                <p className="text-2xl font-bold">{metrics.inStock}</p>
              </div>
              <Package className="h-8 w-8 text-green-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Low Stock</p>
                <p className="text-2xl font-bold">{metrics.lowStock}</p>
              </div>
              <Package className="h-8 w-8 text-amber-400" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Out of Stock</p>
                <p className="text-2xl font-bold">{metrics.outOfStock}</p>
              </div>
              <Package className="h-8 w-8 text-red-400" />
            </CardContent>
          </Card>
        </div>
        
        {/* Products list */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Product Inventory</CardTitle>
          </CardHeader>
          
          <CardContent>
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all" onValueChange={setCurrentCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.filter(c => c !== "All").map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="in_stock">In Stock</SelectItem>
                    <SelectItem value="low_stock">Low Stock</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Products table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded bg-gray-100 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="h-full w-full object-contain" 
                          />
                        </div>
                        <div className="font-medium">{product.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge className={statusColors[product.status]}>
                        {formatStatus(product.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {/* Pagination */}
            <div className="mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Products;
