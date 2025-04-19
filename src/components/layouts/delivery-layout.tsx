
import { ReactNode } from "react";
import { DeliveryHeader } from "@/components/navigation/delivery-header";
import { DeliveryBottomNav } from "@/components/navigation/delivery-bottom-nav";

interface DeliveryLayoutProps {
  children: ReactNode;
}

export function DeliveryLayout({ children }: DeliveryLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <DeliveryHeader />
      <main className="flex-grow p-4">{children}</main>
      <DeliveryBottomNav />
    </div>
  );
}
