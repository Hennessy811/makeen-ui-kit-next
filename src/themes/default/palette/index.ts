import { createMuiTheme } from "@material-ui/core";
import { IExtendedPaletteOptions } from "../../theme.interface";
import * as colors from "../../colors";
import components from "./components";
import { generalPalette } from "./general";

const { palette: defaultPalette } = createMuiTheme();

const colorPalette: IExtendedPaletteOptions = {
  ...defaultPalette,
  colors,
  ...generalPalette,
  ...components,
  contrastThreshold: 3,
  tonalOffset: 0.2,
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
  vyooStartTemplate: {
    headerBackgroundColor: "rgba(255, 255, 255, 0.94)",
    contentBackgroundColor: colors.basic[200],
  },
  contentBox: {
    backgroundColor: colors.basic[100],
    borderColor: colors.basic[500],
  },
  formFooterTextColor: colors.basic[600],
};

export default colorPalette;
