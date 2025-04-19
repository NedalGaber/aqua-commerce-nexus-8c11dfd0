
import * as React from "react";
import { Link } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function DeliveryHeader() {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/delivery" className="flex-shrink-0">
          <Logo />
        </Link>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        </Button>
        
        <Button variant="ghost" size="sm" className="gap-2">
          <div className="h-8 w-8 rounded-full bg-aqua-600 text-white flex items-center justify-center font-semibold">
            D
          </div>
          <span className="hidden md:inline">Delivery</span>
        </Button>
      </div>
    </header>
  );
}
