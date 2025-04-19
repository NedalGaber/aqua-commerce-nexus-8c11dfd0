
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";

const Orders = () => {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Orders Management</h1>
        <p className="text-gray-500">View and manage customer orders here.</p>
      </div>
    </AdminLayout>
  );
};

export default Orders;
