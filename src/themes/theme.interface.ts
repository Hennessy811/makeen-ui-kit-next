import { Theme } from '@material-ui/core';
import { CommonColors, Palette, PaletteColor, PaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions, TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

type ICustomPaletteColorOptions =
  | {
      border: string;
    }
  | PaletteColorOptions;

type ColorsType = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000?: string;
  1100?: string;
};

type TagColorType = {
  backgroundColor: string;
  backgroundColorOnHover: string;
  backgroundColorOnPressed: string;
  color: string;
};

type BannerColor = {
  backgroundColor: string;
  borderColor?: string;
  textColor: string;
};

type BannerColors = {
  basic: BannerColor;
  primary: BannerColor;
  success: BannerColor;
  info: BannerColor;
  warning: BannerColor;
  danger: BannerColor;
};

export type ButtonColorType = {
  backgroundColor: string;
  backgroundColorOnHover: string;
  backgroundColorOnPressed: string;
  color: string;
  iconColor?: string;
  boxShadowColor?: string;
  labelOpacity?: number;
};

export type ButtonSizeType = {
  fontSize: string;
  iconFontSize: string;
  iconHeight: string;
  iconWidth: string;
  iconLineHeight: string;
  lineHeight: string;
  padding: string;
  paddingFromIcon: string;
  paddingWithLeftIcon: string;
  paddingWithRightIcon: string;
  squarePadding: string;
  squareWidth: string;
};

export type InfoCard = {
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
};

export type FrameSize = {
  borderRadius: string;
  width: string;
  height: string;
  padding: string;
  screenPadding: string;
  screenBorderRadius: string;
  cameraSize: string;
  topBangsPadding: string;
};

export interface ISizes {
  button: {
    giant: ButtonSizeType;
    large: ButtonSizeType;
    medium: ButtonSizeType;
    small: ButtonSizeType;
    tiny: ButtonSizeType;
  };
  frame: {
    smartphone: FrameSize;
    tablet: FrameSize;
  };
  imagePickerDefaultSize: {
    width: string;
    height: string;
    borderRadius: string;
    closeIconSize: string;
  };
  snackbar: {
    fontSize: string;
  };
  contentBox: {
    defaultPaddings: string;
    defaultWidth: string;
  };
  formFooter: {
    marginTop: string;
    fontSize: string;
  };
  questionCard: {
    actionItem: {
      fontSize: string;
      lineHeight: number | string;
      iconSize: number;
      marginLeft: string;
      marginRight: string;
    };
    actions: {
      height: string;
      left: {
        padding: string;
      };
      padding: string;
      right: {
        padding: string;
      };
    };
    content: {
      padding: string;
    };
    iconButton: {
      marginLeft: string;
      marginRight: string;
      marginTop: string;
      marginBottom: string;
    };
  };
}

type StatusColors = {
  basic: string;
  primary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
};

type ExtendedPaletteColor = PaletteColor & {
  tabs: PaletteColorOptions & { border?: string };
};

export interface IExtendedPaletteOptions extends Palette {
  common: CommonColors & { whiteShade1: string; grey: string };
  info: ExtendedPaletteColor;
  secondary: ExtendedPaletteColor;
  primary: ExtendedPaletteColor;
  success: ExtendedPaletteColor;
  warning: ExtendedPaletteColor;
  error: ExtendedPaletteColor;
  disabled: PaletteColorOptions;
  simple: PaletteColorOptions;
  simpleLabel: PaletteColorOptions;
  tertiary: ICustomPaletteColorOptions;
  quaternary: PaletteColorOptions;
  secondaryLight: PaletteColor;
  greenLight: PaletteColorOptions;
  infoInvert: PaletteColorOptions;
  infoLight: PaletteColorOptions;
  infoWarning: PaletteColorOptions;
  deprecated: PaletteColorOptions;
  tangerine: PaletteColorOptions;
  errorInvert: { contrastText: string };
  simpleQuaternary: PaletteColorOptions;
  solidSuccess: PaletteColorOptions;
  solidWarning: PaletteColorOptions;
  solidPrimary: PaletteColorOptions;
  solidTangerine: PaletteColorOptions;
  solidInfoLight: PaletteColorOptions;
  fabArrowDark: PaletteColorOptions;
  drawer: {
    foreground: string;
    background: string;
    titleColor: string;
    titleFontSize: string;
  };
  BannerColors: BannerColors;
  StepItem: {
    activeText: string;
    activeBackground: string;
    disabledBackground: string;
    disabledText: string;
    disabledBox: string;
    activeSuccess: string;
    disabledBasic: string;
  };
  RawColorPicker: {
    borderColor: string;
    titleColor: string;
  };
  Select: {
    defaultText: string;
    filledText: string;
    defaultBorder: string;
    activeBorder: string;
    successBorder: string;
    errorBorder: string;
    ghostBorder: string;
    menuItemColor: string;
  };
  InfoCard: InfoCard;
  TagColors: {
    basic: TagColorType;
    success: TagColorType;
    info: TagColorType;
    danger: TagColorType;
    control: TagColorType;
    primary: TagColorType;
  };
  sidebar: {
    main: string;
    active: string;
    background: string;
    contentBackground: string;
  };
  logo: PaletteColorOptions;
  colors: {
    basic: ColorsType;
    primary: ColorsType;
    success: ColorsType;
    info: ColorsType;
    warning: ColorsType;
    danger: ColorsType;
  };
  mainButtonColors: {
    info: ButtonColorType;
    primary: ButtonColorType;
  };
  lightButtonColors: {
    basic: ButtonColorType;
    success: ButtonColorType;
    info: ButtonColorType;
    danger: ButtonColorType;
    control: ButtonColorType;
    primary: ButtonColorType;
  };
  ghostButtonColors: {
    basic: ButtonColorType;
    success: ButtonColorType;
    info: ButtonColorType;
    danger: ButtonColorType;
    control: ButtonColorType;
    primary: ButtonColorType;
  };
  outlineButtonColors: ButtonColorType;
  disabledButtonColors: ButtonColorType;
  inputColors: {
    disabledColor: string;
    disabledBackgroundColor: string;
    focusedColor: string;
    focusedOutlinedBorderColor: string;
    outlinedBorderColor: string;
  };
  controlPrimaryBackgroundColor: string;
  controlPrimaryColor: string;
  controlSecondaryColor: string;
  controlSecondaryBackgroundColor: string;
  controlFillColor: string;
  controlLabelColor: string;
  labelColorPrimary: string;
  labelColorSecondary: string;
  status: StatusColors;
  frame: {
    blankContentColor: string;
    outerBorderColor: string;
    innerBorderColor: string;
    highlightBorderColor: string;
    glowBorderColor: string;
    deviceColor: string;
    contentBackgroundColor: string;
    glowBackgroundColor: string;
  };
  imagePickerBackgroundColor: string;
  imagePickerCloseIconColor: string;
  snackbar: {
    backgroundColor: string;
    textColor: string;
  };
  vyooStartTemplate: {
    headerBackgroundColor: string;
    contentBackgroundColor: string;
  };
  contentBox: {
    backgroundColor: string;
    borderColor: string;
  };
  formFooterTextColor: string;
  [name: string]: any;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    extendedPalette: IExtendedPaletteOptions;
    sizes: ISizes;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    extendedPalette: Partial<IExtendedPaletteOptions>;
    sizes: ISizes;
  }
}

export interface ExtendedTheme extends Theme {
  palette: IExtendedPaletteOptions;
  sizes: ISizes;
}

export interface CustomTypography extends TypographyOptions {
  caption1: TypographyStyleOptions;
}
