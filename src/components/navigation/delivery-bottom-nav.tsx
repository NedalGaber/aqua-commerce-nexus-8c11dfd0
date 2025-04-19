
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, Map, ClipboardList, User } from "lucide-react";

export function DeliveryBottomNav() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 sm:hidden">
      <nav className="grid grid-cols-5 gap-1">
        <Link 
          to="/delivery" 
          className={`flex flex-col items-center justify-center p-2 ${
            isActive("/delivery") ? "text-aqua-600" : "text-gray-600"
          }`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/delivery/packages" 
          className={`flex flex-col items-center justify-center p-2 ${
            isActive("/delivery/packages") ? "text-aqua-600" : "text-gray-600"
          }`}
        >
          <Package className="h-5 w-5" />
          <span className="text-xs mt-1">Packages</span>
        </Link>
        
        <Link 
          to="/delivery/routes" 
          className={`flex flex-col items-center justify-center p-2 ${
            isActive("/delivery/routes") ? "text-aqua-600" : "text-gray-600"
          }`}
        >
          <Map className="h-5 w-5" />
          <span className="text-xs mt-1">Routes</span>
        </Link>
        
        <Link 
          to="/delivery/history" 
          className={`flex flex-col items-center justify-center p-2 ${
            isActive("/delivery/history") ? "text-aqua-600" : "text-gray-600"
          }`}
        >
          <ClipboardList className="h-5 w-5" />
          <span className="text-xs mt-1">History</span>
        </Link>
        
        <Link 
          to="/delivery/profile" 
          className={`flex flex-col items-center justify-center p-2 ${
            isActive("/delivery/profile") ? "text-aqua-600" : "text-gray-600"
          }`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
