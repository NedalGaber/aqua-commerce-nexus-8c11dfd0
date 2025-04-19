
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";

const Products = () => {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Products Management</h1>
        <p className="text-gray-500">Manage your products inventory here.</p>
      </div>
    </AdminLayout>
  );
};

export default Products;
