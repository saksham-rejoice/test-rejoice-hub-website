import { MetaFunction } from "react-router";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Partners from "~/sections/home/partners";
import WorkWithUs from "~/sections/home/workWithUs";
import AboutHeroSection from "~/sections/about/AboutHeroSection";
import { AboutVisionary } from "~/sections/about/AboutVisionary";
import { GrowingCount } from "~/sections/commansection/GrowingCount";
import HeroSection from "~/components/comman/herosection";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetCard from "~/components/ui/LeadMagnetCard";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { WEB_URL } from "~/utils/config";
import AboutWhyChooseRejoicehub from "~/sections/about/AboutWhyChooseRejoice";
import Testimonials from "~/sections/home/Testimonials";
import { AboutCoreServices } from "~/sections/about/AboutCoreServices";
import {
  Award,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Zap,
  Heart,
  Globe,
  Target,
  Calculator,
  FileText,
  BookOpen,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "About RejoiceHub | AI & Automation Solutions for Business Growth" },
  {
    name: "description",
    content:
      "Accelerate growth with RejoiceHub’s human‑centered AI solutions. Trusted by global businesses since 2019. Book your free demo today!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/about-us`,
  },
];

export const AnimatedSection = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const founderStory = {
    name: "Dipak Savaliya",
    title: "Founder & CEO",
    story:
      "From engineering student to AI visionary, Dipak founded RejoiceHub with a mission to democratize AI for businesses of all sizes. His passion for human-centered technology drives our commitment to ethical AI development.",
    achievements: [
      "120+ AI Projects Delivered",
      "$50M+ Client Value Generated",
      "15+ Industry Awards",
      "Speaker at Global AI Conferences",
    ],
  };

  const teamValues = [
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      title: "Innovation First",
      description:
        "We constantly push boundaries to discover new possibilities in AI and automation technology.",
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-600" />,
      title: "Human-Centered AI",
      description:
        "Every solution we build prioritizes human needs, ethics, and meaningful impact on people's lives.",
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Trust & Transparency",
      description:
        "We build lasting partnerships through honest communication and reliable, secure solutions.",
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-600" />,
      title: "Global Impact",
      description:
        "Our vision extends beyond borders, creating AI solutions that benefit businesses worldwide.",
    },
  ];

  const companyStats = [
    { number: "120+", label: "Developers & AI Experts" },
    { number: "300+", label: "Successful Projects" },
    { number: "40+", label: "Countries Served" },
    { number: "99.9%", label: "Client Satisfaction" },
  ];

  const leadMagnets = [
    {
      title: "AI Leadership Playbook",
      description:
        "Strategic guide for executives on leading AI transformation initiatives in their organizations.",
      value: "$3,000 Value",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      features: ["Executive strategies", "Change management", "ROI frameworks"],
      resourceId: "ai-leadership-playbook",
    },
    {
      title: "Company AI Assessment",
      description:
        "Comprehensive evaluation of your organization's AI readiness and transformation potential.",
      value: "$2,000 Value",
      icon: <Calculator className="w-6 h-6 text-amber-600" />,
      features: [
        "Organizational analysis",
        "Custom recommendations",
        "Implementation roadmap",
      ],
      resourceId: "company-ai-assessment",
    },
  ];

  const handleLeadSubmit = async (email?: string, resourceId?
    : string):Promise<any> => {
    try {
      if (!resourceId) {
        return;
      }
      setSelectedResource(resourceId);
      console.log('Submitting email:', email, 'for resource:', resourceId);

      if (!email) {
        setEmailError('Please enter your email address');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError('Please enter a valid email address');
        return;
      }

      setIsSubmitting(true);
      setEmailError(null);

      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/send-study-file/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email , filename:resourceId})
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setEmail('');
      setLeadMagnetSubmissions((prev) => ({ ...prev, [email]: true }));
        setShowEmailModal(false);
        setShowSuccess(true);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError('Failed to send email. Please try again.');
      throw error; // Re-throw to let LeadMagnetForm handle the error
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Email Collection Modal */}
        {showEmailModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Resource</h3>
                <p className="text-gray-600 mb-6">
                  Enter your email to receive your selected resource.
                </p>

                <form  className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError(null);
                      }}
                      placeholder="Enter your email address"
                      required
                      className={`w-full px-4 py-3 border ${
                        emailError ? 'border-red-500' : 'border-gray-300'
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">{emailError}</p>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={()=>handleLeadSubmit(email,selectedResource)}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Resource'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowEmailModal(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
                <p className="text-gray-600 mb-6">
                  Your resource has been sent to your email. Please check your inbox.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Enhanced Hero Section */}
        <section className="pt-28 pb-20 bg-light">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
              Visionary Leadership
            </div>

            <h1 className="text-primary text-center mb-4">
              Human Ingenuity,
              <span className="text-gradient">Machine Intelligence</span>
            </h1>

            <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
              We harness the best of both worlds to build adaptive, ethical, and
              scalable AI solutions that transform how businesses operate and
              grow.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <CTAButton href="#founder-story" variant="primary" size="md">
                Meet Our Founder
              </CTAButton>
              <CTAButton href="#team-values" variant="secondary" size="md">
                Our Values
              </CTAButton>
            </div> */}
          </div>
        </section>

        {/* Founder Story Section */}
        <AnimatedSection
          id="founder-story"
          className="py-20 max-mobile:py-12 bg-accent-50"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              badge=" Visionary Leadership"
              title="Meet Dipak Savaliya, Founder & CEO"
              subtitle="From humble beginnings to AI innovation leader, discover the passion and vision driving RejoiceHub's mission to democratize AI."
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-navy-950">
                  "AI should empower humans, not replace them. That's the
                  philosophy behind every solution we build."
                </h3>

                <p className="text-lg text-navy-700 leading-relaxed">
                  {founderStory.story}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {founderStory.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-navy-800">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                <CTAButton
                  to="https://calendly.com/dipak-rejoicehub"
                  variant="primary"
                  size="lg"
                  icon="calendar"
                >
                  Connect with Dipak
                </CTAButton>
              </div>

              <div className="relative">
                <div className="relative  rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
                  <div className="w-54 h-54  rounded-full mx-auto mb-6 flex items-center justify-center">
                    <img
                      src="ceo.png"
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-navy-950 text-center mb-2">
                    {founderStory.name}
                  </h4>
                  <p className="text-amber-600 font-semibold text-center">
                    {founderStory.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Company Stats */}
        <AnimatedSection className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="heading3 text-center mb-10 text-navy-950">
              Trusted by Organizations Worldwide
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team Values Section */}
        <AnimatedSection
          id="team-values"
          className="py-20 max-mobile:py-12 bg-blue-900"
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              badge=" Our Values"
              title="What Drives Our Innovation"
              subtitle="The core principles that guide our decisions, shape our culture, and fuel our commitment to ethical AI development."
              variant="navy"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {teamValues.map((value, index) => (
                <FeatureCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  variant="default"
                  layout="horizontal"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Lead Magnets for About Page */}
        <section className="py-20 max-mobile:py-12 ">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              badge=" Executive Resources"
              title="Leadership Tools for AI Transformation"
              subtitle="Exclusive resources designed for executives and leaders ready to drive AI initiatives in their organizations."
              variant="amber"
            />
            <div className="grid md:grid-cols-2 gap-8 mx-auto">
              {leadMagnets.map((magnet, index) => (
                <LeadMagnetCard
                  key={index}
                  title={magnet.title}
                  description={magnet.description}
                  icon={magnet.icon}
                  value={magnet.value}
                  features={magnet.features}
                  resourceId={magnet.resourceId}
                  onSubmit={() => {
                    setSelectedResource(magnet.title);
                    setShowEmailModal(true);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="bg-blue-900 py-20 max-mobile:py-12">
          <AboutVisionary />
        </div>

        {/* <AnimatedSection className="relative py-16 max-mobile:py-12 px-4 bg-accent-50 overflow-hidden"> */}
        <AboutWhyChooseRejoicehub />
        {/* </AnimatedSection> */}

        <AboutCoreServices />
        <Partners />
        <Testimonials />
        <WorkWithUs />
      </div>
    </div>
  );
};

export default AboutPage;
