
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";

const Users = () => {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Users Management</h1>
        <p className="text-gray-500">Manage user accounts and permissions here.</p>
      </div>
    </AdminLayout>
  );
};

export default Users;
