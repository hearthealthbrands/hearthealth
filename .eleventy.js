module.exports = function(eleventyConfig) {
    
    // 1. Copy these files/folders directly to the output (_site)
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("styles.css");

    // 2. Watch the CSS file for changes
    eleventyConfig.addWatchTarget("src/styles.css");

    // 3. Absolute URL Filter (REQUIRED for Social Sharing)
    // base: Eleventy's configuration provides the base path as the second argument,
    // which comes from the metadata.url property if you create the data file below.
    eleventyConfig.addFilter("absoluteUrl", (url, base) => {
        try {
            return new URL(url, base).href;
        } catch (e) {
            // Fallback for cases where page.url might be missing (e.g., local server)
            return url; 
        }
    });

    return {
        dir: {
            input: "src",       // IMPORTANT: Looking for source files inside the 'src' folder
            includes: "_includes", // This is relative to 'input', so it looks in src/_includes
            output: "_site"     // Build the final site here
        }
    };
};