
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

export default function Invoice() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">Invoice</h1>
              <p className="text-gray-500">#INV-2025-123</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Bill To:</h3>
              <p>John Doe</p>
              <p>123 Main Street</p>
              <p>Cairo, Egypt</p>
              <p>Phone: +20 123 456 789</p>
            </div>
            <div className="text-right">
              <div className="space-y-1">
                <p><span className="font-medium">Invoice Date:</span> April 20, 2025</p>
                <p><span className="font-medium">Due Date:</span> April 27, 2025</p>
                <p><span className="font-medium">Order ID:</span> #123456</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Item</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Quantity</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Price</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: "Product 1", qty: 1, price: 25499.99 },
                  { name: "Product 2", qty: 2, price: 1999.99 }
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-right">{item.qty}</td>
                    <td className="px-6 py-4 text-sm text-right">EGP {item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm text-right">EGP {(item.qty * item.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <div className="w-72">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>EGP 29,499.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (14%)</span>
                  <span>EGP 4,129.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>EGP 150.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>EGP 33,779.96</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
