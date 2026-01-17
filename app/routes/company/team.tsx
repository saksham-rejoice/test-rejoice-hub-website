import { MetaFunction } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import {
  Users,
  Award,
  Brain,
  Rocket,
  Heart,
  Globe,
  Linkedin,
  Github,
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Meet Our Team | RejoiceHub - AI Experts & Innovators" },
  {
    name: "description",
    content:
      "Meet RejoiceHub’s expert team driving AI innovation and business growth. Connect with us today to transform your workflow and achieve smarter results!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/team`,
  },
];

const TeamPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

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

  const teamStats = [
    {
      number: "120+",
      label: "AI Experts & Developers",
      icon: <Brain className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "15+",
      label: "Years Combined Experience",
      icon: <Award className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "40+",
      label: "Countries Served",
      icon: <Globe className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "500+",
      label: "Projects Delivered",
      icon: <Rocket className="w-6 h-6 text-amber-600" />,
    },
  ];

  const teamValues = [
    {
      icon: <Brain className="w-6 h-6 text-amber-600" />,
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

  const departments = [
    {
      name: "AI & Machine Learning",
      description:
        "Our AI specialists develop cutting-edge solutions using the latest technologies and methodologies.",
      memberCount: 45,
      specialties: [
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      name: "Software Development",
      description:
        "Full-stack developers creating robust, scalable applications and seamless user experiences.",
      memberCount: 35,
      specialties: [
        "Web Development",
        "Mobile Apps",
        "API Development",
        "Cloud Solutions",
      ],
    },
    {
      name: "Design & UX",
      description:
        "Creative designers crafting intuitive interfaces and engaging user experiences.",
      memberCount: 20,
      specialties: [
        "UI/UX Design",
        "Brand Design",
        "User Research",
        "Prototyping",
      ],
    },
    {
      name: "DevOps & Infrastructure",
      description:
        "Infrastructure experts ensuring reliable, secure, and scalable deployment of our solutions.",
      memberCount: 20,
      specialties: [
        "Cloud Architecture",
        "CI/CD",
        "Security",
        "Performance Optimization",
      ],
    },
  ];

  const handleLeadSubmit = async (email?: string, resourceId?: string):Promise<any> => {
    try {
        if (!resourceId) {
        return;
      }
      setSelectedResource(resourceId);
      console.log('Submitting team inquiry from:', email, 'resource:', resourceId);
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
      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/newsletter-access/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          filename:resourceId,
        })
      });
      if (!response.ok) {
        throw new Error('Failed to submit your request. Please try again.');
      }
      setLeadMagnetSubmissions((prev) => ({ ...prev, [resourceId]: true }));
      setShowEmailModal(false);
      setShowSuccess(true);
      return true;
    } catch (error) {
      console.error('Error submitting request:', error);
      setEmailError('Failed to submit your request. Please try again or contact us directly.');
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
            Meet Our Team
          </div>
          <h1 className="text-primary text-center mb-4">
            The Minds Behind
            <span className="text-gradient">AI Innovation</span>
          </h1>

          <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Meet our passionate team of 120+ AI experts, developers, and
            designers who are transforming businesses through intelligent
            automation and innovative solutions.
          </p>

          {/* <div className="flex flex-col sm:flex-row pt-8 gap-4 justify-center">
            <CTAButton href="#leadership" variant="primary" size="md">
              Meet Leadership
            </CTAButton>
            <CTAButton
              to="/career"
              variant="secondary"
              size="md"
              icon="calendar"
            >
              Join Our Team
            </CTAButton>
          </div> */}
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {teamStats.map((stat, index) => (
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

      {/* Leadership Team */}
      <section id="leadership" className="bg-white pb-20">
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

      {/* Team Values */}
      <section className="bg-blue-900 py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Our Values"
            title="What Drives Our Team"
            subtitle="The core principles that guide our decisions, shape our culture, and fuel our commitment to excellence."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {teamValues.map((value, index) => (
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

      {/* Departments */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Departments"
            title="Expertise Across Disciplines"
            subtitle="Our specialized teams work together to deliver comprehensive AI solutions that drive real business results."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy-950">
                    {dept.name}
                  </h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                    {dept.memberCount} members
                  </span>
                </div>

                <p className="text-navy-700 mb-6 leading-relaxed">
                  {dept.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-navy-900 mb-3">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-gradient-to-b from-[rgba(255,100,0,0.14)] to-[rgba(255,145,4,0.14)] text-primary text-sm rounded-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="bg-blue-900 py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Connect With Us"
            title="Ready to Work With Our Team?"
            subtitle="Get in touch with our experts to discuss your AI transformation journey."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Team Consultation"
              description="Schedule a free consultation with our AI experts to discuss your project requirements and get personalized recommendations."
              buttonText="Schedule Consultation"
              placeholder="Enter your email"
              resourceId="team-consultation"
              onSubmit={(email) => handleLeadSubmit(email, "Team Consultation")}
              variant="default"
            />

            <LeadMagnetForm
              title="Join Our Newsletter"
              description="Stay updated with the latest AI trends, team insights, and company updates from RejoiceHub."
              buttonText="Subscribe"
              placeholder="Enter your email"
              resourceId="team-newsletter"
              onSubmit={(email) => handleLeadSubmit(email, "Join Our Newsletter")}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Join Our Mission
          </div>

          <h2 className="heading3 text-primary text-center mb-4">
            Be Part of Something Big
          </h2>

          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            Join our team of innovators and help shape the future of AI. We're
            always looking for talented individuals who share our passion for
            technology and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <CTAButton to="/career" variant="primary" size="md" icon="calendar">
              View Open Positions
            </CTAButton>
            <CTAButton to="/contact" variant="secondary" size="md">
              Contact Our Team
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
