
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
