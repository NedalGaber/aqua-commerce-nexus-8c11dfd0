
import * as React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Heart, Menu, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categoryList } from "@/data/mockData";

export function CustomerHeader() {
  const [showCategories, setShowCategories] = React.useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-2xl">
              <Input 
                type="search" 
                placeholder="What can we help you find today?" 
                className="w-full pr-10 focus-visible:ring-aqua-500" 
              />
              <Button className="absolute right-0 top-0 h-full px-3" variant="ghost">
                <Search className="h-5 w-5 text-gray-400" />
              </Button>
            </div>
          </div>
          
          {/* Right actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/recently-viewed">Recently Viewed</Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/order-tracking">Order Status</Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-aqua-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile search */}
        <div className="mt-4 md:hidden">
          <div className="relative w-full">
            <Input 
              type="search" 
              placeholder="What can we help you find today?" 
              className="w-full pr-10" 
            />
            <Button className="absolute right-0 top-0 h-full px-3" variant="ghost">
              <Search className="h-5 w-5 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Categories Navigation */}
      <nav className="bg-aqua-600 text-white py-2 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex items-center space-x-6">
              <div 
                className="flex items-center cursor-pointer"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <Menu className="h-5 w-5 mr-2" />
                <span className="font-medium">Categories</span>
                <ChevronDown className="h-4 w-4 ml-1" />
                
                {/* Categories dropdown */}
                {showCategories && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 text-gray-800 mt-1 border-t border-aqua-300">
                    <div className="container mx-auto px-4 py-4 grid grid-cols-4 gap-6">
                      {categoryList.map((category, index) => (
                        <Link 
                          key={index} 
                          to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="hover:text-aqua-600 py-2"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/deals" className="hover:text-aqua-100">Top Deals</Link>
              <Link to="/deals-of-the-day" className="hover:text-aqua-100">Deal of the Day</Link>
              <Link to="/totaltech" className="hover:text-aqua-100">AquaTech Membership</Link>
              <Link to="/credit-card" className="hover:text-aqua-100">Credit Cards</Link>
              <Link to="/gift-cards" className="hover:text-aqua-100">Gift Cards</Link>
            </div>
            
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-white">
                <Menu className="h-5 w-5 mr-2" />
                Menu
              </Button>
            </div>
            
            <div className="hidden lg:block">
              <Button variant="ghost" className="text-white hover:text-aqua-100">
                Gift Ideas
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
