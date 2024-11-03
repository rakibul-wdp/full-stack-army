const fs = require("fs");
const path = require("path");
const sass = require("sass");

/**
 * compile any scss file to css
 * @param {string} src source file;
 * @param {string} output output file
 */
const compile = (src, output) => {
  const result = sass.compile(path.resolve(src), {
    style: "expanded",
    verbose: true,
  });

  fs.writeFileSync(path.resolve(output), result.css);
};

// compile the global css
compile("src/global.scss", "lib/global.css");
