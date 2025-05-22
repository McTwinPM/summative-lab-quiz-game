import { program } from 'commander';
import { showMainMenu } from "./src/lib/quizlogic.js";
import { gameState } from "./src/lib/quizstate.js";




(async () => {
  await showMainMenu(gameState);
  program.parse(process.argv);
})();

// export var questionList = [

//   {
//     array : ['Baldur\'s Gate 3', 'AstroBot', 'Blackmyth: Wukong', 'Spiderman 2'],
//     question : 'Which game won game of the year in 2024? ',
//     answer : 'AstroBot'
//   },
//   {
//     array : ['Jumpman', 'Mr. Video Game', 'Mario Mario', 'Wario'],
//     question : 'Which of these nicknames for Mario is not real? ',
//     answer : 'Wario'
//   },
// ];