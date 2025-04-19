
import { DeliveryLayout } from "@/components/layouts/delivery-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Navigation } from "lucide-react";

const Routes = () => {
  return (
    <DeliveryLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">My Routes</h1>
        <p className="text-gray-600">Optimized delivery routes for your packages</p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Map className="h-5 w-5 text-aqua-600" />
            Today's Route
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-md h-64 flex items-center justify-center mb-4">
            <p className="text-gray-500">Map view would be displayed here</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 border-b">
              <div className="flex items-center gap-2">
                <span className="bg-aqua-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>123 Main St, Anytown</span>
              </div>
              <Navigation className="h-4 w-4 text-aqua-600" />
            </div>
            <div className="flex justify-between items-center p-2 border-b">
              <div className="flex items-center gap-2">
                <span className="bg-aqua-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>456 Oak Ave, Somewhere</span>
              </div>
              <Navigation className="h-4 w-4 text-aqua-600" />
            </div>
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <span className="bg-aqua-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>789 Pine Rd, Elsewhere</span>
              </div>
              <Navigation className="h-4 w-4 text-aqua-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </DeliveryLayout>
  );
};

export default Routes;
