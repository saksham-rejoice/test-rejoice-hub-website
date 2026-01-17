import { MetaFunction } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import {
  Building2,
  Users,
  Award,
  Globe,
  TrendingUp,
  Heart,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "About RejoiceHub | Leading AI Technology Company" },
  {
    name: "description",
    content:
      "Discover RejoiceHub's mission to democratize AI technology. Learn about our 120+ AI experts, 500+ successful projects, and commitment to transforming businesses through intelligent automation.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/company`,
  },
];

const CompanyPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedResource, setSelectedResource] = useState<string>('');
const [emailError, setEmailError] = useState<string | null>(null);
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const companyStats = [
    {
      number: "2019",
      label: "Founded",
      icon: <Calendar className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "120+",
      label: "AI Experts",
      icon: <Users className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "500+",
      label: "Projects Delivered",
      icon: <Award className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "40+",
      label: "Countries Served",
      icon: <Globe className="w-6 h-6 text-amber-600" />,
    },
  ];

  const leadershipTeam = [
    {
      name: "Dipak Savaliya",
      role: "Founder & CEO",
      image: "/ceo.png",
      bio: "AI visionary and serial entrepreneur with 10+ years of experience in technology and business transformation. Passionate about democratizing AI for businesses of all sizes.",
      expertise: ["AI Strategy", "Business Development", "Product Vision"],
      linkedin: "https://www.linkedin.com/in/dipaksavaliya/",
      // github: "https://github.com/dipak-savaliya",
      email: "dipak@rejoicehub.com",
    },
    {
      name: "Yash Makavana",
      role: "Co-Founder & CFO",
      image: "/cfo.webp",
      bio: "With 10+ years in technology, I specialize in building smart, scalable solutions that solve complex problems. Passionate about innovation, B2B growth, and customer success, I also bring strong financial leadership as CFO, aligning business strategy with sustainable growth.",
      expertise: [
        "Business-to-Business",
        "Customer Acquisition",
        "Customer Service",
      ],
      linkedin: "https://www.linkedin.com/in/yash-makavana/",
      // github: "https://github.com/rajesh-kumar",
      email: "yash@rejoicehub.com",
    },
    {
      name: "Bhargav Dhameliya",
      role: "COO",
      image: "/coo.webp",
      bio: "Focus on sustainable growth, strategic execution, and cross-functional collaboration.Work closely with our product, engineering, and delivery teams to streamline workflows.",
      expertise: [
        "Business Strategy",
        "Operational Excellence",
        "Scalable AI & Fintech Solutions",
      ],
      linkedin: "https://in.linkedin.com/in/bhargavdhameliya",
      // github: "bhargav@rejoicehub.com",
      email: "bhargav@rejoicehub.com",
    },
  ];

  const companyValues = [
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
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
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Collaborative Excellence",
      description:
        "We believe the best solutions come from diverse teams working together with shared vision and purpose.",
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-600" />,
      title: "Global Impact",
      description:
        "Our vision extends beyond borders, creating AI solutions that benefit businesses worldwide.",
    },
  ];

  const achievements = [
    {
      year: "2024",
      title: "AI Innovation Award",
      description:
        "Recognized for outstanding contributions to AI technology and business transformation",
    },
    {
      year: "2023",
      title: "500+ Projects Milestone",
      description:
        "Successfully delivered over 500 AI projects across diverse industries",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Extended services to 40+ countries with local AI expertise",
    },
    {
      year: "2021",
      title: "Team Growth",
      description: "Expanded to 120+ AI experts and technology professionals",
    },
  ];


