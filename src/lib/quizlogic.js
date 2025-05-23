import chalk from "chalk";
import { select } from '@inquirer/prompts'
import { gameState } from "./quizstate.js";
import { timer } from './timer.js';



//Displays the main menu (Start Game and Quit) and instructions
export async function showMainMenu(gameState) {
    console.log('Welcome to the Video Game Quiz');
    console.log('\n');
    console.log('Rules & Instructions: ');
    console.log('There are 5 Video Game Questions .');
    console.log('You will get 1 point on each Right Answer.');
    console.log('You will have one minute to answer all the questions.');
    console.log('(The timer will cover option 4, but moving with the arrow keys will reveal option 4)')
    console.log('Press Start Game to begin.');
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
    array : ['Jumpman', 'Mr. Video Game', 'Mario Mario', 'Mr. Plumber'],
    question : 'Which of these options was not a nickname for Mario? ',
    answer : 'Mr. Plumber'
  },
  {
    array : ['Link', 'Zelda', 'Ganon', 'Tingle'],
    question : 'Who is the usual main protagonist in the Legend of Zelda series? ',
    answer : 'Link'
  },
  {
    array : ['5', '24', '12', '10'],
    question : 'How many mainline Mortal Kombat games are there? ',
    answer : '12'
  },
  {
    array : ['Runescape', 'Final Fantasy 14', 'EVE Online', 'World of Warcraft'],
    question : 'What is the most popular MMORPG? ',
    answer : 'World of Warcraft'
  }
];
// The quiz function - 
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
    return true;
  } else{
    console.log(chalk.red('You are Wrong.'));
    console.log('The Correct Answer is: ',answer);
    return false
  }
}

// Starts the game
export async function startGame(gameState) {
  let score = 0;
  const quizPromise = (async () => {
    for (let i = 0; i < questionList.length; i++) {
      console.log('\n');
      const correct = await quiz(
        questionList[i].array,
        questionList[i].question,
        questionList[i].answer
      );
      if (correct) score++;
      console.log('=============================================');
      console.log('Score is: ', score);
    }
    return score;
  })();

  const result = await Promise.race([
    quizPromise,
    timer((secondsLeft) => {
      process.stdout.write(`\rTime left: ${secondsLeft}s   `);
    }),
  ]);

  process.stdout.write('\n');

  if (result === 'timeout') {
    console.log('\n' + chalk.red('Time is up!'));
    console.log('Your score:', score);
    process.exit(0)
  } else {
    console.log('\nCongratulations, your Total Score is:', result);
  }
}