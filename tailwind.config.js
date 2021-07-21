import {
  fontFamily as _fontFamily,
  variants as _variants,
} from 'tailwindcss/defaultTheme';

export const mode = 'jit';
export const purge = {
  enabled: process.env.NODE_ENV === 'production',
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    // TypeScript
    'plugins/**/*.ts',
    'nuxt.config.ts',
  ],
};
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
  },
};
export const variants = {
  borderColor: ['responsive', 'hover', 'focus', 'active'],
  ..._variants,
};