const handleLeadSubmit = async (email?: string, resourceId?: string):Promise<any> => {
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
      body: JSON.stringify({ email, filename : resourceId })
    });
    if (!response.ok) {
      throw new Error('Failed to subscribe. Please try again.');
    }
    setLeadMagnetSubmissions((prev) => ({ ...prev, [resourceId]: true }));
    setShowEmailModal(false);
    setShowSuccess(true);
    return true;
  } catch (error) {
    console.error('Error subscribing:', error);
    setEmailError('Failed to subscribe. Please try again.');
    throw error;
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            About RejoiceHub
          </div>

          <h1 className="text-primary text-center mb-4">
            Transforming Business Through
            <span className="text-gradient">AI Innovation</span>
          </h1>

          <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
            We're on a mission to democratize AI technology, making intelligent
            automation accessible to businesses of all sizes. Our team of 120+
            experts has delivered 500+ successful projects across 40+ countries.
          </p>

          <div className="flex flex-col sm:flex-row pt-8 gap-4 justify-center">
            <CTAButton to="/about-us" variant="primary" size="md" icon="arrow">
              Learn More
            </CTAButton>
            <CTAButton to="/contact" variant="secondary" size="md" icon="mail">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-navy-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-mobile:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge=" Our Mission"
                title="Democratizing AI Technology"
                subtitle="Making intelligent automation accessible to businesses of all sizes."
              />

              <p className="text-navy-700 text-lg mb-6 leading-relaxed">
                At RejoiceHub, we believe that AI technology should be
                accessible to every business, regardless of size or industry.
                Our mission is to break down the barriers to AI adoption and
                help organizations harness the power of intelligent automation
                to drive growth, efficiency, and innovation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">
                      Custom AI Solutions
                    </h4>
                    <p className="text-navy-700 text-sm">
                      Tailored AI solutions that fit your unique business needs
                      and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">
                      Expert Guidance
                    </h4>
                    <p className="text-navy-700 text-sm">
                      End-to-end support from AI strategy to implementation and
                      optimization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">
                      Proven Results
                    </h4>
                    <p className="text-navy-700 text-sm">
                      Track record of delivering measurable business impact
                      through AI solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl  border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] p-8">
              <h3 className="text-2xl font-bold text-navy-950 mb-6">
                Our Vision
              </h3>
              <p className="text-navy-700 text-lg mb-6 leading-relaxed">
                To be the leading force in making AI technology accessible,
                ethical, and impactful for businesses worldwide. We envision a
                future where every organization can leverage the power of AI to
                create meaningful change and drive sustainable growth.
              </p>
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-amber-600" />
                <div>
                  <h4 className="font-semibold text-navy-900">
                    Global AI Leadership
                  </h4>
                  <p className="text-navy-700 text-sm">
                    Setting standards for responsible AI development and
                    deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Our Values"
            title="What Drives Us Forward"
            subtitle="The core principles that guide our decisions, shape our culture, and fuel our commitment to excellence."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                variant="highlight"
                layout="horizontal"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-white pb-20 pt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Leadership"
            title="Meet Our Leadership Team"
            subtitle="Visionary leaders driving innovation and growth at RejoiceHub."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="rounded-2xl flex items-center justify-between flex-col p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] transition-all duration-300 hover:-translate-y-2"
              >
                <div>
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.png";
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-navy-700 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  {/* <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a> */}
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white hover:bg-amber-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 max-mobile:py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Achievements"
            title="Our Journey of Excellence"
            subtitle="Key milestones and achievements that mark our growth and success."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
              >
                <div className="flex items-start gap-4 border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3 h-full max-mobile:p-2">
                  <div className="w-12 h-12 min-w-12 bg-primary-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {achievement.year.slice(-2)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-light">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 max-mobile:py-12 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Get in Touch"
            title="Connect With RejoiceHub"
            subtitle="Ready to start your AI transformation journey? Get in touch with our team."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 min-w-5 min-h-5 text-amber-400" />
                  <span className="text-primary">Atlanta mall, Digital Valley, A-301, Sudama Chowk, Mota Varachha, Surat, Gujarat 394101
                  </span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <a
                    href="tel:+919825122840"
                    className="text-primary hover:text-amber-400"
                  >
                    +91 98251 22840
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <a
                    href="mailto:info@rejoicehub.com"
                    className="text-primary hover:text-amber-400"
                  >
                    info@rejoicehub.com
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <h4 className="text-primary font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/company/rejoicehub"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/rejoicehub"
                    className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/rejoicehub"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <LeadMagnetForm
              title="Company Newsletter"
              description="Stay updated with our latest AI innovations, company news, and industry insights."
              buttonText="Subscribe"
              placeholder="Enter your email"
              resourceId="company-newsletter"
              onSubmit={(email) => handleLeadSubmit(email, "Company Newsletter")}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Ready to Transform?
          </div>

          <h2 className="heading3 text-primary text-center mb-4">
            Start Your AI Journey Today
          </h2>

          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            Join hundreds of businesses that have transformed their operations
            with RejoiceHub's AI solutions. Let's discuss how we can help you
            achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 max-mobile:pt-5">
            <CTAButton to="/contact" variant="primary" size="md" icon="mail">
              Schedule Consultation
            </CTAButton>
            <CTAButton
              to="/services"
              variant="secondary"
              size="md"
              icon="arrow"
            >
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
