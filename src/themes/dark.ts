import { createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import palette from "./default/palette";
import { sizes } from "./default/sizes";

export default createMuiTheme({
  palette: {
    primary: orange,
    type: "dark",
  },
  extendedPalette: palette,
  sizes,
});
