const Manager = require("../lib/Manager");

test("Manager created", () => {
  const manager = new Manager("Bob", 1, "bob@gmail.com", 88);

  expect(manager.getName()).toEqual("Bob");
});
test("Manager created", () => {
  const manager = new Manager("Bob", 1, "bob@gmail.com", 88);

  expect(manager.getId()).toEqual(1);
});
test("Manager created", () => {
  const manager = new Manager("Bob", 1, "bob@gmail.com", 88);

  expect(manager.getEmail()).toEqual("bob@gmail.com");
});
test("Manager created", () => {
  const manager = new Manager("Bob", 1, "bob@gmail.com", 88);

  expect(manager.getRole()).toEqual("Manager");
});

test("Manager created", () => {
    const manager = new Manager("Bob", 1, "bob@gmail.com", 88);
  
    expect(manager.officeNumber).toEqual(88);
  });