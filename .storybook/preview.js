import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import dark from "themes/dark";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { Box, Card } from "@material-ui/core";

import Dark from "themes/dark";
import Retrowave from "themes/retrowave";
import Default from "themes/default";

const themes = { Default, Dark, Retrowave };
const themeNames = Object.keys(themes);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (storyFn, context) => {
    console.log({ context });
    return (
      <StylesProvider injectFirst>
        <CssBaseline />
        <MuiThemeProvider theme={themes[context.globals.theme]}>
          <Card style={{ borderRadius: 0 }}>
            <Box p={2}>{storyFn()}</Box>
          </Card>
        </MuiThemeProvider>
      </StylesProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "theme",
    defaultValue: "Default",
    toolbar: {
      icon: "circlehollow",
      items: ["Default", "Dark", "Retrowave"],
    },
  },
};
