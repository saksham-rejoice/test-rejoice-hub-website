# Hybrid Pricing CTAs Implementation

This document describes the implementation of hybrid pricing CTAs across all service pages with config-driven visibility, modal, analytics, and SSR meta.

## Overview

The pricing system implements a hybrid approach:
- **Tier 1 (T1)**: Productized services with visible pricing
- **Tier 2 (T2)**: Variable scope services with hidden pricing
- **Tier 3 (T3)**: Enterprise programs with ROI framing

## Architecture

### Core Components

1. **Pricing Configuration** (`app/data/pricing.ts`)
   - Single source of truth for all service pricing
   - Hybrid flags for price visibility
   - Service tier classification

2. **UI Components** (`app/components/services/pricing/`)
   - `PricingCard`: Individual pricing display
   - `CTASection`: Call-to-action sections
   - `InquiryModal`: Lead capture modal

3. **State Management** (`app/store/useInquiryModal.ts`)
   - Zustand store for modal state
   - Service key tracking

4. **Analytics** (`app/lib/analytics.ts`)
   - Event tracking for pricing interactions
   - Fallback to Google Analytics

### Feature Flag

The system uses `VITE_SHOW_PRICING` environment variable:
- `"true"`: Show prices for T1 services
- `"false"`: Hide all numeric prices sitewide
- `undefined`: Hide all numeric prices (default)

## Usage

### Environment Variables

Create a `.env.local` file:
```bash
# Set to "false" to hide all numeric prices sitewide
VITE_SHOW_PRICING=true
```

### Service Integration

The pricing components are automatically integrated into service routes via `app/routes/services/serviceId.tsx`. Each service page will:

1. Display a CTA section after the hero
2. Show a pricing card near the end
3. Include the inquiry modal

### Analytics Events

The system tracks the following events:
- `cta_view`: When CTA sections are viewed
- `cta_click`: When CTA buttons are clicked
- `pricing_card_view`: When pricing cards enter viewport
- `pricing_contact_submit`: When inquiry forms are submitted

## Testing

Run the pricing tests:
```bash
pnpm test:pricing
```

Tests cover:
- Pricing configuration validation
- Component rendering with different price visibility states
- Feature flag behavior
- Analytics event firing

## API Integration

The inquiry modal submits to `/api/inquiry` with fallback to `mailto:sales@rejoicehub.com`.

### API Endpoint

The API endpoint (`app/api/inquiry.ts`) handles:
- Form validation with Zod
- Input sanitization
- Database storage (when implemented)
- Slack notifications (when helper exists)

## SEO Integration

Service routes automatically include pricing-aware meta tags:
- Title includes pricing when visible
- Description includes pricing context
- Structured data for services

## Accessibility

All components meet WCAG AA standards:
- Proper ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support

## Future Enhancements

1. **Database Integration**: Connect to Supabase for inquiry storage
2. **Slack Notifications**: Implement Slack message helper
3. **Email Templates**: Add email notification system
4. **A/B Testing**: Add pricing variation testing
5. **Analytics Dashboard**: Create pricing performance metrics
