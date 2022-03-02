const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./src/generateMarkdown");
const team = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter Manager's name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Manager's name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter Manager's ID",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Manager's ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter Manager's email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Manager's email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter Manager's Office Number",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Manager's Office Number");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "addAnEmployee",
      message: "Add An Employee?",
      default: false,
    },
  ]);
};

const employeeInfo = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Pick an Employee Role",
      choices: ["Engineer", "Intern"],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Pick an Employee Role");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "name",
      message: "Enter Employee's name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Employee's name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter Employee's ID",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Employee's ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter Employee's email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Employee's email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter Employee's Github Username",
      when: (input) => input.role === "Engineer",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Employee's Github Username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Enter Employee's School Name",
      when: (input) => input.role === "Intern",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          console.log("Enter Employee's School Name");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "addAnotherEmployee",
      message: "Add Another Employee?",
      default: false,
    },
  ]);
};

const init = async () => {
  if (team.length === 0) {
    const { name, id, email, officeNumber, addAnEmployee } =
      await managerInfo();
    const managerInfoAnswers = new Manager(name, id, email, officeNumber);
    team.push(managerInfoAnswers);
    if (!addAnEmployee) {
      writeToFile("./dist/index.html", generateMarkdown(team));
      return;
    }
  }

  const { name, id, email, role, github, school, addAnotherEmployee } =
    await employeeInfo();
  let employeeInfoAnswers;
  if (role === "Engineer") {
    employeeInfoAnswers = new Engineer(name, id, email, github);
  }
  if (role === "Intern") {
    employeeInfoAnswers = new Intern(name, id, email, school);
  }

  team.push(employeeInfoAnswers);

  if (addAnotherEmployee) {
    init();
  } else {
    // generateMarkdown(team)
    writeToFile("./dist/index.html", generateMarkdown(team));
  }
};

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Your HTML was created successfully");
  });
};

init();
