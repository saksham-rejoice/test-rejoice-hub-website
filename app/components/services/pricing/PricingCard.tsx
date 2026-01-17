import { useEffect, useRef } from 'react';
import { ServiceKey } from '~/data/pricing';
import { trackPricingCardView } from '~/lib/analytics';
import { useInquiryModal } from '~/store/useInquiryModal';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  primaryCTA: { label: string; href?: string; action?: "openModal" };
  secondaryCTA?: { label: string; href: string };
  features: string[];
  serviceKey: ServiceKey;
  location: string;
  showPrice: boolean;
}

export function PricingCard({
  title,
  subtitle,
  price,
  primaryCTA,
  secondaryCTA,
  features,
  serviceKey,
  location,
  showPrice
}: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { open } = useInquiryModal();

  // Track when card enters viewport
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
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [serviceKey, location]);

  const handlePrimaryClick = () => {
    if (primaryCTA.action === "openModal") {
      open(serviceKey, location);
    } else if (primaryCTA.href) {
      window.location.href = primaryCTA.href;
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryCTA?.href) {
      window.location.href = secondaryCTA.href;
    }
  };

  return (
    <Card ref={cardRef} className="relative bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-navy-950 mb-2">
          {title}
        </CardTitle>
        <p className="text-navy-700 text-sm leading-relaxed">
          {subtitle}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Pricing Section */}
        <div className="text-center">
          {showPrice ? (
            <div className="space-y-2">
              <div className="text-3xl font-bold text-navy-950">
                {price}
              </div>
              <p className="text-sm text-gray-600">Starting from</p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Contact us for tailored pricing
              </div>
              <p className="text-sm text-gray-600">Custom solutions</p>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-navy-700 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="space-y-3 pt-4">
          <Button
            onClick={handlePrimaryClick}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition-colors focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label={`${primaryCTA.label} for ${title}`}
          >
            {primaryCTA.label}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          {secondaryCTA && (
            <Button
              onClick={handleSecondaryClick}
              variant="outline"
              className="w-full border-navy-200 text-navy-700 hover:bg-navy-50 font-medium py-3 rounded-xl transition-colors focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
              aria-label={`${secondaryCTA.label} for ${title}`}
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
