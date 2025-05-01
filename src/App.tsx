
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
import OrdersAndInvoices from "./pages/orders/OrdersAndInvoices";
import Returns from "./pages/orders/Returns";
import Invoice from "./pages/orders/Invoice";

// Legal pages
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Accessibility from "./pages/legal/Accessibility";
import InterestBasedAds from "./pages/legal/InterestBasedAds";

// Admin imports
import AdminDashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Inventory from "./pages/admin/Inventory";
import Users from "./pages/admin/Users";
import Settings from "./pages/admin/Settings";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AddPayment from "./pages/payment/AddPayment";
import AddPhone from "./pages/profile/AddPhone";
import AddAddress from "./pages/profile/AddAddress";

// Deals imports
import Deals from "./pages/deals/Deals";
import DealOfTheDay from "./pages/deals/DealOfTheDay";

// Info page imports
import Contact from "./pages/info/Contact";
import About from "./pages/info/About";

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
            {/* Auth Routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Customer Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/add-phone" element={<AddPhone />} />
            <Route path="/profile/add-address" element={<AddAddress />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/recently-viewed" element={<RecentlyViewed />} />
            <Route path="/orders-and-invoices" element={<OrdersAndInvoices />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/add-payment" element={<AddPayment />} />
            
            {/* Legal Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/interest-based-ads" element={<InterestBasedAds />} />
            
            {/* Deals Routes */}
            <Route path="/deals" element={<Deals />} />
            <Route path="/deals-of-the-day" element={<DealOfTheDay />} />
            
            {/* Info Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/inventory" element={<Inventory />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/settings" element={<Settings />} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
