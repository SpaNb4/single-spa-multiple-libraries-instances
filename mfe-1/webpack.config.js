const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'test',
    projectName: 'mfe-1',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig);
};
