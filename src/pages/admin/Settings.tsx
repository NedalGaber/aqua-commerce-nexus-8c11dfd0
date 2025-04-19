
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";

const Settings = () => {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">System Settings</h1>
        <p className="text-gray-500">Configure system settings and preferences here.</p>
      </div>
    </AdminLayout>
  );
};

export default Settings;
