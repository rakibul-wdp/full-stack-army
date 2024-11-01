const fs = require("fs");
const path = require("path");
const sass = require("sass");

const compile = (src, output) => {
  const result = sass.compile(path.resolve(src), {
    style: "expanded",
    verbose: true,
  });

  fs.writeFileSync(path.resolve(output), result.css);
};

compile("src/global.scss", "lib/global.css");
