const { BRAK_KWALIFIKACJI, MLODZIK, JUNIOR, DOROSLY } = require("../const");
const { checkGroupTest } = require("./testUtils");

let tests = [
  {
    name: "Test 01",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-2012",
        },
        BRAK_KWALIFIKACJI
      );
    },
  },
  {
    name: "Test 02",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-2004",
          parent: false,
        },
        BRAK_KWALIFIKACJI
      );
    },
  },
  {
    name: "Test 03",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-2004",
          doctor: false,
        },
        BRAK_KWALIFIKACJI
      );
    },
  },
  {
    name: "Test 04",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-2010",
          parent: true,
          doctor: true,
        },
        MLODZIK
      );
    },
  },
  {
    name: "Test 05",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-2008",
          parent: true,
          doctor: true,
        },
        JUNIOR
      );
    },
  },
  {
    name: "Test 06",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-2004",
          parent: true,
          doctor: true,
        },
        DOROSLY
      );
    },
  },
  {
    name: "Test 07",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-1999",
        },
        DOROSLY
      );
    },
  },
  {
    name: "Test 08",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-1955",
          doctor: true,
        },
        DOROSLY
      );
    },
  },
  {
    name: "Test 09",
    async fn() {
      return await checkGroupTest(
        {
          date: "01-01-1955",
          doctor: false,
        },
        BRAK_KWALIFIKACJI
      );
    },
  },
];

module.exports = {
  tests,
};
