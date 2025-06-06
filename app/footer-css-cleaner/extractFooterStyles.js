const fs = require("fs");
const postcss = require("postcss");
const selectorParser = require("postcss-selector-parser");
// Load footer class names
const allowedClasses = new Set(
  fs
    .readFileSync("footer-classes.txt", "utf8")
    .split("\n")
    .map((c) => c.trim())
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
      fs.writeFileSync("footer.module.css", result.css, "utf8");
      console.log("✅ footer.module.css created successfully.");
    } catch (err) {
      console.error("❌ Failed to write footer.module.css:", err);
    }
  });
