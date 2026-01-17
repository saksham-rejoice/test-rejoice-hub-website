import { LeadCaptureData } from '~/types/aiAgentBuilderTypes';

export interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  message: string;
  error?: string;
}

export interface LeadSubmissionPayload {
  email: string;
  agentDescription?: string;
  selectedCategory?: string;
  blueprintId?: string;
  leadMagnetId?: string;
  serviceId?: string;
  placement?: string;
  timestamp: string;
  source: 'ai-agent-builder' | 'lead-magnet' | 'service-page';
  userAgent?: string;
  referrer?: string;
}

export interface LeadMagnetSubmissionData {
  email: string;
  leadMagnetId: string;
  serviceId: string;
  category: string;
  type: string;
  placement: string;
  timestamp: Date;
  source?: string;
}

/**
 * Submits lead capture data to the backend/CRM system
 */
export async function submitLeadCapture(leadData: LeadCaptureData | LeadMagnetSubmissionData): Promise<LeadSubmissionResponse> {
  try {
    let payload: LeadSubmissionPayload;
    
    // Check if it's AI Agent Builder data or Lead Magnet data
    if ('agentDescription' in leadData) {
      // AI Agent Builder submission
      payload = {
        email: leadData.email,
        agentDescription: leadData.agentDescription,
        selectedCategory: leadData.selectedCategory,
        blueprintId: leadData.blueprintId,
        timestamp: leadData.timestamp.toISOString(),
        source: 'ai-agent-builder',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        referrer: typeof document !== 'undefined' ? document.referrer : undefined
      };
    } else {
      // Lead Magnet submission
      payload = {
        email: leadData.email,
        leadMagnetId: leadData.leadMagnetId,
        serviceId: leadData.serviceId,
        selectedCategory: leadData.category,
        placement: leadData.placement,
        timestamp: leadData.timestamp.toISOString(),
        source: leadData.source || 'lead-magnet',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        referrer: typeof document !== 'undefined' ? document.referrer : undefined
      };
    }

    const response = await fetch('/api/leads/capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit lead');
    }

    return {
      success: true,
      leadId: result.leadId,
      message: result.message || 'Lead submitted successfully'
    };

  } catch (error) {
    console.error('Lead submission error:', error);
    
    // Fallback to Slack notification if primary endpoint fails
    try {
      await sendSlackNotification(leadData);
      return {
        success: true,
        message: 'Lead captured successfully (backup method)'
      };
    } catch (slackError) {
      console.error('Slack notification error:', slackError);
      return {
        success: false,
        message: 'Failed to capture lead',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

/**
 * Sends lead notification to Slack as a backup method
 */
async function sendSlackNotification(leadData: LeadCaptureData | LeadMagnetSubmissionData): Promise<void> {
  let slackPayload: any;
  
  if ('agentDescription' in leadData) {
    // AI Agent Builder notification
    slackPayload = {
      text: `🤖 New AI Agent Builder Lead!`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🤖 New AI Agent Builder Lead!'
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Email:*\n${leadData.email}`
            },
            {
              type: 'mrkdwn',
              text: `*Category:*\n${leadData.selectedCategory || 'Custom'}`
            },
            {
              type: 'mrkdwn',
              text: `*Blueprint ID:*\n${leadData.blueprintId || 'N/A'}`
            },
            {
              type: 'mrkdwn',
              text: `*Timestamp:*\n${leadData.timestamp.toLocaleString()}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Agent Description:*\n"${leadData.agentDescription}"`
          }
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Schedule Call'
              },
              url: 'https://calendly.com/dipak-rejoicehub',
              style: 'primary'
            },
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Add to CRM'
              },
              url: `mailto:${leadData.email}?subject=AI Agent Blueprint - Follow Up`,
            }
          ]
        }
      ]
    };
  } else {
    // Lead Magnet notification
    slackPayload = {
      text: `🎁 New Lead Magnet Download!`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🎁 New Lead Magnet Download!'
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Email:*\n${leadData.email}`
            },
            {
              type: 'mrkdwn',
              text: `*Lead Magnet:*\n${leadData.leadMagnetId}`
            },
            {
              type: 'mrkdwn',
              text: `*Service Page:*\n${leadData.serviceId}`
            },
            {
              type: 'mrkdwn',
              text: `*Placement:*\n${leadData.placement}`
            }
          ]
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Category:*\n${leadData.category}`
            },
            {
              type: 'mrkdwn',
              text: `*Type:*\n${leadData.type}`
            },
            {
              type: 'mrkdwn',
              text: `*Source:*\n${leadData.source || 'service-page'}`
            },
            {
              type: 'mrkdwn',
              text: `*Timestamp:*\n${leadData.timestamp.toLocaleString()}`
            }
          ]
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Schedule Follow-up'
              },
              url: 'https://calendly.com/dipak-rejoicehub',
              style: 'primary'
            },
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: 'Send Follow-up Email'
              },
              url: `mailto:${leadData.email}?subject=Thank you for downloading our ${leadData.type}`,
            }
          ]
        }
      ]
    };
  }

  // Use existing slack message API from the project
  const response = await fetch('/api/slack-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(slackPayload)
  });

  if (!response.ok) {
    throw new Error('Failed to send Slack notification');
  }
}

/**
 * Sends the blueprint document via email
 */
export async function sendBlueprintEmail(
  email: string, 
  blueprintId: string,
  agentDescription: string
): Promise<LeadSubmissionResponse> {
  try {
    const payload = {
      email,
      blueprintId,
      agentDescription,
      timestamp: new Date().toISOString()
    };

    const response = await fetch('/api/blueprints/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send blueprint email');
    }

    return {
      success: true,
      message: 'Blueprint sent successfully'
    };

  } catch (error) {
    console.error('Blueprint email error:', error);
    return {
      success: false,
      message: 'Failed to send blueprint email',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Tracks analytics events for the AI Agent Builder
 */
export function trackAgentBuilderEvent(
  event: 'builder_started' | 'prompt_selected' | 'blueprint_generated' | 'lead_captured' | 'email_submitted',
  properties?: Record<string, any>
): void {
  try {
    // Google Analytics 4 event tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      gtag('event', event, {
        event_category: 'ai_agent_builder',
        event_label: properties?.category || 'unknown',
        custom_parameters: properties
      });
    }

    // Alternative analytics tracking (can be replaced with your preferred service)
    if (typeof window !== 'undefined' && 'analytics' in window) {
      const analytics = (window as any).analytics;
      analytics.track(event, {
        category: 'AI Agent Builder',
        ...properties
      });
    }


  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

/**
 * Tracks lead magnet specific events
 */
export function trackLeadMagnetEvent(
  event: 'magnet_viewed' | 'magnet_selected' | 'email_submitted' | 'resource_downloaded' | 'exit_intent_triggered' | 'sticky_closed',
  properties?: Record<string, any>
): void {
  try {
    // Google Analytics 4 event tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      gtag('event', event, {
        event_category: 'lead_magnet',
        event_label: properties?.magnetId || 'unknown',
        service_id: properties?.serviceId,
        placement: properties?.placement,
        custom_parameters: properties
      });
    }

    // Alternative analytics tracking
    if (typeof window !== 'undefined' && 'analytics' in window) {
      const analytics = (window as any).analytics;
      analytics.track(event, {
        category: 'Lead Magnet',
        ...properties
      });
    }

  } catch (error) {
    console.error('Lead magnet analytics tracking error:', error);
  }
}

/**
 * Validates email format
 */
export function validateEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitizes user input for security
 */
export function sanitizeUserInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trimStart()
    .substring(0, 1000); // Limit length
}

/**
 * Generates a unique lead tracking ID
 */
export function generateLeadId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `lead_${timestamp}_${random}`;
}