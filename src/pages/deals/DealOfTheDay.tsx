
import { MainLayout } from "@/components/layouts/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DealOfTheDay = () => {
  const dealOfTheDay = {
    id: 1,
    title: "65\" Smart 4K TV",
    description: "Premium 4K Ultra HD Smart LED TV with HDR",
    originalPrice: 999.99,
    salePrice: 699.99,
    image: "/placeholder.svg",
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Deal of the Day</h1>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={dealOfTheDay.image}
                  alt={dealOfTheDay.title}
                  className="w-full h-[400px] object-contain"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">
                  <Percent className="w-4 h-4 mr-1" />
                  {Math.round(
                    ((dealOfTheDay.originalPrice - dealOfTheDay.salePrice) /
                      dealOfTheDay.originalPrice) *
                      100
                  )}
                  % OFF
                </Badge>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{dealOfTheDay.title}</h2>
                <p className="text-gray-600">{dealOfTheDay.description}</p>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-600">
                    ${dealOfTheDay.salePrice}
                  </div>
                  <div className="text-lg text-gray-500 line-through">
                    ${dealOfTheDay.originalPrice}
                  </div>
                  <div className="text-green-600 font-semibold">
                    Save $
                    {(
                      dealOfTheDay.originalPrice - dealOfTheDay.salePrice
                    ).toFixed(2)}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Offer ends in 24 hours
                  </p>
                  <Button size="lg" className="w-full">
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to={`/product/${dealOfTheDay.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DealOfTheDay;
