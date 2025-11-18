module.exports = function(eleventyConfig) {
    
    // 1. Passthrough Copy (REQUIRED for Assets)
    // Copies files/folders from src/ to the _site/ root where HTML expects them.
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("styles.css");

    // 2. Watch the CSS file for changes
    eleventyConfig.addWatchTarget("src/styles.css");

    // 3. Absolute URL Filter
    eleventyConfig.addFilter("absoluteUrl", (url, base) => {
        try {
            return new URL(url, base).href;
        } catch (e) {
            return url; 
        }
    });

    return {
        dir: {
            input: "src",       // Source files are here
            includes: "_includes", 
            output: "_site"     // Final build is here
        }
    };
};