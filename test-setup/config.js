const chai = require("chai");
chai.config.includeStack = true;
chai.use(require("chai-subset"));

Object.assign(global, {
  expect: chai.expect
});
