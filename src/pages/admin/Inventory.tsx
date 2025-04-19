
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";

const Inventory = () => {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <p className="text-gray-500">Track and manage your inventory levels here.</p>
      </div>
    </AdminLayout>
  );
};

export default Inventory;
