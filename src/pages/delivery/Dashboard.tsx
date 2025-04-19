
import { DeliveryLayout } from "@/components/layouts/delivery-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Check, MapPin, Clock, Navigation } from "lucide-react";

const Dashboard = () => {
  // Mock delivery data
  const deliveries = [
    {
      id: "del1",
      orderId: "o1",
      customer: "John Doe",
      address: "123 Main St, Anytown, CA 90210",
      status: "assigned", // assigned, in_progress, completed
      items: 3,
      estimatedDeliveryTime: "10:30 AM - 11:30 AM",
    },
    {
      id: "del2",
      orderId: "o2",
      customer: "Jane Smith",
      address: "456 Oak Ave, Somewhere, CA 90211",
      status: "in_progress",
      items: 1,
      estimatedDeliveryTime: "11:45 AM - 12:45 PM",
    },
    {
      id: "del3",
      orderId: "o3",
      customer: "Robert Johnson",
      address: "789 Pine Rd, Elsewhere, CA 90212",
      status: "assigned",
      items: 2,
      estimatedDeliveryTime: "2:15 PM - 3:15 PM",
    }
  ];
  
  return (
    <DeliveryLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Hello, Delivery Driver</h1>
        <p className="text-gray-600">You have 3 deliveries scheduled for today.</p>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Package className="h-8 w-8 text-aqua-600 mb-2" />
            <p className="text-xl font-bold">5</p>
            <p className="text-xs text-gray-500">Packages Today</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Check className="h-8 w-8 text-green-600 mb-2" />
            <p className="text-xl font-bold">2</p>
            <p className="text-xs text-gray-500">Delivered</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <MapPin className="h-8 w-8 text-red-600 mb-2" />
            <p className="text-xl font-bold">3</p>
            <p className="text-xs text-gray-500">Remaining</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Clock className="h-8 w-8 text-orange-600 mb-2" />
            <p className="text-xl font-bold">4:30</p>
            <p className="text-xs text-gray-500">ETA to Next</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Current Delivery */}
      {deliveries.find(d => d.status === "in_progress") && (
        <Card className="mb-6 border-l-4 border-l-aqua-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center">
              <span>Current Delivery</span>
              <Button variant="default" size="sm" className="bg-aqua-600 hover:bg-aqua-700 gap-2">
                <Navigation className="h-4 w-4" />
                Navigate
              </Button>
            </CardTitle>
            <CardDescription>Order #{deliveries.find(d => d.status === "in_progress")?.orderId}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium text-gray-500">Customer:</span>
                <span className="ml-2">{deliveries.find(d => d.status === "in_progress")?.customer}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Address:</span>
                <span className="ml-2">{deliveries.find(d => d.status === "in_progress")?.address}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Items:</span>
                <span className="ml-2">{deliveries.find(d => d.status === "in_progress")?.items}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Estimated Delivery:</span>
                  <span className="ml-2">{deliveries.find(d => d.status === "in_progress")?.estimatedDeliveryTime}</span>
                </div>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
                  Mark as Delivered
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Upcoming Deliveries */}
      <h2 className="text-xl font-semibold mb-4">Upcoming Deliveries</h2>
      <div className="space-y-4">
        {deliveries
          .filter(delivery => delivery.status === "assigned")
          .map(delivery => (
            <Card key={delivery.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Order #{delivery.orderId}</CardTitle>
                <CardDescription>{delivery.estimatedDeliveryTime}</CardDescription>
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
                  <div className="flex justify-end mt-2">
                    <Button variant="outline" className="border-aqua-500 text-aqua-600 hover:bg-aqua-50 hover:text-aqua-700 mr-2">
                      View Details
                    </Button>
                    <Button variant="default" className="bg-aqua-600 hover:bg-aqua-700">
                      Start Delivery
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </DeliveryLayout>
  );
};

export default Dashboard;
