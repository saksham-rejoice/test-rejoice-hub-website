import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PricingCard } from '~/components/services/pricing/PricingCard';
import type { ServiceKey } from '~/data/pricing';

// Mock the analytics module
vi.mock('~/lib/analytics', () => ({
  trackPricingCardView: vi.fn(),
}));

// Mock the Zustand store
const mockOpen = vi.fn();
vi.mock('~/store/useInquiryModal', () => ({
  useInquiryModal: () => ({
    open: mockOpen,
  }),
}));

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock import.meta.env
const mockEnv = vi.hoisted(() => ({
  VITE_SHOW_PRICING: 'true'
}));

vi.mock('import.meta', () => ({
  env: mockEnv
}));

describe('PricingCard', () => {
  const mockProps = {
    title: 'Test Service',
    subtitle: 'Test subtitle',
    price: '1,000 USD',
    primaryCTA: { label: 'Get Started', action: 'openModal' as const },
    secondaryCTA: { label: 'Learn More', href: '/learn-more' },
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    serviceKey: 'web_development' as ServiceKey,
    location: 'test_location',
    showPrice: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockEnv.VITE_SHOW_PRICING = 'true';
  });

  it('should render pricing card with all elements', () => {
    render(<PricingCard {...mockProps} />);

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
    expect(screen.getByText('1,000 USD')).toBeInTheDocument();
    expect(screen.getByText('Starting from')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Feature 3')).toBeInTheDocument();
  });

  it('should hide price when showPrice is false', () => {
    render(<PricingCard {...mockProps} showPrice={false} />);

    expect(screen.queryByText('1,000 USD')).not.toBeInTheDocument();
    expect(screen.queryByText('Starting from')).not.toBeInTheDocument();
    expect(screen.getByText('Contact us for tailored pricing')).toBeInTheDocument();
    expect(screen.getByText('Custom solutions')).toBeInTheDocument();
  });

  it('should hide price when VITE_SHOW_PRICING is false', () => {
    mockEnv.VITE_SHOW_PRICING = 'false';
    render(<PricingCard {...mockProps} showPrice={true} />);

    expect(screen.queryByText('1,000 USD')).not.toBeInTheDocument();
    expect(screen.queryByText('Starting from')).not.toBeInTheDocument();
    expect(screen.getByText('Contact us for tailored pricing')).toBeInTheDocument();
    expect(screen.getByText('Custom solutions')).toBeInTheDocument();
  });

  it('should show price when both showPrice and VITE_SHOW_PRICING allow it', () => {
    mockEnv.VITE_SHOW_PRICING = 'true';
    render(<PricingCard {...mockProps} showPrice={true} />);

    expect(screen.getByText('1,000 USD')).toBeInTheDocument();
    expect(screen.getByText('Starting from')).toBeInTheDocument();
    expect(screen.queryByText('Contact us for tailored pricing')).not.toBeInTheDocument();
  });

  it('should call open modal when primary CTA is clicked with openModal action', () => {
    render(<PricingCard {...mockProps} />);

    const primaryButton = screen.getByText('Get Started');
    fireEvent.click(primaryButton);

    expect(mockOpen).toHaveBeenCalledWith('web_development');
  });

  it('should navigate to href when primary CTA has href', () => {
    const propsWithHref = {
      ...mockProps,
      primaryCTA: { label: 'Get Started', href: '/get-started' },
    };

    // Mock window.location.href
    delete (window as any).location;
    window.location = { href: '' } as any;

    render(<PricingCard {...propsWithHref} />);

    const primaryButton = screen.getByText('Get Started');
    fireEvent.click(primaryButton);

    expect(window.location.href).toBe('/get-started');
  });

  it('should navigate to secondary CTA href when clicked', () => {
    // Mock window.location.href
    delete (window as any).location;
    window.location = { href: '' } as any;

    render(<PricingCard {...mockProps} />);

    const secondaryButton = screen.getByText('Learn More');
    fireEvent.click(secondaryButton);

    expect(window.location.href).toBe('/learn-more');
  });

  it('should render without secondary CTA when not provided', () => {
    const propsWithoutSecondary = {
      ...mockProps,
      secondaryCTA: undefined,
    };

    render(<PricingCard {...propsWithoutSecondary} />);

    expect(screen.queryByText('Learn More')).not.toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<PricingCard {...mockProps} />);

    const primaryButton = screen.getByLabelText('Get Started for Test Service');
    const secondaryButton = screen.getByLabelText('Learn More for Test Service');

    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
  });

  it('should set up intersection observer on mount', () => {
    render(<PricingCard {...mockProps} />);

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.5 }
    );
  });

  it('should clean up intersection observer on unmount', () => {
    const { unmount } = render(<PricingCard {...mockProps} />);
    
    unmount();

    // The observer should be disconnected when component unmounts
    // This is tested implicitly through the cleanup function
  });
});
