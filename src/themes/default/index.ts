import { createMuiTheme, Theme } from "@material-ui/core/styles";

import { ExtendedTheme, CustomTypography } from "../theme.interface";
import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

import { sizes } from "./sizes";
import { ComponentsProps } from "@material-ui/core/styles/props";

const props: ComponentsProps = {
  MuiButton: {
    disableElevation: true,
  },
  MuiCheckbox: {
    color: "default",
    size: "small",
  },
  MuiRadio: {
    color: "primary",
  },
  MuiSwitch: {
    color: "primary",
  },
  MuiTab: {
    disableRipple: true,
  },
};

export default createMuiTheme({
  overrides,
  props,
  extendedPalette: palette,
  typography,
  sizes,
}) as Theme;
