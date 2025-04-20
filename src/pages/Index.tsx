import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categories, featuredDeals } from "@/data/mockData";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-aqua-900 to-aqua-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">SPRING SALE</h1>
              <p className="text-xl mb-8">Big deals are here. Refresh your gear.</p>
              <Button size="lg" variant="default" className="bg-white text-aqua-800 hover:bg-gray-100">
                Shop now
              </Button>
            </div>
            <div className="hidden md:block">
              {/* This would be a hero image */}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Deals */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredDeals.map((deal) => (
            <Link to={`/product/${deal.productId}`} key={deal.id} className="group">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.subtitle}
                    className="w-full h-48 object-contain p-4"
                  />
                  {deal.badgeText && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {deal.badgeText}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-aqua-600">{deal.title}</h3>
                  <p className="text-gray-800 mb-2">{deal.subtitle}</p>
                  {deal.price && (
                    <div className="flex items-baseline">
                      <span className="text-xl font-bold">EGP {(Number(deal.price.replace('$', '')) * 30).toFixed(2)}</span>
                      {deal.originalPrice && (
                        <span className="ml-2 text-gray-500 line-through">
                          EGP {(Number(deal.originalPrice.replace('$', '')) * 30).toFixed(2)}
                        </span>
                      )}
                    </div>
                  )}
                  <Button variant="link" className="text-aqua-600 p-0 h-auto mt-2 font-medium group-hover:underline">
                    Shop now <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Shop by Category */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {categories.map((category) => (
                <CarouselItem key={category.id} className="md:basis-1/3 lg:basis-1/5">
                  <Link to={`/category/${category.slug}`}>
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-aqua-400 hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center">
                      <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <img src={category.image || "/placeholder.svg"} alt={category.name} className="h-12 w-12 object-contain" />
                      </div>
                      <h3 className="font-medium">{category.name}</h3>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 translate-x-1/2" />
          </Carousel>
        </div>
      </div>

      {/* Top Deals Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Deals</h2>
          <Link to="/deals" className="text-aqua-600 hover:underline flex items-center">
            See all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link to="/category/deals" key={item} className="text-center">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <img src="/placeholder.svg" alt="Product" className="h-32 w-full object-contain mb-2" />
                <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  Save ${(item * 50)}
                </div>
                <p className="text-sm text-gray-800 mb-1 line-clamp-2">Product Name Example</p>
                <p className="font-bold">${(199 - item * 10).toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Services Banner - Updated with Fast Delivery */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="bg-aqua-100 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-aqua-600">
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
                  <path d="M16.5 9.4 7.55 4.24"/>
                  <polyline points="3.29 7 12 12 20.71 7"/>
                  <line x1="12" y1="22" x2="12" y2="12"/>
                  <circle cx="18.5" cy="15.5" r="2.5"/>
                  <path d="M20.27 17.27 22 19"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $35</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="bg-aqua-100 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-aqua-600">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Price Match Guarantee</h3>
              <p className="text-gray-600">We'll match any competitor's price</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="bg-aqua-100 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-aqua-600">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                  <polyline points="13 2 13 9 20 9"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Next-day delivery available</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
