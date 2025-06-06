const fs = require("fs");
const postcss = require("postcss");
const selectorParser = require("postcss-selector-parser");
// Load header class names
const allowedClasses = new Set(
 fs
   .readFileSync("header-classes.txt", "utf8")
   .split("\n")
   .flatMap((line) => line.trim().split(/\s+/)) // <-- split compound entries
   .filter(Boolean)
);
// Read full CSS
const inputCss = fs.readFileSync("main.css", "utf8");
// Filter logic
postcss()
  .use((root) => {
    root.walkRules((rule) => {
      const keep = rule.selectors.some((sel) => {
        let found = false;
        selectorParser((selectors) => {
          selectors.walkClasses((classNode) => {
            if (allowedClasses.has(classNode.value)) {
              found = true;
            }
          });
        }).processSync(sel);
        return found;
      });
      if (!keep) rule.remove();
    });
  })
  .process(inputCss, { from: undefined })
  .then((result) => {
    try {
      fs.writeFileSync("header.module.css", result.css, "utf8");
      console.log("✅ header.module.css created successfully.");
    } catch (err) {
      console.error("❌ Failed to write header.module.css:", err);
    }
  });
