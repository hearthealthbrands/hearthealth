module.exports = function(eleventyConfig) {
    
    // 1. Passthrough Copy: Copies files/folders from src/ to the _site/ root
    eleventyConfig.addPassthroughCopy("images");   // Copies src/images/ to _site/images/
    eleventyConfig.addPassthroughCopy("script.js"); // Copies src/script.js to _site/script.js
    eleventyConfig.addPassthroughCopy("styles.css"); // Copies src/styles.css to _site/styles.css

    // 2. Watch the CSS file for changes
    eleventyConfig.addWatchTarget("src/styles.css");

    // 3. Absolute URL Filter (for social sharing)
    eleventyConfig.addFilter("absoluteUrl", (url, base) => {
        try {
            return new URL(url, base).href;
        } catch (e) {
            // Fallback for missing base URL
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