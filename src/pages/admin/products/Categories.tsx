
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
import { Checkbox } from "@/components/ui/checkbox";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for categories
const initialCategories = [
  { id: '1', name: 'Laptops', products: 45, featured: true },
  { id: '2', name: 'Smartphones', products: 78, featured: true },
  { id: '3', name: 'Audio', products: 32, featured: false },
  { id: '4', name: 'TVs', products: 23, featured: true },
  { id: '5', name: 'Cameras', products: 18, featured: false },
  { id: '6', name: 'Gaming', products: 37, featured: true },
  { id: '7', name: 'Monitors', products: 22, featured: false },
  { id: '8', name: 'Smart Home', products: 15, featured: true },
  { id: '9', name: 'Tablets', products: 29, featured: false },
  { id: '10', name: 'Wearables', products: 31, featured: true },
];

const Categories = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState<{id?: string, name: string, featured: boolean}>({
    name: '',
    featured: false
  });
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);

  // Filter categories based on search term
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCategory = () => {
    const newId = (Math.max(...categories.map(c => parseInt(c.id))) + 1).toString();
    const newCategory = {
      id: newId,
      name: currentCategory.name,
      products: 0,
      featured: currentCategory.featured
    };
    
    setCategories([...categories, newCategory]);
    setIsAddDialogOpen(false);
    setCurrentCategory({ name: '', featured: false });
    
    toast({
      title: "Category Added",
      description: `${currentCategory.name} has been added.`,
    });
  };

  const handleEditCategory = () => {
    if (!currentCategory.id) return;
    
    const updatedCategories = categories.map(category => 
      category.id === currentCategory.id ? 
        { ...category, name: currentCategory.name, featured: currentCategory.featured } : 
        category
    );
    
    setCategories(updatedCategories);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Category Updated",
      description: `${currentCategory.name} has been updated.`,
    });
  };

  const handleDeleteCategory = () => {
    if (!categoryToDelete) return;
    
    const updatedCategories = categories.filter(
      category => category.id !== categoryToDelete
    );
    
    const deletedCategory = categories.find(c => c.id === categoryToDelete)?.name;
    
    setCategories(updatedCategories);
    setCategoryToDelete(null);
    
    toast({
      title: "Category Deleted",
      description: `${deletedCategory} has been deleted.`,
    });
  };

  const openEditDialog = (category: typeof initialCategories[0]) => {
    setCurrentCategory({
      id: category.id,
      name: category.name,
      featured: category.featured
    });
    setIsEditDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Categories Management</h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Category
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>
                  Create a new product category.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="name">Category Name</label>
                  <Input 
                    id="name" 
                    value={currentCategory.name}
                    onChange={(e) => setCurrentCategory({...currentCategory, name: e.target.value})}
                    placeholder="e.g., Headphones" 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="featured" 
                    checked={currentCategory.featured}
                    onCheckedChange={(checked) => 
                      setCurrentCategory({...currentCategory, featured: checked === true})
                    }
                  />
                  <label
                    htmlFor="featured"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Featured Category
                  </label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCategory} disabled={!currentCategory.name.trim()}>
                  Create Category
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Categories list */}
        <Card>
          <CardHeader>
            <CardTitle>Product Categories</CardTitle>
          </CardHeader>
          
          <CardContent>
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Search categories..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Categories table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category Name</TableHead>
                    <TableHead className="text-right">Products</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell className="font-medium">{category.name}</TableCell>
                      <TableCell className="text-right">{category.products}</TableCell>
                      <TableCell>
                        {category.featured ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Featured
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Standard
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditDialog(category)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => setCategoryToDelete(category.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete the
                                  "{category.name}" category and remove its association from all products.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setCategoryToDelete(null)}>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDeleteCategory} className="bg-red-600 hover:bg-red-700">
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Edit Category Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>
              Make changes to the category.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="edit-name">Category Name</label>
              <Input 
                id="edit-name" 
                value={currentCategory.name}
                onChange={(e) => setCurrentCategory({...currentCategory, name: e.target.value})}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="edit-featured" 
                checked={currentCategory.featured}
                onCheckedChange={(checked) => 
                  setCurrentCategory({...currentCategory, featured: checked === true})
                }
              />
              <label
                htmlFor="edit-featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Featured Category
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditCategory}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Categories;
