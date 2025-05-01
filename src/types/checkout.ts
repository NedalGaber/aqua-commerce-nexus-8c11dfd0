
import { Address } from ".";

export interface SavedPaymentMethod {
  id: string;
  cardNumber: string; // Last 4 digits
  expiryDate: string;
  cardType: string;
  isDefault: boolean;
}

export interface CheckoutState {
  selectedAddressId: string;
  selectedPaymentMethodId: string;
}

export interface DeliveryMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  iconType: string;
}

export interface Town {
  id: string;
  name: string;
}

export interface PickupLocation {
  id: string;
  name: string;
  address: string;
}

export interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

export type DeliveryOption = "delivery" | "pickup";
