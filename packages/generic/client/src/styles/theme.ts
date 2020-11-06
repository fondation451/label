import { merge } from 'lodash';
import { createMuiTheme } from '@material-ui/core';

export { themes };

export type { typographyType, displayModeType };

const palette = {
  brightSun: '#FFD835',
  orange: '#FF6105',
  gray100: '#121212',
  gray200: '#242424',
  gray300: '#383838',
  gray400: '#8D8D8D',
  gray500: '#9E9E9E',
  white: '#ffffff',
  black: '#000000',
};

const fontSizes = {
  small: 12,
  medium: 16,
  large: 24,
};

const typography = {
  body1: { fontFamily: 'Luciole', fontSize: fontSizes.medium },
  button: { fontFamily: 'Luciole', fontSize: fontSizes.medium },
  body2: { fontFamily: 'Courier New', fontSize: fontSizes.medium, lineHeight: '19px' },
  h1: { fontFamily: 'Luciole', fontSize: fontSizes.large },
  h2: { fontFamily: 'Luciole-Bold', fontSize: fontSizes.medium },
  subtitle1: { fontFamily: 'Luciole', fontSize: fontSizes.small, textDecoration: 'underline' },
};

type typographyType = keyof typeof typography;

type displayModeType = 'light' | 'dark';

const commonTheme = {
  shape: { borderRadius: 25 },
  spacing: 8,
  typography,
  palette: {
    primary: {
      main: palette.brightSun,
    },
    secondary: {
      main: palette.orange,
    },
    common: { black: palette.black, white: palette.white },
    grey: {
      '100': palette.gray100,
      '200': palette.gray200,
      '300': palette.gray300,
      '400': palette.gray400,
      '500': palette.gray500,
    },
  },
};

const getDarkTheme = () =>
  createMuiTheme(
    buildTheme({
      palette: {
        text: { primary: palette.white, secondary: palette.white },
        background: {
          default: palette.gray100,
          paper: palette.gray300,
        },
        action: {
          disabled: palette.gray300,
          disabledBackground: palette.gray200,
        },
      },
    }),
  );

const getLightTheme = () =>
  createMuiTheme(
    buildTheme({
      palette: {
        text: { primary: palette.black, secondary: palette.black },
        background: {
          default: palette.white,
          paper: palette.white,
        },
        action: {
          disabled: palette.gray300,
          disabledBackground: palette.gray200,
        },
      },
    }),
  );

type customThemeType = {
  palette: {
    text: { primary: string; secondary: string };
    background: {
      default: string;
      paper: string;
    };
    action: {
      disabled: string;
      disabledBackground: string;
    };
  };
};

function buildTheme(themeOptions: customThemeType) {
  return merge(commonTheme, themeOptions);
}

const themes = {
  light: getLightTheme,
  dark: getDarkTheme,
};
