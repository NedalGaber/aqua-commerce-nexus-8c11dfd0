
import React from 'react';
import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Business Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This page will allow generating and viewing various business reports.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Reports;
