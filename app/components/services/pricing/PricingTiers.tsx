import { useEffect, useRef } from "react";
import { ServiceKey } from "~/data/pricing";
import { trackPricingCardView } from "~/lib/analytics";
import { useInquiryModal } from "~/store/useInquiryModal";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Check, ArrowRight, Star, Zap, Crown } from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  features: string[];
  cta: {
    label: string;
    action: "openModal" | "href";
    href?: string;
  };
  icon: React.ReactNode;
  badge?: string;
}

interface PricingTiersProps {
  serviceKey: ServiceKey;
  location: string;
  showPrice: boolean;
  basePrice: string;
  serviceTitle: string;
}

export function PricingTiers({
  serviceKey,
  location,
  showPrice,
  basePrice,
  serviceTitle,
}: PricingTiersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { open } = useInquiryModal();

  // Track when pricing section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackPricingCardView(serviceKey, location);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [serviceKey, location]);

  // Calculate pricing tiers based on base price
  const parsePrice = (priceStr: string): number => {
    const match = priceStr.match(/(\d+(?:,\d+)*)/);
    return match ? parseInt(match[1].replace(/,/g, "")) : 0;
  };

  const baseAmount = parsePrice(basePrice);

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      description: "Perfect for small projects and getting started",
      price: showPrice ? `$${baseAmount.toLocaleString()}` : "Contact us",
      originalPrice: showPrice
        ? `$${Math.round(baseAmount * 1.2).toLocaleString()}`
        : undefined,
      features: [
        "Basic implementation",
        "Standard support",
        "Documentation included",
        "30-day warranty",
        "Email support",
      ],
      cta: {
        label: "Get Started",
        action: "openModal",
      },
      icon: <Zap className="w-6 h-6" />,
      badge: "Most Popular",
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      price: showPrice
        ? `$${Math.round(baseAmount * 1.6).toLocaleString()}`
        : "Contact us",
      originalPrice: showPrice
        ? `$${Math.round(baseAmount * 1.8).toLocaleString()}`
        : undefined,
      popular: true,
      features: [
        "Advanced implementation",
        "Priority support",
        "Custom integrations",
        "90-day warranty",
        "Phone & email support",
        "Monthly check-ins",
        "Performance optimization",
      ],
      cta: {
        label: "Choose Professional",
        action: "openModal",
      },
      icon: <Star className="w-6 h-6" />,
    },
    {
      name: "Enterprise",
      description: "Complete solution for large-scale implementations",
      price: showPrice
        ? `$${Math.round(baseAmount * 2.4).toLocaleString()}`
        : "Contact us",
      originalPrice: showPrice
        ? `$${Math.round(baseAmount * 2.8).toLocaleString()}`
        : undefined,
      features: [
        "Full-scale implementation",
        "Dedicated support team",
        "Custom development",
        "1-year warranty",
        "24/7 support",
        "Quarterly reviews",
        "Advanced analytics",
        "Training & onboarding",
        "SLA guarantee",
      ],
      cta: {
        label: "Contact Sales",
        action: "openModal",
      },
      icon: <Crown className="w-6 h-6" />,
      badge: "Best Value",
    },
  ];

  const handleCTAClick = (tier: PricingTier) => {
    if (tier.cta.action === "openModal") {
      open(serviceKey, `${location}_${tier.name.toLowerCase()}`);
    } else if (tier.cta.href) {
      window.location.href = tier.cta.href;
    }
  };

  return (
    <div
      ref={containerRef}
      className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {pricingTiers.map((tier, index) => (
        <div
          key={tier.name}
          className={`rounded-2xl  max-mobile:rounded-lg max-mobile:p-3 border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] p-5 ${
            tier.popular
              ? "border-amber-500 shadow-lg scale-105"
              : "border-gray-200 hover:border-amber-300"
          }`}
        >
          {/* Popular Badge */}
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⭐ Most Popular
              </div>
            </div>
          )}

          {/* Badge */}
          {tier.badge && !tier.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-navy-950 text-white px-3 py-1 rounded-full text-xs font-medium">
                {tier.badge}
              </div>
            </div>
          )}

          <CardHeader className="text-center pb-4 pt-8">
            <div className="flex justify-center mb-4">
              <div
                className={`border border-solid border-orange-border bg-[#FFF4EA] p-4 rounded-full text-orange ${
                  tier.popular
                    ? "bg-amber-100 text-amber-600"
                    : "bg-navy-100 text-navy-600"
                }`}
              >
                {tier.icon}
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-primary mb-2">
              {tier.name}
            </CardTitle>

            <p className="text-grey-600 leading-relaxed">{tier.description}</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Pricing Section */}
            <div className="text-center">
              {showPrice ? (
                <div className="space-y-2">
                  {tier.originalPrice && (
                    <div className="text-sm text-grey-600 line-through">
                      {tier.originalPrice}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-orange">
                    {tier.price}
                  </div>
                  <p className="text-sm text-grey-600">
                    {tier.name === "Starter"
                      ? "Starting from"
                      : "Custom pricing available"}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    Contact us for tailored pricing
                  </div>
                  <p className="text-sm text-gray-600">Custom solutions</p>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-3">
                  <Check
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      tier.popular ? "text-orange" : "text-orange"
                    }`}
                  />
                  <span className="text-sm text-grey-600 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                onClick={() => handleCTAClick(tier)}
                className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                  tier.popular
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white focus:ring-amber-500 shadow-lg hover:shadow-xl"
                    : "bg-white hover:bg-navy-800 text-primary focus:ring-navy-500"
                }`}
                aria-label={`${tier.cta.label} for ${tier.name} ${serviceTitle}`}
              >
                {tier.cta.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </div>
      ))}
    </div>
  );
}
