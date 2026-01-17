import CommanMd from "../sections/commansection/CommanMd";
import { MetaFunction } from "react-router";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import { Shield, Lock, Eye, Users } from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy | RejoiceHub - Your Data Protection Rights" },
  {
    name: "description",
    content:
      "Keep your data safe with RejoiceHub’s privacy promise clear policies, global safeguards, and your control. Read now and trust us with confidence.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/privacy-policy`,
  },
];

const markdown = `

## 1. Who we are

This Privacy Policy explains how **Rejoicehub LLP** collects, uses, stores, and discloses your personal data when you access or use our website [https://rejoicehub.com](https://rejoicehub.com) and associated services.  
We act as the controller of your personal data. For any privacy-related questions or requests, you may contact our Privacy Manager (contact details below).

---

## 2. Types and Sources of Personal Data

We may collect the following categories of personal information from you:

- **Identity Data** – e.g., name, job title, company  
- **Contact Data** – e.g., email, postal address, phone number  
- **Financial Data** – e.g., billing information when purchasing services  
- **Technical Data** – browser type/version, IP address, device ID, operating system, time zone, platform  
- **Usage Data** – pages visited, clickstream, session times, interactions  
- **Profile Data** – preferences, feedback, survey responses  
- **Marketing & Communications Data** – your contact and marketing opt-in preferences  

**Sources:**

- Provided by you via contact forms, account sign‑ups, newsletters, and service requests  
- Collected automatically when you visit the site (e.g., via cookies, analytics)  
- Possibly from third-party services (e.g., social login) or partners if you authorize them  

---

## 3. Legal Bases for Processing

We process personal data under the following lawful bases:

- **Contract performance**: to deliver services you request or administer an agreement  
- **Legitimate interests**: to operate and improve our business, services, and website, provided these interests are not overridden by your rights  
- **Consent**: e.g., for marketing emails, cookie usage. You may withdraw consent at any time  
- **Legal obligations**: to comply with laws or regulatory requirements  

---

## 4. How We Use Your Personal Data

We may use your data to:

- Provide services, support, customer communications, billing and invoicing  
- Improve our website, analytics, and user experience  
- Send marketing, newsletters, or business updates where you have opted in  
- Respond to legal requests or to protect our rights  

---

## 5. Sharing Personal Data

We may share your personal data with:

- **Service Providers**: third parties (such as hosting providers, payment processors, marketing platforms) who help us operate our business. They are contractually required to protect your data  
- **Legal Authorities**: if required by law or a valid legal request (e.g., court order, subpoena)  
- **With consent**: if you authorize sharing with third parties for direct marketing purposes  

---

## 6. International Transfers

Your personal data may be transferred to and processed in countries outside India, where our service providers or partners operate. Where needed, we will ensure appropriate safeguards are in place to protect your data.

---

## 7. Retention of Personal Data

We retain personal data only for as long as necessary for the purposes described above and in compliance with any legal, tax, accounting, or business retention requirements. Retention periods vary depending on data type and use.

---

## 8. Your Data Protection Rights

Depending on applicable law, you have rights, including:

- **Access**: Request a copy of your data  
- **Rectification**: Correct inaccurate or incomplete data  
- **Erasure**: (“right to be forgotten”)  
- **Object**: To processing based on legitimate interests or to direct marketing  
- **Restrict Processing**: In specific circumstances  
- **Data Portability**: Receive your data in a structured, machine‑readable format  
- **Withdraw Consent**: At any time, where processing is based on consent  

To exercise these rights, contact us using the details below. We may require proof of identity and will respond promptly (usually within one month).

---

## 9. Right to Lodge a Complaint

If you have concerns about our data practices, please contact us first so we can address them.  
You also have the right to lodge a complaint with a local data protection authority (e.g., the Information Commissioner’s Office in the UK, or the relevant authority in your jurisdiction).

---

## 10. If You Choose Not to Provide Data

If you decline to provide certain personal data that is necessary for delivering services or enabling website features, you may not be able to access certain functionalities or complete transactions.

---

## 11. Cookies and Similar Technologies

We use cookies and other tracking technologies (e.g., Google Analytics) to enhance site performance, analytics, personalization, and marketing.  
Some cookies are strictly necessary; others require consent. Please refer to our separate **Cookie Policy** for details.

---

## 12. Automated Decision-Making

Where applicable (for example, via AI-driven tools), we may use automated systems to make certain decisions.  
If such processing significantly affects you, you have the right to request human review or explanation.

---

## 13. Changes to this Privacy Policy

We regularly review and may update this Privacy Policy.  
Any changes will be posted online, with a revised “Last updated” date. Continued use of the site after updates indicates acceptance.

---

## 14. Contact Information

For questions, requests, or to exercise your data rights, please contact:

- **Email**: info@rejoicehub.com  
- **Postal Address**:  
  A-301, Atlanta Mall, Sudama Chowk,  
  Digital Valley (Mota Varachha),  
  Surat, Gujarat, India 394101  
- **Phone**: +91 9825 122 840  

---

## Notes & Next Steps

- Adapt placeholders (e.g., contact email, address, jurisdiction) to your actual details  
- Make sure the **Cookie Policy** is linked and aligns with the website’s functionality  
- Have this document reviewed by a qualified legal expert to ensure compliance with **GDPR**, **India’s PDPB** (if applicable), and other jurisdictional laws  
`;

export default function PrivacyPolicy() {
  const privacyHighlights = [
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Data Protection",
      description:
        "We implement industry-leading security measures to protect your personal information.",
    },
    {
      icon: <Lock className="w-6 h-6 text-amber-600" />,
      title: "Secure Processing",
      description:
        "All data processing follows strict GDPR compliance and encryption standards.",
    },
    {
      icon: <Eye className="w-6 h-6 text-amber-600" />,
      title: "Transparency",
      description:
        "Clear information about how we collect, use, and manage your data.",
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Your Rights",
      description:
        "Full control over your data with easy access, correction, and deletion options.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Privacy & Security
          </div>

          <h1 className="text-primary text-center mb-4">
            Your Privacy is
            <span className="text-gradient"> Our Priority</span>
          </h1>

          <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Transparent, secure, and compliant data handling practices that put
            your privacy first. Learn how we protect your information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 max-mobile:pt-5">
            <CTAButton href="#privacy-policy" variant="primary" size="md">
              Read Full Policy
            </CTAButton>
            <CTAButton to="/contact" variant="secondary" size="md">
              Contact Privacy Team
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Privacy Commitment"
            title="How We Protect Your Data"
            subtitle="Our comprehensive approach to data privacy and security ensures your information is always safe and handled with the utmost care."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section id="privacy-policy" className="py-20 max-mobile:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            badge="Full Policy"
            title="Privacy Policy Details"
            subtitle="Complete information about our data practices, your rights, and how we ensure your privacy protection."
          />
          <CommanMd markdown={markdown} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Have Questions?
          </div>

          <h2 className="heading3 text-center mb-4 text-navy-950">
            Need Privacy Support?
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            Our privacy team is here to help. Contact us with any questions
            about your data, privacy rights, or our practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 max-mobile:pt-5">
            <CTAButton to="/contact" variant="primary" size="md">
              Contact Privacy Team
            </CTAButton>
            <CTAButton
              href="mailto:privacy@rejoicehub.com"
              variant="secondary"
              size="md"
            >
              info@rejoicehub.com
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
