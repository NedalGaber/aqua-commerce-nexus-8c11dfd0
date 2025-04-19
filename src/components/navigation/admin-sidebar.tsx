
import * as React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart2,
  Settings,
  AlertTriangle,
  Truck,
  ClipboardList,
  PackageCheck,
  PackagePlus,
  PackageX,
  Tag,
  Bell
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AdminSidebar() {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-gray-800">
        <Logo className="text-white" />
      </div>
      
      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <Link
              to="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </li>
          
          <li>
            <Accordion type="single" collapsible className="border-none">
              <AccordionItem value="products" className="border-none">
                <AccordionTrigger className="px-4 py-3 rounded-md hover:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5" />
                    Products
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-8 space-y-1">
                    <li>
                      <Link
                        to="/admin/products/list"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <ClipboardList className="h-4 w-4" />
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/products/add"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <PackagePlus className="h-4 w-4" />
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/products/categories"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <Tag className="h-4 w-4" />
                        Categories
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          
          <li>
            <Accordion type="single" collapsible className="border-none">
              <AccordionItem value="orders" className="border-none">
                <AccordionTrigger className="px-4 py-3 rounded-md hover:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-8 space-y-1">
                    <li>
                      <Link
                        to="/admin/orders/list"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <ClipboardList className="h-4 w-4" />
                        All Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/orders/returns"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <PackageX className="h-4 w-4" />
                        Returns
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          
          <li>
            <Accordion type="single" collapsible className="border-none">
              <AccordionItem value="inventory" className="border-none">
                <AccordionTrigger className="px-4 py-3 rounded-md hover:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <PackageCheck className="h-5 w-5" />
                    Inventory
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-8 space-y-1">
                    <li>
                      <Link
                        to="/admin/inventory/stock"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <ClipboardList className="h-4 w-4" />
                        Stock Levels
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/inventory/warehouses"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <Truck className="h-4 w-4" />
                        Warehouses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/inventory/alerts"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <AlertTriangle className="h-4 w-4" />
                        Low Stock Alerts
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          
          <li>
            <Link
              to="/admin/vendors"
              className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800"
            >
              <Truck className="h-5 w-5" />
              Vendors
            </Link>
          </li>
          
          <li>
            <Link
              to="/admin/users"
              className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800"
            >
              <Users className="h-5 w-5" />
              Users & Staff
            </Link>
          </li>
          
          <li>
            <Accordion type="single" collapsible className="border-none">
              <AccordionItem value="analytics" className="border-none">
                <AccordionTrigger className="px-4 py-3 rounded-md hover:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <BarChart2 className="h-5 w-5" />
                    Analytics
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-8 space-y-1">
                    <li>
                      <Link
                        to="/admin/analytics/sales"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <BarChart2 className="h-4 w-4" />
                        Sales
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/analytics/inventory"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <PackageCheck className="h-4 w-4" />
                        Inventory
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/analytics/reports"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800"
                      >
                        <ClipboardList className="h-4 w-4" />
                        Reports
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          
          <li>
            <Link
              to="/admin/notifications"
              className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800"
            >
              <Bell className="h-5 w-5" />
              Notifications
            </Link>
          </li>
          
          <li>
            <Link
              to="/admin/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-aqua-600 text-white flex items-center justify-center font-semibold">
            A
          </div>
          <div>
            <div className="font-medium">Admin User</div>
            <div className="text-xs text-gray-400">admin@aquacommerce.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
