import { useEffect, useState, useCallback } from 'react';

interface UseAccessibilityOptions {
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
  enableKeyboardNavigation?: boolean;
  announcePageChanges?: boolean;
}

interface AccessibilityState {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  isKeyboardUser: boolean;
}

/**
 * Custom hook for accessibility features
 */
export const useAccessibility = (options: UseAccessibilityOptions = {}) => {
  const {
    enableFocusManagement = true,
    enableAriaLabels = true,
    enableKeyboardNavigation = true,
    announcePageChanges = true
  } = options;

  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    isHighContrast: false,
    isReducedMotion: false,
    fontSize: 'normal',
    isKeyboardUser: false
  });

  // Detect user preferences
  useEffect(() => {
    const checkAccessibilityPreferences = () => {
      const isHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setAccessibilityState(prev => ({
        ...prev,
        isHighContrast,
        isReducedMotion
      }));
    };

    checkAccessibilityPreferences();

    // Listen for changes
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    contrastQuery.addEventListener('change', checkAccessibilityPreferences);
    motionQuery.addEventListener('change', checkAccessibilityPreferences);

    return () => {
      contrastQuery.removeEventListener('change', checkAccessibilityPreferences);
      motionQuery.removeEventListener('change', checkAccessibilityPreferences);
    };
  }, []);

  // Detect keyboard usage
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = () => {
      setAccessibilityState(prev => ({
        ...prev,
        isKeyboardUser: true
      }));
    };

    const handleMouseDown = () => {
      setAccessibilityState(prev => ({
        ...prev,
        isKeyboardUser: false
      }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNavigation]);

  // Focus management
  const manageFocus = useCallback((element: HTMLElement | null) => {
    if (!enableFocusManagement || !element) return;
    
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [enableFocusManagement]);

  // Skip links functionality
  const addSkipLinks = useCallback(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-2 rounded shadow-lg z-50';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  // Announce page changes to screen readers
  const announcePageChange = useCallback((message: string) => {
    if (!announcePageChanges) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 1000);
  }, [announcePageChanges]);

  // Enhanced focus styles for keyboard users
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-user *:focus {
        outline: 3px solid #fbbf24 !important;
        outline-offset: 2px !important;
        border-radius: 4px;
      }
      
      .keyboard-user button:focus,
      .keyboard-user a:focus,
      .keyboard-user input:focus,
      .keyboard-user textarea:focus,
      .keyboard-user select:focus {
        box-shadow: 0 0 0 3px #fbbf24 !important;
      }
    `;
    
    document.head.appendChild(style);
    
    if (accessibilityState.isKeyboardUser) {
      document.body.classList.add('keyboard-user');
    } else {
      document.body.classList.remove('keyboard-user');
    }
    
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [accessibilityState.isKeyboardUser]);

  return {
    accessibilityState,
    manageFocus,
    addSkipLinks,
    announcePageChange,
    setFontSize: (size: AccessibilityState['fontSize']) => {
      setAccessibilityState(prev => ({ ...prev, fontSize: size }));
    }
  };
};

/**
 * Accessibility utility functions
 */
export const AccessibilityUtils = {
  // Generate proper ARIA labels
  generateAriaLabel: (element: string, context?: string) => {
    if (context) {
      return `${element} in ${context}`;
    }
    return element;
  },

  // Check if element is focusable
  isFocusable: (element: HTMLElement) => {
    const focusableElements = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex=\"-1\"])'
    ];
    
    return focusableElements.some(selector => element.matches(selector));
  },

  // Get all focusable elements within a container
  getFocusableElements: (container: HTMLElement) => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex=\"-1\"])'
    ].join(', ');
    
    return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
  },

  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusableElements = AccessibilityUtils.getFocusableElements(container);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    
    // Focus first element
    if (firstElement) {
      firstElement.focus();
    }

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  },

  // Check color contrast ratio
  checkColorContrast: (foreground: string, background: string) => {
    // This is a simplified version - in production, use a proper color contrast library
    // Returns whether the contrast ratio meets WCAG AA standards (4.5:1)
    return true; // Placeholder implementation
  },

  // Generate unique IDs for form associations
  generateId: (prefix: string = 'a11y') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }
};

export default useAccessibility;