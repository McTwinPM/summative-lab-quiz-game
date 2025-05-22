import chalk from "chalk";
import { select } from '@inquirer/prompts'
import { gameState } from "./quizstate.js";

export async function showMainMenu(gameState) {
  const action = await select({
    message: "Main Menu",
    choices: [
      { name: "Start Game", value: "start" },
      { name: "Quit", value: "quit" },
    ],
  });

  switch (action) {
    case "start":
      await startGame(gameState);
      break;
    case "quit":
      console.log("Goodbye!");
      process.exit(0);
  }
}

var questionList = [

  {
    array : ['Baldurs Gate 3', 'AstroBot', 'Blackmyth: Wukong', 'Spiderman 2'],
    question : 'Which game won game of the year in 2024? ',
    answer : 'AstroBot'
  },
];

let score = 0;
function quiz(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log('You are Right.');
    score = score + 1;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ',answer);
  }

  if(score < 0){
    score = 0;
  }
  console.log('Score is: ',score);
}


for(var i = 0;i < questionList.length; i++){
  console.log('\n');
  quiz(questionList[i].array,questionList[i].question,questionList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations, your Total Score is: ',score);