import { create } from 'zustand';
import { ServiceKey } from '~/data/pricing';

interface InquiryModalState {
  isOpen: boolean;
  serviceKey: ServiceKey | null;
  source: string;
  open: (serviceKey: ServiceKey, source?: string) => void;
  close: () => void;
}

export const useInquiryModal = create<InquiryModalState>((set) => ({
  isOpen: false,
  serviceKey: null,
  source: 'pricing_modal',
  open: (serviceKey: ServiceKey, source = 'pricing_modal') => set({ isOpen: true, serviceKey, source }),
  close: () => set({ isOpen: false, serviceKey: null, source: 'pricing_modal' }),
}));
