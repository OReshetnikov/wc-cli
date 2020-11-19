import chalk from 'chalk';

const menus = {
  main: `
${chalk.greenBright('cwc [command]')}
  ${chalk.blueBright('create')} ................ create new web-component
  ${chalk.blueBright('extend')} ................ extent existing web-component
`,
}

export async function help(args) {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}
