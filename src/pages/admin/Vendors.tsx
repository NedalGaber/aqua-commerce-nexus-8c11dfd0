
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Vendors = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Vendors Management</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This page will manage vendor relationships.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Vendors;
