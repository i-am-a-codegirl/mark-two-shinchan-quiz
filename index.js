var readlineSync= require("readline-sync");
var score = 0;
const chalk = require('chalk');

let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.bgYellow

console.log(green("Welcome :) glad to see you here") , yellow("Click enter: to play THE SHINCHAN QUIZ;)"))

console.log("\n");

var userName = readlineSync.question(log(cyan("may I have your name?" + " ")));

log(cyan("hello" +" " + userName))
console.log("\n");

console.log(red("The SHINCHAN quiz") ,yellow( "will have 10 questions."))


log(cyan("+5 for one CORRECT answer, -2 for one WRONG answer"), title("you need to type your answer below every question"))

log(blueBright("here we go"))

var questionBank = [{question: `What is the full name of Shinchan?
 Shinnosuke Nohara
 Suzuki Nohara
 Shinnosuke Ogawa
 Shin Chan Nohara`
,answer: "Shin Chan Nohara"},
{question: `What is the color of Shinchan's dog Shiro?
 Yellow
 Pink
 White
 Cream
`,answer: "White"},{question: `What is the full name of the anti-Shinchan in the show?
Tooru Kazama
 Suzuki
 Iko Yamaha
 Kei Massou
`,answer: "Iko Yamaha"},{question: `What is the vegetable that Shinchan hates to eat?
 Beans
 Capsicum
 Carrot
 Garlic
`,answer: "Capsicum"},{question: `What is the color of the dress Shinchan's sister Himawari wears?
 Blue
 Pink
 Yellow
 Purple
`,answer: "Yellow"},{question: `What is the name of the social group which includes Shinchan and his friends?"
Saitama group
 Kasukabe defence group
 Kindergarten group
 Tokyo group
`,answer: "Kasukabe defence group"},{question: `Whom does Shinchan's teacher Yoshinaga marry?
Ishida Junichi
 Shiro
 Suzuki
 Kazama
`,answer: "Ishida Junichi"},{question: `What is the name of Shinchan's favourite action hero?
 Captain Shinchan
 James Bond
 Action Kamen
 Sailor Moon
`,answer: "Action Kamen"}, {question: `What is the name of Shinchan's only female friend?
 Nene
 Suotome
 Linda
 Sally
`,answer: "Nene"},{question: `What is the name of Shinchan's mom?
 Miranda
 Milli
 Mandy
 Misae
`,answer: "Misae"}];

function achievement(score){
  if (score == 15){
    log(blueBright("Great!seems you like Shinchan!"))
    log(green("You got 3 answers correct. Keep playing...."), title("and we will see HOW FAR YOU CAN GO"))
  }

  if (score == 25){
    log(blueBright("Wow!feels you love Shinchan!"))
    log(green("You got 5 answers correct. Keep playing...."), title("and we will see if you can get them all RIGHT"))
  }

  if (score == 50){
    log(blueBright("Yippee!! You are a Shinchan- Legend!"))
    log(green("You got all 10 answers correct"), title("Shinchan is in you nerves..A legendary gameplay you demonstrated"))
  }
}

function play(question,answer){
 
userAnswer = readlineSync.question(red(question+"\n"));

if(userAnswer.toUpperCase() === answer.toUpperCase()){
console.log("you were right!");
score = score + 5;
achievement(score);
}
else{
  console.log("you were wrong");
  console.log(yellow("keep playing Shinchan fan...you can score well"))
  score = score - 2;
}
console.log("your score is :", score);


} 





for( var i = 0; i<questionBank.length; i++)
{
 var cur= questionBank[i];
 play(cur.question,cur.answer);
 console.log(" ");
 console.log(chalk.yellow("*-*-*-*-*-*-*-*-*-*-*-*-*-*"));

}

log(cyan("THE END"))
log(green("Great to have you shichan fan!!"), red("I belive we helped you in re-living YOUR childhood shinchan days"))