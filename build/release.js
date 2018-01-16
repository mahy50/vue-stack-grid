const { rm, cp, mkdir, exec, echo} = require('shelljs')
const chalk = require('chalk')
const readlineSync = require('readline-sync')

exec('npm run lint')

console.log(chalk.green('1. Delete the old dist folder'))
rm('-rf', './dist/*')

console.log(chalk.green('2. Generate release file'))
exec('webpack --progress --hide-modules --config  ./build/webpack.release.conf.js ')

console.log(chalk.green('3. Generate the minimize release file'))
exec('webpack --progress --hide-modules --config  ./build/webpack.release.min.conf.js')

// const VERSION = readlineSync.question('Enter release version: ')

// if (readlineSync.keyInYN(`Releasing ${VERSION} - are you sure?`)) {
// }



