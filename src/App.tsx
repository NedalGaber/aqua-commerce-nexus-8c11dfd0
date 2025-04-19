import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cart from "./pages/cart/Cart";
import ProductsView from "./pages/products/ProductsView";
import ProductDetails from "./pages/products/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import Wishlist from "./pages/wishlist/Wishlist";
import RecentlyViewed from "./pages/history/RecentlyViewed";
import OrderTracking from "./pages/orders/OrderTracking";
import Invoice from "./pages/orders/Invoice";

// Admin imports
import AdminDashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Inventory from "./pages/admin/Inventory";
import Users from "./pages/admin/Users";
import Settings from "./pages/admin/Settings";

// Delivery imports
import Dashboard from "./pages/delivery/Dashboard";
import Packages from "./pages/delivery/Packages";
import DeliveryRoutes from "./pages/delivery/Routes";
import History from "./pages/delivery/History";
import DeliveryProfile from "./pages/delivery/Profile";

const App = () => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Customer Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/recently-viewed" element={<RecentlyViewed />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/inventory" element={<Inventory />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/settings" element={<Settings />} />
            
            {/* Delivery Routes */}
            <Route path="/delivery" element={<Dashboard />} />
            <Route path="/delivery/packages" element={<Packages />} />
            <Route path="/delivery/routes" element={<DeliveryRoutes />} />
            <Route path="/delivery/history" element={<History />} />
            <Route path="/delivery/profile" element={<DeliveryProfile />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
