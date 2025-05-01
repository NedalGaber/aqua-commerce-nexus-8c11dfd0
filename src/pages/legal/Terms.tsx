
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";

export default function Terms() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            These Terms of Use constitute a legally binding agreement made between you and TechXpress, concerning your access to and use of our website and services.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">User Representations</h2>
          <p className="mb-4">
            By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means; (4) you will not use the Site for any illegal or unauthorized purpose.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Products</h2>
          <p className="mb-4">
            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Purchases and Payment</h2>
          <p className="mb-4">
            We accept various forms of payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Returns Policy</h2>
          <p className="mb-4">
            Please review our Returns Policy prior to making any purchases.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at terms@techxpress.com.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
