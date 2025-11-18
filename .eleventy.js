module.exports = function(eleventyConfig) {
    
    // 1. Copy these files/folders directly to the output (_site)
    // NOTE: These paths are now relative to the new "src" input directory.
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("styles.css");

    // 2. Watch the CSS file for changes
    // This ensures that when Tailwind updates styles.css, Eleventy sees it
    eleventyConfig.addWatchTarget("src/styles.css");

    return {
        dir: {
            input: "src",      // IMPORTANT: Now looking for source files inside the 'src' folder
            includes: "_includes", // This is relative to 'input', so it looks in src/_includes
            output: "_site"  // Build the final site here
        }
    };
};