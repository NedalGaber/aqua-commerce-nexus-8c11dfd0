
import { DeliveryLayout } from "@/components/layouts/delivery-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const History = () => {
  // Mock delivery history data
  const completedDeliveries = [
    {
      id: "del4",
      orderId: "o4",
      customer: "Alice Brown",
      address: "101 Elm St, Anytown, CA 90213",
      items: 2,
      deliveredAt: "Today, 11:30 AM",
    },
    {
      id: "del5",
      orderId: "o5",
      customer: "Sam Wilson",
      address: "202 Maple Dr, Somewhere, CA 90214",
      items: 4,
      deliveredAt: "Today, 10:15 AM",
    },
    {
      id: "del6",
      orderId: "o6",
      customer: "Emma Davis",
      address: "303 Cherry Ln, Elsewhere, CA 90215",
      items: 1,
      deliveredAt: "Yesterday, 3:45 PM",
    }
  ];
  
  return (
    <DeliveryLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Delivery History</h1>
        <p className="text-gray-600">Record of your completed deliveries</p>
      </div>
      
      <Tabs defaultValue="today" className="mb-6">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today">
          <div className="space-y-4">
            {completedDeliveries.filter(d => d.deliveredAt.includes("Today")).map((delivery) => (
              <Card key={delivery.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5 text-green-600" />
                      Order #{delivery.orderId}
                    </CardTitle>
                    <span className="text-sm text-gray-500">{delivery.deliveredAt}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Customer:</span>
                      <span className="ml-2">{delivery.customer}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Address:</span>
                      <span className="ml-2">{delivery.address}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Items:</span>
                      <span className="ml-2">{delivery.items}</span>
                    </div>
                    <div className="flex items-center mt-2 text-green-600">
                      <ClipboardCheck className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Delivered Successfully</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="week">
          <div className="space-y-4">
            {completedDeliveries.map((delivery) => (
              <Card key={delivery.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5 text-green-600" />
                      Order #{delivery.orderId}
                    </CardTitle>
                    <span className="text-sm text-gray-500">{delivery.deliveredAt}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Customer:</span>
                      <span className="ml-2">{delivery.customer}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Address:</span>
                      <span className="ml-2">{delivery.address}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Items:</span>
                      <span className="ml-2">{delivery.items}</span>
                    </div>
                    <div className="flex items-center mt-2 text-green-600">
                      <ClipboardCheck className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Delivered Successfully</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="month">
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">Monthly History</h3>
            <p className="text-gray-500">Your delivery history for this month would appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </DeliveryLayout>
  );
};

export default History;
