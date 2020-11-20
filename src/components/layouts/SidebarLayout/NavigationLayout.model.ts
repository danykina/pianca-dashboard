import { ReactNode } from 'react';

import { DrawerProps } from '@material-ui/core';

export type NavigationLayoutProps = DrawerProps & {
  readonly navigationMenu: ReactNode;
};
