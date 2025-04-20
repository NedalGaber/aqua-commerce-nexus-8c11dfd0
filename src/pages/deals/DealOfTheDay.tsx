
import { MainLayout } from "@/components/layouts/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DealOfTheDay = () => {
  const deals = [
    {
      id: 1,
      title: "Stanley - 8 Gallon Wet/Dry Vacuum - Stainless",
      rating: 4.5,
      reviews: 203,
      price: 54.99,
      originalPrice: 99.99,
      savings: 45,
      image: "/placeholder.svg",
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    {
      id: 2,
      title: "Insignia™ - 2D Zero Gravity Full Body Massage Chair - Black with silver trim",
      rating: 4.8,
      reviews: 1603,
      price: 1299.99,
      originalPrice: 2499.99,
      savings: 1200,
      image: "/placeholder.svg",
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diff = end.getTime() - now.getTime();

      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-5xl font-bold mb-2">
                <span className="text-yellow-300">DEAL</span> OF THE DAY
              </h1>
              <p className="text-xl mb-2">Don't miss it</p>
              <button className="text-yellow-300 hover:underline text-sm">
                See Deal of the Day FAQs
              </button>
            </div>
            <div className="bg-white text-black px-4 py-2 rounded-lg">
              <div className="text-3xl font-bold text-center">
                {String(timeLeft.hours).padStart(2, '0')} :
                {String(timeLeft.minutes).padStart(2, '0')} :
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-center grid grid-cols-3 gap-4">
                <span>hours</span>
                <span>minutes</span>
                <span>seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="group">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-48 object-contain"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-600">
                    Save ${deal.savings}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-sm flex-1">{deal.title}</h3>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(deal.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({deal.reviews})</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl font-bold">${deal.price}</div>
                    <div className="text-sm text-gray-600">
                      <span className="line-through">
                        ${deal.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/product/${deal.id}`}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default DealOfTheDay;
