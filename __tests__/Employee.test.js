const Employee = require("../lib/Employee");

test("Instantiate employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Set name via constructor arguments", () => {
    const nameTV = "John";
    const emp = new Employee(nameTV);
    expect(emp.name).toBe(nameTV);
});

test("Set id via constructor argument", () => {
    const idTV = 100;
    const emp = new Employee("John", idTV);
    expect(emp.id).toBe(idTV);
});

test("Set email via constructor argument", () => {
    const emailTV = "john@test.com";
    const emp = new Employee("John", 1, emailTV);
    expect(emp.email).toBe(emailTV);
});

test("Get name via getName()", () => {
    const nameTV = "John";
    const emp = new Employee(nameTV);
    expect(emp.getName()).toBe(nameTV);
});

test("Get id via getId()", () => {
    const idTV = 100;
    const emp = new Employee("John", idTV);
    expect(emp.getId()).toBe(idTV);
});

test("Get email via getEmail()", () => {
    const emailTV = "john@test.com";
    const emp = new Employee("John", 1, emailTV);
    expect(emp.getEmail()).toBe(emailTV);
});

test("getRole() should return Employee", () => {
    const roleTV = "Employee";
    const emp = new Employee("John", 1, "john@test.com");
    expect(emp.getRole()).toBe(roleTV);
});