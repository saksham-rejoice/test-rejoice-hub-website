import { z } from 'zod';
import { redirect } from 'react-router';

const inquirySchema = z.object({
  name: z.string().min(2),
  workEmail: z.string().email(),
  company: z.string().min(2),
  service: z.string().min(2),
  message: z.string().min(10),
  serviceKey: z.string().optional(),
  source: z.string().optional(),
});

export async function action({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    
    // Validate the data
    const validatedData = inquirySchema.parse(data);
    
    // Sanitize input data
    const sanitizedData = {
      name: validatedData.name.trim(),
      workEmail: validatedData.workEmail.trim().toLowerCase(),
      company: validatedData.company.trim(),
      service: validatedData.service.trim(),
      message: validatedData.message.trim(),
      serviceKey: validatedData.serviceKey,
      source: validatedData.source || 'pricing_modal',
      timestamp: new Date().toISOString(),
    };

    // Here you would typically:
    // 1. Save to database (Supabase)
    // 2. Send email notification
    // 3. Send Slack notification if helper exists
    
    // For now, we'll just log the data and return success
    
    // TODO: Integrate with Supabase
    // const { data: inquiry, error } = await supabase
    //   .from('inquiries')
    //   .insert([sanitizedData]);
    
    // TODO: Send Slack notification if helper exists
    // if (typeof sendSlackMessage === 'function') {
    //   await sendSlackMessage({
    //     text: `New inquiry from ${sanitizedData.name} (${sanitizedData.company})`,
    //     attachments: [{
    //       color: 'good',
    //       fields: [
    //         { title: 'Service', value: sanitizedData.service, short: true },
    //         { title: 'Email', value: sanitizedData.workEmail, short: true },
    //         { title: 'Message', value: sanitizedData.message, short: false }
    //       ]
    //     }]
    //   });
    // }
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to submit inquiry' 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
