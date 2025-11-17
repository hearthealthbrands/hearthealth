module.exports = function(eleventyConfig) {
  
  // 1. Copy these files/folders directly to the output (_site)
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("styles.css");

  // 2. Watch the CSS file for changes
  // This ensures that when Tailwind updates styles.css, Eleventy sees it
  eleventyConfig.addWatchTarget("styles.css");

  return {
    dir: {
      input: ".",      // Look for files in the root
      includes: "_includes", // Look for layouts here
      output: "_site"  // Build the final site here
    }
  };
};