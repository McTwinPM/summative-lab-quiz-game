import { program } from 'commander';
import { showMainMenu } from "./src/lib/quizlogic.js";
import { gameState } from "./src/lib/quizstate.js";




(async () => {
  await showMainMenu(gameState);
  program.parse(process.argv);
})();