
import { ReactNode } from "react";
import { CustomerHeader } from "@/components/navigation/customer-header";
import { CustomerFooter } from "@/components/navigation/customer-footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomerHeader />
      <main className="flex-grow">{children}</main>
      <CustomerFooter />
    </div>
  );
}
