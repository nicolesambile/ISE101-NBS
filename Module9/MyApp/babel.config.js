module.exports = function (api_nbs) {
  api_nbs.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};