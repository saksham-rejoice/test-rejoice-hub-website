import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PRICING_MAP, shouldShowPricing, getPricingBySlug, getPricingByKey } from '~/data/pricing';
import type { ServiceKey } from '~/data/pricing';

// Mock import.meta.env
const mockEnv = vi.hoisted(() => ({
  VITE_SHOW_PRICING: 'true'
}));

vi.mock('import.meta', () => ({
  env: mockEnv
}));

describe('Pricing Configuration', () => {
  beforeEach(() => {
    mockEnv.VITE_SHOW_PRICING = 'true';
  });

  describe('PRICING_MAP', () => {
    it('should contain all required service keys', () => {
      const expectedKeys: ServiceKey[] = [
        'ai_agent_development',
        'generative_ai_solutions',
        'ai_integration',
        'ai_strategy_consulting',
        'web_development',
        'mobile_app_development',
        'api_development',
        'iot_development',
        'devops_consulting',
        'open_source_solutions',
        'digital_transformation',
        'ui_ux_design',
        'brand_design',
        'user_research'
      ];

      expectedKeys.forEach(key => {
        expect(PRICING_MAP).toHaveProperty(key);
        expect(PRICING_MAP[key]).toBeDefined();
      });
    });

    it('should have correct structure for each pricing entry', () => {
      Object.values(PRICING_MAP).forEach(pricing => {
        expect(pricing).toHaveProperty('key');
        expect(pricing).toHaveProperty('title');
        expect(pricing).toHaveProperty('subtitle');
        expect(pricing).toHaveProperty('startingFrom');
        expect(pricing).toHaveProperty('showPrice');
        expect(pricing).toHaveProperty('tier');
        expect(pricing).toHaveProperty('primaryCTA');
        expect(pricing).toHaveProperty('features');
        expect(pricing).toHaveProperty('slug');

        expect(typeof pricing.title).toBe('string');
        expect(typeof pricing.subtitle).toBe('string');
        expect(typeof pricing.startingFrom).toBe('string');
        expect(typeof pricing.showPrice).toBe('boolean');
        expect(['T1', 'T2', 'T3']).toContain(pricing.tier);
        expect(Array.isArray(pricing.features)).toBe(true);
        expect(pricing.features.length).toBeGreaterThan(0);
        expect(pricing.primaryCTA).toHaveProperty('label');
      });
    });

    it('should validate showPrice flags for specific services', () => {
      // T1 services should show prices
      expect(PRICING_MAP.generative_ai_solutions.showPrice).toBe(true);
      expect(PRICING_MAP.ai_strategy_consulting.showPrice).toBe(true);
      expect(PRICING_MAP.web_development.showPrice).toBe(true);
      expect(PRICING_MAP.api_development.showPrice).toBe(true);
      expect(PRICING_MAP.devops_consulting.showPrice).toBe(true);
      expect(PRICING_MAP.open_source_solutions.showPrice).toBe(true);
      expect(PRICING_MAP.ui_ux_design.showPrice).toBe(true);
      expect(PRICING_MAP.brand_design.showPrice).toBe(true);
      expect(PRICING_MAP.user_research.showPrice).toBe(true);

      // T2 services should hide prices
      expect(PRICING_MAP.ai_agent_development.showPrice).toBe(false);
      expect(PRICING_MAP.ai_integration.showPrice).toBe(false);
      expect(PRICING_MAP.mobile_app_development.showPrice).toBe(false);

      // T3 services should hide prices
      expect(PRICING_MAP.iot_development.showPrice).toBe(false);
      expect(PRICING_MAP.digital_transformation.showPrice).toBe(false);
    });

    it('should have valid slugs for all services', () => {
      Object.values(PRICING_MAP).forEach(pricing => {
        expect(pricing.slug).toMatch(/^\/services\/[a-z-]+$/);
      });
    });
  });

  describe('shouldShowPricing', () => {
    it('should return true when showPrice is true and feature flag is enabled', () => {
      mockEnv.VITE_SHOW_PRICING = 'true';
      const pricing = PRICING_MAP.generative_ai_solutions;
      expect(shouldShowPricing(pricing)).toBe(true);
    });

    it('should return false when showPrice is false regardless of feature flag', () => {
      mockEnv.VITE_SHOW_PRICING = 'true';
      const pricing = PRICING_MAP.ai_agent_development;
      expect(shouldShowPricing(pricing)).toBe(false);
    });

    it('should return false when feature flag is disabled', () => {
      mockEnv.VITE_SHOW_PRICING = 'false';
      const pricing = PRICING_MAP.generative_ai_solutions;
      expect(shouldShowPricing(pricing)).toBe(false);
    });

    it('should return false when feature flag is undefined', () => {
      mockEnv.VITE_SHOW_PRICING = undefined;
      const pricing = PRICING_MAP.generative_ai_solutions;
      expect(shouldShowPricing(pricing)).toBe(false);
    });
  });

  describe('getPricingBySlug', () => {
    it('should return correct pricing for valid slug', () => {
      const pricing = getPricingBySlug('/services/generative-ai-solutions');
      expect(pricing).toBeDefined();
      expect(pricing?.key).toBe('generative_ai_solutions');
    });

    it('should return null for invalid slug', () => {
      const pricing = getPricingBySlug('/services/non-existent');
      expect(pricing).toBeNull();
    });

    it('should return null for empty slug', () => {
      const pricing = getPricingBySlug('');
      expect(pricing).toBeNull();
    });
  });

  describe('getPricingByKey', () => {
    it('should return correct pricing for valid key', () => {
      const pricing = getPricingByKey('generative_ai_solutions');
      expect(pricing).toBeDefined();
      expect(pricing.key).toBe('generative_ai_solutions');
    });

    it('should return pricing for all valid keys', () => {
      const keys: ServiceKey[] = [
        'ai_agent_development',
        'generative_ai_solutions',
        'ai_integration',
        'ai_strategy_consulting',
        'web_development',
        'mobile_app_development',
        'api_development',
        'iot_development',
        'devops_consulting',
        'open_source_solutions',
        'digital_transformation',
        'ui_ux_design',
        'brand_design',
        'user_research'
      ];

      keys.forEach(key => {
        const pricing = getPricingByKey(key);
        expect(pricing).toBeDefined();
        expect(pricing.key).toBe(key);
      });
    });
  });
});
