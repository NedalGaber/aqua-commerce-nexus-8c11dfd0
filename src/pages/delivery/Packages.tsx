
import { DeliveryLayout } from "@/components/layouts/delivery-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Packages = () => {
  // Mock packages data
  const packages = [
    {
      id: "pkg1",
      orderId: "o1",
      customer: "John Doe",
      address: "123 Main St, Anytown, CA 90210",
      items: 3,
      status: "assigned"
    },
    {
      id: "pkg2",
      orderId: "o2",
      customer: "Jane Smith",
      address: "456 Oak Ave, Somewhere, CA 90211",
      items: 1,
      status: "assigned"
    },
    {
      id: "pkg3",
      orderId: "o3",
      customer: "Robert Johnson",
      address: "789 Pine Rd, Elsewhere, CA 90212",
      items: 2,
      status: "assigned"
    }
  ];
  
  return (
    <DeliveryLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">My Packages</h1>
        <p className="text-gray-600">All packages assigned to you for delivery</p>
      </div>

      <div className="space-y-4">
        {packages.map((pkg) => (
          <Card key={pkg.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Package className="h-5 w-5 text-aqua-600" />
                Order #{pkg.orderId}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Customer:</span>
                  <span className="ml-2">{pkg.customer}</span>
                </div>
                <div className="flex items-start gap-1">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{pkg.address}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Items:</span>
                  <span className="ml-2">{pkg.items}</span>
                </div>
                <div className="flex justify-end mt-2">
                  <Button variant="outline" className="mr-2">View Details</Button>
                  <Button className="bg-aqua-600 hover:bg-aqua-700">Start Delivery</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DeliveryLayout>
  );
};

export default Packages;
