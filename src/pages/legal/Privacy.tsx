
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";

export default function Privacy() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Personal Information We Collect</h2>
          <p className="mb-4">
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Personal Information</h2>
          <p className="mb-4">
            We use the Device Information that we collect to help us screen for potential risk and fraud, and more generally to improve and optimize our Site.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Sharing Your Personal Information</h2>
          <p className="mb-4">
            We share your Personal Information with third parties to help us use your Personal Information, as described above.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights</h2>
          <p className="mb-4">
            If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Data Retention</h2>
          <p className="mb-4">
            When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Changes</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@techxpress.com.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
