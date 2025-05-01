
import React, { useState, useEffect } from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Plus, Truck } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Address } from "@/types";
import { SavedPaymentMethod } from "@/types/checkout";
import { useLocation } from 'react-router-dom';

// Mock data (in a real app, this would come from your backend)
const mockAddresses: Address[] = [
  {
    id: "1",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    isDefault: true,
  },
  {
    id: "2",
    street: "456 Park Ave",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    country: "USA",
    isDefault: false,
  },
];

const mockPaymentMethods: SavedPaymentMethod[] = [
  {
    id: "1",
    cardNumber: "4242",
    expiryDate: "12/25",
    cardType: "Visa",
    isDefault: true,
  },
  {
    id: "2",
    cardNumber: "5555",
    expiryDate: "01/26",
    cardType: "Mastercard",
    isDefault: false,
  },
];

// Pickup locations by town
const pickupLocationsByTown = {
  cairo: [
    { id: "cairo1", name: "Cairo Downtown Store", address: "10 Abdel Khalek Sarwat, Cairo" },
    { id: "cairo2", name: "Nasr City Branch", address: "City Stars Mall, Nasr City, Cairo" },
    { id: "cairo3", name: "Maadi Branch", address: "Road 9, Maadi, Cairo" },
  ],
  alexandria: [
    { id: "alex1", name: "Alexandria Mall Branch", address: "Alexandria City Center, Alexandria" },
    { id: "alex2", name: "Montazah Branch", address: "Green Plaza Mall, Montazah, Alexandria" },
  ],
  giza: [
    { id: "giza1", name: "Giza Branch", address: "Mall of Arabia, 6th of October City, Giza" },
    { id: "giza2", name: "Dokki Branch", address: "28 Tahrir St, Dokki, Giza" },
  ],
};

const towns = [
  { id: "cairo", name: "Cairo" },
  { id: "alexandria", name: "Alexandria" },
  { id: "giza", name: "Giza" },
];

const deliveryMethods = [
  {
    id: "regular",
    name: "Regular Delivery",
    description: "Delivered in 3-5 business days.",
    price: 150,
    icon: <Truck className="h-5 w-5 mr-2" />,
  },
  {
    id: "express",
    name: "Express Delivery",
    description: "Delivered in 1-2 business days.",
    price: 300,
    icon: <Truck className="h-5 w-5 mr-2" />,
  },
];

export default function Checkout() {
  const location = useLocation();
  const cartDeliveryMethod = location.state?.deliveryMethod || "delivery";
  
  const [selectedAddressId, setSelectedAddressId] = React.useState(
    mockAddresses.find(addr => addr.isDefault)?.id || ""
  );
  const [selectedPaymentId, setSelectedPaymentId] = React.useState(
    mockPaymentMethods.find(pm => pm.isDefault)?.id || ""
  );
  const [selectedDelivery, setSelectedDelivery] = React.useState(deliveryMethods[0].id);
  
  const [selectedTown, setSelectedTown] = useState(towns[0].id);
  const [pickupLocations, setPickupLocations] = useState(pickupLocationsByTown.cairo);
  const [selectedPickup, setSelectedPickup] = useState(pickupLocationsByTown.cairo[0]?.id || "");

  // Update pickup locations when town changes
  useEffect(() => {
    const locations = pickupLocationsByTown[selectedTown as keyof typeof pickupLocationsByTown] || [];
    setPickupLocations(locations);
    if (locations.length > 0) {
      setSelectedPickup(locations[0].id);
    }
  }, [selectedTown]);

  // For order summary
  const subtotal = 25499.99;
  const shipping = cartDeliveryMethod === "delivery" ? 
    (deliveryMethods.find((d) => d.id === selectedDelivery)?.price ?? 0) : 0;
  const total = subtotal + shipping;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address Selection - Hide if pickup selected */}
            {cartDeliveryMethod === "delivery" && (
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Shipping Address</h2>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Address
                  </Button>
                </div>
                <RadioGroup
                  value={selectedAddressId}
                  onValueChange={setSelectedAddressId}
                  className="space-y-4"
                >
                  {mockAddresses.map((address) => (
                    <div
                      key={address.id}
                      className={`flex items-start space-x-3 p-4 rounded-lg border ${
                        selectedAddressId === address.id ? 'border-primary' : 'border-gray-200'
                      }`}
                    >
                      <RadioGroupItem value={address.id} id={`address-${address.id}`} />
                      <div className="space-y-1">
                        <p className="font-medium">
                          {address.street}
                          {address.isDefault && (
                            <span className="ml-2 text-sm text-primary">(Default)</span>
                          )}
                        </p>
                        <p className="text-sm text-gray-500">
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                        <p className="text-sm text-gray-500">{address.country}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Pickup Location Selection - only if pickup selected */}
            {cartDeliveryMethod === "pickup" && (
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <h2 className="text-xl font-semibold">Pickup Location</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Select Town</label>
                  <Select
                    value={selectedTown}
                    onValueChange={(value) => setSelectedTown(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select town" />
                    </SelectTrigger>
                    <SelectContent>
                      {towns.map((town) => (
                        <SelectItem key={town.id} value={town.id}>
                          {town.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <RadioGroup
                  value={selectedPickup}
                  onValueChange={setSelectedPickup}
                  className="space-y-4"
                >
                  {pickupLocations.map((pl) => (
                    <div
                      key={pl.id}
                      className={`flex items-start space-x-3 p-4 rounded-lg border ${
                        selectedPickup === pl.id ? 'border-primary bg-aqua-50' : 'border-gray-200'
                      }`}
                    >
                      <RadioGroupItem value={pl.id} id={pl.id} />
                      <div className="space-y-1">
                        <p className="font-medium">{pl.name}</p>
                        <p className="text-sm text-gray-500">{pl.address}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Delivery Method Selection - only show if delivery is selected */}
            {cartDeliveryMethod === "delivery" && (
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Delivery Method</h2>
                </div>
                <RadioGroup
                  value={selectedDelivery}
                  onValueChange={setSelectedDelivery}
                  className="space-y-4"
                >
                  {deliveryMethods.map(dm => (
                    <div
                      key={dm.id}
                      className={`flex items-center space-x-3 p-4 rounded-lg border ${
                        selectedDelivery === dm.id ? 'border-primary bg-aqua-50' : 'border-gray-200'
                      }`}
                    >
                      <RadioGroupItem value={dm.id} id={dm.id} />
                      <div className="flex flex-col">
                        <div className="flex items-center font-medium">
                          {dm.icon}
                          {dm.name}
                          <span className="ml-4 text-primary font-semibold">
                            {dm.price === 0
                              ? "Free"
                              : `EGP ${dm.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {dm.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Payment Method Selection */}
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Card
                </Button>
              </div>
              
              <RadioGroup
                value={selectedPaymentId}
                onValueChange={setSelectedPaymentId}
                className="space-y-4"
              >
                {mockPaymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border ${
                      selectedPaymentId === method.id ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <RadioGroupItem value={method.id} id={`payment-${method.id}`} />
                    <div className="space-y-1">
                      <p className="font-medium">
                        {method.cardType} ending in {method.cardNumber}
                        {method.isDefault && (
                          <span className="ml-2 text-sm text-primary">(Default)</span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">Expires {method.expiryDate}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>EGP {subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              {cartDeliveryMethod === "delivery" && (
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>EGP {shipping.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              )}
              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>EGP {total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full">
              <CreditCard className="mr-2 h-5 w-5" />
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
