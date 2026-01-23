import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container-fluid px-4 md:px-8 py-24 max-w-[800px] mx-auto flex-1">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: January 15, 2024</p>
          
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the ShadcnUIKit website (the "Service") operated by ShadcnUIKit ("us", "we", or "our").
          </p>

          <h2>1. Agreement to Terms</h2>
          <p>
             By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
             The Service and its original content, features and functionality are and will remain the exclusive property of ShadcnUIKit and its licensors.
          </p>

          <h2>3. Links To Other Web Sites</h2>
          <p>
             Our Service may contain links to third-party web sites or services that are not owned or controlled by ShadcnUIKit.
          </p>
          <p>
             ShadcnUIKit has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that ShadcnUIKit shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>

          <h2>4. Termination</h2>
          <p>
             We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>5. Changes</h2>
          <p>
             We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
