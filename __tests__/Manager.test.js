const Manager = require("../lib/Manager");

test("Set office number via constructor argument", () => {
  const TV = 100;
  const emp = new Manager("Jeff", 1, "jeff@test.com", TV);
  expect(emp.officeNumber).toBe(TV);
});

test("Get office number via getOffice()", () => {
    const ONTV = 100;
    const emp = new Manager("Jeff", 1, "jeff@test.com", ONTV);
    expect(emp.getOfficeNumber()).toBe(ONTV);
});

test('getRole() should return Manager', () => {
  const roleTV = "Manager";
  const emp = new Manager("Jeff", 1, "jeff@test.com", 100);
  expect(emp.getRole()).toBe(roleTV);
});

