import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import dark from "themes/dark";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { Box, Card } from "@material-ui/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (storyFn) => (
    <StylesProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={dark}>
        <Card style={{ borderRadius: 0 }}>
          <Box p={4}>{storyFn()}</Box>
        </Card>
      </MuiThemeProvider>
    </StylesProvider>
  ),
];
