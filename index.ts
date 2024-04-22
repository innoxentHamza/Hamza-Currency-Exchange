#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

console.log(
  chalk.magenta.bold("\n \tWELLCOME TO - HAMZA NZSIR CURRANCY CONVAERTER \n")
);
let exchange_rate: any = {
  USD: 1,
  EUR: 0.9,
  JYP: 113,
  CAD: 1.3,
  AUD: 1.65,
  PKR: 277.7,
};
let user_answer = await inquirer.prompt([
  {
    name: "from_currancy",
    type: "list",
    message: "Salect the currancy  to convert from:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "to_currancy",
    type: "list",
    message: "Salect the currancy  to convert into:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "amount",
    type: "input",
    message: "Salect the amount  to convert :",
  },
]);
let from_amount = exchange_rate[user_answer.from_currancy];
let to_amount = exchange_rate[user_answer.to_currancy];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

console.log(chalk.blue(`Converted Amount = ${converted_amount.toFixed(2)}`));
