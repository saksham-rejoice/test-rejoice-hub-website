import { Check, Clock } from "lucide-react";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import Input from "~/components/ui/input";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { sendAgentSlackMessage } from '~/api/slackMessageApi';

export default function AutomateScheduling() {
 const [leadForm, setLeadForm] = useState({
     name: '',
     email: '',
     phone: '', 
     company: '',
     interest: '',
     message: '',
 });
     const [leadSubmitting, setLeadSubmitting] = useState(false);
     const [leadSuccess, setLeadSuccess] = useState('');
     const [leadError, setLeadError] = useState('');
 
     const handleLeadChange = (
         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
     ) => {
         const { name, value } = e.target;
 
         // Special handling for phone input
         if (name === 'phone') {
             // Only allow numbers and backspace
             const numericValue = value.replace(/[^0-9]/g, '');
             // Ensure +91 is always at the start
             setLeadForm(prev => ({
                 ...prev,
                 phone: numericValue.startsWith('91') ? `+${numericValue}` : `+91${numericValue}`
             }));
         } else {
             setLeadForm(prev => ({ ...prev, [name]: value }));
         }
     };
 
     const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         if (leadSubmitting) return;
 
         if (!leadForm.name || !leadForm.email || !leadForm.phone || !leadForm.message) {
             setLeadError('Please fill in all required fields.');
             return;
         }
 
         const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{4,10}$/;
         if (!phoneRegex.test(leadForm.phone)) {
             setLeadError('Please enter a valid phone number');
             return;
         }
 
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(leadForm.email)) {
             setLeadError('Please enter a valid email address');
             return;
         }
 
         setLeadError('');
         setLeadSuccess('');
         setLeadSubmitting(true);
 
         const text = `:telephone_receiver: *New CallIntel White-label Inquiry*\n\n` +
             `*Name*: ${leadForm.name}\n` +
             `*Email*: ${leadForm.email}\n` +
             `*Phone*: ${leadForm.phone}\n` +
             (leadForm.company ? `*Company*: ${leadForm.company}\n` : '') +
             (leadForm.interest ? `*Interested in*: ${leadForm.interest}\n` : '') +
             `*Message*: ${leadForm.message}`;
 
         try {
             await sendAgentSlackMessage({ text });
             setLeadSuccess("Thanks! We've received your details and will reach out shortly.");
             setLeadForm({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
         } catch (err) {
             console.error('CallIntel lead form error', err);
             setLeadError('Something went wrong. Please try again or use the contact page.');
         } finally {
             setLeadSubmitting(false);
         }
     };
 
  return (
    <div className="py-20">
      <div className="container-lg2">
        <div className="pb-[60px]">
          <h2 className="heading3 text-primary text-center">
            You will get Call AI Agent –{" "}
            <span className="text-gradient">Automate Scheduling,</span>
          </h2>
        </div>
        <div className="bg-gradient-to-r from-[rgba(255,93,1,0.1)] to-[rgba(255,149,4,0.1)]  p-5 rounded-xl">
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <div className="pr-5 border-r border-solid border-[#FF5F011A]">
                <div className="flex pb-6 items-center justify-between">
                  <h3 className="text-xl text-primary font-medium">
                    Select service tier
                  </h3>
                  <span className="text-gradient text-lg">Compare tiers</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-solid border-[#FF5E01] p-5 bg-white">
                    <span className="text-base font-medium text-gradient">
                      Starter
                    </span>
                    <h4 className="text-xl font-medium text-primary">$1,800</h4>
                  </div>
                  <div className="rounded-lg border border-solid border-[#FF5E01] p-5 bg-white">
                    <span className="text-base font-medium text-gradient">
                      Starter
                    </span>
                    <h4 className="text-xl font-medium text-primary">$1,800</h4>
                  </div>
                  <div className="rounded-lg border border-solid border-[#FF5E01] p-5 bg-white">
                    <span className="text-base font-medium text-gradient">
                      Starter
                    </span>
                    <h4 className="text-xl font-medium text-primary">$1,800</h4>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Button
                  variant="default"
                  size={"lg"}
                  className=" py-2.5 max-w-[300px] w-full  bg-[linear-gradient(180deg,_#FF5E01_0%,_#FF9404_100%)] text-white  rounded-lg h-auto cursor-pointer font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Continue ($1,800)
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-5">
                <h3 className="text-xl font-medium text-primary">
                  Starter Automation
                </h3>
                <p className=" text-gray-500 text-base mb-5">
                  AI Agent setup for scheduling calls for 1 calendar or platform
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Delivery Time
                    </p>
                    <p className="text-base font-medium text-gradient">
                      2 days
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Number of Outbound Calls
                    </p>
                    <p className="text-base font-medium text-gradient">
                      2 days
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Number of Email Sends
                    </p>
                    <p className="text-base font-medium text-gradient">
                      2 days
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Scriptwriting
                    </p>
                    <Check className="text-orange w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary w-4 h-4" />
                  <span className="text-base text-primary">
                    2 days delivery
                  </span>
                </div>
                <p className="text-base font-normal text-primary">
                  Revisions may occur after this date.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <div className="grid items-center gap-[60px] grid-cols-[1fr_576px]">
            <div>
              <h2 className="heading2 text-primary max-w-[700px]">
                Launch your own{" "}
                <span className="text-gradient">
                  {" "}
                  Upwork automation platform{" "}
                </span>{" "}
                — or transform internal workflow
              </h2>
              <p className="my-5 text-lg text-grey-600 max-w-[767px] max-mobile:text-base">
                White-label Upwork Agent with your own brand, domain, UI
                identity and pricing to offer an AI-powered Upwork automation
                system without development cost. Perfect for agencies,
                outsourcing firms, and business operators scaling revenue
                models.
              </p>
              <p className="text-lg text-[#000] font-medium">
                White-label license available starting at $999 one-time.
              </p>
              <p className="text-lg text-[#000] font-medium mt-4">
                Your brand. Your platform. Your revenue. Our infrastructure.
              </p>
            </div>
          <div className="flex items-stretch justify-center">
                            <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl px-6 py-7 max-mobile:px-4 max-mobile:py-5 border border-border-color3">
                                <h3 className="text-2xl font-semibold text-primary mb-4">
                                    Launch your white-label HR Agent platform
                                </h3>
                                <form onSubmit={handleLeadSubmit} className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={leadForm.name}
                                            onChange={handleLeadChange}
                                            placeholder="Enter your full name"
                                            className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            Email address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={leadForm.email}
                                            onChange={handleLeadChange}
                                            placeholder="you@company.com"
                                            className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            Company name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={leadForm.company}
                                            onChange={handleLeadChange}
                                            placeholder="Your company or agency"
                                            className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                        />
                                    </div>
                                     <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            I'm interested in
                                        </label>
                                        <select
                                            name="interest"
                                            value={leadForm.interest}
                                            onChange={handleLeadChange}
                                            className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="Requesting a demo">Requesting a demo</option>
                                            <option value="White-label solution">White-label solution</option>
                                            <option value="Pricing information">Pricing information</option>
                                            <option value="Questions">Other</option>
                                        </select>
                                    </div>
                                    <div className="mt-2">
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            Phone number <span className="text-red-500">*</span>
                                        </label>
                                        <PhoneInput
                                            international
                                            defaultCountry="IN"
                                            value={leadForm.phone}
                                            onChange={(value) => setLeadForm(prev => ({ ...prev, phone: value || '' }))}
                                            placeholder="+91 98765 43210"
                                            className="w-full rounded-md text-sm  bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                            required
                                        />
                                    </div>
                                   
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            Additional details <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={leadForm.message}
                                            onChange={handleLeadChange}
                                            rows={3}
                                            placeholder="Share anything else that would help us prepare"
                                            className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                            required
                                        />
                                    </div>

                                    {leadError && (
                                        <p className="text-xs text-red-500">{leadError}</p>
                                    )}
                                    {leadSuccess && (
                                        <p className="text-xs text-emerald-600">{leadSuccess}</p>
                                    )}

                                    <div className="flex flex-col gap-2 mt-4 sm:flex-row">
                                        <button
                                            type="submit"
                                            disabled={leadSubmitting}
                                            className="flex-1 py-2.5 cursor-pointer text-sm font-semibold rounded-full bg-primary-300 text-white border border-primary-300 hover:bg-transparent hover:text-primary-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {leadSubmitting ? 'Sending...' : 'Submit Request'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
