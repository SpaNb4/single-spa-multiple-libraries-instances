const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'test',
    projectName: 'mfe-2',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: {
      react: 'react',
      ['react-dom']: 'react-dom',
    },
  });
};
