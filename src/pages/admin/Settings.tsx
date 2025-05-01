
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Settings = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConfiguring, setIsConfiguring] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      });
    }, 1000);
  };

  const handleConnect = (service: string) => {
    setIsConnecting(true);
    
    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false);
      toast({
        title: `Connected to ${service}`,
        description: "The service has been connected successfully.",
      });
    }, 1500);
  };
  
  const handleConfigure = (service: string) => {
    setIsConfiguring(true);
    
    // Simulate configuration
    setTimeout(() => {
      setIsConfiguring(false);
      toast({
        title: `${service} configured`,
        description: "Your configuration has been saved.",
      });
    }, 1500);
  };
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Settings</h1>
          <Button onClick={handleSubmit} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
        
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure general system settings and store information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Store Information</h3>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="storeName">Store Name</Label>
                      <Input id="storeName" placeholder="Your Store Name" defaultValue="Aqua Commerce" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="storeEmail">Store Email</Label>
                      <Input id="storeEmail" placeholder="store@example.com" defaultValue="info@aquacommerce.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="storePhone">Store Phone</Label>
                      <Input id="storePhone" placeholder="+1 234 567 890" defaultValue="+1 555 123 4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="jpy">JPY (¥)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Address</h3>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="address1">Address Line 1</Label>
                      <Input id="address1" placeholder="Address Line 1" defaultValue="123 Commerce St" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address2">Address Line 2</Label>
                      <Input id="address2" placeholder="Address Line 2" defaultValue="Suite 400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" defaultValue="San Francisco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Province</Label>
                      <Input id="state" placeholder="State / Province" defaultValue="California" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip / Postal Code</Label>
                      <Input id="zipCode" placeholder="Zip / Postal Code" defaultValue="94105" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Settings</h3>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="pst">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                          <SelectItem value="cst">Central Time (CST)</SelectItem>
                          <SelectItem value="est">Eastern Time (EST)</SelectItem>
                          <SelectItem value="utc">UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateFormat">Date Format</Label>
                      <Select defaultValue="mdy">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                      <p className="text-sm text-gray-500">
                        When enabled, customers will see a maintenance page.
                      </p>
                    </div>
                    <Switch id="maintenanceMode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enableReviews">Enable Reviews</Label>
                      <p className="text-sm text-gray-500">
                        Allow customers to leave product reviews.
                      </p>
                    </div>
                    <Switch id="enableReviews" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Optimize your store for search engines.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    placeholder="Meta Title"
                    defaultValue="Aqua Commerce | Premium Online Shopping"
                  />
                  <p className="text-xs text-gray-500">Recommended length: 50-60 characters</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Input
                    id="metaDescription"
                    placeholder="Meta Description"
                    defaultValue="Aqua Commerce offers premium products with fast shipping and excellent customer service."
                  />
                  <p className="text-xs text-gray-500">Recommended length: 150-160 characters</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="socialImageUrl">Social Image URL</Label>
                  <Input
                    id="socialImageUrl"
                    placeholder="https://example.com/image.jpg"
                    defaultValue="https://aquacommerce.com/social-image.jpg"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure when and how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Orders</Label>
                      <p className="text-sm text-gray-500">Receive notifications for new orders.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Inventory Alerts</Label>
                      <p className="text-sm text-gray-500">Get notified when products are low in stock.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Customer Reviews</Label>
                      <p className="text-sm text-gray-500">Be notified when customers leave reviews.</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Marketing Updates</Label>
                      <p className="text-sm text-gray-500">Receive marketing tips and platform updates.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mt-6">System Notifications</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>System Alerts</Label>
                      <p className="text-sm text-gray-500">Important system notifications and updates.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Security Alerts</Label>
                      <p className="text-sm text-gray-500">Get notified about security-related events.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Label htmlFor="notificationEmail">Notification Email</Label>
                  <Input
                    id="notificationEmail"
                    placeholder="notifications@example.com"
                    defaultValue="admin@aquacommerce.com"
                  />
                  <p className="text-xs text-gray-500">All system notifications will be sent to this email.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Configure security settings for your store.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">Authentication</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-500">Require 2FA for admin accounts.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Session Timeout</Label>
                      <p className="text-sm text-gray-500">Automatically log out inactive users.</p>
                    </div>
                    <Select defaultValue="30">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select timeout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Password Requirements</Label>
                      <p className="text-sm text-gray-500">Minimum password complexity.</p>
                    </div>
                    <Select defaultValue="strong">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select strength" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="strong">Strong</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mt-6">API & Integrations</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">API Keys</h4>
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Generate New Key
                      </Button>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm text-gray-500 italic">No API keys found.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>
                  Connect with third-party services and applications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Processors</h3>
                  <Separator />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <span className="text-blue-600 font-bold">S</span>
                        </div>
                        <div>
                          <p className="font-medium">Stripe</p>
                          <p className="text-sm text-gray-500">Process credit card payments</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleConfigure("Stripe")}
                          disabled={isConfiguring}
                        >
                          {isConfiguring ? "Configuring..." : "Configure"}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                          <span className="text-blue-600 font-bold">P</span>
                        </div>
                        <div>
                          <p className="font-medium">PayPal</p>
                          <p className="text-sm text-gray-500">Accept PayPal payments</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleConfigure("PayPal")}
                          disabled={isConfiguring}
                        >
                          {isConfiguring ? "Configuring..." : "Configure"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Shipping & Fulfillment</h3>
                  <Separator />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-purple-100 rounded flex items-center justify-center">
                          <span className="text-purple-600 font-bold">S</span>
                        </div>
                        <div>
                          <p className="font-medium">ShipStation</p>
                          <p className="text-sm text-gray-500">Shipping and order fulfillment</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleConnect("ShipStation")}
                          disabled={isConnecting}
                        >
                          {isConnecting ? "Connecting..." : "Connect"}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-green-100 rounded flex items-center justify-center">
                          <span className="text-green-600 font-bold">S</span>
                        </div>
                        <div>
                          <p className="font-medium">ShipBob</p>
                          <p className="text-sm text-gray-500">Third-party logistics and fulfillment</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleConnect("ShipBob")}
                          disabled={isConnecting}
                        >
                          {isConnecting ? "Connecting..." : "Connect"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Marketing</h3>
                  <Separator />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-red-100 rounded flex items-center justify-center">
                          <span className="text-red-600 font-bold">G</span>
                        </div>
                        <div>
                          <p className="font-medium">Google Analytics</p>
                          <p className="text-sm text-gray-500">Track website visitors and sales</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleConfigure("Google Analytics")}
                          disabled={isConfiguring}
                        >
                          {isConfiguring ? "Configuring..." : "Configure"}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-yellow-100 rounded flex items-center justify-center">
                          <span className="text-yellow-600 font-bold">M</span>
                        </div>
                        <div>
                          <p className="font-medium">Mailchimp</p>
                          <p className="text-sm text-gray-500">Email marketing automation</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleConnect("Mailchimp")}
                          disabled={isConnecting}
                        >
                          {isConnecting ? "Connecting..." : "Connect"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={() => {
                  toast({
                    title: "Adding new integration",
                    description: "Opening integration marketplace...",
                  });
                }}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Integration
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Settings;
