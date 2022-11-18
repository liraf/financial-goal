// eslint-disable-next-line
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/_variables.scss";
          @import "src/styles/_mixins.scss";
        `
      }
    }
  }
};
