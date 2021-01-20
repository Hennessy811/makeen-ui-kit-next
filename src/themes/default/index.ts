import { createMuiTheme } from "@material-ui/core/styles";

import { IExtendedTheme, CustomTypography } from "../theme.interface";
import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

import { sizes } from "./sizes";

export default createMuiTheme(
  {
    overrides,
    props: {
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
    },
    palette,
    typography,
  },
  {
    sizes,
  }
) as IExtendedTheme;
