
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Stock = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Stock Management</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Stock Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This page will display stock levels for all products.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Stock;
