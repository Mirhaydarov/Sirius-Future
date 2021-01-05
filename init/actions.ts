// Types
import { 
  TOGGLE_SIDEBAR,
  toggleSidebarActionTypes
} from './types';

export const toggleSidebar = (payload: boolean): toggleSidebarActionTypes => {
  return {
    type: TOGGLE_SIDEBAR,
    payload,
  }
};