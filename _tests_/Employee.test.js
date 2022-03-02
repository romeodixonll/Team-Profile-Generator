
const Employee = require('../lib/Employee')

test('Employee created', ()=>{
    
    const employee = new Employee('Bob', 1, 'bob@gmail.com')

    expect(employee.getName()).toEqual('Bob');
})
test('Employee created', ()=>{
    
  const employee = new Employee('Bob', 1, 'bob@gmail.com')

  expect(employee.getId()).toEqual(1);
})
test('Employee created', ()=>{
    
  const employee = new Employee('Bob', 1, 'bob@gmail.com')

  expect(employee.getEmail()).toEqual('bob@gmail.com');
})
test('Employee created', ()=>{
    
  const employee = new Employee('Bob', 1, 'bob@gmail.com')

  expect(employee.getRole()).toEqual('Employee');
})