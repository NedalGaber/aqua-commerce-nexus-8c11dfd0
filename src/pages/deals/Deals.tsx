
import { MainLayout } from "@/components/layouts/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "MacBook Pro M2",
      description: "Latest model with improved performance",
      originalPrice: 1299,
      salePrice: 1099,
      image: "/placeholder.svg",
      savings: 200,
    },
    // More deals would be added here from the backend
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Top Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Link to={`/product/${deal.id}`} key={deal.id}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="relative">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-48 object-contain mb-4"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-600">
                      <Tag className="w-4 h-4 mr-1" />
                      Save ${deal.savings}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{deal.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{deal.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">
                      ${deal.salePrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Deals;
