export function track(event: string, data?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).rejoiceTrack) {
    (window as any).rejoiceTrack(event, data || {});
    return;
  }
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event, data || {});
    return;
  }
  console.info("[analytics]", event, data || {});
}

// Specific tracking functions for pricing components
export function trackCTAView(serviceKey: string, location: string) {
  track("cta_view", { serviceKey, location });
}

export function trackCTAClick(serviceKey: string, location: string, label: string) {
  track("cta_click", { serviceKey, location, label });
}

export function trackPricingCardView(serviceKey: string, location: string) {
  track("pricing_card_view", { serviceKey, location });
}

export function trackPricingContactSubmit(serviceKey: string, formData: Record<string, any>) {
  track("pricing_contact_submit", { serviceKey, ...formData });
}
