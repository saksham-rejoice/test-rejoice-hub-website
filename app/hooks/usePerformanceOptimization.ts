import { useEffect, useCallback, useState } from 'react';

interface UsePerformanceOptimizationOptions {
  preloadImages?: string[];
  enableLayoutShiftPrevention?: boolean;
  enableResourceHints?: boolean;
}

/**
 * Custom hook for performance optimizations
 */
export const usePerformanceOptimization = (options: UsePerformanceOptimizationOptions = {}) => {
  const {
    preloadImages = [],
    enableLayoutShiftPrevention = true,
    enableResourceHints = true
  } = options;

  const [isOptimized, setIsOptimized] = useState(false);

  // Preload critical images
  const preloadCriticalImages = useCallback(() => {
    if (typeof document === 'undefined') return;
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, [preloadImages]);

  // Add resource hints for better performance
  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof document === 'undefined') return;

    // DNS prefetch for external domains
    const domains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'calendly.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical origins
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enableResourceHints]);

  // Prevent layout shifts with CSS containment
  const applyLayoutShiftPrevention = useCallback(() => {
    if (!enableLayoutShiftPrevention || typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      /* Layout shift prevention */
      img[loading="lazy"] {
        contain: layout style paint;
      }
      
      /* Reserve space for images */
      .image-container {
        position: relative;
        overflow: hidden;
      }
      
      .image-container::before {
        content: '';
        display: block;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
      }
      
      .image-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      /* Optimize animations */
      * {
        will-change: auto;
      }
      
      .optimized-transform {
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
    `;
    document.head.appendChild(style);
  }, [enableLayoutShiftPrevention]);

  // Optimize Web Vitals
  const optimizeWebVitals = useCallback(() => {
    // Largest Contentful Paint (LCP) optimization
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
        }
      }
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // PerformanceObserver not supported in some browsers
    }

    // First Input Delay (FID) optimization
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as any; // Type assertion for FID entry
        }
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // PerformanceObserver not supported in some browsers
    }

    return () => {
      observer.disconnect();
      fidObserver.disconnect();
    };
  }, []);

  // Lazy load non-critical resources
  const lazyLoadResources = useCallback(() => {
    if (typeof document === 'undefined') return;
    // Lazy load non-critical CSS
    const lazyStyles: string[] = [
      // Add any non-critical stylesheets here
    ];

    lazyStyles.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    // Run optimizations after component mount
    const timeoutId = setTimeout(() => {
      preloadCriticalImages();
      addResourceHints();
      applyLayoutShiftPrevention();
      lazyLoadResources();
      const cleanupWebVitals = optimizeWebVitals();
      
      setIsOptimized(true);

      return () => {
        if (cleanupWebVitals) cleanupWebVitals();
      };
    }, 100); // Small delay to not block initial render

    return () => clearTimeout(timeoutId);
  }, [
    preloadCriticalImages,
    addResourceHints,
    applyLayoutShiftPrevention,
    lazyLoadResources,
    optimizeWebVitals
  ]);

  return {
    isOptimized,
    preloadCriticalImages,
    addResourceHints
  };
};

export default usePerformanceOptimization;