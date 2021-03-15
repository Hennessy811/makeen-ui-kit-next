import { CustomTypography } from '../theme.interface';

const typography = {
  fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  h1: {
    fontSize: '2.25rem', // 36px
    fontWeight: 700,
    lineHeight: 1.33,
  },
  h2: {
    fontSize: '2rem', // 32px
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: '1.875rem', // 30px
    fontWeight: 700,
    lineHeight: 1.33,
  },
  h4: {
    fontSize: '1.625rem', // 26px
    fontWeight: 700,
    lineHeight: 1.23,
  },
  h5: {
    fontSize: '1.375rem', // 22px
    fontWeight: 700,
    lineHeight: 1.45,
  },
  h6: {
    fontSize: '1.125rem', // 18px
    fontWeight: 700,
    lineHeight: 1.33,
  },
  subtitle1: {
    fontSize: '0.9375rem', // 15px
    fontWeight: 600,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: '0.8125rem', // 13px
    fontWeight: 600,
    lineHeight: 1.85,
  },
  body1: {
    fontSize: '0.9375rem', // 15px
    lineHeight: 1.33,
  },
  body2: {
    fontSize: '0.8125rem', // 13px
    lineHeight: 1.23,
  },
  caption1: {
    fontSize: '0.75rem', // 12px
    lineHeight: 1.33,
  },
  caption2: {
    fontSize: '0.75rem', // 12px
    fontWeight: 600,
    lineHeight: 1.33,
  },
  label: {
    fontSize: '0.75rem', // 12px
    lineHeight: 1.33,
    textTransform: 'uppercase',
  },
  small1: {
    fontSize: '0.625rem', // 10px
    fontWeight: 600,
    lineHeight: 'normal',
  },
  small2: {
    fontSize: '0.625rem', // 10px
    fontWeight: 600,
    lineHeight: 'normal',
  },
} as CustomTypography;

export default typography;
