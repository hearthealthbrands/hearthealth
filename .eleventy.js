module.exports = function(eleventyConfig) {
    
    // --- 1. Passthrough Copy (FIXED) ---
    // We use a mapping object { "source_path": "target_path_in_site" }
    // This tells Eleventy to grab files from 'src/' and put them at the root of the site.
    
    eleventyConfig.addPassthroughCopy({ "src/images": "images" });
    eleventyConfig.addPassthroughCopy({ "src/script.js": "script.js" });
    
    // Tailwind generates the CSS into src/, so we copy it from there to the site root
    eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });

    // --- 2. Watch Configuration ---
    eleventyConfig.addWatchTarget("src/styles.css");

    // --- 3. Absolute URL Filter ---
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