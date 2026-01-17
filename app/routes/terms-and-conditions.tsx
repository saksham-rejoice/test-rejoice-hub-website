import { MetaFunction } from "react-router";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import { Shield, FileText, Users, Building2 } from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Terms and Conditions | RejoiceHub" },
  {
    name: "description",
    content:
      "Terms and conditions governing the use of RejoiceHub's AI services, website, and digital solutions. Read our service agreements and user policies.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/terms-and-conditions`,
  },
];

const TermsAndConditions = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Legal Information
          </div>

          <h1 className="text-primary text-center mb-4">
            Terms and <span className="text-gradient"> Conditions</span>
          </h1>

          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Please read these terms carefully before using our services. By
            accessing or using RejoiceHub's services, you agree to be bound by
            these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 max-mobile:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-amber-800 font-medium">
                <strong>Last Updated:</strong> August {currentYear}
              </p>
              <p className="text-amber-700 text-sm mt-2">
                These terms apply to all services provided by RejoiceHub LLP,
                including AI development, consulting, and digital solutions.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-navy-700 mb-6">
              By accessing and using RejoiceHub's website and services, you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              2. Services Description
            </h2>
            <p className="text-navy-700 mb-6">
              RejoiceHub provides AI development, automation solutions, web
              development, mobile app development, and consulting services. Our
              services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-navy-700 space-y-2">
              <li>Custom AI agent development and implementation</li>
              <li>Generative AI solutions and integration</li>
              <li>Web and mobile application development</li>
              <li>DevOps consulting and automation</li>
              <li>UI/UX design and user research</li>
              <li>Digital transformation consulting</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              3. Intellectual Property Rights
            </h2>
            <p className="text-navy-700 mb-6">
              All content, features, and functionality on this website,
              including but not limited to text, graphics, logos, and software,
              are owned by RejoiceHub LLP and are protected by international
              copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-navy-700 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-navy-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>
                Not attempt to reverse engineer or copy our proprietary
                technology
              </li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              5. Privacy and Data Protection
            </h2>
            <p className="text-navy-700 mb-6">
              Your privacy is important to us. Our collection and use of
              personal information is governed by our Privacy Policy, which is
              incorporated into these terms by reference. We are committed to
              protecting your data in accordance with applicable data protection
              laws.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              6. Service Delivery and Timeline
            </h2>
            <p className="text-navy-700 mb-6">
              We strive to deliver services within agreed timelines. However,
              project timelines may vary based on complexity, scope changes, and
              client feedback. We will communicate any significant delays and
              work to minimize their impact.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              7. Payment Terms
            </h2>
            <p className="text-navy-700 mb-6">
              Payment terms will be specified in individual service agreements.
              Generally, we require:
            </p>
            <ul className="list-disc pl-6 mb-6 text-navy-700 space-y-2">
              <li>Advance payment for project initiation</li>
              <li>Milestone-based payments for larger projects</li>
              <li>Final payment upon project completion and delivery</li>
              <li>Payment within 30 days for ongoing services</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-navy-700 mb-6">
              RejoiceHub LLP shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of profits, data, or use, arising out of or
              relating to our services.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              9. Confidentiality
            </h2>
            <p className="text-navy-700 mb-6">
              We maintain strict confidentiality regarding client information,
              trade secrets, and proprietary data. We will not disclose
              confidential information to third parties without prior written
              consent, except as required by law.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              10. Termination
            </h2>
            <p className="text-navy-700 mb-6">
              Either party may terminate services with written notice as
              specified in individual service agreements. Upon termination, we
              will deliver completed work and return any client materials in our
              possession.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              11. Governing Law
            </h2>
            <p className="text-navy-700 mb-6">
              These terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these terms shall be
              subject to the exclusive jurisdiction of courts in Gujarat, India.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-navy-700 mb-6">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on our website.
              Continued use of our services constitutes acceptance of modified
              terms.
            </p>

            <h2 className="text-2xl font-bold text-navy-950 mb-4">
              13. Contact Information
            </h2>
            <p className="text-navy-700 mb-6">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <p className="text-navy-700 mb-2">
                <strong>RejoiceHub LLP</strong>
                <br />
                Email: info@rejoicehub.com
                <br />
                Phone: +91 98251 22840
                <br />
                Address: Atlanta mall, Digital Valley, A-301, Sudama Chowk, Mota Varachha, Surat, Gujarat 394101

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader
            badge=" Ready to Work Together?"
            title="Let's Discuss Your Project"
            subtitle="Have questions about our terms or ready to start your AI transformation journey? We're here to help."
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <CTAButton
              to="/contact"
              variant="primary"
              size="md"
              icon="calendar"
            >
              Schedule a Consultation
            </CTAButton>
            <CTAButton
              href="mailto:legal@rejoicehub.com"
              variant="secondary"
              size="md"
            >
              Email Legal Team
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
