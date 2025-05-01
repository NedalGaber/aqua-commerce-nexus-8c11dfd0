
import React, { useState, useEffect } from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { useLocation } from 'react-router-dom';

// Import mock data
import { 
  mockAddresses, 
  mockPaymentMethods, 
  pickupLocationsByTown, 
  towns, 
  deliveryMethods 
} from './data/mockData';

// Import components
import AddressSelection from './components/AddressSelection';
import PickupLocationSelection from './components/PickupLocationSelection';
import DeliveryMethodSelection from './components/DeliveryMethodSelection';
import PaymentMethodSelection from './components/PaymentMethodSelection';
import OrderSummary from './components/OrderSummary';

export default function Checkout() {
  const location = useLocation();
  const cartDeliveryMethod = location.state?.deliveryMethod || "delivery";
  
  // Address state
  const [selectedAddressId, setSelectedAddressId] = React.useState(
    mockAddresses.find(addr => addr.isDefault)?.id || ""
  );

  // Payment method state
  const [selectedPaymentId, setSelectedPaymentId] = React.useState(
    mockPaymentMethods.find(pm => pm.isDefault)?.id || ""
  );

  // Delivery method state
  const [selectedDelivery, setSelectedDelivery] = React.useState(deliveryMethods[0].id);
  
  // Pickup location state
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
              <AddressSelection
                addresses={mockAddresses}
                selectedAddressId={selectedAddressId}
                setSelectedAddressId={setSelectedAddressId}
              />
            )}

            {/* Pickup Location Selection - only if pickup selected */}
            {cartDeliveryMethod === "pickup" && (
              <PickupLocationSelection
                towns={towns}
                selectedTown={selectedTown}
                setSelectedTown={setSelectedTown}
                pickupLocations={pickupLocations}
                selectedPickup={selectedPickup}
                setSelectedPickup={setSelectedPickup}
              />
            )}

            {/* Delivery Method Selection - only show if delivery is selected */}
            {cartDeliveryMethod === "delivery" && (
              <DeliveryMethodSelection
                deliveryMethods={deliveryMethods}
                selectedDelivery={selectedDelivery}
                setSelectedDelivery={setSelectedDelivery}
              />
            )}

            {/* Payment Method Selection */}
            <PaymentMethodSelection
              paymentMethods={mockPaymentMethods}
              selectedPaymentId={selectedPaymentId}
              setSelectedPaymentId={setSelectedPaymentId}
            />
          </div>

          {/* Order Summary */}
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            total={total}
            deliveryMethod={cartDeliveryMethod as "delivery" | "pickup"}
          />
        </div>
      </div>
    </MainLayout>
  );
}
