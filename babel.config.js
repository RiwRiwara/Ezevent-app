module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@components': './app/components',
            '@i18n': './src/i18n',
            '@providers': './providers',
            '@services': './services',
            '@constants' : './constants',
            '@utils' : './utils',
            '@assets' : './assets',
          }
        }
      ]
    ],
  };
};


