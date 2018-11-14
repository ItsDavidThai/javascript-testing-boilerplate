function runMultipleTests(test, testCases) {
  const onlyTest = testCases.filter(testCase => {
    return testCase.options && testCase.options.only;
  });
  let toBeTested = testCases;

  if (onlyTest.length > 0) {
    toBeTested = onlyTest;
  }
  toBeTested.forEach(testCase => {
    it(testCase.name, () => {
      expect(test(...testCase.input)).to.eql(testCase.expected);
    });
  });
}

module.exports = {
  runMultipleTests
};
