
import React from 'react';
import { MainLayout } from "@/components/layouts/main-layout";

export default function Accessibility() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            TechXpress is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Conformance Status</h2>
          <p className="mb-4">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <p className="mb-4">
            TechXpress is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Feedback</h2>
          <p className="mb-4">
            We welcome your feedback on the accessibility of TechXpress. Please let us know if you encounter accessibility barriers on TechXpress:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Phone: 1-800-123-4567</li>
            <li>E-mail: accessibility@techxpress.com</li>
            <li>Visitor address: 123 Tech Street, Digital City, TX 12345</li>
          </ul>
          <p className="mb-4">
            We try to respond to feedback within 2 business days.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Technical Specifications</h2>
          <p className="mb-4">
            Accessibility of TechXpress relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p className="mb-4">
            These technologies are relied upon for conformance with the accessibility standards used.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Assessment Approach</h2>
          <p className="mb-4">
            TechXpress assessed the accessibility of the website by the following approaches:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Self-evaluation</li>
            <li>External evaluation</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
