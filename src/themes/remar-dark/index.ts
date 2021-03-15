import appTheme from '../default';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { IExtendedPaletteOptions } from '../theme.interface';
import * as colors from './colors';
import { Theme } from '@material-ui/core';
const { palette: defaultPalette } = createMuiTheme();

interface DoubleExtendedPalette extends IExtendedPaletteOptions {
  RawColorPicker: {
    borderColor: string;
    titleColor: string;
  };
}

const colorPalette: Partial<DoubleExtendedPalette> = {
  colors,
  common: {
    black: '#000',
    white: colors.basic[100],
    whiteShade1: '#f8f8f8',
    grey: colors.basic[600],
  },
  disabled: {
    contrastText: colors.basic[600],
    main: 'rgba(143, 155, 179, 0.16)',
  },
  type: 'dark',
  simple: {
    contrastText: colors.basic[800],
    main: 'transparent',
  },
  simpleQuaternary: {
    contrastText: '#1998d5',
    main: 'transparent',
  },
  simpleLabel: {
    contrastText: colors.basic[600],
    main: 'transparent',
  },
  primary: {
    contrastText: colors.basic[100],
    dark: defaultPalette.primary.dark,
    light: defaultPalette.primary.light,
    main: colors.primary[500],
    tabs: {
      border: colors.basic[500],
      contrastText: colors.basic[800],
      main: colors.basic[300],
    },
  },
  secondary: {
    contrastText: defaultPalette.secondary.contrastText,
    dark: defaultPalette.secondary.dark,
    light: defaultPalette.secondary.light,
    main: '#232f3e',
    tabs: {
      contrastText: defaultPalette.secondary.contrastText,
      dark: colors.info[500],
      main: '#232f3e',
      border: colors.info[600],
    },
  },
  tertiary: {
    border: colors.basic[500],
    contrastText: colors.basic[600],
    main: colors.basic[100],
  },
  quaternary: {
    contrastText: colors.basic[100],
    main: '#1998d5',
  },
  info: {
    contrastText: colors.basic[100],
    dark: defaultPalette.info.dark,
    light: defaultPalette.info.light,
    main: colors.primary[500],
    tabs: {
      contrastText: colors.info[500],
      dark: colors.info[500],
      main: colors.info[100],
      border: colors.basic[300],
    },
  },
  error: {
    ...defaultPalette.error,
    tabs: defaultPalette.error,
  },
  secondaryLight: {
    dark: '',
    light: '',
    contrastText: colors.basic[800],
    main: colors.basic[300],
  },
  greenLight: {
    contrastText: '#71a411',
    main: '#f2f3f8',
  },
  infoInvert: {
    contrastText: colors.basic[600],
    main: colors.basic[100],
  },
  // blue
  infoLight: {
    contrastText: '#1998d5',
    main: '#f0faff',
  },
  infoWarning: {
    main: '#fff4e5',
    contrastText: '#ff9900',
  },
  // green
  success: {
    contrastText: '#71a411',
    dark: defaultPalette.success.dark,
    light: defaultPalette.success.light,
    main: '#f3f9e7',
    tabs: {
      contrastText: '#71a411',
      dark: defaultPalette.success.dark,
      main: '#f3f9e7',
      border: defaultPalette.success.dark,
    },
  },
  // red
  warning: {
    contrastText: '#ff6138',
    dark: defaultPalette.warning.dark,
    light: defaultPalette.warning.light,
    main: '#fff8f2',
    tabs: {
      contrastText: '#ff6138',
      dark: defaultPalette.warning.dark,
      main: '#fff8f2',
      border: defaultPalette.warning.dark,
    },
  },
  deprecated: {
    contrastText: '#ffc400',
    main: colors.basic[100],
  },
  tangerine: {
    contrastText: '#ff9900',
    main: '#fff8f2',
  },
  errorInvert: {
    contrastText: red[500],
  },
  solidSuccess: {
    contrastText: colors.basic[100],
    main: '#8ec418',
  },
  solidWarning: {
    contrastText: '#ff9900',
    main: '#ff6138',
  },
  solidPrimary: {
    contrastText: '#ff9900',
    main: colors.basic[100],
  },
  solidTangerine: {
    contrastText: '#ff9900',
    main: '#fff8f2',
  },
  solidInfoLight: {
    contrastText: '#ff9900',
    main: '#fff8f2',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    disabled: defaultPalette.text.disabled,
    hint: defaultPalette.text.hint,
    primary: colors.basic[800],
    secondary: colors.basic[600],
  },
  fabArrowDark: {
    contrastText: colors.basic[600],
    dark: colors.basic[300],
    main: colors.basic[300],
  },
  drawer: {
    background: '#232f3e',
    foreground: '#192435',
    titleColor: colors.basic[100],
    titleFontSize: '24px',
  },
  sidebar: {
    main: '#7d807e',
    active: colors.basic[100],
    background: '#0e1928',
    contentBackground: '#101c2c',
  },
  logo: {
    dark: '#417dc8',
    main: colors.basic[100],
  },
  BannerColors: {
    basic: {
      backgroundColor: colors.basic[500],
      textColor: colors.basic[100],
    },
    primary: {
      backgroundColor: colors.primary[500],
      textColor: colors.basic[100],
    },
    success: {
      backgroundColor: colors.success[500],
      textColor: colors.basic[100],
    },
    info: {
      backgroundColor: colors.info[500],
      textColor: colors.basic[100],
    },
    warning: {
      backgroundColor: colors.warning[500],
      textColor: colors.basic[100],
    },
    danger: {
      backgroundColor: colors.danger[500],
      textColor: colors.basic[100],
    },
  },
  InfoCard: {
    backgroundColor: colors.basic[200],
    borderColor: colors.basic[400],
    iconColor: colors.basic[600],
    textColor: colors.basic[600],
  },
  StepItem: {
    activeText: colors.info[500],
    activeBackground: colors.basic[100],
    disabledBackground: colors.basic[200],
    disabledText: colors.basic[600],
    disabledBox: colors.basic[300],
    activeSuccess: colors.success[600],
    disabledBasic: colors.basic[400],
  },
  RawColorPicker: {
    borderColor: colors.basic[500],
    titleColor: colors.basic[800],
  },
  Select: {
    defaultBorder: colors.basic[400],
    activeBorder: colors.info[500],
    successBorder: colors.success[500],
    errorBorder: colors.danger[500],
    defaultText: colors.basic[600],
    ghostBorder: colors.basic[100],
    filledText: colors.info[800],
    menuItemColor: colors.basic[300],
  },
  TagColors: {
    basic: {
      backgroundColor: colors.basic[300],
      backgroundColorOnHover: colors.basic[400],
      backgroundColorOnPressed: colors.basic[500],
      color: colors.basic[800],
    },
    success: {
      backgroundColor: colors.success[100],
      backgroundColorOnHover: colors.success[200],
      backgroundColorOnPressed: colors.success[300],
      color: colors.success[600],
    },
    info: {
      backgroundColor: colors.info[100],
      backgroundColorOnHover: colors.info[200],
      backgroundColorOnPressed: colors.info[300],
      color: colors.info[500],
    },
    danger: {
      backgroundColor: colors.danger[100],
      backgroundColorOnHover: colors.danger[200],
      backgroundColorOnPressed: colors.danger[300],
      color: colors.danger[500],
    },
    control: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.basic[600],
    },
    primary: {
      backgroundColor: colors.primary[100],
      backgroundColorOnHover: colors.primary[200],
      backgroundColorOnPressed: colors.primary[300],
      color: colors.primary[500],
    },
  },
  lightButtonColors: {
    basic: {
      backgroundColor: colors.basic[300],
      backgroundColorOnHover: colors.basic[400],
      backgroundColorOnPressed: colors.basic[500],
      color: colors.basic[800],
    },
    success: {
      backgroundColor: colors.success[100],
      backgroundColorOnHover: colors.success[200],
      backgroundColorOnPressed: colors.success[300],
      color: colors.success[600],
    },
    info: {
      backgroundColor: colors.info[100],
      backgroundColorOnHover: colors.info[200],
      backgroundColorOnPressed: colors.info[300],
      color: colors.info[500],
    },
    danger: {
      backgroundColor: colors.danger[100],
      backgroundColorOnHover: colors.danger[200],
      backgroundColorOnPressed: colors.danger[300],
      color: colors.danger[500],
    },
    control: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.basic[600],
    },
    primary: {
      backgroundColor: colors.primary[100],
      backgroundColorOnHover: colors.primary[200],
      backgroundColorOnPressed: colors.primary[300],
      color: colors.primary[500],
    },
  },
  ghostButtonColors: {
    basic: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.basic[800],
    },
    success: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.success[600],
    },
    info: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.info[500],
    },
    danger: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.danger[500],
    },
    control: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.basic[600],
    },
    primary: {
      backgroundColor: colors.basic[100],
      backgroundColorOnHover: colors.basic[200],
      backgroundColorOnPressed: colors.basic[300],
      color: colors.primary[500],
    },
  },
  mainButtonColors: {
    info: {
      backgroundColor: colors.info[500],
      backgroundColorOnHover: colors.info[400],
      backgroundColorOnPressed: colors.info[600],
      color: colors.basic[100],
    },
    primary: {
      backgroundColor: colors.primary[500],
      backgroundColorOnHover: colors.primary[400],
      backgroundColorOnPressed: colors.primary[600],
      color: colors.basic[100],
    },
  },
  outlineButtonColors: {
    color: colors.basic[600],
    backgroundColor: colors.basic[100],
    backgroundColorOnHover: colors.basic[200],
    backgroundColorOnPressed: colors.basic[300],
    boxShadowColor: colors.basic[500],
    iconColor: colors.basic[500],
  },
  disabledButtonColors: {
    color: colors.basic[600],
    backgroundColor: 'rgba(143, 155, 179, .16)',
    backgroundColorOnHover: 'rgba(143, 155, 179, .16)',
    backgroundColorOnPressed: 'rgba(143, 155, 179, .16)',
    labelOpacity: 0.48,
  },
  inputColors: {
    disabledColor: colors.basic[600],
    disabledBackgroundColor: colors.basic[200],
    focusedColor: colors.info[500],
    focusedOutlinedBorderColor: colors.info[500],
    outlinedBorderColor: colors.success[500],
  },
  controlPrimaryBackgroundColor: colors.primary[200],
  controlPrimaryColor: colors.primary[500],
  controlSecondaryColor: colors.basic[400],
  controlSecondaryBackgroundColor: colors.basic[600],
  controlFillColor: colors.basic[600],
  controlLabelColor: colors.basic[800],
  labelColorPrimary: colors.primary[500],
  status: {
    basic: colors.basic[500],
    primary: colors.primary[500],
    success: colors.success[500],
    info: colors.info[500],
    warning: colors.warning[500],
    danger: colors.danger[500],
  },
  labelColorSecondary: colors.basic[500],
  frame: {
    blankContentColor: colors.basic[600],
    outerBorderColor: colors.basic[500],
    innerBorderColor: colors.basic[500],
    highlightBorderColor: colors.basic[800],
    glowBorderColor: colors.primary[500],
    deviceColor: colors.basic[100],
    contentBackgroundColor: colors.basic[200],
    glowBackgroundColor: colors.primary[100],
  },
  imagePickerBackgroundColor: colors.basic[400],
  imagePickerCloseIconColor: colors.basic[600],
  snackbar: {
    backgroundColor: colors.basic[1000],
    textColor: colors.basic[100],
  },
  contentBox: {
    backgroundColor: colors.basic[100],
    borderColor: colors.basic[500],
  },
  formFooterTextColor: colors.basic[600],
};

const theme: Theme = createMuiTheme({
  ...appTheme,
  typography: {
    allVariants: {
      color: '#fff',
      fontFamily: "'Open Sans', 'Roboto', sans-serif",
    },
  },
  overrides: {
    MuiList: {
      root: {
        backgroundColor: '#393e4b',
      },
    },
    MuiSelect: {
      root: {
        backgroundColor: '#2a2e37',
        borderRadius: appTheme.shape.borderRadius,
      },
    },
    MuiCard: {
      root: {
        background: '#22252d',
        padding: appTheme.spacing(3),
        width: '100%',
        borderRadius: appTheme.shape.borderRadius,
      },
    },
    MuiButton: {
      root: {
        fontFamily: "'Poppins', sans-serif",
        textTransform: 'none',
        padding: '10px 20px',
        fontSize: appTheme.typography.pxToRem(14),
      },
    },
  },
  palette: {
    ...colorPalette,
  },
}) as Theme;

export default theme;
