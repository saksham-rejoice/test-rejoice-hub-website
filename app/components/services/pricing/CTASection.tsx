import { useEffect } from "react";
import { ServiceKey } from "~/data/pricing";
import { trackCTAView, trackCTAClick } from "~/lib/analytics";
import { useInquiryModal } from "~/store/useInquiryModal";
import { Button } from "~/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  headline: string;
  subtext: string;
  ctaLabel: string;
  onClick: () => void;
  serviceKey: ServiceKey;
  location: string;
  showPrice: boolean;
  startingFrom: string;
}

export function CTASection({
  headline,
  subtext,
  ctaLabel,
  onClick,
  serviceKey,
  location,
  showPrice,
  startingFrom,
}: CTASectionProps) {
  const { open } = useInquiryModal();

  // Track CTA view on mount
  useEffect(() => {
    trackCTAView(serviceKey, location);
  }, [serviceKey, location]);

  const handlePrimaryClick = () => {
    trackCTAClick(serviceKey, location, ctaLabel);
    open(serviceKey, location);
  };

  const handleSecondaryClick = () => {
    trackCTAClick(serviceKey, location, "Call Now");
    window.location.href = "tel:+919825122840";
  };

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
          Ready to Get Started?
        </p>

        <h2 className="heading3 text-center mb-4 text-navy-950">{headline}</h2>

        <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
          {subtext}
        </p>

        <div className="mb-8">
          {showPrice ? (
            <p className="text-lg text-amber-400 ">
              Projects start at {startingFrom}
            </p>
          ) : (
            <p className="text-lg text-amber-400 ">
              Measurable ROI within the first quarter for most engagements
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handlePrimaryClick}
            className="px-8 py-5 cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center space-x-2 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label={`${ctaLabel} for ${serviceKey}`}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button
            onClick={handleSecondaryClick}
            variant="outline"
            className="px-8 py-5 cursor-pointer border border-primary/30 text-primary font-semibold bg-primary-300 text-white hover:bg-navy-800 hover:text-white rounded-xl transition-colors flex items-center justify-center space-x-2"
            aria-label="Call us for immediate assistance"
          >
            <Phone className="w-5 h-5" />
            <span>Call: +91 98251 22840</span>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-200 mb-2">120+</div>
            <div className="text-primary">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-200 mb-2">40%</div>
            <div className="text-primary">Average Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-200 mb-2">99%</div>
            <div className="text-primary">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
