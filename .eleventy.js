module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.setBrowserSyncConfig({
		  files: './_site/css/**/*.css'
    });
  
    eleventyConfig.addFilter("bust", (url) => {
      const [urlPart, paramPart] = url.split("?");
      const params = new URLSearchParams(paramPart || "");
      params.set("v", Math.floor(Date.now() / 1000));
      return `${urlPart}?${params}`;
    });
  
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };