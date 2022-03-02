const Engineer = require("../lib/Engineer");

test("Engineer created", () => {
  const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bob90210");

  expect(engineer.getName()).toEqual("Bob");
});
test("Engineer created", () => {
  const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bob90210");

  expect(engineer.getId()).toEqual(1);
});
test("Engineer created", () => {
  const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bob90210");

  expect(engineer.getEmail()).toEqual("bob@gmail.com");
});
test("Engineer created", () => {
  const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bob90210");

  expect(engineer.getRole()).toEqual("Engineer");
});

test("Engineer created", () => {
  const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bob90210");

  expect(engineer.getGithub()).toEqual("bob90210");
});
