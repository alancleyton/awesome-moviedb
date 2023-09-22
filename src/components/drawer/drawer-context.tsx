import { createContext } from 'react';

import { type DrawerContextType } from './drawer-types';

export const DrawerContext = createContext<DrawerContextType>({
  open: false,
  onClose: undefined,
});
