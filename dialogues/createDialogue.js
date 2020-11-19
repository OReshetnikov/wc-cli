import inquirer from 'inquirer'

export async function createDialogue(name) {
  return await inquirer
    .prompt([name])
    .then(answers => {
      return answers[name.name];
    });
}
