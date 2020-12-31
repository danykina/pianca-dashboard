import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import { enUS } from '@material-ui/core/locale';

const theme = createMuiTheme(
  {
    palette: {
      type: 'dark',
    },
  },
  enUS,
);

export default theme;
