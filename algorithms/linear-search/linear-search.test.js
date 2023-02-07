const linearSearch = require("./linear-search");

test("search for ion in [ana, ion, alin] and return 1", () => {
  let arrTest1 = ["ana", "ion", "alin"];
  const test1 = linearSearch(arrTest1, "ion");
  expect(test1).toBe(1);
  const arrTest2 = [2132, 321321, 421214, 515421, 421, 134, 421, 412, 4];
  expect(linearSearch(arrTest2, 421214)).toBe(2);
  expect(linearSearch(arrTest2, 22222)).toBe(-1);
  expect(linearSearch(arrTest2, 4)).toBe(8);
});
