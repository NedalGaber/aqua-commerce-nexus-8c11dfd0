
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sales = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Sales Analytics</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This page will display sales analytics and charts.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Sales;
