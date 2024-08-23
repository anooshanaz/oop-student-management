

import inquirer from "inquirer";
import chalk from "chalk";
const randomnumber:number = Math.floor(1000 + Math.random() * 9999)
//console.log(randomnumber)
let myBalance:number = 0;

const answer = await inquirer.prompt([
    {
        name:"student",
        type:"input",
        message:chalk.greenBright("Enter a student name")
    },
    {
        name:"cources",
        type:"list",
        message: chalk.greenBright("Select the cource to enroll"),
        choices:["MS Office","HTML","CSS","Javascrippt","Typescript","Python"]
    }
]);
let  tutionfee:{[key:string]:number} = {
    "MS Office": 2000,
    "HTML":2500,
    "CSS":2500,
    "Javascript": 3000,
    "Typescript":3000,
    "Python":4000
}
console.log(chalk.blueBright(`\n tutionfees: ${tutionfee[answer.cources]}\n`))
console.log(chalk.blueBright(`\n Balance: ${myBalance}\n`))

const paymenttype = await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:chalk.greenBright("Select your payment method"),
        choices:["Bank Transfer","Easypaisa","Jazzcash"] 
   },
   {
        name:"amount",
        type: "input",
        message:chalk.greenBright( "Transfer money"),
        validate: function(value){
            if(value.trim() !== ""){
                return true
             }{ return
            "Please enter a non empty value"}
        }
   }
]);
console.log(chalk.blueBright(`Select your payment method: ${paymenttype.payment}`))
const Totalfee = (answer.cources)
const  paymentAmount = parseFloat(paymenttype.amount)

if(paymentAmount === Totalfee){
    console.log(`You have successfully enrolled in ${answer.cources}`)
};

let ans = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message: chalk.greenBright("What would you like to do next"),
        choices:["Viewstatus","Exit"]
    }
]);
     if(ans.select === "Viewstatus"){
        console.log("\n*******status*******\n")
        console.log(`Student name: ${answer.student}`)
        console.log(`Student ID: ${randomnumber}`)
        console.log(`Cources: ${answer.cources}`)
        console.log(`Tutionfee paid: ${paymentAmount}`)
        console.log(`Balance: ${myBalance += paymentAmount}`)
     }else {
        console.log("Exit student managment system")
     }

