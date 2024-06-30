import inquirer from "inquirer";
import chalk from "chalk";
export default async() => {
function counter():void{
    inquirer.prompt([{
        name:"text",
        message:"Enter the text",
        type:"input"
        }])
    .then((answers: any) => {
        let words = answers.text.trim().split(" ")
        if(answers.text.length == 0){
            console.log(chalk.red("ERR! Please enter text"))}
        else if(answers.text.length == 1){
            console.log(`Your sentence has ${words.length} word`)}
        else(console.log(`Your sentence/pargraph has ${words.length} words`))
        })
}

function alpabet_word():void{
    inquirer.prompt([{
        name:"alpabetorword",
        message:"Do you want to count alphabets or words?",
        type:"list",
        choices:["Alphabets","Words"]
        }])
    .then((answers) => {
         if(answers.alpabetorword == "Alphabets")
            alphabets()
        else{counter()}
        })
}

function alphabets():void{
    inquirer.prompt([{
        name:"text",
        message:"Enter the text",
        type:"input"
        }])
    .then((answers: any) => {
        let abc:string[] = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"]
        let alphabets = answers.text.trim().split(abc)
        if(answers.text.length == 0){
            console.log(chalk.red("ERR! Please enter text"))}
        else if(answers.text.length == 1){
            console.log(`Your sentence has ${answers.text.length} word`)}
        else(console.log("Your sentence/pargraph has",answers.text.length,"alphabets"))
        })
}
alpabet_word()
}