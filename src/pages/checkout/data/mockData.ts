
import { Address } from "@/types";
import { SavedPaymentMethod } from "@/types/checkout";
import { Truck } from "lucide-react";
import React from "react";

// Mock data for addresses
export const mockAddresses: Address[] = [
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

// Mock data for payment methods
export const mockPaymentMethods: SavedPaymentMethod[] = [
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
export const pickupLocationsByTown = {
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

export const towns = [
  { id: "cairo", name: "Cairo" },
  { id: "alexandria", name: "Alexandria" },
  { id: "giza", name: "Giza" },
];

export const deliveryMethods = [
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
