
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Warehouses = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Warehouses Management</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Warehouses</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This page will display and manage all warehouses.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Warehouses;
