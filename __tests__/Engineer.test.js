const Engineer = require("../lib/Engineer");

test("Sets Engineer Github", () => {
    const githubTV = "pgurung95";

    const emp = new Engineer("Sean", 2, "sean@test.com", githubTV)

    expect(emp.github).toBe(githubTV)
});

test("Gets Engineer Role with getRole", () => {
    const roleTV = "Engineer";

    const emp = new Engineer("Sean", 2, "sean@test.com", roleTV)

    expect(emp.getRole()).toBe(roleTV)
});

test("Gets Github username via Github", () => {
    const githubTV = "pgurung95";

    const emp = new Engineer("Sean", 2, "sean@test.com", githubTV)

    expect(emp.getGithub()).toBe(githubTV)
});