const { tests } = require("./tests/tests");

runAllTests = async () => {
  let passed = 0;
  let errors = 0;
  for (const test of tests) {
    let result = await test.fn();
    console.log(`Status funkcji '${test.name}' : ${result ? "Pass" : "Fail"} `);
    result ? passed++ : errors++;
  }
  console.log("Passed: ", passed);
  console.log("Errors: ", errors);
};

runAllTests();
