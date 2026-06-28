import { type Config } from 'tailwindcss';

export const theme = {
  colors: {
    // Neutral base – slate / gray
    light: {
      50: '#f8fafc',
      100: '#eef2f6',
      200: '#e0e5ea',
      300: '#ccd1d7',
      400: '#b3bbc4',
      500: '#98a1ac',
      600: '#78848f',
      700: '#59626b',
      800: '#424c54',
      900: '#2d363e'
    },
    dark: {
      50: '#2d363e',
      100: '#3a4a53',
      200: '#496169',
      300: '#5b7286',
      400: '#748c9f',
      500: '#8ea7bb',
      600: '#a7bfcc',
      700: '#bdccd4',
      800: '#d1e0e6',
      900: '#e5eced'
    },
    accent: {
      500: '#004f64' // muted teal / dark blue
    },
    status: {
      ok: '#28a745',        // green
      check: '#ffc107',     // amber
      replace: '#dc3545'    // red
    }
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem'
  },
  borderRadius: {
    md: '0.375rem'
  }
} as const;

export default theme;
