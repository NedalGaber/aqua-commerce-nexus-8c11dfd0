
import React, { useState } from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, AlertTriangle, Search, Trash, Check, X } from "lucide-react";
import { format } from "date-fns";

// Mock notifications data
const notificationsData = [
  {
    id: "n1",
    title: "Low Stock Alert",
    description: "Product ID: p5 (Apple MacBook Pro) is running low on stock.",
    type: "alert",
    status: "unread",
    timestamp: new Date(Date.now() - 15 * 60000),
  },
  {
    id: "n2",
    title: "New Order Received",
    description: "Order #12345 has been placed. Ready for processing.",
    type: "order",
    status: "unread",
    timestamp: new Date(Date.now() - 60 * 60000),
  },
  {
    id: "n3",
    title: "Return Request",
    description: "Customer requested return for Order #12340.",
    type: "return",
    status: "read",
    timestamp: new Date(Date.now() - 3 * 60 * 60000),
  },
  {
    id: "n4",
    title: "System Update",
    description: "A new system update is available. Please save your work and refresh the application.",
    type: "system",
    status: "unread",
    timestamp: new Date(Date.now() - 5 * 60 * 60000),
  },
  {
    id: "n5",
    title: "Inventory Reconciliation Required",
    description: "Manual inventory check requested for category: Electronics.",
    type: "alert",
    status: "read",
    timestamp: new Date(Date.now() - 8 * 60 * 60000),
  },
  {
    id: "n6",
    title: "High Traffic Alert",
    description: "The website is experiencing unusually high traffic. Server resources have been automatically scaled.",
    type: "system",
    status: "read",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60000),
  }
];

// Mock messages data
const messagesData = [
  {
    id: "m1",
    sender: "Warehouse Manager",
    content: "Shipment received for order #12339. Stock has been updated accordingly.",
    status: "unread",
    timestamp: new Date(Date.now() - 20 * 60000),
    avatar: "WM"
  },
  {
    id: "m2",
    sender: "Support Team",
    content: "Customer feedback needs review. Customer John Doe has reported an issue with their recent order.",
    status: "unread",
    timestamp: new Date(Date.now() - 2 * 60 * 60000),
    avatar: "ST"
  },
  {
    id: "m3",
    sender: "IT Department",
    content: "System maintenance scheduled for tonight at 2 AM. The admin panel will be inaccessible for approximately 30 minutes.",
    status: "read",
    timestamp: new Date(Date.now() - 4 * 60 * 60000),
    avatar: "IT"
  },
  {
    id: "m4",
    sender: "Returns Department",
    content: "Approval needed for high-value return. Order #45892 includes items worth over $1000.",
    status: "unread",
    timestamp: new Date(Date.now() - 6 * 60 * 60000),
    avatar: "RD"
  },
  {
    id: "m5",
    sender: "Marketing Team",
    content: "New promotional campaign launched. Please review the updated product descriptions and pricing.",
    status: "read",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60000),
    avatar: "MT"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "alert":
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case "order":
      return <Bell className="h-5 w-5 text-blue-500" />;
    case "return":
      return <Mail className="h-5 w-5 text-purple-500" />;
    case "system":
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return <Bell className="h-5 w-5 text-gray-500" />;
  }
};

const Notifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState(notificationsData);
  const [messages, setMessages] = useState(messagesData);
  const [activeTab, setActiveTab] = useState("notifications");

  const unreadNotifications = notifications.filter(n => n.status === "unread").length;
  const unreadMessages = messages.filter(m => m.status === "unread").length;

  // Filter notifications based on search
  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    notification.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter messages based on search
  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) || 
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markAsRead = (id: string, type: "notification" | "message") => {
    if (type === "notification") {
      setNotifications(notifications.map(n => 
        n.id === id ? { ...n, status: "read" } : n
      ));
    } else {
      setMessages(messages.map(m => 
        m.id === id ? { ...m, status: "read" } : m
      ));
    }
  };

  const markAllAsRead = (type: "notification" | "message") => {
    if (type === "notification") {
      setNotifications(notifications.map(n => ({ ...n, status: "read" })));
    } else {
      setMessages(messages.map(m => ({ ...m, status: "read" })));
    }
  };

  const deleteItem = (id: string, type: "notification" | "message") => {
    if (type === "notification") {
      setNotifications(notifications.filter(n => n.id !== id));
    } else {
      setMessages(messages.filter(m => m.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Notifications & Messages</h1>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => markAllAsRead(activeTab === "notifications" ? "notification" : "message")}
            >
              <Check className="mr-2 h-4 w-4" />
              Mark All as Read
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                placeholder="Search notifications and messages..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="notifications" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="notifications" className="relative">
              Notifications
              {unreadNotifications > 0 && (
                <Badge className="ml-2 bg-red-500">{unreadNotifications}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="messages" className="relative">
              Messages
              {unreadMessages > 0 && (
                <Badge className="ml-2 bg-red-500">{unreadMessages}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications" className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Bell className="h-12 w-12 text-gray-300" />
                  <p className="mt-4 text-lg font-medium">No notifications found</p>
                  <p className="text-gray-500">You're all caught up!</p>
                </CardContent>
              </Card>
            ) : (
              filteredNotifications.map(notification => (
                <Card key={notification.id} className={notification.status === "unread" ? "border-l-4 border-l-blue-500" : ""}>
                  <CardContent className="p-4 flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        {getTypeIcon(notification.type)}
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {notification.title}
                          {notification.status === "unread" && <Badge className="bg-blue-500">New</Badge>}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {format(notification.timestamp, "MMM d, yyyy 'at' h:mm a")}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {notification.status === "unread" && (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => markAsRead(notification.id, "notification")}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => deleteItem(notification.id, "notification")}
                      >
                        <Trash className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
          
          <TabsContent value="messages" className="space-y-4">
            {filteredMessages.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Mail className="h-12 w-12 text-gray-300" />
                  <p className="mt-4 text-lg font-medium">No messages found</p>
                  <p className="text-gray-500">Your inbox is empty!</p>
                </CardContent>
              </Card>
            ) : (
              filteredMessages.map(message => (
                <Card key={message.id} className={message.status === "unread" ? "border-l-4 border-l-purple-500" : ""}>
                  <CardContent className="p-4 flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                        {message.avatar}
                      </div>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {message.sender}
                          {message.status === "unread" && <Badge className="bg-purple-500">New</Badge>}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{message.content}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {format(message.timestamp, "MMM d, yyyy 'at' h:mm a")}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {message.status === "unread" && (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => markAsRead(message.id, "message")}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => deleteItem(message.id, "message")}
                      >
                        <Trash className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Notifications;
