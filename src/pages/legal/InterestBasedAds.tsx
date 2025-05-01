
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";

export default function InterestBasedAds() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Interest-Based Ads Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            This Interest-Based Ads Policy explains how TechXpress collects information about your online activities on our website and across third-party websites to provide you with tailored advertising based on your interests.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">What are Interest-Based Ads?</h2>
          <p className="mb-4">
            Interest-based ads, sometimes called personalized or targeted ads, are displayed to you based on information gathered about your interests. These ads may be more relevant to your interests than non-personalized ads.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">How Does TechXpress Serve Interest-Based Ads?</h2>
          <p className="mb-4">
            We use cookies, web beacons, pixels, and similar technologies to collect information about how you use our website. This allows us to identify your interests and to show you relevant ads when you browse our website or third-party sites. We also work with third-party advertising partners who collect information about your online activities to provide you interest-based advertisements on our behalf.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Your Choices</h2>
          <p className="mb-4">
            You can opt out of receiving interest-based ads from TechXpress by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Adjusting your browser settings to block or delete cookies</li>
            <li>Using opt-out tools provided by the Digital Advertising Alliance, Network Advertising Initiative, or similar organizations</li>
            <li>Adjusting your ad preferences in your account settings</li>
          </ul>
          <p className="mb-4">
            Please note that if you opt out of interest-based advertising, you will still see advertisements, but they may be less relevant to your interests.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Do Not Track</h2>
          <p className="mb-4">
            Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. These features are not yet uniform, so we are not currently set up to respond to those signals.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Interest-Based Ads Policy from time to time. We will notify you of any changes by posting the new policy on this page with a new effective date.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Interest-Based Ads Policy, please contact us at ads@techxpress.com.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
