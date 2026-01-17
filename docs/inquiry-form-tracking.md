# Inquiry Form Source Tracking

This document outlines how form submissions are tracked across different locations in the application.

## Source Parameter Values

The `source` parameter is dynamically passed to the inquiry form to track where users are submitting from:

### Service Page Locations

1. **Hero CTA Section**
   - Source: `service_page_hero`
   - Location: Top of service page, right after the hero section
   - Component: `CTASection`

2. **Pricing Section - Starter Tier**
   - Source: `service_page_pricing_starter`
   - Location: Pricing tiers section, Starter plan CTA
   - Component: `PricingTiers`

3. **Pricing Section - Professional Tier**
   - Source: `service_page_pricing_professional`
   - Location: Pricing tiers section, Professional plan CTA
   - Component: `PricingTiers`

4. **Pricing Section - Enterprise Tier**
   - Source: `service_page_pricing_enterprise`
   - Location: Pricing tiers section, Enterprise plan CTA
   - Component: `PricingTiers`

5. **Generic Pricing Card**
   - Source: Passed via `location` prop (varies by implementation)
   - Location: Standalone pricing cards
   - Component: `PricingCard`

## Database Schema

Form submissions are stored in the `rejoice_hub_inquiry_form` table with the following fields:

```typescript
{
  name: string,
  workEmail: string,
  company: string,
  service: string,
  message: string,
  serviceKey: ServiceKey,
  source: string  // Dynamic tracking parameter
}
```

## Implementation Details

### Store (useInquiryModal)
```typescript
open: (serviceKey: ServiceKey, source?: string) => void
```
- Default source: `'pricing_modal'`
- Can be overridden by passing a custom source string

### Usage Examples

```typescript
// Hero CTA
open(serviceKey, 'service_page_hero')

// Pricing Tiers
open(serviceKey, `${location}_${tier.name.toLowerCase()}`)
// Results in: 'service_page_pricing_starter', etc.

// Generic Card
open(serviceKey, location)
```

## Analytics Benefits

With this tracking system, you can:
- Identify which CTAs convert best
- Compare hero vs pricing section performance
- Analyze which pricing tier generates most inquiries
- Optimize placement and messaging based on data
- Track conversion funnel from different entry points
