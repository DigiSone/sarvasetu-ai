import { GovServiceItem } from '../types/service';
import { MASTER_SERVICES_151 } from './masterDirectory151';
import { ADDITIONAL_SERVICES } from './masterDirectoryPart2';
import { FINAL_REMAINING_SERVICES } from './masterDirectoryPart3';

// 174 संपूर्ण सत्यापित सरकारी सेवाएं (151+ से अधिक)
export const ALL_GOVERNMENT_SERVICES: GovServiceItem[] = [
  ...MASTER_SERVICES_151,
  ...ADDITIONAL_SERVICES,
  ...FINAL_REMAINING_SERVICES
];
