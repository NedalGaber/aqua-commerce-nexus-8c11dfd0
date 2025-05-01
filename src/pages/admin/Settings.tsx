
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Settings as SettingsIcon, 
  Mail, 
  CreditCard, 
  Bell, 
  ShieldCheck, 
  Globe,
  Truck,
  Store,
  Percent,
  Upload
} from "lucide-react";

const Settings = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">System Settings</h1>
          <div className="flex gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Settings</Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid grid-cols-5 md:w-fit">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Store Information</CardTitle>
                  <CardDescription>
                    Configure your store's basic details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="store-name">Store Name</Label>
                    <Input id="store-name" defaultValue="TechXpress" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="store-email">Store Email Address</Label>
                    <Input id="store-email" type="email" defaultValue="contact@techxpress.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="store-phone">Store Phone Number</Label>
                    <Input id="store-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="store-address">Store Address</Label>
                    <Textarea id="store-address" defaultValue="123 Tech Street, San Francisco, CA 94105, United States" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="store-currency">Default Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="jpy">JPY (¥)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                      <Input id="tax-rate" type="number" step="0.01" defaultValue="10.00" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="store-timezone">Store Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Store Logo & Branding</CardTitle>
                  <CardDescription>
                    Customize your store's visual identity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Store Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 rounded-md bg-gray-100 flex items-center justify-center">
                        <SettingsIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Logo
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Store Favicon</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center">
                        <SettingsIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Favicon
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="color"
                        id="primary-color"
                        defaultValue="#0ea5e9"
                        className="w-20 h-10 p-1"
                      />
                      <Input defaultValue="#0ea5e9" className="flex-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                  <CardDescription>
                    Configure search engine optimization settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="meta-title">Meta Title</Label>
                    <Input id="meta-title" defaultValue="TechXpress | Premium Electronics Store" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Textarea 
                      id="meta-description" 
                      defaultValue="TechXpress offers premium electronics including laptops, smartphones, TVs, and accessories with fast shipping and exceptional customer service."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="meta-keywords">Meta Keywords</Label>
                    <Input 
                      id="meta-keywords" 
                      defaultValue="electronics, laptops, smartphones, TVs, tech, gadgets"
                    />
                    <p className="text-sm text-gray-500">Separate keywords with commas</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Shipping Settings */}
          <TabsContent value="shipping">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Methods</CardTitle>
                  <CardDescription>
                    Configure shipping methods for your store
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Truck className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Standard Shipping</p>
                          <p className="text-sm text-gray-500">3-5 business days</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-medium">$5.99</p>
                        <Switch id="enable-standard" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Truck className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Express Shipping</p>
                          <p className="text-sm text-gray-500">1-2 business days</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-medium">$14.99</p>
                        <Switch id="enable-express" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Store className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Store Pickup</p>
                          <p className="text-sm text-gray-500">Available during store hours</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-medium">Free</p>
                        <Switch id="enable-pickup" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="gap-2">
                      <Plus className="h-4 w-4" />
                      Add Shipping Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Free Shipping Rules</CardTitle>
                  <CardDescription>
                    Set thresholds for free shipping offers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Switch id="enable-free-shipping" defaultChecked />
                    <Label htmlFor="enable-free-shipping">Enable free shipping threshold</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="free-shipping-threshold">Order minimum for free shipping</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                      <Input id="free-shipping-threshold" className="pl-7" defaultValue="50.00" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Locations</CardTitle>
                  <CardDescription>
                    Configure where your products can be shipped
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Label className="font-medium">Shipping Regions</Label>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="region-domestic" className="rounded" defaultChecked />
                        <Label htmlFor="region-domestic">Domestic (United States)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="region-canada" className="rounded" defaultChecked />
                        <Label htmlFor="region-canada">Canada</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="region-europe" className="rounded" />
                        <Label htmlFor="region-europe">Europe</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="region-asia" className="rounded" />
                        <Label htmlFor="region-asia">Asia Pacific</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="region-australia" className="rounded" />
                        <Label htmlFor="region-australia">Australia/NZ</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="region-other" className="rounded" />
                        <Label htmlFor="region-other">Rest of World</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Payment Settings */}
          <TabsContent value="payment">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Configure payment methods for your store
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Credit / Debit Cards</p>
                          <p className="text-sm text-gray-500">Visa, Mastercard, Amex, Discover</p>
                        </div>
                      </div>
                      <Switch id="enable-cards" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="PayPal" className="h-5 w-5" />
                        <div>
                          <p className="font-medium">PayPal</p>
                          <p className="text-sm text-gray-500">Pay with your PayPal account</p>
                        </div>
                      </div>
                      <Switch id="enable-paypal" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968472.png" alt="Apple Pay" className="h-5 w-5" />
                        <div>
                          <p className="font-medium">Apple Pay</p>
                          <p className="text-sm text-gray-500">Pay with Apple Pay</p>
                        </div>
                      </div>
                      <Switch id="enable-applepay" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="Google Pay" className="h-5 w-5" />
                        <div>
                          <p className="font-medium">Google Pay</p>
                          <p className="text-sm text-gray-500">Pay with Google Pay</p>
                        </div>
                      </div>
                      <Switch id="enable-googlepay" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tax Settings</CardTitle>
                  <CardDescription>
                    Configure tax calculations for your orders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Switch id="enable-tax-calculation" defaultChecked />
                    <Label htmlFor="enable-tax-calculation">Enable automatic tax calculation</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="default-tax-rate">Default Tax Rate (%)</Label>
                    <Input id="default-tax-rate" type="number" step="0.01" defaultValue="10.00" />
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">Configure Tax Regions</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Order Settings</CardTitle>
                  <CardDescription>
                    Configure order processing settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="order-prefix">Order Number Prefix</Label>
                    <Input id="order-prefix" defaultValue="ORD-" />
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Switch id="hold-for-review" />
                    <Label htmlFor="hold-for-review">Hold new orders for review before processing</Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Switch id="enable-guest-checkout" defaultChecked />
                    <Label htmlFor="enable-guest-checkout">Allow guest checkout</Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>
                    Configure automated emails for your store
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Order Confirmation</p>
                          <p className="text-sm text-gray-500">Send when a customer places an order</p>
                        </div>
                      </div>
                      <Switch id="email-order-confirmation" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Truck className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Shipping Confirmation</p>
                          <p className="text-sm text-gray-500">Send when an order ships</p>
                        </div>
                      </div>
                      <Switch id="email-shipping" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Order Status Updates</p>
                          <p className="text-sm text-gray-500">Send when order status changes</p>
                        </div>
                      </div>
                      <Switch id="email-status-updates" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Percent className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="font-medium">Promotional Emails</p>
                          <p className="text-sm text-gray-500">Send marketing and promotions</p>
                        </div>
                      </div>
                      <Switch id="email-promotions" />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline">Customize Email Templates</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Admin Notifications</CardTitle>
                  <CardDescription>
                    Configure notifications for store administrators
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Order Notifications</p>
                      <p className="text-sm text-gray-500">Notify when new orders are placed</p>
                    </div>
                    <Switch id="admin-new-orders" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Low Stock Alerts</p>
                      <p className="text-sm text-gray-500">Notify when products reach low stock threshold</p>
                    </div>
                    <Switch id="admin-low-stock" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Customer Reviews</p>
                      <p className="text-sm text-gray-500">Notify when customers leave new reviews</p>
                    </div>
                    <Switch id="admin-reviews" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Appearance Settings */}
          <TabsContent value="appearance">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Settings</CardTitle>
                  <CardDescription>
                    Customize the look and feel of your store
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-md p-4 cursor-pointer hover:border-blue-500">
                      <div className="h-32 bg-blue-100 rounded-md mb-2"></div>
                      <p className="font-medium">Default Theme</p>
                      <Badge className="mt-1">Active</Badge>
                    </div>
                    <div className="border rounded-md p-4 cursor-pointer hover:border-blue-500">
                      <div className="h-32 bg-gray-900 rounded-md mb-2"></div>
                      <p className="font-medium">Dark Theme</p>
                      <Button size="sm" variant="outline" className="mt-1">Activate</Button>
                    </div>
                    <div className="border rounded-md p-4 cursor-pointer hover:border-blue-500">
                      <div className="h-32 bg-green-100 rounded-md mb-2"></div>
                      <p className="font-medium">Nature Theme</p>
                      <Button size="sm" variant="outline" className="mt-1">Activate</Button>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Custom Theme
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Homepage Layout</CardTitle>
                  <CardDescription>
                    Configure your store's homepage sections
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="font-medium">Hero Banner</div>
                      <div className="flex items-center space-x-2">
                        <Badge>Active</Badge>
                        <Button size="sm" variant="ghost">Edit</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="font-medium">Featured Products</div>
                      <div className="flex items-center space-x-2">
                        <Badge>Active</Badge>
                        <Button size="sm" variant="ghost">Edit</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="font-medium">Promotional Banner</div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-gray-100">Inactive</Badge>
                        <Button size="sm" variant="ghost">Edit</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="font-medium">Product Categories</div>
                      <div className="flex items-center space-x-2">
                        <Badge>Active</Badge>
                        <Button size="sm" variant="ghost">Edit</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="font-medium">Customer Reviews</div>
                      <div className="flex items-center space-x-2">
                        <Badge>Active</Badge>
                        <Button size="sm" variant="ghost">Edit</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
