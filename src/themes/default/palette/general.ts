import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import * as colors from "../../colors";

const { palette: defaultPalette } = createMuiTheme();

export const generalPalette = {
  common: {
    black: "#000",
    white: colors.basic[100],
    whiteShade1: "#f8f8f8",
    grey: colors.basic[600],
  },
  disabled: {
    contrastText: colors.basic[600],
    main: "rgba(143, 155, 179, 0.16)",
  },
  type: "light",
  simple: {
    contrastText: colors.basic[800],
    main: "transparent",
  },
  simpleQuaternary: {
    contrastText: "#1998d5",
    main: "transparent",
  },
  simpleLabel: {
    contrastText: colors.basic[600],
    main: "transparent",
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
    main: "#232f3e",
    tabs: {
      contrastText: defaultPalette.secondary.contrastText,
      dark: colors.info[500],
      main: "#232f3e",
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
    main: "#1998d5",
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
    dark: "",
    light: "",
    contrastText: colors.basic[800],
    main: colors.basic[300],
  },
  greenLight: {
    contrastText: "#71a411",
    main: "#f2f3f8",
  },
  infoInvert: {
    contrastText: colors.basic[600],
    main: colors.basic[100],
  },
  // blue
  infoLight: {
    contrastText: "#1998d5",
    main: "#f0faff",
  },
  infoWarning: {
    main: "#fff4e5",
    contrastText: "#ff9900",
  },
  // green
  success: {
    contrastText: "#71a411",
    dark: defaultPalette.success.dark,
    light: defaultPalette.success.light,
    main: "#f3f9e7",
    tabs: {
      contrastText: "#71a411",
      dark: defaultPalette.success.dark,
      main: "#f3f9e7",
      border: defaultPalette.success.dark,
    },
  },
  // red
  warning: {
    contrastText: "#ff6138",
    dark: defaultPalette.warning.dark,
    light: defaultPalette.warning.light,
    main: "#fff8f2",
    tabs: {
      contrastText: "#ff6138",
      dark: defaultPalette.warning.dark,
      main: "#fff8f2",
      border: defaultPalette.warning.dark,
    },
  },
  deprecated: {
    contrastText: "#ffc400",
    main: colors.basic[100],
  },
  tangerine: {
    contrastText: "#ff9900",
    main: "#fff8f2",
  },
  errorInvert: {
    contrastText: red[500],
  },
  solidSuccess: {
    contrastText: colors.basic[100],
    main: "#8ec418",
  },
  solidWarning: {
    contrastText: "#ff9900",
    main: "#ff6138",
  },
  solidPrimary: {
    contrastText: "#ff9900",
    main: colors.basic[100],
  },
  solidTangerine: {
    contrastText: "#ff9900",
    main: "#fff8f2",
  },
  solidInfoLight: {
    contrastText: "#ff9900",
    main: "#fff8f2",
  },
};
