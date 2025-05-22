import chalk from "chalk";
import { select } from '@inquirer/prompts'
import { gameState } from "./quizstate.js";




export async function showMainMenu(gameState) {
    console.log('Welcome to the Video Game Quiz');
    console.log('\n');
    console.log('Rules & Instructions: ');
    console.log('1. There are 5 Video Game Questions .');
    console.log('2. You will get 1 points on each Right Answer.');
    console.log('3. You will have one minutes to answer all the questions.');
    console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
    console.log('\n');
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
      console.log(chalk.yellow("Goodbye!"));
      process.exit(0);
  }
}

var questionList = [

  {
    array : ['Baldur\'s Gate 3', 'AstroBot', 'Blackmyth: Wukong', 'Spiderman 2'],
    question : 'Which game won game of the year in 2024? ',
    answer : 'AstroBot'
  },
  {
    array : ['Jumpman', 'Mr. Video Game', 'Mario Mario', 'Wario'],
    question : 'Which of these nicknames for Mario is not real? ',
    answer : 'Wario'
  },
];

let score = 0;
async function quiz(listOfAnswers,question,answer){
  let userAnswer = await select({
    message: question,
    choices: listOfAnswers.map((item, index) => ({
      name: `${index + 1}. ${item}`,
      value: item,
    })),
  })
  console.log('\n');
  if(userAnswer === answer){
    console.log(chalk.green('You are Right.'));
    score = score + 1;
  } else{
    console.log(chalk.red('You are Wrong.'));
    console.log('The Correct Answer is: ',answer);
  }

  if(score < 0){
    score = 0;
  }
  console.log('Score is: ',score);
}


for(var i = 0;i < questionList.length; i++){
  console.log('\n');
  await quiz(questionList[i].array,questionList[i].question,questionList[i].answer);
  console.log('*******************************');
}

// console.log('\n');
// console.log('Congratulations, your Total Score is: ',score);