module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/react', '@babel/typescript'],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
