const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
let employees = [];


createManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the manager's employee id?",
        },

        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
    ]).then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        console.log(manager);
        startMenu();
    });
};

createManager();

createEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the engineer's GitHub username?",
        }
    ]).then(({ name, id, email, gitHub }) => {
        const engineer = new Engineer(name, id, email, gitHub);
        employees.push(engineer);
        console.log(engineer);
        startMenu();
    });
};

createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's employee id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern go to?",
        }
    ]).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        console.log(intern);
        startMenu();
    });
};


startMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "Do you want to add another member to your team?",
            choices: ["Add an Engineer", "Add an Intern", "No, my team is complete."]
        }
    ]).then(({ options }) => {
        if (options === "Add an Engineer") {
            createEngineer();
        } else if (options === "Add an Intern") {
            createIntern();
        } else { generateTeam() }
    });
};


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created teamProfile.html!')
    );
}

function generateTeam() {
    writeToFile('./dist/teamProfile.html', generateHTML(employees))
};
