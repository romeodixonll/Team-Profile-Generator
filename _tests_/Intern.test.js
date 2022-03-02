const Intern = require("../lib/Intern");

test("Intern created", () => {
  const intern = new Intern("Bob", 1, "bob@gmail.com", "UTA");

  expect(intern.getName()).toEqual("Bob");
});
test("Intern created", () => {
  const intern = new Intern("Bob", 1, "bob@gmail.com", "UTA");

  expect(intern.getId()).toEqual(1);
});
test("Intern created", () => {
  const intern = new Intern("Bob", 1, "bob@gmail.com", "UTA");

  expect(intern.getEmail()).toEqual("bob@gmail.com");
});
test("Intern created", () => {
  const intern = new Intern("Bob", 1, "bob@gmail.com", "UTA");

  expect(intern.getRole()).toEqual("Intern");
});

test("Intern created", () => {
    const intern = new Intern("Bob", 1, "bob@gmail.com", "UTA");
  
    expect(intern.getSchool()).toEqual("UTA");
  });