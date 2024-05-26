#! /usr/bin/env node
import inquirer from "inquirer";
const R_num = Math.floor(Math.random() * 10000) + 1;
const answers = await inquirer.prompt([
    {
        type: "string",
        name: "User_id",
        message: "Enter your id: "
    },
    {
        type: "number",
        name: "Pin",
        message: "Enter your Pin: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Choose your account type: ",
        when(answers) {
            return answers.User_id && answers.Pin;
        }
    },
    {
        type: "list",
        name: "Menu",
        choices: ["Fast Cash", "With drawal", "Balance Inquiry", "Exit"],
        message: "Choose any option:",
    },
    {
        type: "list",
        name: "Amount",
        choices: [500, 1000, 2000, 5000, 10000, 50000],
        message: "Select your amount: ",
        when(answers) {
            return answers.Menu == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "Amount",
        message: "Select your amount: ",
        when(answers) {
            return answers.Menu == "With drawal";
        }
    }
]);
if (answers.Menu === "Exit") {
    console.log("Please take your card");
}
else if (answers.Menu == "Balance Inquiry") {
    console.log("Your current balance is: ", R_num);
}
else if (answers.Amount) {
    if (R_num >= answers.Amount) {
        const remaining = R_num - answers.Amount;
        console.log("Your remaining balance is ", remaining);
    }
    else if (R_num < answers.Amount) {
        console.log("Insuffient Funds");
    }
}
console.log("Thank you for using this atm");
