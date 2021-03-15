import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { Box, Card } from '@material-ui/core';

import Dark from 'themes/dark';
import Retrowave from 'themes/retrowave';
import RemarDark from 'themes/remar-dark';
import Default from 'themes/default';

const themes = { Default, Dark, Retrowave, RemarDark };

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (storyFn, context) => {
    const selectedTheme = themes[context.globals.theme];
    return (
      <StylesProvider injectFirst>
        <CssBaseline />
        <MuiThemeProvider theme={selectedTheme}>
          <ThemeProvider theme={selectedTheme}>
            <Card style={{ borderRadius: 0 }}>
              <Box p={2}>{storyFn()}</Box>
            </Card>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: 'theme',
    defaultValue: 'Default',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'Default', title: '🌆 Default' },
        { value: 'Dark', title: '🌃 Dark' },
        { value: 'RemarDark', title: '🌃 🚑 Remar Dark' },
        { value: 'Retrowave', title: '👾 Retrowave' },
      ],
    },
  },
};
