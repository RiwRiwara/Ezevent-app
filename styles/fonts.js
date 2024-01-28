// fonts.js
export const COMMON_ATTRIBUTES = {
  fontFamily: 'IBMPlexSansThai',
  fontWeight: 'normal',
  color: '#fff',
};

export const FONTS = {
  TITLE_1: {
    bold: {
      ...COMMON_ATTRIBUTES,
      fontFamily: 'IBMPlexSansThai-Bold',
      fontSize: 34,
      fontWeight: 'bold',
    },
    regular: {
      ...COMMON_ATTRIBUTES,
      fontFamily: 'IBMPlexSansThai-Regular',
      fontSize: 34,
    },
  },
  TITLE_2: {
    bold: {
      ...COMMON_ATTRIBUTES,
      fontFamily: 'IBMPlexSansThai-Bold',
      fontSize: 30,
      fontWeight: 'bold',
    },
    regular: {
      ...COMMON_ATTRIBUTES,
      fontFamily: 'IBMPlexSansThai-Regular',
      fontSize: 30,
    },
  },
};
