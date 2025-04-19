
import * as React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function CustomerFooter() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-aqua-600">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-aqua-600">Help Center</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-aqua-600">Returns & Exchanges</Link></li>
              <li><Link to="/order-status" className="text-gray-600 hover:text-aqua-600">Check Order Status</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-aqua-600">Shipping & Delivery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">AquaCommerce</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-aqua-600">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-aqua-600">Careers</Link></li>
              <li><Link to="/corporate-info" className="text-gray-600 hover:text-aqua-600">Corporate Information</Link></li>
              <li><Link to="/news" className="text-gray-600 hover:text-aqua-600">News & Press</Link></li>
              <li><Link to="/investors" className="text-gray-600 hover:text-aqua-600">Investors</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/aquatech" className="text-gray-600 hover:text-aqua-600">AquaTech Membership</Link></li>
              <li><Link to="/trade-in" className="text-gray-600 hover:text-aqua-600">Trade-In Program</Link></li>
              <li><Link to="/business" className="text-gray-600 hover:text-aqua-600">Business Solutions</Link></li>
              <li><Link to="/protection" className="text-gray-600 hover:text-aqua-600">Protection Plans</Link></li>
              <li><Link to="/financing" className="text-gray-600 hover:text-aqua-600">Financing Options</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-aqua-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-aqua-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-aqua-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-aqua-600">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            
            <h3 className="font-semibold text-lg mb-2">Sign Up for Email Updates</h3>
            <p className="text-sm text-gray-600 mb-2">Stay updated on the latest products and deals</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-aqua-500"
              />
              <button className="bg-aqua-600 hover:bg-aqua-700 text-white px-4 py-2 rounded-r-md font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="border-t border-gray-300 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Logo className="mb-2" />
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} AquaCommerce Inc. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-aqua-600">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-aqua-600">Terms of Use</Link>
              <Link to="/accessibility" className="text-sm text-gray-600 hover:text-aqua-600">Accessibility</Link>
              <Link to="/interest-based-ads" className="text-sm text-gray-600 hover:text-aqua-600">Interest-Based Ads</Link>
              <Link to="/ca-privacy" className="text-sm text-gray-600 hover:text-aqua-600">CA Privacy Rights</Link>
              <Link to="/feedback" className="text-sm text-gray-600 hover:text-aqua-600">Do Not Sell My Personal Information</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
