import { createMuiTheme } from '@material-ui/core/styles';

import lightBlue from '@material-ui/core/colors/lightBlue';
import indigo from '@material-ui/core/colors/indigo';
import purple from '@material-ui/core/colors/purple';
import amber from '@material-ui/core/colors/amber';
import deepOrange from '@material-ui/core/colors/deepOrange';
import palette from './default/palette';
import { sizes } from './default/sizes';

const retrowave = createMuiTheme({
  palette: {},
  extendedPalette: {
    ...palette,
    primary: {
      light: indigo[500],
      main: indigo[500],
      dark: indigo[500],
      contrastText: indigo[700],
      tabs: {
        border: indigo[500],
      },
    },
    secondary: {
      light: purple[500],
      main: purple[500],
      dark: purple[500],
      contrastText: purple[700],
      tabs: {
        border: purple[500],
      },
    },
    error: {
      light: deepOrange[500],
      main: deepOrange[500],
      dark: purple[500],
      contrastText: deepOrange[700],
      tabs: {
        border: deepOrange[500],
      },
    },
    // action: {
    //   disabledBackground: amber[400],

    // },
    text: {
      primary: indigo[600],
      secondary: indigo[300],
      disabled: lightBlue[100],
      hint: deepOrange[500],
    },
  },
  sizes,
});

export default retrowave;
