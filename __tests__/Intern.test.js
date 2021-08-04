const Intern = require("../lib/Intern");

test("Set school via constructor", () => {
  const TV = "JHU";
  const emp = new Intern("Mary", 1, "mary@test.com", TV);
  expect(emp.school).toBe(TV);
});

test("Get school via getSchool()", () => {
    const schoolTV = "JHU";
    const emp = new Intern("Mary", 1, "mary@test.com", schoolTV);
    expect(emp.getSchool()).toBe(schoolTV);
});

test("getRole() should return Intern", () => {
  const roleTV = "Intern";
  const emp = new Intern("Mary", 1, "mary@test.com", "JHU");
  expect(emp.getRole()).toBe(roleTV);
});
