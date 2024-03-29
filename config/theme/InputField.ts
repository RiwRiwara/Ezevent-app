import { createStyle } from '@gluestack-style/react';

export const InputField = createStyle({
  flex: 1,
  color: '$gray9',
  props: {
    placeholderTextColor: '$gray5',
  },
  _dark: {
    color: '$gray1',
    props: {
      placeholderTextColor: '$gray4',
    },
  },
  _web: {
    'cursor': 'text',
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      '2xs': {
        fontSize: '$2xs',
      },
      'xs': {
        fontSize: '$xs',
      },

      'sm': {
        fontSize: '$sm',
      },

      'md': {
        fontSize: '$md',
      },

      'lg': {
        fontSize: '$lg',
      },

      'xl': {
        fontSize: '$xl',
      },

      '2xl': {
        fontSize: '$2xl',
      },

      '3xl': {
        fontSize: '$3xl',
      },

      '4xl': {
        fontSize: '$4xl',
      },

      '5xl': {
        fontSize: '$5xl',
      },

      '6xl': {
        fontSize: '$6xl',
      },
    },
  },
});
