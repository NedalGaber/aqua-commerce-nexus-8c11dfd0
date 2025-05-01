
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Check, User, Shield, Settings, ClipboardList, ShieldAlert } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow
} from "@/components/ui/table";

// Mock user data
const userData = {
  id: "EMP-001",
  name: "Admin User",
  email: "admin@aquacommerce.com",
  role: "Admin",
  department: "IT",
  joinDate: "2023-01-15",
  phone: "+1 555-123-4567",
  status: "active",
  permissions: [
    { name: "Inventory Management", granted: true },
    { name: "Order Processing", granted: true },
    { name: "User Management", granted: true },
    { name: "Financial Reports", granted: true },
    { name: "Return Approvals", granted: true },
    { name: "System Settings", granted: true }
  ],
  recentActivity: [
    { action: "Updated inventory for MacBook Pro", date: "2024-05-01 14:30" },
    { action: "Approved return request #4532", date: "2024-04-30 11:20" },
    { action: "Modified user permissions for Jane Smith", date: "2024-04-28 09:15" }
  ]
};

const Profile = () => {
  const [messageText, setMessageText] = useState("");
  const [recipientRole, setRecipientRole] = useState("manager");
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
        setMessageText("");
      }, 3000);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button>
            <Settings className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
        
        {/* Profile summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="" alt={userData.name} />
                  <AvatarFallback className="text-3xl bg-aqua-600">{userData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{userData.name}</h3>
                <p className="text-gray-500">{userData.email}</p>
                <Badge className="mt-2" variant={userData.status === "active" ? "default" : "secondary"}>
                  {userData.status === "active" ? "Active" : "Inactive"}
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="text-sm text-gray-500">Employee ID</div>
                  <div className="text-sm font-medium text-right">{userData.id}</div>
                  
                  <div className="text-sm text-gray-500">Role</div>
                  <div className="text-sm font-medium text-right">{userData.role}</div>
                  
                  <div className="text-sm text-gray-500">Department</div>
                  <div className="text-sm font-medium text-right">{userData.department}</div>
                  
                  <div className="text-sm text-gray-500">Join Date</div>
                  <div className="text-sm font-medium text-right">{userData.joinDate}</div>
                  
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-sm font-medium text-right">{userData.phone}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Role & Permissions</CardTitle>
              <CardDescription>Current role: <Badge variant="outline">{userData.role}</Badge></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.permissions.map((permission, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        {permission.granted ? (
                          <Shield className="h-4 w-4 mr-2 text-green-500" />
                        ) : (
                          <ShieldAlert className="h-4 w-4 mr-2 text-gray-400" />
                        )}
                        <span>{permission.name}</span>
                      </div>
                      <Switch checked={permission.granted} disabled />
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Role Description</h4>
                  <p className="text-sm text-gray-600">
                    As an <strong>Admin</strong>, you have full access to all system functionalities, including inventory management, order processing, user access management, and system configuration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Activity and messaging */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Date & Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData.recentActivity.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>{activity.action}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Management</CardTitle>
              <CardDescription>Request assistance or report issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Send message to:</Label>
                  <Select 
                    defaultValue={recipientRole}
                    onValueChange={setRecipientRole}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="hr">HR Department</SelectItem>
                      <SelectItem value="it">IT Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    className="min-h-[120px]"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={handleSendMessage}
                  disabled={!messageText.trim() || messageSent}
                >
                  {messageSent ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Message Sent!
                    </>
                  ) : 'Send Message'}
                </Button>
                
                {messageSent && (
                  <div className="flex items-center p-2 mt-2 bg-green-50 text-green-700 rounded-md text-sm">
                    <Check className="h-4 w-4 mr-2" />
                    Your message has been sent successfully.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Profile;
