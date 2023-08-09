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
            '@components': './components',
            '@constants': './constants',
            '@assets': './assets',
            '@config': './config',
            '@contexts': './contexts',
            '@navigators': './navigators',
            '@screens': './screens',
            '@types': './types',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};
