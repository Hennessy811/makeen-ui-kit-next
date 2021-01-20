import { createMuiTheme } from "@material-ui/core";
import * as colors from "../../colors";
const { palette: defaultPalette } = createMuiTheme();

const componentsPalette = {
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
    background: "#232f3e",
    foreground: "#192435",
    titleColor: colors.basic[100],
    titleFontSize: "24px",
  },
  sidebar: {
    main: "#7d807e",
    active: colors.basic[100],
    background: "#0e1928",
    contentBackground: "#101c2c",
  },
  logo: {
    dark: "#417dc8",
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
    backgroundColor: "rgba(143, 155, 179, .16)",
    backgroundColorOnHover: "rgba(143, 155, 179, .16)",
    backgroundColorOnPressed: "rgba(143, 155, 179, .16)",
    labelOpacity: 0.48,
  },
  inputColors: {
    disabledColor: colors.basic[600],
    disabledBackgroundColor: colors.basic[200],
    focusedColor: colors.info[500],
    focusedOutlinedBorderColor: colors.info[500],
    outlinedBorderColor: colors.success[500],
  },
};

export default componentsPalette;
