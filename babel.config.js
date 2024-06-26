module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'module:babel-preset-expo',
    ],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};
