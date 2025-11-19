module.exports = function(eleventyConfig) {
    
    // Copy Assets
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
    eleventyConfig.addPassthroughCopy({ "src/script.js": "script.js" });
    
    // Copy our single CSS file
    eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });

    // Absolute URL Filter
    eleventyConfig.addFilter("absoluteUrl", (url, base) => {
        try {
            return new URL(url, base).href;
        } catch (e) {
            return url; 
        }
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};