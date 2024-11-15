export async function displayHeader() { 
  const chalk = await import('chalk');
  console.log("");
  console.log(chalk.default.yellow(" ============================================"));
  console.log(chalk.default.yellow("|        BLOCKLESS BELSS NETWORK BOT        |"));
  console.log(chalk.default.yellow("|           AUTHOR : NOFAN RAMBE            |"));
  console.log(chalk.default.yellow("|           WELCOME & ENJOY SIR!            |")); 
  console.log(chalk.default.yellow(" ============================================"));
  console.log("");
}
